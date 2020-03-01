import React, { useState } from "react"
import styled from "styled-components"

const FaqItem = styled.article``

const FaqTitle = styled.div`
  color: #fff;
  padding: 14px 15px;
  background-color: #272727;
  position: relative;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
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
    &:before {
      position: absolute;
      left: 15px;
      content: "";
      display: inline-block;
      width: 12px;
      height: 3px;
      background-color: var(--primary);
      transform: rotate(45deg);
      top: 50%;
    }

    &:after {
      position: absolute;
      right: 15px;
      content: "";
      display: inline-block;
      width: 12px;
      height: 3px;
      background-color: var(--primary);
      transform: rotate(-45deg);
      top: 50%;
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
    <FaqItem>
      <FaqTitle>
        <h2>{title}</h2>
        <span className="indicator" onClick={toggleInfo}></span>
      </FaqTitle>
      {showInfo && <FaqDesc>{description}</FaqDesc>}
    </FaqItem>
  )
}

export default Faq
