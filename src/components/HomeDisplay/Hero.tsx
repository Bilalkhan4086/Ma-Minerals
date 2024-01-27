import React from "react"
import { Box, Typography, Button } from "@mui/material"
import "./styles.css"
import { navigate } from "gatsby"
import hero from "../../Images/hero.webp"

const styles = {
  mainBox: {
    width: "100%",
    "@media (min-width:1080px )": {
      height: "590px",
    },
  },
  mainHeading: {
    fontSize: "60px",
    color: "#a2cfcd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    lineHeight: 1.5,
    "@media (max-width:1150px ) and (min-width:761px )": {
      fontSize: "50px",
    },
    "@media (max-width:760px ) and (min-width:561px )": {
      fontSize: "45px",
    },
    "@media (max-width:560px ) and (min-width:431px )": {
      fontSize: "40px",
    },
    "@media (max-width:430px ) and (min-width:311px )": {
      fontSize: "30px",
    },
    "@media (max-width:310px ) and (min-width:250px )": {
      fontSize: "25px",
    },
    "@media (max-width:249px )": {
      fontSize: "23px",
    },
  },
  leftBox: {
    marginTop: "200px",
    marginLeft: "50px",
    "@media (max-width:580px )": {
      marginLeft: "30px",
      marginTop: "40px",
    },
  },
  subBox: {
    display: "flex",
    justifyContent: "space-around",
    "@media (max-width:1080px )": {
      flexDirection: "column",
    },
  },
  subHeading: {
    color: "#cbaf22",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "25px",
    fontWeight: 600,
    width: "597px",
    "@media (max-width:1150px ) and (min-width:761px )": {
      fontSize: "23px",
      width: "570px",
    },
    "@media (max-width:760px ) and (min-width:561px )": {
      fontSize: "21px",
      width: "540px",
    },
    "@media (max-width:560px ) and (min-width:431px )": {
      fontSize: "19px",
      width: "400px",
    },
    "@media (max-width:430px ) and (min-width:311px )": {
      fontSize: "17px",
      width: "270px",
    },
    "@media (max-width:310px )": {
      fontSize: "15px",
      width: "90%",
    },
  },
  callBox: {
    fontWeight: 600,
    fontSize: "25px",
    fontFamily: "Montserrat, sans-serif",
    color: "#a2cfcd",
    lineHeight: 1.5,
    "@media (max-width:1150px ) and (min-width:761px )": {
      fontSize: "23px",
    },
    "@media (max-width:760px ) and (min-width:561px )": {
      fontSize: "21px",
    },
    "@media (max-width:560px ) and (min-width:431px )": {
      fontSize: "19px",
      width: "300px",
    },
    "@media (max-width:430px ) and (min-width:311px )": {
      fontSize: "17px",
      width: "270px",
    },
    "@media (max-width:310px )": {
      fontSize: "15px",
      width: "90%",
    },
  },
  buttonVariant: {
    background:
      "linear-gradient(90deg, #cbaf22, #3a668a 51%, #cbaf22) var(--x, 0)/ 200%",
    marginTop: "40px",
    borderRadius: "30px",
    height: "50px",
    fontSize: "18px",
    width: "180px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: "#a2cfcd",
      background: "transparent",
      border: "1px solid #a2cfcd",
    },
    "&:active": {
      color: "#a2cfcd",
      background: "transparent",
      border: "1px solid #a2cfcd",
    },
    "@media (min-width:1150px )": {
      borderRadius: "30px",
      height: "50px",
      width: "200px",
      fontSize: "20px",
    },
    "@media (max-width:310px )": {
      width: "80%",
    },
  },
  headingSeperator: {
    marginTop: "30px",
  },
}
const Hero = () => {
  return (
    <Box sx={styles.mainBox}>
      .
      <Box sx={styles.subBox}>
        {/* left */}
        <Box sx={styles.leftBox}>
          <Box>
            <Typography sx={styles.mainHeading}>Diging And Minings</Typography>
            <Typography sx={styles.subHeading}>
              Digging Deep: Mining Minerals and Gems
            </Typography>
          </Box>
          <Box sx={styles.headingSeperator}>
            <Typography style={{ fontStyle: "italic", color: "#cbaf22" }}>
              Just Reach For Your Phone
            </Typography>
            <Typography sx={styles.callBox}>
              Call us On +92 313 5341 211
            </Typography>
          </Box>
          <Box>
            <Button
              variant="secondary"
              sx={styles.buttonVariant}
              onClick={() => {
                navigate("tel:+923448884086")
              }}
            >
              Contact Now
            </Button>
          </Box>
        </Box>
        {/* Right */}
        <Box
          sx={{
            maxWidth: "500px",
            width: "95%",
            justifyContent: "center",
            display: "flex",
            "@media (max-width:380px)": {
              maxWidth: "300px",
            },
          }}
        >
          <img src={hero} alt="Hero img" className="Himg" />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
