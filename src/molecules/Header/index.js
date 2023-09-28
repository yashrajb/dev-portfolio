import React, { useState } from "react"
import {
  Header as MantineHeader,
  Group,
  Burger,
  MediaQuery,
  Menu,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import * as styles from "./style.module.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import headerLinks from "@app/constants/headerLinks"
import Button from "@app/atoms/Button"
import { useStore } from "@app/store"
import clsx from "clsx"
import { Instagram, Phone, AtSign, GitHub, Linkedin } from "react-feather"

export default function ResponsiveHeader(props) {
  const { title } = useStore()

  let caseStudy =
    typeof window !== "undefined"
      ? window?.location?.pathname?.includes("case-study")
      : false

  const HomeLink = (
    <Link className={styles.link} to="/">
      Home
    </Link>
  )

  const onHeaderLinkClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        top: "100px",
        behavior: "smooth",
      })
    }
  }

  const BurgerMenu = (
    <MediaQuery>
      {caseStudy ? (
        <div className={styles.burger}>{HomeLink}</div>
      ) : (
        <Menu
          className={styles.burger}
          classNames={{
            dropdown: styles.dropDown,
            item: styles.item,
            itemLabel: styles.item,
          }}
          transitionProps={{ transition: "pop-top-right" }}
          width={220}
        >
          <Menu.Target>
            <Burger color="white" />
          </Menu.Target>
          <Menu.Dropdown>
            {headerLinks.map(({ name, href, id }) => {
              const label = href ? (
                <a
                  href={href}
                  key={name}
                  className={styles.link}
                  target="_blank"
                >
                  {name}
                </a>
              ) : (
                name
              )

              return (
                <Menu.Item
                  className={styles.item}
                  key={name}
                  onClick={() => onHeaderLinkClick(id)}
                >
                  {label}
                </Menu.Item>
              )
            })}
          </Menu.Dropdown>
        </Menu>
      )}
    </MediaQuery>
  )

  return (
    <>
      <MantineHeader className={clsx(styles.container)}>
        <Link className={styles.logo} to="/">
          {title}
        </Link>

        <Group spacing={5} className={styles.links}>
          {caseStudy
            ? HomeLink
            : headerLinks.map(({ name, id, href }) => {
                if (href) {
                  return (
                    <a
                      className={clsx({
                        [styles.link]: true,
                      })}
                      key={name}
                      href={href || id}
                      target="_blank"
                    >
                      {name}
                    </a>
                  )
                }
                return (
                  <span
                    key={name}
                    onClick={() => onHeaderLinkClick(id)}
                    className={styles.link}
                  >
                    {name}
                  </span>
                )
              })}
        </Group>
        {BurgerMenu}
      </MantineHeader>
    </>
  )
}
