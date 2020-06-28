import React from 'react'

import { graphql,Link } from 'gatsby'
import SEO from "../components/seo";
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
const MarkdownPost = (props) => {
  console.log(process.env.NODE_ENV);
  let { slug, data } = props;
  console.log(data);
  const { title, createdAt, featureImage } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  console.log(props);
  return (
    <Layout page={title}>
    <SEO
          title={`blog - ${title}`}
          description={`blog on ${title}`}
    />
      <div className={`container ${blogTemplate.blogTemplate}`}>
      <header>
      <h1><strong>{title}</strong></h1>
      <h5 className={`${blogTemplate.blogTemplate__h5}`}>{createdAt}</h5>
      </header>
      <div className="text-center">
      {featureImage?<img src={`${featureImage.childImageSharp.fluid.src}`} className={`img-responsive ${blogTemplate.blogTemplate__img}`} />:null}
      </div>
      <div className={`${blogTemplate.blogTemplate__blog}`} dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export default MarkdownPost