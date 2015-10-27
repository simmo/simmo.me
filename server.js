import chalk from 'chalk'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './components/app'
import data from './data'

const app = express()
const isDevelopment = app.get('env') !== 'production'

// Server assets statically in development
if (isDevelopment) app.use(express.static(__dirname + '/public'))

// Render and serve React
app.get('/', (req, res) => {
    const initialHtml = ReactDOMServer.renderToString(<App {...data} />)

    res.send(`<!DOCTYPE html>
        <html lang="en-gb" class="no-js">
            <head>
                <title>Mike Simmonds</title>
                <meta name="description" content="Senior front-end developer, living in Sussex and working in London, UK." />
                <meta name="author" content="Mike Simmonds" />
                <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
                <link href="/css/app.css" rel="stylesheet" type="text/css" />
                <!--<script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-9639535-1', 'simmo.me');
                    ga('send', 'pageview');
                </script>-->
            </head>
            <body>
                <div id="mount">${initialHtml}</div>
                <script src="/javascripts/app.js"></script>
            </body>
        </html>
    `)
})

const server = app.listen(8080, () => {
    const host = chalk.bold.green(server.address().address)
    const port = chalk.bold.green(server.address().port)
    const mode = chalk.bold.green(app.get('env'))

    console.log('Application listening on port', port, 'in', mode, 'mode')
})
