import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import blogTemplate from "../styles/blog-template.module.scss";
export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: {
      slug: {
        eq: $slug
      }
    }) {
      frontmatter {
        title
        createdAt
        featureImage {
          childImageSharp {
            fluid(maxWidth:800){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
const MarkdownPost = ({ slug, data }) => {
  console.log(data);
  const { title, createdAt } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout page={title}>
      <div className={`container ${blogTemplate.blog_template}`}>
      <header>
      <h1><strong>{title}</strong></h1>
      <h5><b>{createdAt}</b></h5>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export default MarkdownPost