import React, { useRef } from "react"
import { Image } from "@mantine/core"
import useIsInViewPort from "@app/hooks/useIsInViewPort"

export default ({ src, ...otherProps }) => {
  const ref = useRef()
  const isVisible = useIsInViewPort(ref)
  return (
    <div ref={ref}>
      {isVisible ? <Image src={src} {...otherProps} /> : <p></p>}
    </div>
  )
}
