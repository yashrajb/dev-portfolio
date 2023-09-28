import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import { Title, SimpleGrid } from "@mantine/core"
import { useStore } from "@app/store"
import {
  Instagram,
  Phone,
  Mail,
  GitHub,
  Linkedin,
  Twitter,
} from "react-feather"

const SocialMediaLinks = () => {
  const { email, instagram, github, twitter, linkedin, phoneNumber } =
    useStore()

  const links = [
    {
      title: email,
      Icon: Mail,
      href: `mailto:${email}`,
    },
    {
      title: phoneNumber,
      Icon: Phone,
      href: `tel:${phoneNumber}`,
    },
    {
      title: "yashrajbasan2",
      Icon: Twitter,
      href: twitter,
    },
    {
      title: "yashraj.dev",
      Icon: Instagram,
      href: instagram,
    },
    {
      title: "yashrajb",
      Icon: GitHub,
      href: github,
    },
    {
      title: "yashrajbasan",
      Icon: Linkedin,
      href: linkedin,
    },
  ]

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[
        { maxWidth: "md", cols: 1 },
        { maxWidth: "sm", cols: 1 },
        { maxWidth: "xs", cols: 1 },
      ]}
    >
      <ul className={styles.links}>
        {links.slice(0, 3).map(({ title, Icon, href }) => {
          return (
            <li key={title}>
              <a href={href} target="_blank" className={styles.link}>
                <Icon size={20} />
                <Title order={3} className={styles.title}>
                  {title}
                </Title>
              </a>
            </li>
          )
        })}
      </ul>

      <ul className={styles.links}>
        {links.slice(3).map(({ title, Icon, href }) => {
          return (
            <li key={title}>
              <a href={href} target="_blank" className={styles.link}>
                <Icon size={20} />
                <Title order={3} className={styles.title}>
                  {title}
                </Title>
              </a>
            </li>
          )
        })}
      </ul>
    </SimpleGrid>
  )
}

export default SocialMediaLinks
