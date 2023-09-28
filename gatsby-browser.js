import React from "react"
import Context from "./src/molecules/Context"

import "./src/styles/default.scss"

export const wrapPageElement = ({ element, props }) => {
  return <Context>{element}</Context>
}
