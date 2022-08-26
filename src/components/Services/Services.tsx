import React from "react"
import { Box, Heading, Button } from "theme-ui"
import Card from "../Cards/Card"
import icon1 from "../../Images/icon1.webp"
import icon2 from "../../Images/icon2.webp"
import icon3 from "../../Images/icon3.webp"
import icon4 from "../../Images/icon4.webp"
import { navigate } from "gatsby"

const styles = {
  smallBox: {
    color: "#002a4c",
    backgroundColor: "#cbaf22",
    width: "7px",
    height: "7px",
  },
  smallLine: {
    color: "#002a4c",
    backgroundColor: "#cbaf22",
    width: "40px",
    height: "1px",
    marginTop: "3px",
  },
  smallLine2: {
    color: "#002a4c",
    backgroundColor: "#cbaf22",
    width: "40px",
    height: "1px",
    marginTop: "3px",
  },
  mainHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 550,
    fontSize: "25px",
    color: "#a2cfcd",
    margin: "auto",
    marginBottom: "16px",
  },
  mainBox: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "100%",
  },
  subHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "40px",
    color: "#a2cfcd",
    margin: "auto",
    marginBottom: "16px",
    "@media (max-width:1150px ) and (min-width:900px )": {
      fontSize: "50px",
    },
    "@media (max-width:899px ) and (min-width:700px )": {
      fontSize: "40px",
    },
    "@media (max-width:699px ) and (min-width:550px )": {
      fontSize: "35px",
    },
    "@media (max-width:549px ) and (min-width:300px )": {
      fontSize: "30px",
    },
    "@media (max-width:299px )": {
      fontSize: "25px",
    },
  },
  cardBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonStyle: {
    background:
      "linear-gradient(90deg, #cbaf22, #3a668a 51%, #cbaf22) var(--x, 0)/ 200%",
    borderRadius: "30px",
    height: "50px",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "16px",
    width: "150px",
    transition: "0.3s",
    cursor: "pointer",
    margin: "auto",
    marginY: "30px",
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
      width: "170px",
      fontSize: "18px",
    },
    "@media (max-width:1149px) and (min-width:301px )": {
      borderRadius: "30px",
      height: "50px",
      width: "150px",
      fontSize: "16px",
    },
    "@media (max-width:449px) and (min-width:301px )": {
      width: "85%",
      marginX: "5%",
    },
    "@media (max-width:300px )": {
      width: "95%",
    },
  },
}
const Services = () => {
  return (
    <Box sx={styles.mainBox}>
      <Heading sx={styles.mainHeading}>Our Services</Heading>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}
      >
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox}>.</Box>
        <Box sx={styles.smallLine2}>.</Box>
      </Box>
      <Heading sx={styles.subHeading}>Minerals we more focus</Heading>
      <Box sx={styles.cardBox}>
        <Card
          icon={icon1}
          heading={"Gold Mining"}
          description={
            "Gold mining is the extraction of gold resources by mining. Historically"
          }
        />
        <Card
          icon={icon2}
          heading={"Gems Mining"}
          description={
            "The mining techniques adopted to extract gemstones invariably"
          }
        />
        <Card
          icon={icon3}
          heading={"Copper Mining"}
          description={
            "Copper mining is usually performed using open-pit mining,"
          }
        />
        <Card
          icon={icon4}
          heading={"Mineral Mining"}
          description={
            "In a surface mine, hard rock must be drilled and blasted, Some"
          }
        />
      </Box>
      <Button
        sx={styles.buttonStyle}
        onClick={() => {
          navigate("/services")
        }}
      >
        Explore More
      </Button>
    </Box>
  )
}

export default Services
