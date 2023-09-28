const path = require("path")

let config = {
  pathPrefix: "/dev-portfolio",
  siteMetadata: {
    title: `Yashraj Basan`,
    description: `Yashraj Basan is full stack developer`,
    author: `Yashraj Basan`,
    email: "basanyash627@gmail.com",
    github: "http://github.com/yashrajb",
    instagram: "http://instagram.com/yashraj.dev",
    linkedin: "https://www.linkedin.com/in/yashraj-basan-11b915157/",
    twitter: "https://twitter.com/yashrajbasan2",
    mediumBlogUsername: "@basanyash627",
    phoneNumber: "+919408087652",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: path.resolve(__dirname, "./src/*"),
          "@app": path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".scss"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
if (process.env.NODE_ENV === "production") {
  config.pathPrefix = "/dev-portfolio"
}
module.exports = config
