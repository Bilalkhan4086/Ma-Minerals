import React, { useEffect, useState } from "react"
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
//  import one from '../../Images/amazon1.png'
import two from "../../Images/customer2.webp"
import three from "../../Images/customer1.webp"
import { Card, CardMedia, Typography } from "@mui/material"
import { Rating } from "@mui/material"
import { Box } from "theme-ui"

export const Slider2 = () => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  const [dots, setDots] = useState(0)
  const [data, setData] = useState([
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Lorem Ipsum as their default model text.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Lorem Ipsum as their default model text.",
  ])
  const [sildes, setSlides] = useState([
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
        image={two}
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
        Austin Clark
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
        {data[0]}
      </Typography>
    </Card>,
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
        image={three}
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
        Rachel Smith
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
        {data[1]}
      </Typography>
    </Card>,
  ])

  if (!ready) {
    return (
      <Card
        elevation={0}
        style={{
          padding: "20px 40px",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <CardMedia
          image={three}
          component="img"
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            marginBottom: "20px",
            borderRadius: "100px",
            boxShadow: "4px 4px 0 0px #6abd45",
          }}
          alt="Image not Loaded"
        />
        <Typography
          variant="h6"
          style={{
            color: "#002A4C",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            textAlign: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          Rachel Smith
        </Typography>
        <Rating style={{ margin: "20px auto", color: "#6abd45" }} value={5} />
        <Typography
          variant="body1"
          style={{
            color: "#002A4C",
            fontFamily: "Montserrat, sans-serif",
            textAlign: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {data[1]}
        </Typography>
      </Card>
    )
  }

  return (
    <>
      <Carousel
        style={{ marginTop: "50px", marginBottom: "200px" }}
        slides={sildes}
        value={dots}
        plugins={[
          "infinite",
          "autoPlay",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
        ]}
        animationSpeed={1000}
        onChange={value => {
          setDots(value)
          console.log("Change", value)
        }}
      />
      <Dots
        value={dots}
        onChange={value => {
          setDots(value)
          console.log("Change", value)
        }}
        number={sildes.length}
      />
    </>
  )
}
