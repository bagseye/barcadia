import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledAbout = ({ img, className, children, gradient }) => {
  return (
    <BackgroundImage className={className} fluid={img} gradient={gradient}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledAbout)`
  background: ${props =>
    props.gradient
      ? "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
