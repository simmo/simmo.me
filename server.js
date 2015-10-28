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
    const googleTagManager = `
        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KM3Q97"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KM3Q97');</script>
        <!-- End Google Tag Manager -->
    `

    res.send(`<!DOCTYPE html>
        <html lang="en-gb" class="no-js">
            <head>
                <title>Mike Simmonds</title>
                <meta name="description" content="Senior front-end developer, living in Sussex and working in London, UK." />
                <meta name="author" content="Mike Simmonds" />
                <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
                <link href="/css/app.css" rel="stylesheet" type="text/css" />
                ${isDevelopment? '' : googleTagManager }
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
