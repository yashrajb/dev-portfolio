/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var path = require("path")
var patt = /posts/gi
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === "MarkdownRemark" &&
    patt.test(node.fileAbsolutePath)
  ) {
    var slug = path.basename(node.fileAbsolutePath, ".md");
    slug = slug.trim();
    if(slug.split(" ").length > 1){
      slug = slug.split(" ").join("-");
    }
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  var blogTemplatePath = path.resolve("./src/template/blog.js")
  var result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  //console.log(JSON.stringify(result, undefined, 6))
  result.data.allMarkdownRemark.edges.map(edge => {
    var blogPath = path.resolve("./src/template/blog.js")
    if (patt.test(edge.node.fileAbsolutePath)) {
      createPage({
        component: blogPath,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }
  })
}
