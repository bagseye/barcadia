import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import links from "../constants/links"
import quickNav from "../constants/quickNav"
import styled from "styled-components"
import DarkMode from "./DarkMode/DarkMode"

const NavBar = styled.nav`
  padding: 0 1.875rem;
  position: relative;
  z-index: 5;
`

const NavButton = styled.button`
  position: relative;
  color: #fff;
  padding: 12px 0 17px 0;
  order: 1;
  border: none;
  background-color: transparent;
  font-size: var(--menuItem);
  font-weight: 900;
  letter-spacing: -1px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: var(--primary);
  }

  @media (min-width: 768px) {
    display: none !important;
  }
`

const NavLogo = styled.div`
  font-size: 0.875rem;
  font-weight: 900;
  width: 60%;
  flex-shrink: 0;
  letter-spacing: -0.5px;
  padding: 7px 0;
  border-bottom: 1px solid var(--border);

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 12px 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

const ThemeSwitch = styled.div`
  width: 40%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 1px solid var(--border);
`

const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const NavSocials = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 1.875rem;
  order: 2;

  li {
    text-align: center;
    font-size: 1.5rem;
    margin-right: 1rem;
    list-style: none;

    a {
      color: #fff;
      transition: var(--transition);

      &:hover {
        color: var(--primary);
      }
    }

    &:nth-child(2) {
      margin-right: 0;
    }
  }
`

const NavLinks = styled.div`
  background-color: var(--background);
  display: flex;
  align-content: center;
  list-style: none;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  height: calc(100vh - 72px);
  padding: 0 1.875rem;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  max-width: 500px;
  transform: translateX(-100%);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in,
    visibility var(--transition) ease-in;

  @media (min-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: translate(0);
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 0;
  }

  &.show-nav {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;

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

    @media (min-width: 768px) {
      padding-top: 10px;
      padding-bottom: 18px;
      margin-right: 15px;
      margin-bottom: 0;

      &::after {
        bottom: 17px;
      }
    }

    @media (min-width: 1200px) {
      padding-top: 15px;
      padding-bottom: 20px;
      margin-right: 25px;

      &::after {
        bottom: 17px;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &:focus {
      color: var(--primary);
    }
  }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }
`

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>
            <AniLink cover bg="var(--background)" to="/">
              {siteMetadata.title}
            </AniLink>
          </NavLogo>
          <ThemeSwitch>
            <DarkMode />
          </ThemeSwitch>
          <NavButton type="button" onClick={toggleNav}>
            Menu.
          </NavButton>
          <NavLinks
            className={
              isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
            }
          >
            <ul>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <AniLink cover bg="var(--background)" to={item.path}>
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
          </NavLinks>
          <NavSocials>
            {quickNav.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink cover bg="var(--background)" to={item.path}>
                    {item.icon}
                  </AniLink>
                </li>
              )
            })}
          </NavSocials>
        </NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar
