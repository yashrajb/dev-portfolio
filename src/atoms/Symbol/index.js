import React from "react"

const symbolVariants = {
  dot: "•",
  cube: "■",
  triangle: "►",
}

function Symbol({ variant = "dot" }) {
  return <span>{symbolVariants[variant]}</span>
}

export default Symbol
