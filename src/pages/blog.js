import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogModule from "../styles/blog.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = props => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___createdAt], order: DESC }
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          ) {
          edges {
            node {
              frontmatter {
                title
                createdAt
                tags
                featureImage {
                  childImageSharp {
                    fluid(maxWidth:800){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
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
  console.log(props);
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
              let {featureImage,tags,title,createdAt} = edge.node.frontmatter;
              console.log(tags);
              return (
                <div className={`row ${blogModule.row}`}>
                  <div
                    className={`col-lg-12 col-xl-12 col-md-12 ${
                      blogModule.blog__text
                    }`}
                  >
                    <h3 className={blogModule.h3}>
                      {title}
                    </h3>
                    <h5 className={blogModule.createdAt}>
                      {createdAt} &bull;
                      {tags.map((tag) => {
                      return (<Link to={`/blog?tag=${tag}`} className={blogModule.blog__tag}> {tag}</Link>)
                      })}
                    </h5>
                    
                    {featureImage?<img src={featureImage.childImageSharp.fluid.src} className="img-responsive" alt={`feature image of ${edge.node.frontmatter.title}`}/>:null}
                    <p><Link
                      className={`btn btn-default ${blogModule.blog__readmore}`}
                      to={`/blog/${edge.node.fields.slug}`}
                    >
                      Read More
                    </Link>{" "}</p>
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
