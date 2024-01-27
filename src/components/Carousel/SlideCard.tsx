import { Card, CardMedia, Rating, Typography } from "@mui/material"
import React from "react"

const SlideCard = ({ image, name, description }) => {
  return (
    <Card
      elevation={0}
      style={{
        padding: "20px 40px",
        backgroundColor: "#284862",
        maxWidth: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <CardMedia
        image={image}
        component="img"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          marginBottom: "20px",
          borderRadius: "100px",
          boxShadow: "4px 4px 0 0px #cbaf22",
        }}
        alt="Image not Loaded"
      />
      <Typography
        variant="h6"
        style={{
          color: "#a2cfcd",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          textAlign: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {name}
      </Typography>
      <Rating style={{ margin: "20px auto", color: "#cbaf22" }} value={5} />
      <Typography
        variant="body1"
        style={{
          color: "#a2cfcd",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {description}
      </Typography>
    </Card>
  )
}

export default SlideCard
