import React, { useRef } from "react"
import * as styles from "./style.module"
import { Grid, Title, Card } from "@mantine/core"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import PropTypes from "prop-types"
import Image from "@app/atoms/Image"
import clsx from "clsx"

function List({ image, className, children, ...otherProps }) {
  const { src, ...otherImageProps } = image

  const classes = clsx([styles.post, className])
  return (
    <Card radius="md" className={classes} {...otherProps}>
      <Card.Section>
        <Grid>
          <Grid.Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Image src={src} {...otherImageProps} />
          </Grid.Col>

          <Grid.Col xs={12} sm={12} md={12} lg={6} xl={6}>
            {children}
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  )
}

export default List

List.propTypes = {
  image: PropTypes.objectOf({
    src: PropTypes.string,
    props: PropTypes.object,
  }),
}
