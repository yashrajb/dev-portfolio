import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import aboutModule from "../styles/about.module.scss"
import { useStaticQuery, graphql } from "gatsby"
const About = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth:800){
                ...GatsbyImageSharpFluid
              }
            }
          }
          github
          linkedin
          instagram
          email
        }
        html
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
 
  return (
    <Layout header="white">
      <SEO
        title={`About ${data.site.siteMetadata.author}`}
        description={`About ${data.site.siteMetadata.author}`}
      />
      <div className={`container ${aboutModule.about__main}`}>
      <div className="row">
        <div className="col s12 m1 l2"></div>
        <div class="col s12 m9 l12">
        <div className="row">
          <div className="col m6 l6">
            <h1 className={aboutModule.about__h1}>About me</h1>
            <p className={aboutModule.about__text}  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></p>
            <p>
              {data.markdownRemark.frontmatter.email?<a href={`mailto:${data.markdownRemark.frontmatter.email}`}>
                <img
                  src={email}
                  className={aboutModule.about__social}
                  alt={`${data.site.siteMetadata.author} email`}
                />
              </a>:null}
              {
                data.markdownRemark.frontmatter.github?<a target="__blank" href={`${data.markdownRemark.frontmatter.github}`}>
                <img
                  src={github}
                  className={aboutModule.about__social}
                  alt={`${data.site.siteMetadata.author} github`}
                />
              </a>:null
              }
              {data.markdownRemark.frontmatter.linkedin?<a target="__blank" href={`${data.markdownRemark.frontmatter.linkedin}`}>
                <img
                  src={linkedin}
                  className={aboutModule.about__social}
                  alt={`${data.site.siteMetadata.author} linkedin`}
                />
              </a>:null
              }
            </p>
          </div>
          <div className="col m6 l6 d-none d-md-block">
            <img
              src={data.markdownRemark.frontmatter.image.childImageSharp.fluid.src}
              alt={data.markdownRemark.frontmatter.image.childImageSharp.fluid.src}
              className={`img-responsive ${aboutModule.about__image}`}
            /> 
          </div>
        </div>
        </div>
        <div className="col s12 m2 l2"></div>
        </div>
      </div>
    </Layout>
  )
}

export default About
