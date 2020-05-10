import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import projectModule from "../styles/projects.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Projects = props => {
  const data = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              link
              github
              featureImage {
                childImageSharp {
                  fluid(maxWidth:800){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          author
          github
        }
      }
    }
    `
  )
  console.log(data);
  return (
    <div>
      <Layout header="white">
      <SEO title={`${data.site.siteMetadata.author} projects`} description={`projects of ${data.site.siteMetadata.author}`}/>
        <section className={`container-fluid ${projectModule.projects}`}>
          <div className="container">
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div className={`row ${projectModule.row}`}>
                  <div className="col-lg-4 col-xl-4 col-md-4">
                    <img className={`img-responsive ${projectModule.projects__img}`} src={edge.node.frontmatter.featureImage.childImageSharp.fluid.src} alt={edge.node.frontmatter.title}/>
                  </div>
                  <div className={`col-lg-8 col-xl-8 col-md-8 ${projectModule.projects__text}`}>
                    <h3 className={projectModule.h3}>
                      {edge.node.frontmatter.title}
                    </h3>
                    <p className={projectModule.projects__subheadline}> {edge.node.frontmatter.description}</p>{" "}
                    <a
                      rel="noopener noreferrer"
                      className={`btn btn-default ${projectModule.projects__btn}`}
                      target="_blank"
                      href={edge.node.frontmatter.link}
                    >
                      <i className="fa fa-globe" /> Visit
                    </a>{" "}
                    <a
                      className={`btn btn-default ${projectModule.projects__btn}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={edge.node.frontmatter.github}
                    >
                      <i className="fa fa-github" /> Github
                    </a>
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
