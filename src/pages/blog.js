import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogModule from "../styles/blog.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = props => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
          edges {
            node {
              frontmatter {
                title
                createdAt
              }
              fields{
                             slug
              }
              excerpt(pruneLength: 350)
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <div>
      <Layout header="white">
        <SEO
          title={`${data.site.siteMetadata.author} blog`}
          description={`projects of ${data.site.siteMetadata.author}`}
        />
        <section className={`container-fluid ${blogModule.blog}`}>
          <div className="container">
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div className={`row ${blogModule.row}`}>
                  <div
                    className={`col-lg-12 col-xl-12 col-md-12 ${
                      blogModule.blog__text
                    }`}
                  >
                    <h3 className={blogModule.h3}>
                      {edge.node.frontmatter.title}
                    </h3>
                    <p className={blogModule.blog__subheadline}>
                      {" "}
                      {edge.node.excerpt}
                    </p>{" "}
                    <Link
                      className={`btn btn-default ${
                        blogModule.blog__readmore
                      }`}
                      to={`/blog/${edge.node.fields.slug}`}
                    >
                      Read More
                    </Link>{" "}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Projects
