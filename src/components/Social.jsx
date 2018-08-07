import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import socialData from '../common/social'
import styles from '../styles/social.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            social {
              linkedin
              github
              stackoverflow
              instagram
              twitter
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { social },
      },
    }) => (
      <ul className={styles.list}>
        {Object.entries(social).map(([key, url]) => {
          const { icon: Icon, text } = socialData[key]

          return (
            <li className={styles.item} key={key}>
              <a
                className={styles.link}
                href={url}
                aria-label={text}
                title={text}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    )}
  />
)
