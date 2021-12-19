import * as React from "react"
import { Link } from "gatsby"
import { menuItems, socialItems } from "../../constants/links"
import { FooterStyles } from "./FooterStyles"
import useProductsNavigation from "../../hooks/use-products-navigation"

const Footer = () => {
  const productsNavigation = useProductsNavigation()
  return (
    <FooterStyles className="section">
      <div className="container">
        <div className="footer__menu">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        {productsNavigation.length > 0 && (
          <div className="products__menu">
            <h3>
              <Link to="/products">
                All Products<span>.</span>
              </Link>
            </h3>
            <ul>
              {productsNavigation.map((item, index) => {
                const { url, title } = item

                return (
                  <li key={index}>
                    <Link to={url}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

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
            <a
              href="https://www.morganbaker.dev"
              target="_blank"
              rel="noreferrer"
            >
              Morgan Baker Development
            </a>
            <span>.</span>
          </p>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
