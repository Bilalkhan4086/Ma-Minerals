import React from 'react'
import { Box, Heading } from 'theme-ui'
import { Slider2 } from '../Carousel/Slider2'

const styles={
    smallBox:{
        color:"#002a4c",
        backgroundColor:"#cbaf22",
        width:"7px",
        height:"7px"
    },
    smallLine:{
        color:"#002a4c",
        backgroundColor:"#cbaf22",
        width:"40px",
        height:"1px",
        marginTop:"3px"
    },
    smallLine2:{
        color:"#002a4c",
        backgroundColor:"#cbaf22",
        width:"40px",
        height:"1px",
        marginTop:"3px"
    },
    mainHeading:{
        fontFamily:"Montserrat, sans-serif",
        fontWeight:550,
        fontSize:"25px",
        color:"#a2cfcd",
        margin:"auto",
        marginBottom:"16px"
    },
    mainBox:{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        width:"100%"
    },
    subHeading:{
        fontFamily:"Montserrat, sans-serif",
        fontWeight:600,
        textAlign:"center",
        fontSize:"40px",
        color:"#a2cfcd",
        margin:"auto",
        marginBottom:"16px",
        '@media (max-width:1150px ) and (min-width:900px )': {
            fontSize:"50px"
              },
              '@media (max-width:899px ) and (min-width:700px )': {
                fontSize:"40px"
                  },
                  '@media (max-width:699px ) and (min-width:550px )': {
                    fontSize:"35px"
                      },
              '@media (max-width:549px ) and (min-width:300px )': {
                fontSize:"30px"
                  },
                  '@media (max-width:299px )': {
                    fontSize:"25px"
                      }
    }
}

const Partners = () => {
  return (
    <Box sx={{marginBottom:"100px"}}>
        <Box sx={styles.mainBox}>
            <Heading sx={styles.mainHeading}>
                Testimonial
            </Heading>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
            <Box sx={styles.smallLine}>.</Box>
            <Box sx={styles.smallBox} >.</Box>
            <Box sx={styles.smallLine2}>.</Box>
        </Box>
        <Heading sx={styles.subHeading}>
            What our Customer Say
            </Heading>
            <Box sx={{marginBottom:"50px"}}>
            <Slider2/>  
            </Box>
    </Box>
  )
}

export default Partners