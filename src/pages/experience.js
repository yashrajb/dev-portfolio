import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import experienceModule from "../styles/experience.module.scss"
import { useStaticQuery, graphql } from "gatsby"
const Experience = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___from], order: [DESC] }
          filter: { fileAbsolutePath: { regex: "/experience/" } }
        ) {
          edges {
            node {
              frontmatter {
                name
                from
                to
              }
              html
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  var float = "fl"
  return (
    <Layout header="white">
      <SEO
        title={`${data.site.siteMetadata.author} experience`}
        description={`experience of ${data.site.siteMetadata.author}`}
      />
      <div className={`container ${experienceModule.container}`}>
        <div className={`${experienceModule.line}`}>
          <div className={`${experienceModule.row} ${experienceModule.cf}`}>
            {data.allMarkdownRemark.edges.map((element, index) => {
              let content = (
                <div
                  className={`${experienceModule.block} ${
                    float === "fl" ? experienceModule.fl : experienceModule.fr
                  }`}
                >
                  <p className={experienceModule.p}>
                    <span
                      className={`${experienceModule.circle} ${
                        index === 0 ? experienceModule.first : null
                      }`}
                    />
                    <h3
                    className={`${experienceModule.h3}`}
                      dangerouslySetInnerHTML={{
                        __html: element.node.frontmatter.name,
                      }}
                    />
                    <p>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: element.node.frontmatter.from,
                        }}
                      />{" "}
                      -{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: element.node.frontmatter.to,
                        }}
                      />
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: element.node.html }}
                      className={experienceModule.exp__subheadline}
                    />
                  </p>
                </div>
              )
              if (float === "fl") {
                float = "fr"
              } else {
                float = "fl"
              }
              return content
            })}
            {/* <div className={`${experienceModule.block} ${experienceModule.fl}`}>
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Experience
