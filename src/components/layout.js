import React from "react"
import 'antd/dist/antd.css';
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
