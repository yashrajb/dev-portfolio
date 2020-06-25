/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const { internal, fileAbsolutePath } = node
 let isItPost = fileAbsolutePath?fileAbsolutePath.includes("posts"):null;
  if (internal.type === "MarkdownRemark" && isItPost) {
    const slug = path.basename(fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const post = path.resolve("src/template/post.js")
  const markdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            },
            fileAbsolutePath
          }
        }
      }
    }
  `)
  if (markdown.errors) throw markdown.errors
  markdown.data.allMarkdownRemark.edges.forEach(({node}) => {
      let {fileAbsolutePath} = node;
      if(fileAbsolutePath.includes("posts")){
        let {slug} = node.fields;
        createPage({
                path: `/blog/${slug}`,
                component: post,
                context: {
                  slug,
                },
        })
      }
  })
}
