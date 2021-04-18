import React, { useState } from "react"

// Create the context
const MenuContext = React.createContext()

export function MenuProvider({ children }) {
  // Place state in here
  const [isOpen, setNav] = useState([])

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
