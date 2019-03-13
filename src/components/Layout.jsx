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
      <Helmet titleTemplate={'%s - {meta.title}'} defaultTitle={title}>
        <html lang="en-GB" />
        <meta name="author" content="Mike Simmonds" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="simmo.me" />
        <meta name="application-name" content="simmo.me" />
        <meta
          name="google-site-verification"
          content="GbkERB2aLUOjt7IgBkrHpE61G7awq9zVYAu7ODXAfiA"
        />
        <link rel="apple-touch-icon" href={favIconApple} />
        <link rel="icon" href={favIcon} />
        <link rel="mask-icon" href={favIconMask} color="#111111" />
        <link rel="preconnect" href="https://use.typekit.net" />
      </Helmet>
      <main className={styles.grid}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
