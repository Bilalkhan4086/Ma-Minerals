import React from 'react'
import { Box, Heading, Text } from 'theme-ui'
import PackageCards from '../components/Cards/PackageCards'

const packages = () => {
    const benifits = ["10 ceiling fans","20 Energy saver","1 Water Pump","1 Invertor AC","1 Refrigerator"]
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
            fontWeight:500,
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
            marginX:"80px",
            marginY:"80px",
            '@media (max-width:450px )': {
                marginX:"10px",
            }    
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
    
  return (
       <Box sx={styles.mainBox}>

<Box sx={styles.mainHeadingBox}>
            <Heading sx={styles.mainHeading}>
                Gems & Minerals
            </Heading>
            <Text sx={{...styles.mainHeading,...{fontSize:"18px"}}}>Here are some of our gem stone extracted from our lands</Text>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
            <Box sx={styles.smallLine}>.</Box>
            <Box sx={styles.smallBox} >.</Box>
            <Box sx={styles.smallLine2}>.</Box>
        </Box>

       <Box sx={{display:"flex",flexWrap:"wrap"}}>
             <PackageCards mainHeading="Basic" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://carnegiemnh.org/wp-content/uploads/2022/01/CM4814-malachite-3-890x1024.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Gold" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://www.worldatlas.com/r/w1200/upload/28/58/f6/shutterstock-385154203.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Premium" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4y84WlokrJXLiXYXdn8FhicWebVvqKAike8mw2tQUwvjrv3cSyuYulZ6dL2tPlGoA3M&usqp=CAU"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Basic" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://i0.wp.com/mineriaenlinea.com/wp-content/uploads/2018/07/Cinabrio-y-mercurio-nativo.jpg?fit=504%2C357&ssl=1"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Gold" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://cms.alloprof.qc.ca//sites/default/files/importFiche/s1333i11.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Premium" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"http://3.bp.blogspot.com/-_lbj_L5F_4E/VgWquXtC8qI/AAAAAAAACGE/mMRRFmtM8UI/s1600/EB0514CHALP4.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Basic" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://images.newscientist.com/wp-content/uploads/2022/06/30232009/SEI_112453813.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Gold" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhU_ftF7Ogw6ZmtI49CG6cBqkqufrw_Z8zqYnW9n0s-SwRV8MFnjBt5VtwkoX422qIRg&usqp=CAU"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Premium" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://m.media-amazon.com/images/S/aplus-media/vc/c7743605-bee4-4f03-9188-39dc5c86c3bd.__CR0,0,970,600_PT0_SX970_V1___.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Basic" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://cff2.earth.com/uploads/2022/07/05115258/Minerals-scaled.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Gold" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://cdn.mos.cms.futurecdn.net/ShqBAazomzCe5Cs426G7nU-1200-80.jpg"}  link={"/packages_details"} location={"Pakistan"} />
            <PackageCards mainHeading="Premium" details="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image={"https://i0.wp.com/imp.center/i/wp-content/uploads/sites/4/2016/12/Solid-Mineral-Resources.jpg?fit=1280%2C620&ssl=1"}  link={"/packages_details"} location={"Pakistan"} />
   
             </Box>
</Box>
  )
}

export default packages