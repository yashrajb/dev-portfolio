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
          subheadline
        }
      }
    }
  `)
  return (
    <Layout comp="header">
      <SEO title={`${data.site.siteMetadata.author} Homepage`} description={`Homepage of ${data.site.siteMetadata.author}`}/>
      {/* <main className={mainModule.main}>
        <div className="valign-wrapper">
          <div className={`${mainModule.text}`}>
          <h1 className={`${mainModule.main__h1}`}>
            {data.site.siteMetadata.headLine}
          </h1>
          {data.site.siteMetadata.subheadline ? (
            <p className={mainModule.main__p}>
              {data.site.siteMetadata.subheadline}
            </p>
          ) : null}
           <Link to="/projects" className={`btn ${mainModule.main__btnDefault}`}>
            Projects
          </Link>
          <Link to="/about" className={`btn ${mainModule.main__btnDefault}`}>
            About
          </Link>{" "}
          </div>
           <a href='https://www.freepik.com/free-photos-vectors/technology'>Technology vector created by stories - www.freepik.com</a>
          <a href='https://www.freepik.com/free-photos-vectors/technology'>Technology vector created by stories - www.freepik.com</a> 
        </div>
      </main> 
    */}

<div class="row">
    <div class="col s12"></div>
    <div class="col s12 m1 l2"></div>
    <div class="col s12 m9 l8">
        <div className={`valign-wrapper ${mainModule.main}`}>
          <div className={`${mainModule.text}`}>
          <h1 className={`${mainModule.main__h1}`}>
            {data.site.siteMetadata.headLine}
          </h1>
          {data.site.siteMetadata.subheadline ? (
            <p className={mainModule.main__p}>
              {data.site.siteMetadata.subheadline}
            </p>
          ) : null}
           <Link to="/projects" className={`btn ${mainModule.main__btnDefault}`}>
            Projects
          </Link>
          <Link to="/about" className={`btn ${mainModule.main__btnDefault}`}>
            About
          </Link>{" "}
          
          </div>
           {/* <a href='https://www.freepik.com/free-photos-vectors/technology'>Technology vector created by stories - www.freepik.com</a>
          <a href='https://www.freepik.com/free-photos-vectors/technology'>Technology vector created by stories - www.freepik.com</a>  */}
        </div>
    </div>
    <div class="col s12 m2 l2"></div>
  </div>

    </Layout>
  )
}

export default IndexPage
