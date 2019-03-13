import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import useSiteMeta from '../hooks/useSiteMeta'
import styles from '../styles/layout.module.css'

import favIcon from '../images/favicon.ico'
import favIconMask from '../images/favicon.svg'
import favIconApple from '../images/apple-touch-icon.png'

export default function Layout({ children }) {
  const { title, description, keywords } = useSiteMeta()

  return (
    <>
      <Helmet
        {...{
          defaultTitle: title,
          htmlAttributes: { lang: 'en-GB' },
          meta: [
            { name: 'author', content: 'Mike Simmonds' },
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join() },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { vname: 'apple-mobile-web-app-title', content: 'simmo.me' },
            { name: 'application-name', content: 'simmo.me' },
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
      <main className={styles.grid}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
