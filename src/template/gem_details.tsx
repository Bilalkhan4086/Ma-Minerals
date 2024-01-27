import React from "react"
import { Box, Typography } from "@mui/material"
import Markdown from "react-markdown"

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
    marginX: "80px",
    marginY: "80px",
    "@media (max-width:450px )": {
      marginX: "10px",
    },
  },
  subHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    textAlign: "center",
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
}
const packages_details = ({ pageContext }) => {
  console.log("pageContext", pageContext)
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainHeadingBox}>
        <Typography sx={styles.mainHeading}>
          {pageContext?.mainHeading}
        </Typography>
        <Typography sx={{ ...styles.mainHeading, ...{ fontSize: "18px" } }}>
          {pageContext?.headingOne}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}
      >
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox}>.</Box>
        <Box sx={styles.smallLine2}>.</Box>
      </Box>
      <Box sx={{ marginX: "auto", display: "flex", flexDirection: "column" }}>
        <Box>
          <div
            style={{
              ...styles.mainHeading,
              ...{ fontSize: "16px", color: "#cbaf22" },
            }}
          >
            <Markdown>{pageContext?.desc1}</Markdown>
          </div>
        </Box>
        <Box
          sx={{
            "@media screen and (min-width:500px)": { width: "80%" },
            "@media (max-width:500px)": { width: "100%" },
            marginX: "auto",
            marginY: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={pageContext?.imageMain}
            style={{ maxWidth: "90%" }}
            alt="Not loaded"
          />
        </Box>
      </Box>

      <Box sx={{ marginY: "30px" }}>
        <Typography sx={styles.mainHeading}>
          {pageContext?.headingTwo}
        </Typography>
        <div
          style={{
            ...styles.mainHeading,
            ...{ fontSize: "16px", color: "#cbaf22" },
          }}
        >
          <Markdown>{pageContext?.desc2}</Markdown>
        </div>
      </Box>
    </Box>
  )
}

export default packages_details
