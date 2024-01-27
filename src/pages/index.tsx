import React from "react"
import Hero from "../components/HomeDisplay/Hero"
import Part2 from "../components/Part2/Part2"
import Partners from "../components/Partners/Partners"
import Testimonial from "../components/Testimonial/Testimonial"
import Services from "../components/Services/Services"
import Insight from "../components/Insights/Insights"
import GetUs from "../components/GetUs/GetUs"
import { Box } from "@mui/material"
import "../css/main.css"

export default function Home() {
  return (
    <Box>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </>
      <Hero />
      <Part2 />
      <Services />
      <Insight />
      <Testimonial />
      <GetUs />
      <Partners />
    </Box>
  )
}
