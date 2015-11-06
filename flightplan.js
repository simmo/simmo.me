'use strict'

var plan  = require('flightplan')
var join = require('path').join

const application = 'simmo.me'
const deployTo = join('/var/www', application)
const repoUrl = 'https://github.com/simmo/simmo.me.git'
const branch = 'master'
const keepReleases = 3
const releaseTimestamp = new Date().getTime().toString()
const releasesPath = join(deployTo, 'releases')
const sharedPath = join(deployTo, 'shared')
const repoPath = join(deployTo, 'repo')
const currentPath = join(deployTo, 'current')
const releasePath = join(releasesPath, releaseTimestamp)
const linkedDirs = ['node_modules']

var envs = {
	production: [
		{
		    host: application,
		    username: 'xxxx',
		    agent: process.env.SSH_AUTH_SOCK
		}
	]
}

var deploy = {
	check: (transport) => {
	    transport.log('Checking environment...')

	    // 1) Check git is installed
		transport.debug('Git')
		transport.exec('which git', { silent: true })

		// 2) Check remote repo exists
		transport.exec(`git ls-remote --heads ${repoUrl}`, { silent: true })

		// 3) Check releases and shared directories exist
		transport.exec(`mkdir -p ${releasesPath} ${sharedPath}`)

		// 4) Check shared directories exist
		let dirs = linkedDirs.map(dir => join(sharedPath, dir)).join()
		transport.exec(`mkdir -p ${dirs}`)

		// 5) Check we have a repo
		if (transport.exec(`[ -f ${join(repoPath, 'HEAD')} ]`, { failsafe: true, silent: true }).code === 0) {
			// Yes: Update
			transport.with(`cd ${repoPath}`, () => {
				transport.exec(`git remote update`, { silent: true })
			})
		} else {
			// No: Clone
			transport.exec(`git clone --mirror ${repoUrl} ${repoPath}`)
		}

		// 6) Check we have write permissions
		// @todo

		// 7) Create log file
		// @todo
	},
	createRelease: (transport) => {
	    // Create the release
	    transport.log('Create release...')

	    // 1) Create release folder
	    transport.exec(`mkdir -p ${releasePath}`)

	    // 2) Bundle repo, copy to release and uncompress contents
		transport.exec(`git -C ${repoPath} archive ${branch} | tar -x -f - -C ${releasePath}`)

		// 3) Create symlinked directories
		let dirs = linkedDirs.map(dir => join(releasePath, dir)).join()
		transport.exec(`mkdir -p ${dirs}`)

		linkedDirs.forEach(dir => {
			let target = join(releasePath, dir)
			let source = join(sharedPath, dir)
			if (transport.exec(`[ -d ${target} ]`, { failsafe: true, silent: true }).code === 0) {
				transport.exec(`rm -rf ${target}`)
			}
            transport.exec(`ln -s ${source} ${target}`)
		})

		// 4) Run npm install and build
		transport.with(`cd ${releasePath}`, () => {
			transport.exec(`NODE_ENV=production npm install`, { silent: true })
			transport.exec(`NODE_ENV=production npm run build`, { silent: true })
		})
	},
	publish: (transport) => {
	    transport.log('Publishing release...')

	    // 1) Update current symlink to new release
		transport.exec(`ln -sfn ${releasePath} ${currentPath}`)

		// 2) Restart node process
		transport.exec(`NODE_ENV=production forever restart ${join(currentPath, 'index.js')} || NODE_ENV=production forever start --spinSleepTime 10000 ${join(currentPath, 'index.js')}`, { silent: true })
	},
	cleanup: (transport) => {
	    transport.log('Cleaning up old releases...')

	    // 1) Only remove the number of releases specified by keepReleases
	    var fetchReleases = transport.exec(`ls -r ${releasesPath}`, { silent: true })
	    if (fetchReleases.code === 0) {
	    	var releases = fetchReleases.stdout.trim().split('\n').slice(keepReleases)
	    	if (releases.length) {
	    		transport.log(`Removing ${releases.length} release(s)...`)
		    	transport.with(`cd ${releasesPath}`, () => transport.exec(`rm -rf ${releases.join(' ')}`))
		    }
	    }
	}
}

plan.target('production', envs.production)

plan.remote('deploy', deploy.check)
plan.remote('deploy', deploy.createRelease)
plan.remote('deploy', deploy.publish)
plan.remote('deploy', deploy.cleanup)
