import React from "react"
import { Box, Heading, Image, Text } from "theme-ui"

const packages_details = ({ pageContext }) => {
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
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainHeadingBox}>
        <Heading sx={styles.mainHeading}>
          {pageContext?.mainHeading || "Crystal Tumrin"}
        </Heading>
        <Text sx={{ ...styles.mainHeading, ...{ fontSize: "18px" } }}>
          {pageContext?.heading1 || "Precious Tumrin found in Pakistan"}
        </Text>
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
          <Text
            sx={{
              ...styles.mainHeading,
              ...{ fontSize: "16px", color: "#cbaf22" },
            }}
          >
            {pageContext?.desc1 ||
              "Invite the energies of love and compassion into your life with this Tumbled Green Tourmaline. Green tourmaline resonates with the Heart Chakra and brings the energies of union and integration, as well as wisdom and discernment in love. It’s a renowned stone for metaphysical work because of its protective, grounding, and gentle nature. Working with green tourmaline strengthens your resolve, helping you to heal any ailment of your heart. If you’re looking for a stone to usher you into a state of emotional well-being, while invoking compassion and love into your heart, this crystal is for you."}
          </Text>
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
          <Image
            src={
              pageContext?.imageMain ||
              "https://www.worldatlas.com/r/w1200/upload/28/58/f6/shutterstock-385154203.jpg"
            }
            alt="Not loaded"
          />
        </Box>
      </Box>

      <Box sx={{ marginY: "30px" }}>
        <Heading sx={styles.mainHeading}>
          {pageContext?.heading2 ||
            "The deeper magic of this Tumbled Green Tourmaline"}
        </Heading>
        <Text
          sx={{
            ...styles.mainHeading,
            ...{ fontSize: "16px", color: "#cbaf22" },
          }}
        >
          {pageContext?.desc2 ||
            `Green tourmaline is a healing stone that opens and activates the Heart Chakra so you can see and pursue your path to love. If you’re recovering from trauma, this gem will support you throughout the process. Additionally, green tourmaline brings abundance and prosperity. This gem holds the energy of the mineral and plant kingdoms, making it a perfect tool for connecting with nature. Green tourmaline is also a stone of the goddess Athena and helps enhance vitality, stamina, and energy during physical activities. It can help you overcome fear, and help you to remain present during confrontation and fearful situations. Green tourmaline is also your ally for deep grounding in the physical world. I highly recommend it if you do a lot of work in the upper realms or chakras. It will gently, but firmly guide you back to a grounded state.
Tumbled stones are convenient magic – potent enough to hold the properties of your stone, yet small enough to keep it close without feeling weighed down. Hold this stone in meditation, place it on your Heart Chakra, or crystal grid with it to invoke love and compassion. However you choose to work with yours, may it serve you well. And so it is. This listing is for one (1) Tumbled Green Tourmaline (about 0.25-0.5”). Yours will arrive lovingly parceled along with a single leaf of white sage and a card describing the properties of the stone.`}
        </Text>
      </Box>
    </Box>
  )
}

export default packages_details
