import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import { Grid, Title, Text, Card, Image } from "@mantine/core"
import Button from "@app/atoms/Button"
import { useStaticQuery, graphql, Link } from "gatsby"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import List from "@app/molecules/List"

const CaseStudy = ({ id }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___createdAt], order: DESC }
        filter: { fileAbsolutePath: { regex: "/case-study/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              createdAt
              subheadline
              featureImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt(pruneLength: 350)
          }
        }
      }
    }
  `)

  return (
    <Section id={id} title="Case Study" className={styles.caseStudy}>
      {data?.allMarkdownRemark?.edges.map((edge, index) => {
        let { title, featureImage, subheadline } = edge.node.frontmatter
        let { slug } = edge.node.fields

        return (
          <List
            key={title}
            image={{
              src: featureImage.childImageSharp.fluid.src,
              height: 340,
            }}
          >
            <Title weight={600} order={1} className={styles.title}>
              {title}
            </Title>

            <Title order={3} className={styles.subheadline}>
              {subheadline}
            </Title>

            <Button to={`/case-study/${slug}`}>Read Case Study</Button>
          </List>
        )
      })}
    </Section>
  )
}

export default CaseStudy
