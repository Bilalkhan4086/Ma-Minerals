import React from 'react'
import { Box, Button, Heading, Image, Text } from 'theme-ui'
import TeamMember from '../components/Cards/TeamMember'
import Bulb from '../Images/aboutPic.webp'
import icon1 from '../Images/icon2.webp'
import icon2 from '../Images/icon4.webp'
import Member1 from "../Images/Member1.webp"
import Member2 from "../Images/Member2.webp"
import Member3 from "../Images/Member3.webp"
const about = () => {
  const styles = {
    smallestBox: {
      width: "90%",
      height: "50px",
      background: "linear-gradient(90deg, #002a4c 11%, #dabc27 100%)",
      transform: "skew(360deg,-2deg)",
      marginTop: "-30px",
      marginX: "auto",
      borderRadius: "5px",
      zIndex: "10",
      marginBottom: "30px"

    },
    medBox: {
      width: "90%",
      height: "100px",
      background: "linear-gradient(90deg, #002a4c 11%, #dabc27 100%)",
      marginX: "auto",
      color: "white",
      padding: "0px 40px 40px 40px",
      zIndex: "11",
      display: "flex",
      flexDirection: "column"

    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      marginX: "auto",
      marginTop: "-78px"
    },
    largeBox: {
      width: "100%",
      paddingBottom: "50px",
      paddingX: "15px",
      background: "linear-gradient(90deg, #002a4c 14%, #dabc27 100%)"
    },
    headingLeft: {
      fontSize: "40px",
      width: "900px",
      fontWeight: 500,
      color: "#a2cfcd",
      marginY: "30px",
      fontFamily: "Montserrat, sans-serif",
      '@media (max-width:1150px ) and (min-width:900px )': {
        fontSize: "38px",
        width: "600px"
      },
      '@media (max-width:899px ) and (min-width:700px )': {
        fontSize: "35px",
        width: "590px"
      },
      '@media (max-width:699px ) and (min-width:550px )': {
        fontSize: "35px",
        width: "520px"
      },
      '@media (max-width:549px ) and (min-width:300px )': {
        fontSize: "30px",
        width: "90%"
      },
      '@media (max-width:299px )': {
        fontSize: "25px",
        width: "95%"
      }

    },
    smallBox: {
      color: "#002a4c",
      backgroundColor: "#cbaf22",
      width: "7px",
      height: "7px"
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
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginX: "auto"
    },
    underline2: {
      marginY: "10px"
    },
    smallHeading: {
      color: "#a2cfcd",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "22px",
      fontWeight: 400
    },
    textLeft: {
      fontSize: "18px",
      fontFamily: "Montserrat ,sans-serif",
      width: "900px",
      color: "#cbaf22",
      fontWeight: 400,
      marginY: "20px",
      '@media (max-width:1200px ) and (min-width:1151px )': {
        fontSize: "17px",
        width: "750px"
      },
      '@media (max-width:1150px ) and (min-width:970px )': {
        fontSize: "17px",
        width: "650px"
      },
      '@media (max-width:969px ) and (min-width:700px )': {
        fontSize: "19px",
        width: "680px"
      },
      '@media (max-width:699px ) and (min-width:550px )': {
        fontSize: "18px",
        width: "90%"
      },
      '@media (max-width:549px ) and (min-width:300px )': {
        fontSize: "15px",
        width: "95%"
      },
      '@media (max-width:299px )': {
        fontSize: "14px",
        width: "95%"
      }
    },
    leftSide: {
      width: "870px",
      marginLeft: "20px",
      '@media (max-width:1200px ) and (min-width:1151px )': {
        width: "750px"
      }, '@media (max-width:1150px ) and (min-width:970px )': {
        width: "650px"
      }, '@media (max-width:969px ) and (min-width:700px )': {
        width: "700px"
      },
      '@media (max-width:550px)': {
        width: "90%"
      }
    },
    buttonReadMore: {
      background: "linear-gradient(90deg, #5aa236, #a6dc6d 51%, #5aa236) var(--x, 0)/ 200%",
      marginTop: "40px",
      borderRadius: "30px",
      height: "50px",
      fontSize: "16px",
      width: "150px",
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": {
        color: "#002A4C",
        background: "transparent",
        border: "2px solid #002A4C"
      },
      "&:active": {
        color: "#002A4C",
        background: "transparent",
        border: "2px solid #002A4C"
      },
      '@media (min-width:1150px )': {
        borderRadius: "30px",
        height: "50px",
        width: "170px",
        fontSize: "18px"
      },
      '@media (max-width:1149px) and (min-width:301px )': {
        borderRadius: "30px",
        height: "50px",
        width: "150px",
        fontSize: "16px"
      },
      '@media (max-width:449px) and (min-width:301px )': {
        width: "85%",
        marginX: "5%",
      },
      '@media (max-width:300px )': {
        width: "95%"
      }
    },
    CardBox: {
      width: "230px",
      height: "280px",
      padding: "20px",
      color: "white",
      backgroundColor: "#002A4C",
      fontFamily: "Montserrat, sans-serif",
      display: "flex",
      margin: "20px",
      marginLeft: "10px",
      flexDirection: "column",
      '&:hover': {
        backgroundColor: '#549a3e',
      },
      transition: "0.5s",
      '@media screen and (min-width:1151px )': {
        '&:hover': {
          backgroundColor: '#549a3e',
          transform: "rotate(0deg)"
        },
        transform: "rotate(10deg)"
      },
      '@media (max-width:1150px ) and (min-width:960px )': {
        width: "400px",
        height: "300px",
        padding: "20px"
      },
      '@media (max-width:959px ) and (min-width:600px )': {
        width: "40%",
        height: "300px",
        padding: "20px"
      },
      '@media (max-width:599px ) and (min-width:300px )': {
        width: "80%",
        height: "300px",
        padding: "20px"
      },
      '@media (max-width:299px)': {
        width: "95%",
        height: "300px",
        padding: "20px"
      }
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
      width: "300px",
      '@media (max-width:550px)': {
        width: "90%",
        margin: "auto",
        marginTop: "20px"
      }

    },
    mainBox: {
      display: "flex",
      justifyContent: "space-around",
      marginY: "30px",
      flexWrap: "wrap"
    },

    leftImage: {
      width: "250px",
      '@media (max-width:1150px ) and (min-width:900px )': {
        width: "250px"
      },
      '@media (max-width:899px ) and (min-width:700px )': {
        width: "250px"
      },
      '@media (max-width:699px ) and (min-width:550px )': {
        width: "250px"
      },
      '@media (max-width:549px ) and (min-width:300px )': {
        width: "95%"
      },
      '@media (max-width:299px )': {
        width: "95%"
      }
    },
    mainHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 550,
      fontSize: "25px",
      color: "#a2cdcf",
      margin: "auto",
      marginBottom: "16px"
    },
    smallLine2: {
      color: "#002A4C",
      backgroundColor: "#cbaf22",
      width: "40px",
      height: "1px",
      marginTop: "3px"
    },
    subHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "40px",
      color: "#a2cdcf",
      margin: "auto",
      marginBottom: "16px",
      '@media (max-width:1150px ) and (min-width:900px )': {
        fontSize: "50px"
      },
      '@media (max-width:899px ) and (min-width:700px )': {
        fontSize: "40px"
      },
      '@media (max-width:699px ) and (min-width:550px )': {
        fontSize: "35px"
      },
      '@media (max-width:549px ) and (min-width:300px )': {
        fontSize: "30px"
      },
      '@media (max-width:299px )': {
        fontSize: "25px"
      }
    },
    mainBox2: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "100%"
    }
  }
  return (

    <Box sx={{ marginY: "50px" }}>


        <Heading sx={{ color: "#a2cfcd", textAlign: "center", fontFamily: "MontSerrat,sans-serif", fontWeight: 500, fontSize: "30px", marginBottom: "20px" }}>
          About Us
        </Heading>
        <Box sx={styles.underline}>
          <Box sx={{ ...styles.smallBox, ...{ marginX: "auto" } }} >.</Box>
          <Box sx={{ ...styles.smallLine, ...{ marginX: "auto" } }}>.</Box>
       
      </Box>

      <Box sx={styles.mainBox}>
        {/* left */}
        <Box sx={styles.leftSide}>
          <Box>
            <Text sx={styles.smallHeading}>We Write About Natural Energy</Text>
            <Box sx={styles.underline2}>
              <Box sx={styles.smallBox} >.</Box>
              <Box sx={styles.smallLine}>.</Box>
            </Box>
            <Box>
              <Heading sx={styles.headingLeft}>Want To Know About Us</Heading>
              <Heading sx={styles.textLeft}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
              </Heading>
              <Heading sx={styles.textLeft}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</Heading>
            </Box>
          </Box>
          <Box>
            {/* <Image src={icon1} sx={styles.leftImage} alt="Image is not Loaded due to connection" /> */}
          </Box>
          <Box>
            {/* <Button sx={styles.buttonReadMore}>
            Read More
          </Button> */}

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

              <Box sx={{ display: "flex", paddingY: "5px", backgroundColor: "#284862", width: "400px", marginY: "30px", "@media(max-width:420px)": { flexDirection: "column" }, "@media(max-width:1200px)": { width: "600px" }, "@media(max-width:620px)": { width: "90%" } }}>
                <Image src={icon1} alt="icon is not loaded" width="80px" />
                <Box sx={{ dispaly: "flex", flexDirection: "column", width: "310px", marginLeft: "10px", "@media(max-width:1200px)": { width: "500px" }, "@media(max-width:620px)": { flex: 1 }, "@media(max-width:420px)": { width: "90%" } }}>
                  <Heading sx={{ fontSize: "22px", fontFamily: "Montserrat, sans-serif", color: "#a2cfcd", marginTop: "15px" }}>
                    Blue Rubi Gem
                  </Heading>
                  <Text sx={{ fontSize: "18px", fontFamily: "Montserrat, sans-serif", color: "#cbaf22" }}>It is a long established fact that a reader will be distracted</Text>
                </Box>
              </Box>
              <Box sx={{ display: "flex", paddingY: "5px", backgroundColor: "#284862", width: "400px", marginY: "30px", "@media(max-width:420px)": { flexDirection: "column" }, "@media(max-width:1200px)": { width: "600px" }, "@media(max-width:620px)": { width: "90%" } }}>
                <Image src={icon2} alt="icon is not loaded" width="80px" />
                <Box sx={{ dispaly: "flex", flexDirection: "column", width: "310px", marginLeft: "10px", "@media(max-width:1200px)": { width: "500px" }, "@media(max-width:620px)": { flex: 1 }, "@media(max-width:420px)": { width: "90%" } }}>
                  <Heading sx={{ fontSize: "22px", fontFamily: "Montserrat, sans-serif", color: "#a2cfcd", marginTop: "15px" }}>
                    Ferozy Mineral
                  </Heading>
                  <Text sx={{ fontSize: "18px", fontFamily: "Montserrat, sans-serif", color: "#cbaf22" }}>It is a long established fact that a reader will be distracted</Text>
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        {/* Right */}
        <Box>
          <Box sx={styles.RightSide}>
            <Image src={Bulb} sx={styles.leftImage} alt="Image is not Loaded due to connection" />
          </Box>
        </Box>
      </Box>


      <Box sx={styles.mainBox2}>
        <Heading id="Team" sx={styles.mainHeading}>
          Our Experts
        </Heading>
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
          <Box sx={styles.smallLine2}>.</Box>
          <Box sx={styles.smallBox} >.</Box>
          <Box sx={styles.smallLine2}>.</Box>
        </Box>
        <Heading sx={styles.subHeading}>
          Specialists Team
        </Heading>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <TeamMember image={Member1} name={"Amjed Pervaiz"} position={"Director Sales & Marketing"} facebook={"https://www.facebook.com/profile.php?id=100012243097496"} instagram={"https://www.instagram.com/premierpakistan"} twitter={"https://www.instagram.com/muhammadbilal3681/"} whatsapp={"https://wa.me/923135341211?text=I'm%20interested%20in%20your%20services%20let%20me%20know%20more"} />
          <TeamMember image={Member3} name={"Jamshaid Khan "} position={"CEO in MA Minerals"} facebook={"https://www.facebook.com/profile.php?id=100012243097496"} instagram={"https://www.instagram.com/premierpakistan"} twitter={"https://www.instagram.com/muhammadbilal3681/"} whatsapp={"https://wa.me/923459728483?text=I'm%20interested%20in%20your%20services%20let%20me%20know%20more"} />
          <TeamMember image={Member2} name={"Kinza Asraf"} position={"Guide"} facebook={"https://www.facebook.com/profile.php?id=100012243097496"} instagram={"https://www.instagram.com/premierpakistan"} twitter={"https://www.instagram.com/muhammadbilal3681/"} whatsapp={"https://wa.me/923448884086?text=I'm%20interested%20in%20your%20services%20let%20me%20know%20more"} />
        </Box>

      </Box>
    </Box>
  )
}

export default about