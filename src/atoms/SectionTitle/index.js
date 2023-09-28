import React from "react"
import * as styles from "./style.module.scss"
import { Title } from "@mantine/core"
import clsx from "clsx"

export default ({ children, className = "", ...otherProps }) => {
  let classes = clsx([styles.container, className])
  return (
    <Title order={1} {...otherProps} className={classes}>
      {children}
    </Title>
  )
}
