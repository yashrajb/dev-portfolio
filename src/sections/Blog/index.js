import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import { Title, Card, Flex, Text, SimpleGrid } from "@mantine/core"
import Button from "@app/atoms/Button"
import { useStore } from "@app/store"
import { StaticImage } from "gatsby-plugin-image"
import Image from "@app/atoms/Image"
const BLOG_LENGTH = 3

const Component = () => {
  const { mediumBlogUsername } = useStore()

  const [blogs, setBlogs] = useState({})

  const URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumBlogUsername}`

  useEffect(() => {
    const fetchBlogs = async function () {
      const data = await fetch(URL)
      const body = await data.json()
      if (body?.items?.length) {
        body.items = body.items.splice(0, BLOG_LENGTH)
      }

      setBlogs(body)
    }

    fetchBlogs()
  }, [])

  const allBlogs = blogs?.items?.length
    ? blogs.items.map((blog) => {
        let { link, title, thumbnail, description, pubDate } = blog

        return (
          <Card key={title} className={styles.blog} height="200">
            <Card.Section>
              <Image src={thumbnail} alt={title} />
              <Title order={2} className={styles.title}>
                {title}
              </Title>
              <Text className={styles.date}>{pubDate}</Text>
              <Button href={link} className={styles.btn}>
                Read more
              </Button>
            </Card.Section>
          </Card>
        )
      })
    : ""

  return (
    <>
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
        verticalSpacing="xs"
      >
        {allBlogs}
      </SimpleGrid>
      <p className={styles.seeAll}>
        <Button href={blogs?.feed?.link}>Read All Blogs</Button>
      </p>
    </>
  )
}

export default function ({ id }) {
  return (
    <Section id={id} title="Blog" className={styles.blogs}>
      <Component />
    </Section>
  )
}
