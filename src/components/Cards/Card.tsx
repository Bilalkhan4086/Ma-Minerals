import { navigate } from "gatsby"
import React from "react"
import { Box, Typography } from "@mui/material"
import bgI from "../../Images/card-back.webp"
const styles = {
  iconImage: {
    width: "100px",
    height: "102px",
  },
  CardHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    margin: "auto",
  },

  CardBox: {
    width: "300px",
    height: "280px",
    borderRadius: "1px",
    padding: "20px",
    color: "#a2cfcd",
    backgroundColor: "#284862",
    fontFamily: "Montserrat, sans-serif",
    display: "flex",
    margin: "20px",
    marginLeft: "10px",
    flexDirection: "column",
    transition: "0.3s",
    "@media screen and (min-width:1151px )": {
      "&:hover": {
        boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
      },
    },
    "@media (max-width:1340px ) and (min-width:1178px )": {
      width: "550px",
      height: "300px",
      padding: "20px",
    },
    "@media (max-width:1177px ) and (min-width:820px)": {
      width: "40%",
      height: "300px",
      padding: "20px",
    },
    "@media (max-width:819px ) and (min-width:350px )": {
      width: "80%",
      height: "300px",
      padding: "20px",
    },
    "@media (max-width:349px)": {
      width: "95%",
      height: "300px",
      padding: "20px",
    },
  },
}

const Card = ({ icon, heading, description }) => {
  return (
    <Box sx={styles.CardBox}>
      <img
        src={icon}
        style={{ width: "100px", height: "102px", margin: "auto" }}
        alt="no Loaded"
      />
      <Typography sx={styles.CardHeading}>{heading}</Typography>
      <Typography
        sx={{
          margin: "auto",
          fontWeight: 400,
          fontSize: "17px",
          fontFamily: "Montserrat, sans-serif",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {description}
        <Typography
          sx={{
            color: "#cbaf22",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={() => {
            navigate("/service_details")
          }}
        >
          {" "}
          Read More
        </Typography>
      </Typography>
    </Box>
  )
}

export default Card
