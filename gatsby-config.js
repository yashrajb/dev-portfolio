module.exports = {
  pathPrefix: "/dev-portfolio",
  siteMetadata: {
    title: `Yashraj Basan`,
    description: `Yashraj Basan is full stack developer`,
    author: `Yashraj Basan`,
    logo: "YB",
    headLine: "Hello, I am web designer and developer",
    afterHeadLine:
      "passionate about building quality websites and web applications",
    github: "https://www.github.com/yashrajb",
    email: "basanyash627@gmail.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-manifest`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}