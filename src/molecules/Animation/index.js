import React from "react"
import * as styles from "./style.module.scss"
import clsx from "clsx"

const allAnimations = {
  "fade in": styles.fadeIn,
}

const Animation = ({ children, name = "fade in" }) => {
  return (
    <div
      className={clsx({
        [allAnimations[name]]: true,
      })}
    >
      {children}
    </div>
  )
}

export default Animation
