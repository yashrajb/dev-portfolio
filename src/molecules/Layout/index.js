import React from "react"
import { AppShell, Container } from "@mantine/core"
import Header from "@app/molecules/Header"
export default ({ children, ...other }) => {
  return (
    <AppShell padding="0px" {...other} header={<Header />}>
      {children}
    </AppShell>
  )
}
