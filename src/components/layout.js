import React from "react"

import Header from "./header"

const Layout = ({ children, comp, header }) => {
  return (
    <div>
      <Header header={header} />
      {children}
    </div>
  )
}

export default Layout
