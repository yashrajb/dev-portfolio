import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import { Title, Card, Flex, Text, SimpleGrid, Image } from "@mantine/core"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks"

const Contact = ({ id }) => {
  return (
    <Section size={"md"} title={"Contact"} id={id} className={styles.contact}>
      <Title order={3} className={styles.subheadline}>
        Feel free to reach out to me if you think I can help you with your
        project or if you just want to say hi!
      </Title>

      <SocialMediaLinks />
    </Section>
  )
}

export default Contact
