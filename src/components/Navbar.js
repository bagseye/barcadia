import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import socialIcons from "../constants/socials"
import styled from "styled-components"

const NavBar = styled.nav`
  background-color: #1d1d1d;
  color: #fff;
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
  border-radius: 0.15rem;
  background-color: transparent;
  font-size: 1.125rem;
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
    background-color: #ffc400;
  }

  @media (min-width: 768px) {
    display: none !important;
  }
`

const NavHeader = styled.div`
  background-color: #1d1d1d;
`

const NavLogo = styled.div`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 900;
  width: 100%;
  flex-shrink: 0;
  letter-spacing: -0.5px;
  padding: 7px 0;
  border-bottom: 1px solid #313131;

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 12px 0;
  }
`

const NavCenter = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const NavSocials = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d1d1d;
  padding: 0 0 0 1.875rem;
  order: 2;

  a {
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    margin-right: 1rem;

    &:nth-child(2) {
      margin-right: 0;
    }
  }
`

const NavLinks = styled.div`
  background-color: #1d1d1d;
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
    visibility 0.3s ease-in;

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
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    text-transform: capitalize;
    font-size: 1.125rem;
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
      bottom: 5px;
      background-color: #ffc400;
    }

    @media (min-width: 768px) {
      padding-top: 10px;
      padding-bottom: 22px;
      margin-right: 15px;
      margin-bottom: 0;

      &::after {
        bottom: 13px;
      }
    }

    @media (min-width: 1200px) {
      padding-top: 15px;
      padding-bottom: 24px;
      font-size: 1.25rem;
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
    transition: 0.3s color;

    &:focus {
      color: #ffc400;
    }
  }

  @media (hover: hover) {
    a:hover {
      color: #ffc400;
    }
  }
`

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>Barcadia.</NavLogo>
          <NavHeader>
            <NavButton type="button" onClick={toggleNav}>
              Menu.
            </NavButton>
          </NavHeader>

          <NavLinks
            className={
              isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
            }
          >
            <ul>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.text}</Link>
                  </li>
                )
              })}
            </ul>
          </NavLinks>
          <NavSocials>
            {socialIcons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </NavSocials>
        </NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar
