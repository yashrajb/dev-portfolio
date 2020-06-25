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
        tags
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
  const { title, createdAt, featureImage, tags } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout page={title}>
    <SEO
          title={`blog - ${title}`}
          description={`blog on ${title}`}
    />
      <div className={`container ${blogTemplate.blogTemplate}`}>
      <header>
      <h1><strong>{title}</strong></h1>
      <h5 className={`${blogTemplate.blogTemplate__h5}`}>{createdAt} &bull;
                      {tags.map((tag) => {
                      return (<Link to={`/blog?tag=${tag}`} className={blogTemplate.blog__tag}> {tag}</Link>)
                      })}</h5>
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