import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import mainModule from "../styles/main.module.scss"
import { useStaticQuery, graphql } from "gatsby";
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          headLine
          author
          afterHeadLine
        }
      }
    }
  `)
  return (
    <Layout comp="header">
      <SEO title={`${data.site.siteMetadata.author} Homepage`} description={`Homepage of ${data.site.siteMetadata.author}`}/>
      <main className={mainModule.main}>
        <div className="container">
          <div className={mainModule.text}>
          <h1 className={mainModule.main__h1}>
            {data.site.siteMetadata.headLine}
          </h1>
          {data.site.siteMetadata.afterHeadLine ? (
            <p className={mainModule.main__p}>
              {data.site.siteMetadata.afterHeadLine}
            </p>
          ) : null}
          <Link to="/projects" className={`btn ${mainModule.main__btnDefault}`}>
            Projects
          </Link>{" "}
          <Link to="/about" className={`btn ${mainModule.main__btnDefault}`}>
            About
          </Link>
          </div>
          
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
