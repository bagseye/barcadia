import React from "react"
import { menuItems, socialItems } from "../../constants/links"
import { FooterStyles } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__menu">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path}>
                    {item.text}
                    <span>.</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="social__menu">
          <ul>
            {socialItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    {item.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="copyright">
          <p>
            Designed & developed by{" "}
            <a href="www.morganbaker.dev" target="_blank">
              Morgan Baker
            </a>
            <span>.</span>
          </p>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
