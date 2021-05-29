console.log(process.env.NODE_ENV);

let obj = {
  pathPrefix: "/dev-portfolio",
  siteMetadata: {
    title: `Yashraj Basan`,
    description: `Yashraj Basan is full stack developer`,
    author: `Yashraj Basan`,
    headLine: "Hello, i am full stack developer",
    subheadline: "i am yashraj passionate full stack developer with 2 years of experience in javascript development. worked with traditional technologies and as well as modern technologies.",
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
              maxWidth: 750
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
if(process.env.NODE_ENV==="production"){
 obj.pathPrefix = "/dev-portfolio" 
}
module.exports = obj;
