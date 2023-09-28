import React from "react"
import * as mainModule from "./main.module.scss"
import Button from "@app/atoms/Button"
import Section from "@app/molecules/Section"
import { useStore } from "@app/store"
import { Container } from "@mantine/core"

const Hero = () => {
  const { author } = useStore()

  const onClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  return (
    <Section className={mainModule.main} lazyLoading={false}>
      <p className={mainModule.greetings}>Hi, I'm {author},</p>
      <p className={mainModule.headline}>
        Passionate about building innovative software solutions to address
        real-world and business challenges.
      </p>
      <Button className={mainModule.btn} onClick={() => onClick("caseStudy")}>
        Case Study
      </Button>
      <Button onClick={() => onClick("contact")} className={mainModule.btn}>
        Hire Me
      </Button>{" "}
    </Section>
  )
}

export default Hero
