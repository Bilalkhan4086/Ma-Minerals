import React from 'react'
import { Box, Heading } from 'theme-ui'
import PackageCards from '../Cards/PackageCards'

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
    mainHeadingBox:{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        width:"100%"
    },
    mainBox:{
    marginBottom:"100px"    
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

const Packages = () => {
    const benifits = ["10 ceiling fans","20 Energy saver","1 Water Pump","1 Invertor AC","1 Refrigerator"]
  return (
    <Box sx={styles.mainBox}>
        <Box sx={styles.mainHeadingBox}>
            <Heading sx={styles.mainHeading}>
                Some Packages
            </Heading>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
            <Box sx={styles.smallLine}>.</Box>
            <Box sx={styles.smallBox} >.</Box>
            <Box sx={styles.smallLine2}>.</Box>
        </Box>
        <Heading sx={styles.subHeading}>
            Easy To Afford
            </Heading>
             <Box sx={{display:"flex",flexWrap:"wrap",
        "@media (max-width:1200px)":{
            flexDirection:"column"
        }}}>
             <PackageCards MP={true} mainHeading="Basic" Price="340,000" benifits={benifits}/>
            <PackageCards MP={true} mainHeading="Gold" Price="540,000" benifits={benifits}/>
            <PackageCards MP={true} mainHeading="Premium" Price="840,000" benifits={benifits}/>
   
             </Box>
             </Box>
  )
}

export default Packages