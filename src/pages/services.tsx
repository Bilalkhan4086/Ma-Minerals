import React from "react"
import { Box, Heading } from "theme-ui"
import Card from "../components/Cards/Card"
// import icon1 from "../Images/solar-icon1.webp"
// import icon2 from "../Images/solar-icon2.webp"
// import icon3 from "../Images/solar-icon3.webp"
// import icon4 from "../Images/solar-icon4.webp"
import { navigate } from "gatsby"

const services = () => {
  const styles = {
    smallBox: {
      color: "#002A4C",
      backgroundColor: "#cbaf22",
      width: "7px",
      height: "7px",
    },
    smallLine: {
      color: "#002A4C",
      backgroundColor: "#cbaf22",
      width: "40px",
      height: "1px",
      marginTop: "3px",
    },
    smallLine2: {
      color: "#002A4C",
      backgroundColor: "#cbaf22",
      width: "40px",
      height: "1px",
      marginTop: "3px",
    },
    mainHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: "25px",
      color: "#a2cfcd",
      margin: "auto",
      marginBottom: "16px",
    },
    mainHeadingBox: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "100%",
    },
    mainBox: {
      marginX: "40px",
      marginY: "40px",
      "@media (max-width:450px )": {
        marginX: "10px",
      },
    },
    subHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      textAlign: "center",
      fontSize: "40px",
      color: "#002A4C",
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
    cardsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      },
      cardBox: {
        cursor:"pointer"
      },
  }

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainHeadingBox}>
        <Heading sx={styles.mainHeading}>Our Services</Heading>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}
      >
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox}>.</Box>
        <Box sx={styles.smallLine2}>.</Box>
      </Box>

      <Box sx={styles.cardsContainer}>
        <Box sx={styles.cardBox}
        onClick={() => {
            navigate("/service_details")
          }}>
          {/* <Card
            icon={icon1}
            heading={"Solar Panel Insatalltion"}
            description={
              "It is a long established fact that a reader will be distracted"
            }
          /> */}
        </Box>
        <Box sx={styles.cardBox}
          onClick={() => {
            navigate("/service_details")
          }}
        >
          {/* <Card
            icon={icon2}
            heading={"Assured Quality And Service"}
            description={
              "It is a long established fact that a reader will be distracted"
            }
          /> */}
        </Box>
        <Box sx={styles.cardBox}
          onClick={() => {
            navigate("/service_details")
          }}
        >
          {/* <Card
            icon={icon3}
            heading={"Best Component Selection"}
            description={
              "It is a long established fact that a reader will be distracted"
            }
          /> */}
        </Box>
        <Box sx={styles.cardBox}
          onClick={() => {
            navigate("/service_details")
          }}
        >
        {/* <Card
          icon={icon4}
          heading={"Solar Net-Mettering"}
          description={
            "It is a long established fact that a reader will be distracted"
          }
        /> */}
      </Box>
      <Box sx={styles.cardBox}
        onClick={() => {
          navigate("/service_details")
        }}
      >
        {/* <Card
          icon={icon3}
          heading={"Best Component Selection"}
          description={
            "It is a long established fact that a reader will be distracted"
          }
        /> */}
      </Box>
      <Box sx={styles.cardBox}
        onClick={() => {
          navigate("/service_details")
        }}
      >
        {/* <Card
          icon={icon1}
          heading={"Solar Panel Insatalltion"}
          description={
            "It is a long established fact that a reader will be distracted"
          }
        /> */}
      </Box>
    </Box>
    </Box>
  )
}

export default services
