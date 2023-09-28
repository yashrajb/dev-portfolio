import React, { useMemo } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "@app/molecules/Layout"
import Animation from "@app/molecules/Animation"
import * as styles from "./styles.module.scss"
import { Container, Title, Text, SimpleGrid, Grid } from "@mantine/core"
import SectionTitle from "@app/atoms/SectionTitle"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Image from "@app/atoms/Image"

const GridCols = 2

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        createdAt
        website
        screenshots {
          publicURL
        }
        featureImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      html
    }
  }
`

const Post = (props) => {
  let { slug, data } = props
  const {
    title,
    website,
    createdAt,
    featureImage,
    screenshots = [],
  } = data.markdownRemark.frontmatter || {}
  const { html } = data.markdownRemark
  const image = getImage(featureImage)

  const screenshotAndGridFunc = (screenshots = []) => {
    const gridImages = []
    for (let i = 0; i < screenshots.length; ) {
      let tempArr = {
        0: screenshots[i].publicURL,
      }
      if (screenshots[i + 1]) {
        tempArr["1"] = screenshots[i + 1].publicURL
      }
      gridImages.push(tempArr)

      i = i + GridCols
    }
    return gridImages
  }

  const memoizedScreenShotAndGrid = useMemo(
    () => screenshotAndGridFunc(screenshots),
    [screenshots]
  )

  return (
    <Layout>
      <Container className={styles.container}>
        <Animation>
          <SectionTitle>Case Study: {title}</SectionTitle>
          <Title order={3} className={styles.dateAndWebsite}>
            {createdAt} |{" "}
            <a href={website} target="_blank">
              {website}
            </a>
          </Title>
          <div className="text-center">
            {featureImage ? (
              <GatsbyImage image={image} alt={`cover image of ${title}`} />
            ) : null}

            {memoizedScreenShotAndGrid.map((images, index) => {
              const cols = Object.keys(images).length
              return (
                <SimpleGrid
                  key={index}
                  className={styles.imagesGrid}
                  cols={cols}
                  breakpoints={[
                    { maxWidth: "md", cols: 1 },
                    { maxWidth: "sm", cols: 1 },
                    { maxWidth: "xs", cols: 1 },
                  ]}
                  verticalSpacing="md"
                  spacing="md"
                >
                  <Image src={images["0"]} />
                  <Image src={images["1"]} />
                </SimpleGrid>
              )
            })}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <Title order={3} className={styles.subheadline}>
            Don't let those creative ideas go to waste! Let's bring them to
            life. Contact me today, and let's kickstart your next project!
          </Title>
          <SocialMediaLinks />
        </Animation>
      </Container>
    </Layout>
  )
}

export default Post
