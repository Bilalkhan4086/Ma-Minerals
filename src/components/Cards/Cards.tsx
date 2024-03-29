import { Typography, Button } from "@mui/material"
import { WhatsApp } from "@mui/icons-material"
import { navigate } from "gatsby"
import React from "react"
import { Box } from "@mui/material"

const Cards = () => {
  return (
    <Box
      style={{
        width: "500px",
        padding: "20px",
        color: "whitesmoke",
        backgroundColor: "#080130",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Montserrat,sans-serif",
        }}
      >
        {/* left */}
        <Box>
          <Box>
            <Typography variant="body2">price starts at</Typography>
            <Typography variant="h5">PKR 7,000</Typography>
            <Typography variant="body2">Per room/night</Typography>
            <Typography variant="h6">Quick Booking</Typography>
          </Box>
        </Box>

        {/* right */}

        <Box>
          <Typography style={{ lineHeight: "35px" }} variant="body1">
            2*Guests
          </Typography>
          <Typography style={{ lineHeight: "35px" }} variant="body1">
            1*Room
          </Typography>
          <Typography style={{ lineHeight: "35px" }} variant="h5">
            <WhatsApp />
            1122
          </Typography>
        </Box>
      </Box>

      <Button
        variant="outlined"
        color="inherit"
        style={{ borderRadius: "40px", width: "220px", marginTop: "5px" }}
        onClick={() => {
          navigate("/#")
        }}
      >
        Book Now
      </Button>
    </Box>
  )
}

export default Cards
