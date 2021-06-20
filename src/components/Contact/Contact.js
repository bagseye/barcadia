import React from "react"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles>
      <form name="contact" netlify>
        <input placeholder="Your name" type="text" name="name" />
        <input placeholder="Your email" type="email" name="email" />
        <textarea placeholder="Your message" name="message" rows="5"></textarea>
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </ContactStyles>
  )
}

export default Contact
