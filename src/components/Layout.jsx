import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import useSiteMeta from '../hooks/useSiteMeta'
import useMediaQuery from '../hooks/useMediaQuery'
import Grid from './Grid'
import ThemeSwitcher from './ThemeSwitcher'
import favIcon from '../images/favicon.ico'
import favIconMask from '../images/favicon.svg'
import favIconApple from '../images/apple-touch-icon.png'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Layout({ children }) {
  const {
    domain, title, description, keywords,
  } = useSiteMeta()
  const systemIsDark = useMediaQuery('(prefers-color-scheme: dark)')
  const [preferDark, setPreferDark] = useLocalStorage('dark-mode')
  const isDark = useMemo(() => (preferDark === null && systemIsDark) || preferDark, [
    preferDark,
    systemIsDark,
  ])
  const [backgroundColor, primaryTextColour] = useMemo(
    () => (isDark ? ['#222', '#f9f9f9'] : ['#fafafa', '#222']),
    [isDark],
  )
  const handleClick = useCallback(() => {
    setPreferDark(!isDark)
  }, [isDark])

  return (
    <>
      <Global
        styles={css`
          :root {
            --gutter: 2rem;
            --background-color: ${backgroundColor};
            --accent-colour: #00bcd4;
            --primary-text-colour: ${primaryTextColour};
          }

          * {
            box-sizing: border-box;
          }

          *::before,
          *::after {
            box-sizing: inherit;
          }

          *:focus {
            outline-color: var(--accent-colour);
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
            transition: background-color 0.2s, color 0.2s;
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
            border-bottom: 2px solid;
            color: var(--accent-colour);
            font-weight: 500;
            text-decoration: none;
            transition: border-bottom-color ease-out 0.2s;
          }

          p a:hover,
          p a:focus {
            border-bottom-color: transparent;
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
      <ThemeSwitcher
        onClick={handleClick}
        isDark={isDark}
        css={css`
          position: absolute;
          top: var(--gutter);
          right: var(--gutter);
        `}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
