import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import { graphql } from "gatsby"
import blogTemplateModule from "../styles/blogTemplate.module.scss"
export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        cover
      }
      fields {
        slug
      }
      html
    }
  }
`
const blogTemplate = props => (
    <Layout header="white">
    <SEO title={`Blog - ${props.data.markdownRemark.frontmatter.title}`} description={`blog on ${props.data.markdownRemark.frontmatter.title}`}/>
      <div className={`container ${blogTemplateModule.blogTemplate__main}`}>
        <h1 className={blogTemplateModule.blogTemplate__h1}>{props.data.markdownRemark.frontmatter.title}</h1>
        <p className={blogTemplateModule.blogTemplate__date}>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          className={blogTemplateModule.blogTemplate__text}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </Layout>
)

export default blogTemplate
