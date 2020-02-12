import React from "react"
import links from "../constants/links"
import socials from "../constants/socials"
import { Link } from "gatsby"
import styled from "styled-components"

const FooterArea = styled.footer`
  background-color: var(--background);
  color: #fff;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const FooterMenu = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);

  @media (min-width: 768px) {
    border-bottom: none;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    &:last-child {
      padding-bottom: 5px;

      &::after {
        bottom: 4px;
      }
    }

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

    @media (min-width: 1200px) {
      font-size: var(--menuItem);
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

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`

const Copyright = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 0.875rem;
  width: 100%;
  border-top: 1px solid var(--border);

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

const Footer = () => {
  return (
    <>
      <FooterArea>
        <FooterContainer>
          <FooterMenu>
            <div className="footer-links">
              <ul>
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path}>{item.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </FooterMenu>
          <FooterMenu>
            <ul>
              {socials.map((item, index) => {
                return (
                  <li>
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </FooterMenu>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              Morgan Baker
            </a>
          </Copyright>
        </FooterContainer>
      </FooterArea>
    </>
  )
}

export default Footer
