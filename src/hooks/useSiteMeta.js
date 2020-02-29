import { useStaticQuery, graphql } from 'gatsby'

export default function useSiteMeta() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            domain
            title
            description
            keywords
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
    `
  )

  return siteMetadata
}
