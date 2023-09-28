import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import allProjects from "@app/constants/projects"
import { Grid, Title, Text, Card, Image } from "@mantine/core"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import List from "@app/molecules/List"
import Button from "@app/atoms/Button"
import { useStore } from "@app/store"

const Projects = ({ id }) => {
  const { github } = useStore()

  const projectsList = allProjects.map(
    ({ title, tech, description, image, links }) => {
      return (
        <List
          key={title}
          image={{
            src: `/projects/${image}`,
            alt: title,
          }}
        >
          <Title order={1} className={styles.title}>
            {title}
          </Title>
          <Title order={3} className={styles.badge}>
            {tech}
          </Title>
          <Title order={2} className={styles.desc}>
            {description}
          </Title>

          {links.map(({ title, link }) => {
            return (
              <Button
                key={title}
                href={link}
                className={styles.link}
                target="_blank"
              >
                {title}
              </Button>
            )
          })}
        </List>
      )
    }
  )

  const content = (
    <>
      {projectsList}
      <p className={styles.seeAll}>
        <Button href={github}>See All Projects</Button>
      </p>
    </>
  )

  return (
    <Section id={id} title="Selected Projects" className={styles.projects}>
      {content}
    </Section>
  )
}

export default Projects
