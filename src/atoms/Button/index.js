import React from "react"
import { Anchor, UnstyledButton } from "@mantine/core"
import * as styles from "./style.module"
import clsx from "clsx"
import { Link } from "gatsby"
export default ({ children, to, href, className = "", ...otherProps }) => {
  let classes = clsx([to || href ? styles.link : styles.btn, className])
  let props = {
    ...otherProps,
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...otherProps}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <Anchor className={classes} target="_blank" href={href} {...otherProps}>
        {children}
      </Anchor>
    )
  }

  return (
    <UnstyledButton className={classes} {...props}>
      {children}
    </UnstyledButton>
  )
}
