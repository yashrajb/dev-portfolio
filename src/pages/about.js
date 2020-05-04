import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutModule from "../styles/about.module.scss"
import { useStaticQuery, graphql } from "gatsby"
const About = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Layout header="white">
    <SEO title={`About ${data.site.siteMetadata.author}`} description={`About ${data.site.siteMetadata.author}`}/>
      <div className={`container ${aboutModule.about__main}`}>
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6">
            <h1 className={aboutModule.about__h1}>About me</h1>
            <p className={aboutModule.about__text}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
            </p>
            <p>
              <a href="">
                <img
                  src="/images/email.svg"
                  className={aboutModule.about__social}
                  alt={`${data.site.siteMetadata.author} email`}
                />
              </a>
              <a href="">
                <img
                  src="/images/github.svg"
                  className={aboutModule.about__social}
                  alt={`${data.site.siteMetadata.author} github`}
                />
              </a>
              <a href="">
                <img
                  src="/images/linkedin.svg"
                  className={aboutModule.about__social}
                  alt={`${data.site.siteMetadata.author} linkedin`}
                />
              </a>
            </p>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 d-none d-md-block">
            <img
              src="/images/owner.png"
              alt={data.site.siteMetadata.author}
              className={`img-responsive ${aboutModule.about__image}`}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
