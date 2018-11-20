import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styles from '../styles/layout.module.css'

import favIcon from '../images/favicon.ico'
import favIconMask from '../images/favicon.svg'
import favIconApple from '../images/apple-touch-icon.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={({ site: { siteMetadata: meta } }) => (
      <Fragment>
        <Helmet titleTemplate={'%s - {meta.title}'} defaultTitle={meta.title}>
          <html lang="en-GB" />
          <meta name="author" content="Mike Simmonds" />
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords.join()} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-title" content="simmo.me" />
          <meta name="application-name" content="simmo.me" />
          <meta
            name="google-site-verification"
            content="GbkERB2aLUOjt7IgBkrHpE61G7awq9zVYAu7ODXAfiA"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Bitter|Montserrat:400,700"
          />
          <link rel="apple-touch-icon" href={favIconApple} />
          <link rel="icon" href={favIcon} />
          <link rel="mask-icon" href={favIconMask} color="#111111" />
        </Helmet>
        <main className={styles.grid}>
          {children}
        </main>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
