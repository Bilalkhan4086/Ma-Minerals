import { TextField } from "@mui/material"
import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import PackageCards from "../components/Cards/PackageCards"
import { graphql } from "gatsby"

const packages = ({ data }) => {
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
  console.log("data is here :", data)

  const [Data, setData] = useState(data.allGemsJson.edges)

  const handleChange = e => {
    setData(
      data.allGemsJson.edges.filter(
        name =>
          name.node.mainHeading.toUpperCase().includes(e.toUpperCase()) ||
          name.node.details.toUpperCase().includes(e.toUpperCase())
      )
    )
  }

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainHeadingBox}>
        <Typography sx={styles.mainHeading}>Gems & Minerals</Typography>
        <Typography sx={{ ...styles.mainHeading, ...{ fontSize: "18px" } }}>
          Here are some of our gem stone extracted from our lands
        </Typography>
      </Box>

      <Box
        sx={{
          marginX: "auto",
          marginBottom: "50px",
          width: "70%",
          "@media (max-width : 450px)": { width: "90%" },
        }}
      >
        <TextField
          onChange={e => {
            handleChange(e.target.value)
          }}
          id="outlined-basic"
          name="search"
          label="Search here ..."
          variant="outlined"
          InputProps={{ style: { color: "#cbaf22" } }}
          InputLabelProps={{ style: { color: "#cbaf22" } }}
          sx={{ width: "100%" }}
        />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}
      >
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox}>.</Box>
        <Box sx={styles.smallLine2}>.</Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {Data.map((gem, i) => (
          <PackageCards
            mainHeading={gem.node.mainHeading}
            details={gem.node.details}
            image={gem.node.image}
            link={gem.node.link}
            location={gem.node.location}
          />
        ))}
      </Box>
    </Box>
  )
}

export default packages

export const query = graphql`
  query dataInGemstsx {
    allGemsJson {
      edges {
        node {
          mainHeading
          image
          link
          location
          details
        }
      }
    }
  }
`
