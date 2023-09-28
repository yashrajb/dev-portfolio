import React, { useRef } from "react"
import PropTypes from "prop-types"
import * as styles from "./style.module.scss"
import SectionTitle from "@app/atoms/SectionTitle"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import clsx from "clsx"
import { Container } from "@mantine/core"
import Animation from "@app/molecules/Animation"

const Section = (props) => {
  let {
    title,
    children,
    className = "",
    size = "xl",
    lazyLoading,
    ...otherProps
  } = props
  let classes = clsx([className, styles.container])

  const ref = useRef()
  // let isVisible = useIsInViewPort(ref)

  const sectionTitle = title ? (
    <SectionTitle className={styles.title}>{title}</SectionTitle>
  ) : (
    ""
  )

  return (
    <div ref={ref} className={classes} {...otherProps}>
      <Container size={size}>
        {sectionTitle}
        <Animation>{children}</Animation>
      </Container>
    </div>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
}
