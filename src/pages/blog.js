import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby"
import blogModule from "../styles/blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
      site{
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
      <Layout>
        <SEO title={`blog of ${data.site.siteMetadata.author}`} description={`blog on ${data.site.siteMetadata.author}`}/>
        <div className={`container`}>
            {data.allMarkdownRemark.edges.map(item => {
              var patt = /posts/
              if (patt.test(item.node.fileAbsolutePath)) {
                return (
                  <div className={`row ${blogModule.blog__element}`}>
                    <div className={`col-md-12 col-xs-12 col-sm-12 col-lg-12 col-xl-12`}>
                      <h2>{item.node.frontmatter.title.toUpperCase()}</h2>
                      <p>{item.node.frontmatter.date}</p>
                      <Link
                        to={`/blog/${item.node.fields.slug}`}
                        className={`btn btn-default ${blogModule.blog_readmore}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                )
              }
              return null
            })}
        </div>
      </Layout>
  )
}

export default Blog