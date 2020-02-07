import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Heebo:300,400,700,900&display=swap");
* {
  box-sizing: border-box;
}  
body {
    font-family: 'Heebo', sans-serif;
    margin: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
