import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import useSiteMeta from '../hooks/useSiteMeta'
import Grid from './Grid'
import favIcon from '../images/favicon.ico'
import favIconMask from '../images/favicon.svg'
import favIconApple from '../images/apple-touch-icon.png'

export default function Layout({ children }) {
  const {
    domain, title, description, keywords,
  } = useSiteMeta()

  return (
    <>
      <Global
        styles={css`
          :root {
            --gutter: 2rem;
            --background-color: #fafafa;
            --accent-colour: #00bcd4;
            --primary-text-colour: #444;
            --secondary-text-colour: #111;
          }

          * {
            box-sizing: border-box;
          }

          body {
            background-color: var(--background-color);
            color: var(--primary-text-colour);
            font-size: 18px;
            font-family: 'Avenir Next', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
              Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
              'Segoe UI Symbol';
            line-height: 1.8;
            margin: 0;
            padding: 0;
          }

          html,
          body,
          #___gatsby,
          #___gatsby > div {
            height: 100%;
          }

          h1 {
            margin: 0;
          }

          p {
            margin: 0;
          }

          p + p {
            margin-top: 1em;
          }

          p a {
            border-bottom: 2px solid transparent;
            color: var(--accent-colour);
            font-weight: 500;
            text-decoration: none;
            transition: border-bottom-color ease-out 0.2s;
          }

          p a:hover,
          p a:focus {
            border-bottom-color: currentColor;
          }

          svg {
            display: block;
            fill: currentColor;
            width: 100%;
          }
        `}
      />
      <Helmet
        {...{
          defaultTitle: title,
          htmlAttributes: { lang: 'en-GB' },
          meta: [
            { name: 'author', content: 'Mike Simmonds' },
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join() },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'apple-mobile-web-app-title', content: domain },
            { name: 'application-name', content: domain },
            {
              name: 'google-site-verification',
              content: 'GbkERB2aLUOjt7IgBkrHpE61G7awq9zVYAu7ODXAfiA',
            },
          ],
          link: [
            { rel: 'apple-touch-icon', href: favIconApple },
            { rel: 'icon', href: favIcon },
            { rel: 'mask-icon', href: favIconMask, color: '#111111' },
            { rel: 'preconnect', href: 'https://use.typekit.net' },
          ],
        }}
      />
      <Grid as="main">{children}</Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
