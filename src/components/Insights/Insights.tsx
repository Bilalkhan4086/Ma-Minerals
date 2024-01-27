import React from "react"
import { Box } from "@mui/material"
import TaskIcon from "@mui/icons-material/Task"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import AutoGraphIcon from "@mui/icons-material/AutoGraph"
import { Google } from "@mui/icons-material"
import InsightInfoCard from "../Cards/InsightInfoCard"
const styles = {
  mainBox: {},
  smallestBox: {
    width: "90%",
    height: "100px",
    background: "linear-gradient(to right, #002a4c, #cbaf22)",
    transform: "skew(360deg,2deg)",
    marginBottom: "-30px",
    marginX: "auto",
    borderRadius: "5px",
    zIndex: "-1",
  },
  medBox: {
    width: "90%",
    height: "300px",
    background: "linear-gradient(to right, #002a4c, #cbaf22)",
    marginX: "auto",
    boxShadow: "0 10px 10px 0px #0000001f",
    color: "#a2cfcd",
    padding: "0px 40px 40px 40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    "@media (max-width : 1228px)": {
      height: "500px",
    },
    "@media (max-width : 660px)": {
      height: "1000px",
    },
  },
  largeBox: {
    width: "100%",
    paddingTop: "300px",
    paddingBottom: "15px",
    marginBottom: "40px",
    color: "green",
    display: "flex",
    zIndex: "-1",
    marginTop: "-300px",
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #002a4c, #cbaf22)",
    "@media (max-width : 1228px)": {
      paddingTop: "500px",
      marginTop: "-500px",
    },
    "@media (max-width : 660px)": {
      paddingTop: "900px",
      marginTop: "-900px",
    },
    "@media (max-width : 375px)": {
      paddingTop: "1000px",
      marginTop: "-1000px",
    },
  },

  contentBox: {
    display: "flex",
    flexDirection: "column",
    marginX: "auto",
  },
}
const Insight = () => {
  const links = [
    { name: "whatsapp", link: "/#" },
    { name: "google", link: "/#" },
    { name: "twitter", link: "/#" },
    { name: "facebook", link: "/#" },
    { name: "instagram", link: "/#" },
  ]
  return (
    <Box>
      <Box sx={styles.contentBox}>
        <Box sx={styles.smallestBox}>.</Box>
        <Box sx={styles.medBox}>
          <InsightInfoCard
            Icon={PeopleAltIcon}
            detail="Our Resounces"
            number={59}
          />
          <InsightInfoCard
            Icon={TaskIcon}
            detail="Mining Complete"
            number={32}
          />
          <InsightInfoCard
            Icon={AccessTimeFilledIcon}
            detail="New proposals"
            number={2}
          />
          <InsightInfoCard
            Icon={AutoGraphIcon}
            detail="Work Charm"
            number={"95%"}
          />
        </Box>
        <Box sx={styles.largeBox}>.</Box>
      </Box>
    </Box>
  )
}

export default Insight
