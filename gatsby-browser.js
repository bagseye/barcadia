import React from "react"
import { MenuProvider } from "./src/components/MenuContext"
import { AnimatePresence } from "framer-motion"

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>
}
