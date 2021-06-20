import React, { useState } from "react"
import { FaqStyles } from "./FaqStyles"
import { MdExpandMore as Chevron } from "react-icons/md"

const Faq = ({ title, description }) => {
  const [showInfo, setInfo] = useState(false)

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }
  return (
    <FaqStyles className={showInfo ? `${"faq-open"}` : `${"faq-closed"}`}>
      <button className="question" onClick={toggleInfo}>
        {title}
        <div className="trigger">
          <Chevron />
        </div>
      </button>
      {showInfo && <div className="answer">{description}</div>}
    </FaqStyles>
  )
}

export default Faq
