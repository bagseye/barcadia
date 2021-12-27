import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder="Your name..." type="text" name="name" />
        <input placeholder="Your email..." type="email" name="email" />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Send Message" />
      </form>
    </ContactStyles>
  )
}

export default Contact
