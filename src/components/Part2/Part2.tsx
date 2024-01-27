import { navigate } from "gatsby"
import React from "react"
import { Box, Button, Typography } from "@mui/material"
import part2image from "../../Images/part2.webp"
import icon5 from "../../Images/icon1.webp"
import icon6 from "../../Images/icon2.webp"
import icon7 from "../../Images/icon3.webp"
import icon8 from "../../Images/icon4.webp"
import "./index.css"
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
    width: "80px",
    height: "1px",
    marginTop: "-4px",
  },
  underline: {
    marginY: "10px",
  },
  smallHeading: {
    color: "#a2cfcd",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "24px",
    fontWeight: 550,
  },
  headingLeft: {
    fontSize: "40px",
    width: "500px",
    color: "#a2cfcd",
    fontFamily: "Montserrat, sans-serif",
    "@media (max-width:1150px ) and (min-width:900px )": {
      fontSize: "50px",
      width: "860px",
    },
    "@media (max-width:899px ) and (min-width:700px )": {
      fontSize: "40px",
      width: "660px",
    },
    "@media (max-width:699px ) and (min-width:550px )": {
      fontSize: "35px",
      width: "500px",
    },
    "@media (max-width:549px ) and (min-width:300px )": {
      fontSize: "30px",
      width: "95%",
    },
    "@media (max-width:299px )": {
      fontSize: "25px",
      width: "95%",
    },
  },
  textLeft: {
    fontSize: "16px",
    fontFamily: "Montserrat ,sans-serif",
    width: "500px",
    fontWeight: 400,
    color: "#cbaf22",
    marginY: "20px",
    "@media (max-width:1150px ) and (min-width:900px )": {
      fontSize: "20px",
      width: "800px",
    },
    "@media (max-width:899px ) and (min-width:700px )": {
      fontSize: "19px",
      width: "660px",
    },
    "@media (max-width:699px ) and (min-width:550px )": {
      fontSize: "19px",
      width: "500px",
    },
    "@media (max-width:549px ) and (min-width:300px )": {
      fontSize: "18px",
      width: "95%",
    },
    "@media (max-width:299px )": {
      fontSize: "16px",
      width: "95%",
    },
  },
  buttonReadMore: {
    background:
      "linear-gradient(90deg, #cbaf22, #3a668a 51%, #cbaf22) var(--x, 0)/ 200%",
    marginTop: "40px",
    borderRadius: "30px",
    height: "50px",
    fontSize: "16px",
    width: "150px",
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
  CardBox: {
    width: "230px",
    height: "280px",
    padding: "20px",
    backgroundColor: "#284862",
    color: "#cbaf22",
    fontFamily: "Montserrat, sans-serif",
    display: "flex",
    margin: "20px",
    marginLeft: "10px",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#cbaf22",
      color: "#5d4102",
    },
    "@media screen and (min-width:1151px )": {
      "&:hover": {
        backgroundColor: "#cbaf22",
        color: "#5d4102",
      },
    },
    "@media (max-width:1150px ) and (min-width:960px )": {
      width: "400px",
      height: "300px",
      padding: "20px",
    },
    "@media (max-width:959px ) and (min-width:600px )": {
      width: "40%",
      height: "300px",
      padding: "20px",
    },
    "@media (max-width:599px ) and (min-width:300px )": {
      width: "80%",
      height: "300px",
      padding: "20px",
    },
    "@media (max-width:299px)": {
      width: "95%",
      height: "300px",
      padding: "20px",
    },
  },
  CardHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    margin: "auto",
  },
  RightSide: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    flexWrap: "wrap",
    width: "550px",
    marginRight: "20px",
    "@media (max-width:1150px)": {
      width: "90%",
      margin: "auto",
      marginTop: "20px",
    },
  },
  mainBox: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "60px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  leftSide: {
    width: "550px",
    marginLeft: "20px",
    "@media (max-width:1150px)": {
      width: "90%",
    },
  },
  leftImage: {
    width: "500px",
    "@media (max-width:1150px ) and (min-width:900px )": {
      width: "860px",
    },
    "@media (max-width:899px ) and (min-width:700px )": {
      width: "660px",
    },
    "@media (max-width:699px ) and (min-width:550px )": {
      width: "500px",
    },
    "@media (max-width:549px ) and (min-width:300px )": {
      width: "95%",
    },
    "@media (max-width:299px )": {
      width: "95%",
    },
  },
}

const Part2 = () => {
  return (
    <Box sx={styles.mainBox}>
      {/* left */}
      <Box sx={styles.leftSide}>
        <Box>
          <Typography sx={styles.smallHeading}>Ore Processing</Typography>
          <Box sx={styles.underline}>
            <Box sx={styles.smallBox}>.</Box>
            <Box sx={styles.smallLine}>.</Box>
          </Box>
          <Box>
            <Typography sx={styles.headingLeft}>
              We Write About Mining Mines
            </Typography>
            <Typography sx={styles.textLeft}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            src={part2image}
            style={styles.leftImage}
            alt="Image is not Loaded due to connection"
          />
        </Box>
        <Box>
          <Button
            sx={styles.buttonReadMore}
            onClick={() => {
              navigate("/service_details")
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
      {/* Right */}
      <Box>
        <Box sx={styles.RightSide}>
          <Box className="card1" sx={styles.CardBox}>
            <img
              src={icon5}
              style={{ width: "100px", height: "102px", marginX: "auto" }}
              alt="no Loaded"
            />
            <Typography sx={styles.CardHeading}>Gold Mining</Typography>
            <Typography
              sx={{
                margin: "auto",
                fontWeight: 300,
                fontSize: "17px",
                fontFamily: "Montserrat, sans-serif",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>

          <Box className="card2" sx={styles.CardBox}>
            <img
              src={icon6}
              style={{ width: "100px", height: "102px", marginX: "auto" }}
              alt="no Loaded"
            />
            <Typography sx={styles.CardHeading}>Gems Mining</Typography>
            <Typography
              sx={{
                margin: "auto",
                fontWeight: 300,
                fontSize: "17px",
                fontFamily: "Montserrat, sans-serif",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>

          <Box className="card3" sx={styles.CardBox}>
            <img
              src={icon7}
              sx={{ width: "100px", height: "102px", marginX: "auto" }}
              alt="no Loaded"
            />
            <Typography sx={styles.CardHeading}>Copper Mining</Typography>
            <Typography
              sx={{
                margin: "auto",
                fontWeight: 300,
                fontSize: "17px",
                fontFamily: "Montserrat, sans-serif",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>

          <Box className="card4" sx={styles.CardBox}>
            <img
              src={icon8}
              style={{ width: "100px", height: "102px", marginX: "auto" }}
              alt="no Loaded"
            />
            <Typography sx={styles.CardHeading}>Mineral Mining</Typography>
            <Typography
              style={{
                margin: "auto",
                fontWeight: 300,
                fontSize: "17px",
                fontFamily: "Montserrat, sans-serif",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default Part2
