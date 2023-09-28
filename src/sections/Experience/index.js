import React, { useState, useRef } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import { Grid, Title, Text, List } from "@mantine/core"
import experiences from "@app/constants/experience"
import Symbol from "@app/atoms/Symbol"

const Experience = ({ id }) => {
  return (
    <Section id={id} title="Experience" className={styles.workHistory}>
      <Grid>
        {experiences.map(
          (
            { title, company, description, startDate, endDate, points },
            index
          ) => {
            return (
              <Grid.Col
                className={styles.experience}
                key={index}
                value={company}
              >
                <Title order={2} className={styles.title}>
                  {title} <Symbol /> {company}
                </Title>
                <Title order={3} className={styles.date}>
                  {startDate} <Symbol /> {endDate}
                </Title>
                <Title order={3} className={styles.description}>
                  {description}
                </Title>
                <ul className={styles.points}>
                  {points.map((point, index) => {
                    return (
                      <li key={index}>
                        <Text className={styles.point}>{point}</Text>
                      </li>
                    )
                  })}
                </ul>
              </Grid.Col>
            )
          }
        )}
      </Grid>
    </Section>
  )
}

export default Experience
