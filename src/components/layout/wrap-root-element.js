import ContactUs from "../ContactUs/ContactUs"
import NavBar from "../Header/Navbar"
import React from "react"

export const wrapRootElement = ({ element }) => {
  return (
    <div>
      <NavBar />
      {element}
      <ContactUs />
    </div>
  )
}
