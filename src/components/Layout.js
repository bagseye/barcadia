import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import "typeface-heebo"

const GlobalStyle = createGlobalStyle`
:root {
  --background: #1d1d1d;
  --border: #313131;
  --primary: #ffc400;
  --inActive: #505050;
  --menuItem: 1.125rem;
  --transition: 0.3s;
  --h1: 2rem;
  --h2: 1.375rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;

  @media(min-width:768px) {
    --h1: 2.375rem;
    --h2: 1.625rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
  }

  @media(min-width: 1200px) {
    --menuItem: 1.25rem;
    --h1: 3.125rem;
    --h2: 1.75rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
  }
}
* {
  box-sizing: border-box;

}  
body {
    font-family: 'Heebo', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #fff;
  }

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;

  @media(min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  font-weight: 900;
}

h2 {
  font-size: var(--h2);
  font-weight: 500;
}

a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    font-family: 'Heebo', sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
    }

    &:focus {
      color: var(--primary);
    }

    @media(hover: hover) {
      cursor: pointer;
    }
  }

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-padding {
    padding: var(--paddingStd) var(--paddingBorder);
  }
  
  .section-padding--large {
    padding: var(--paddingLarge) var(--paddingBorder);
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
