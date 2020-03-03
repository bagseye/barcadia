import React, { useState } from "react"
import styled from "styled-components"

const FaqItem = styled.article`
  &.faq-open {
    .indicator {
      &:before {
        left: 19px;
      }
      &:after {
        right: 19px;
      }
    }
  }
`

const FaqTitle = styled.div`
  color: #fff;
  padding: 14px 15px;
  background-color: #272727;
  position: relative;
  margin-bottom: 5px;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    margin: 0;
    font-weight: 900;

    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }
  }

  .indicator {
    width: 50px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    &:before,
    &:after {
      position: absolute;
      content: "";
      display: inline-block;
      width: 12px;
      height: 3px;
      background-color: var(--primary);
      top: 50%;
    }
    &:before {
      left: 15px;
      transform: rotate(45deg);
      transition: left 0.1s;
    }

    &:after {
      right: 15px;
      transform: rotate(-45deg);
      transition: right 0.1s;
    }
  }
`

const FaqDesc = styled.div`
  padding: 20px 15px;
`

const Faq = ({ title, description }) => {
  const [showInfo, setInfo] = useState(false)

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  return (
    <FaqItem className={showInfo ? `${"faq-open"}` : `${"faq-closed"}`}>
      <FaqTitle onClick={toggleInfo}>
        <h2>{title}</h2>
        <span className="indicator"></span>
      </FaqTitle>
      {showInfo && <FaqDesc>{description}</FaqDesc>}
    </FaqItem>
  )
}

export default Faq
