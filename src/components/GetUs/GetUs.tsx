import { navigate } from 'gatsby'
import React from 'react'
import { Box, Button, Heading, Image, Text } from 'theme-ui'
import  part2image  from '../../Images/part2Img.webp'
import  icon5  from '../../Images/solar-icon5.webp'
import  icon6  from '../../Images/solar-icon6.webp'
import  icon7  from '../../Images/solar-icon7.webp'
import  icon8  from '../../Images/solar-icon8.webp'

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
        width:"80px",
        height:"1px",
        marginTop:"-4px"
    },
    underline:{
marginY:"10px"
    },
    smallHeading:{
        color:"#a2cfcd",
        fontFamily:"Montserrat, sans-serif",
        fontSize:"24px",
        fontWeight:550
    },
    textLeft:{
        fontSize:"16px",
        fontFamily:"Montserrat ,sans-serif",
        width:"500px",
        color:"#a2cfcd",
        fontWeight:400,
        marginY:"20px",
        '@media (max-width:1150px ) and (min-width:900px )': {
            fontSize:"20px",
            width:"800px"
              },
              '@media (max-width:899px ) and (min-width:700px )': {
                fontSize:"19px",
                width:"660px"
                  },
              '@media (max-width:699px ) and (min-width:550px )': {
                fontSize:"19px",
                width:"500px"
                  },
                  '@media (max-width:549px ) and (min-width:300px )': {
                    fontSize:"18px",
                    width:"95%"
                      },
                  '@media (max-width:299px )': {
                    fontSize:"16px",
                    width:"95%"
                      }
    },
    buttonReadMore:{
      background:"transparent",
      marginTop:"40px",
      border:"2px solid white",
        borderRadius:"30px",
        height:"50px",
        fontSize:"16px",
        width:"150px",
        cursor:"pointer",
        transition: "0.3s",
        "&:hover":{
            background:"rgba(255,255,255,0.2)"
        },
        "&:active":{
            background:"rgba(255,255,255,0.2)"
        },
        '@media (min-width:1150px )': {
            borderRadius:"30px",
            height:"50px",
            width:"170px",
            fontSize:"18px"
          },
          '@media (max-width:1149px) and (min-width:301px )': {
            borderRadius:"30px",
            height:"50px",
            width:"150px",
            fontSize:"16px"
          },
          '@media (max-width:449px) and (min-width:301px )': {
            width:"85%",
            marginX:"5%",
          },
        '@media (max-width:300px )': {
            width:"95%"
          }
    },
    RightSide:{
display:"flex",
justifyContent:"center",
margin:"auto",
flexWrap:"wrap",
width:"20%",
marginRight:"20px",
'@media (max-width:1150px)': {
    width:"90%",
    margin:"auto",
    marginTop:"20px"
      }

    },
    mainBox:{
        display:"flex",
        justifyContent:"space-around",
        marginY:"30px",
        flexWrap:"wrap",
        background:"linear-gradient(to right, #002a4c, #cbaf22)" ,
        padding:"20px 50px"
    },
    leftSide:{
        width:"70%",
        marginLeft:"20px",
        '@media (max-width:1150px)': {
            width:"90%"
              }
    }
}

const GetUs = () => {
  return (
<Box sx={styles.mainBox}>
    {/* left */}
<Box sx={styles.leftSide}>
<Box>
        <Text sx={styles.smallHeading}>Get Us </Text>
        <Box sx={styles.underline}>
        <Box sx={styles.smallBox} >.</Box>
        <Box sx={styles.smallLine}>.</Box>
        </Box>
        </Box>
        <Text sx={styles.textLeft}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
</Box>
    {/* Right */}
<Box sx={styles.RightSide}>
     
      <Button sx={styles.buttonReadMore} onClick={()=>{
    navigate("https://wa.me/923448884086?text=I'm%20interested%20in%20your%20services%20let%20me%20know%20more")
}}>
      Contact Us  
      </Button> 
    
</Box>
</Box>
)
}

export default GetUs