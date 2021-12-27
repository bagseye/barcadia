import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import MenuContext from "../MenuContext"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import useFeaturedProduct from "../../hooks/use-featured-product"
import { FiChevronDown as Chevron } from "react-icons/fi"
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from "./NavAnim"

const NavModule = () => {
  const featuredProduct = useFeaturedProduct()

  const [isOpen, setNav] = useContext(MenuContext)
  const [subNavIsOpen, setSubNav] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  const toggleSubNav = () => {
    setSubNav((subNavIsOpen) => !subNavIsOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={isOpen ? " open" : ""}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          {title && (
            <LogoStyles>
              <Link to="/">
                {title}
                <span>.</span>
              </Link>
            </LogoStyles>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
          {featuredProduct && (
            <li className={subNavIsOpen ? "open" : "closed"}>
              <button
                type="button"
                onClick={toggleSubNav}
                onKeyDown={toggleSubNav}
              >
                Products<span>.</span>
                <Chevron />
              </button>

              <SubNavStyles
                initial="closed"
                animate={subNavIsOpen ? "open" : "closed"}
                variants={subMenuNavVariants}
              >
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/products"
                  >
                    All Products<span>.</span>
                  </Link>
                </li>
                <hr />
                {featuredProduct.map((item, index) => {
                  const { gatsbyPath, title } = item
                  return (
                    <li key={index}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to={gatsbyPath}
                      >
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                })}
              </SubNavStyles>
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
