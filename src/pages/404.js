import React from "react"
import * as styles from "@app/styles/404.module"
import Image from "@app/atoms/Image"
import { Link } from "gatsby"
const NotFoundPage = () => (
  <div className={styles.notFoundPage}>
    <img src="/404.png" />
    <h1>404 NOT FOUND</h1>
    <p>We're Sorry, but it seems you've taken a wrong turn.</p>
    <p>
      Don't worry, it happens to the best of us. Let's get you back on track.
    </p>
    <Link to="/" className={styles.link}>
      Home
    </Link>
  </div>
)

export default NotFoundPage
