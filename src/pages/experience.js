import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import experienceModule from "../styles/experience.module.scss"
import { useStaticQuery, graphql } from "gatsby"
const Experience = () => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <Layout header="white">
      <SEO
        title={`${data.site.siteMetadata.author} experience`}
        description={`experience of ${data.site.siteMetadata.author}`}
      />
      <div className={`container ${experienceModule.container}`}>
        <div className={`${experienceModule.line}`}>
          <div className={`${experienceModule.row} ${experienceModule.cf}`}>
            <div className={`${experienceModule.block} ${experienceModule.fl}`}>
              <p className={experienceModule.p}>
                <span
                  className={`${experienceModule.circle} ${
                    experienceModule.first
                  }`}
                />
                <h3>company name</h3>
                <p className={experienceModule.exp__subheadline}>
                  Quisque enim quam, semp quis dui sed, pellentesque consectetur
                  augue. Nam convallis diam lacus, vel posuere lacus adipiscing
                  et. mauris dapibus, ut aliquet odio posuere. Quisque enim
                  quam, mauris dapibus, ut aliquet odio posuere. Quisque enim
                  quam,
                </p>
              </p>
            </div>
            <div className={`${experienceModule.block} ${experienceModule.fr}`}>
              <p className={experienceModule.p}>
                <span className={`${experienceModule.circle}`} />
                <h3>company name</h3>
                <p className={experienceModule.exp__subheadline}>Quisque enim quam, semp quis dui sed, pellentesque consectetur
                augue. Nam convallis diam lacus, vel posuere lacus adipiscing
                et. mauris dapibus, ut aliquet odio posuere. Quisque enim quam,
                mauris dapibus, ut aliquet odio posuere. Quisque enim quam,</p>
              </p>
            </div>
            <div className={`${experienceModule.block} ${experienceModule.fl}`}>
              <p className={experienceModule.p}>
                <span className={`${experienceModule.circle}`} />
                <h3>company name</h3>
                <p className={experienceModule.exp__subheadline}>Quisque enim quam, semp quis dui sed, pellentesque consectetur
                augue. Nam convallis diam lacus, vel posuere lacus adipiscing
                et. mauris dapibus, ut aliquet odio posuere. Quisque enim quam,
                mauris dapibus, ut aliquet odio posuere. Quisque enim quam,</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Experience
