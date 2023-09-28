import React from "react"
import Layout from "@app/molecules/Layout"
import { Suspense } from "react"
import Hero from "@app/sections/Hero"
import Experience from "@app/sections/Experience"
import CaseStudy from "@app/sections/Case Study"
import Projects from "@app/sections/Projects"
import Blog from "@app/sections/Blog"
import About from "@app/sections/About"
import Contact from "@app/sections/Contact"
import { useStore } from "@app/store"
import SEO from "../atoms/SEO"

const IndexPage = () => {
  return (
    <Layout>
      <Hero id="hero" />
      <Experience id="experience" />
      <CaseStudy id="caseStudy" />
      <Projects id="projects" />
      <Blog id="blog" />
      <About id="about" />
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage

export function Head() {
  return <SEO />
}
