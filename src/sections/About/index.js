import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import { Title, Card, Flex, Text, SimpleGrid } from "@mantine/core"
import { useStore } from "@app/store"
import { Instagram, Phone, Mail, GitHub, Linkedin } from "react-feather"
import { StaticImage } from "gatsby-plugin-image"
import Image from "@app/atoms/Image"

const About = ({ id }) => {
  return (
    <Section id={id} title="About" className={styles.about}>
      <SimpleGrid
        cols={2}
        spacing="md"
        className={styles.grid}
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
        verticalSpacing="xs"
      >
        <Image src="/author.jpg" alt={"author"} />
        <div>
          <Title order={3} className={styles.title}>
            Ever since my school days, I've had this incredible passion for
            building websites. Whenever I finish building a website or web app,
            it feels like wielding the power of a digital deity. It all began
            with my journey through{" "}
            <a
              target="_blank"
              className={styles.duckettBooks}
              href="https://amzn.to/46cNYJi"
            >
              Jon Duckett's Books
            </a>
            , where I immersed myself in the world of HTML, CSS and JAVASCRIPT.
            As I grew, so did my hunger for knowledge, and I embarked on a
            self-guided adventure into the realm of JavaScript. Now, with over
            3+ years of hands-on experience in software development and a shiny
            degree in Computer Science under my belt, I continue to be amazed by
            the limitless possibilities of programming. When I'm not coding,
            you'll find me strumming my guitar, devouring self-improvement
            books, and eagerly picking up new skills along the way.
          </Title>
        </div>
      </SimpleGrid>
    </Section>
  )
}

export default About
