'use strict'

var path                = require('path')
var plan                = require('flightplan')

const application       = 'simmo.me'
const deployTo          = path.join('/var', 'www', application)
const repoUrl           = 'https://github.com/simmo/simmo.me.git'
const branch            = 'master'
const user              = 'root'
const keepReleases      = 3
const releaseTimestamp  = new Date().getTime().toString()
const releasesPath      = path.join(deployTo, 'releases')
const sharedPath        = path.join(deployTo, 'shared')
const repoPath          = path.join(deployTo, 'repo')
const currentPath       = path.join(deployTo, 'current')
const deploymentLogPath = path.join(deployTo, 'deployments.log')
const releasePath       = path.join(releasesPath, releaseTimestamp)
const linkedDirs        = []
const copiedDirs        = ['node_modules']

var revision            = null

var envs = {
    production: {
        host: application,
        username: user,
        agent: process.env.SSH_AUTH_SOCK
    }
}

var deploy = {
    check: (transport) => {
        transport.log('Checking environment...')
        transport.silent()

        // 1) Check git is installed
        transport.exec('which git')

        // 2) Check remote repo exists
        transport.exec(`git ls-remote --heads ${repoUrl}`)

        // 3) Check releases and shared directories exist
        transport.exec(`mkdir -p ${releasesPath} ${sharedPath}`)

        // 4) Check shared directories exist
        if (linkedDirs.length) {
            let dirs = linkedDirs.map(dir => path.join(sharedPath, dir)).join()

            transport.exec(`mkdir -p ${dirs}`)
        }

        // 5) Check we have a repo
        if (transport.exec(`[ -f ${path.join(repoPath, 'HEAD')} ]`, { failsafe: true }).code === 0) {
            // Yes: Update
            transport.with(`cd ${repoPath}`, () => {
                transport.exec(`git remote update`)
            })
        } else {
            // No: Clone
            transport.exec(`git clone --mirror ${repoUrl} ${repoPath}`)
        }

        // 6) Check we have write permissions
        // @todo
    },
    create: (transport) => {
        transport.log('Creating release...')
        transport.silent()

        // 1) Create release folder
        transport.exec(`mkdir -p ${releasePath}`)

        // 2) Bundle repo, copy to release and uncompress contents
        transport.exec(`git -C ${repoPath} archive ${branch} | tar -x -f - -C ${releasePath}`)

        if (copiedDirs.length) {
            copiedDirs.forEach(dir => {
                let target = path.join(releasePath, dir)
                let source = path.join(currentPath, dir)

                // Check if dir exists in current
                if (transport.exec(`[ -d ${source} ]`, { failsafe: true }).code === 0) {
                    // Yes: Copy dir to new release
                    transport.exec(`cp -avr ${source} ${releasePath}`)
                } else {
                    // No: Make an empty directory in the new release
                    transport.exec(`mkdir -p ${target}`)
                }
            })
        }

        // 3) Create symlinked directories
        if (linkedDirs.length) {
            let dirs = linkedDirs.map(dir => path.join(releasePath, dir)).join()

            transport.exec(`mkdir -p ${dirs}`)

            linkedDirs.forEach(dir => {
                let target = path.join(releasePath, dir)
                let source = path.join(sharedPath, dir)

                if (transport.exec(`[ -d ${target} ]`, { failsafe: true }).code === 0) {
                    transport.exec(`rm -rf ${target}`)
                }

                transport.exec(`ln -s ${source} ${target}`)
            })
        }

        // 4) Fetch revision number
        transport.with(`cd ${repoPath}`, () => {
            let fetchReleaseSha = transport.exec(`git rev-list --max-count=1 --abbrev-commit --abbrev=12 ${branch}`)

            revision = fetchReleaseSha.code === 0 ? fetchReleaseSha.stdout.trim() : 'unknown'
        })

        // 5) Run npm install and build
        transport.with(`cd ${releasePath}; export NODE_ENV=${transport._context.target}`, () => {
            transport.exec(`npm prune`, { silent: false })
            transport.exec(`npm install`, { silent: false })
            transport.exec(`npm run build`, { silent: false })
        })
    },
    publish: (transport) => {
        transport.log('Publishing release...')
        transport.silent()

        // 1) Update current symlink to new release
        transport.exec(`ln -sfn ${releasePath} ${currentPath}`)

        // 2) Update log
        transport.exec(`printf "[%s %s] Branch %s (at %s) deployed as release %s by %s\n" $(date '+%Y-%m-%d %H:%M:%S') "${branch}" "${revision}" "${releaseTimestamp}" $(whoami) >> ${deploymentLogPath}`);
    },
    restart: (transport) => {
        // 1) Restart node process
        transport.with(`export NODE_ENV=${transport._context.target}`, () => {
            if (transport.exec(`forever restart ${path.join(currentPath, 'index.js')}`).code !== 0) {
                transport.exec(`forever start -c nodejs --spinSleepTime 10000 ${path.join(currentPath, 'index.js')}`)
            }
        })
    },
    cleanup: (transport) => {
        transport.log('Cleaning up old releases...')
        transport.silent()

        // 1) Only remove the number of releases specified by keepReleases
        let fetchReleases = transport.exec(`ls -r ${releasesPath}`)

        if (fetchReleases.code === 0) {
            let releases = fetchReleases.stdout.trim().split('\n').slice(keepReleases)

            if (releases.length) {
                transport.log(`Removing ${releases.length} release(s)...`)
                transport.with(`cd ${releasesPath}`, () => transport.exec(`rm -rf ${releases.join(' ')}`))
            }
        }
    }
}

plan.target('production', envs.production)

plan.remote('deploy', deploy.check)
plan.remote('deploy', deploy.create)
plan.remote('deploy', deploy.publish)
plan.remote('deploy', deploy.restart)
plan.remote('deploy', deploy.cleanup)
