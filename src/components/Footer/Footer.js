import * as React from "react"
import { Link } from "gatsby"
import { menuItems, socialItems } from "../../constants/links"
import { FooterStyles } from "./FooterStyles"
import useFeaturedProduct from "../../hooks/use-featured-product"

const Footer = () => {
  const featuredProduct = useFeaturedProduct()
  return (
    <FooterStyles className="section">
      <div className="container">
        <div className="footer__menu">
          <h4>Links</h4>
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
        {featuredProduct.length > 0 && (
          <div className="footer__menu products__menu">
            <h4>
              <Link to="/products">
                All Products<span>.</span>
              </Link>
            </h4>
            <ul>
              {featuredProduct.map((item, index) => {
                const { gatsbyPath, title } = item

                return (
                  <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <div className="footer__menu social__menu">
          <h4>
            Follow Barcadia<span>.</span>
          </h4>
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
    </FooterStyles>
  )
}

export default Footer
