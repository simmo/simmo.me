/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from '@emotion/core'

import useSiteMeta from '../hooks/useSiteMeta'
import Grid from './Grid'
import ThemeSwitcher from './ThemeSwitcher'
import favIcon from '../images/favicon.ico'
import favIconMask from '../images/favicon.svg'
import favIconApple from '../images/apple-touch-icon.png'

const themeSwitcherWrapper = css`
  position: absolute;
  top: var(--gutter);
  right: var(--gutter);
`

export default function Layout({ children }) {
  const { domain, title, description, keywords } = useSiteMeta()
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.__theme
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__onThemeChange = newTheme => {
        setTheme(newTheme)
      }
    }
  }, [])

  const handleChange = useCallback(({ target: { checked } }) => {
    window.__saveTheme(checked ? 'dark' : 'light')
  })

  return (
    <>
      <Helmet
        {...{
          defaultTitle: title,
          meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join() },
            { name: 'apple-mobile-web-app-title', content: domain },
            { name: 'application-name', content: domain },
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
      <div
        css={themeSwitcherWrapper}
      >
        {theme && (
          <ThemeSwitcher onChange={handleChange} checked={theme === 'dark'} />
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
