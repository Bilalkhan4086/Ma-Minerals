import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material"
import { navigate } from "gatsby"
import React from "react"
import { Box, Typography } from "@mui/material"
import Member from "../../Images/Member1.webp"
import "./index.css"
const TeamMember = ({
  image,
  name,
  position,
  facebook,
  whatsapp,
  instagram,
  twitter,
}) => {
  console.log("image", image)
  const styles = {
    iconContainer: {
      backgroundColor: "rgba(169, 162, 42, 0.619)",
      width: "45px",
      height: "45px",
      cursor: "pointer",
      borderRadius: "30px",
      marginX: "5px",
      display: "flex",
      color: "white",
      "&:hover": {
        color: "white",
        backgroundColor: "transparent",
        border: "1px solid white",
      },
    },
  }
  return (
    <Box
      sx={{
        backgroundImage: `url(${image === undefined ? Member : image})`,
        width: "300px",
        height: "450px",
        backgroundPosition: "center",
        marginY: "20px",
        backgroundSize: "cover",
        borderRadius: "8px",
        overflow: "clip",
        "@media (max-width:599px)": {
          width: "70%",
        },
        "@media (max-width:340px)": {
          width: "90%",
        },
      }}
    >
      <Box
        sx={{
          background: "rgba(0,0,0,0.4)",
          "&:hover": {
            background:
              "linear-gradient(0deg, rgba(169, 162, 42, 0.619) 2%, rgba(0,42,76,0.4514180672268907) 21%)",
          },
          width: "300px",
          height: "450px",
          borderRadius: "8px",
          textAlign: "center",
          "@media (max-width:599px)": {
            width: "100%",
          },
        }}
        className="Box"
      >
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyItems: "center",
            position: "relative",
            top: "80%",
            transition: "top 0.5s",
          }}
          className="Data"
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Montserrat,sans-serif",
              color: "white",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            {name === undefined ? "Muhammad Bilal" : name}
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat,sans-serif",
              color: "white",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            {position === undefined ? "Team Leader" : position}
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "30px",
              justifyContent: "center",
              visibility: "hidden",
              transform: "rotateY(90deg)",
              transition: "transform 0.5s",
            }}
            className="iconContainer"
          >
            <Box
              sx={styles.iconContainer}
              onClick={() => {
                navigate(`${whatsapp === undefined ? "/#" : whatsapp}`)
              }}
            >
              {" "}
              <WhatsApp style={{ margin: "auto", fontSize: "25px" }} />
            </Box>
            <Box
              sx={styles.iconContainer}
              onClick={() => {
                navigate(`${twitter === undefined ? "/#" : twitter}`)
              }}
            >
              <Twitter style={{ margin: "auto", fontSize: "25px" }} />
            </Box>
            <Box
              sx={styles.iconContainer}
              onClick={() => {
                navigate(`${instagram === undefined ? "/#" : instagram}`)
              }}
            >
              <Instagram style={{ margin: "auto", fontSize: "25px" }} />
            </Box>
            <Box
              sx={styles.iconContainer}
              onClick={() => {
                navigate(`${facebook === undefined ? "/#" : facebook}`)
              }}
            >
              <Facebook style={{ margin: "auto", fontSize: "25px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TeamMember
