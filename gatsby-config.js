require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Mike Simmonds - Lead Front-end developer',
    siteUrl: 'https://simmo.me',
    description: 'Lead front-end developer, living in Sussex and working in London, UK.',
    keywords: [
      'javascript',
      'react',
      'redux',
      'mike',
      'simmonds',
      'london',
      'html',
      'css',
      'simmo',
      'developer',
    ],
    social: {
      linkedin: 'http://lnkd.in/2T4KbK',
      github: 'http://github.com/simmo',
      stackoverflow: 'http://stackoverflow.com/users/547345/mike',
      instagram: 'http://instagram.com/mikesimmonds',
      twitter: 'http://twitter.com/mikesimmonds',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bitter', 'Montserrat:400,700'],
        },
      },
    },
  ],
}

// {
//   resolve: 'gatsby-source-github',
//   options: {
//     headers: {
//       Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
//     },
//     queries: [
//       `{
//           viewer {
//             repositories(first: 30) {
//               pageInfo {
//                 hasNextPage
//                 endCursor
//               }
//               edges {
//                 node {
//                   id
//                   name
//                   projectsUrl
//                   description
//                 }
//               }
//             }
//           }
//       }`,
//     ],
//   },
