import { TextField } from '@mui/material'
import React, { useState } from 'react'
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
  
    const [OriginalData, setOriginalData] = useState([
      {   mainHeading:"Turmaline",
      details:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica", 
      link:"/gem_details",
      location:"Pakistan",
        image :  "https://carnegiemnh.org/wp-content/uploads/2022/01/CM4814-malachite-3-890x1024.jpg",
      },{    mainHeading:"Gramblin",
      details:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica", 
      link:"/gem_details",
      location:"Pakistan", image :  "https://www.worldatlas.com/r/w1200/upload/28/58/f6/shutterstock-385154203.jpg",
        },{  mainHeading:"Sea Drop",
        details:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica", 
        link:"/gem_details",
        location:"Pakistan",  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4y84WlokrJXLiXYXdn8FhicWebVvqKAike8mw2tQUwvjrv3cSyuYulZ6dL2tPlGoA3M&usqp=CAU",
          },{  mainHeading:"Cisaca",
          details:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica", 
          link:"/gem_details",
          location:"Pakistan",image : "https://i0.wp.com/mineriaenlinea.com/wp-content/uploads/2018/07/Cinabrio-y-mercurio-nativo.jpg?fit=504%2C357&ssl=1",
            },{ mainHeading:"Basic",
            details:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica", 
            link:"/gem_details",
            location:"Pakistan",image :"https://cms.alloprof.qc.ca//sites/default/files/importFiche/s1333i11.jpg",
            },{ mainHeading:"Colabale",
            details:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica", 
            link:"/gem_details",
            location:"Pakistan",image :"http://3.bp.blogspot.com/-_lbj_L5F_4E/VgWquXtC8qI/AAAAAAAACGE/mMRRFmtM8UI/s1600/EB0514CHALP4.jpg"
         }
        ]);
    const [Data, setData] = useState(OriginalData)
  
  const handleChange = (e) => {
    setData(
      OriginalData.filter(
        (name)=>(
          (name.mainHeading.toUpperCase().includes(e.toUpperCase())) ||
          (name.details.toUpperCase().includes(e.toUpperCase()))
          
        )
      )
    )
  }

  return (
       <Box sx={styles.mainBox}>

<Box sx={styles.mainHeadingBox}>
            <Heading sx={styles.mainHeading}>
                Gems & Minerals
            </Heading>
            <Text sx={{...styles.mainHeading,...{fontSize:"18px"}}}>Here are some of our gem stone extracted from our lands</Text>
        </Box>

<Box sx={{marginX:"auto",marginBottom:"50px",width:"70%","@media (max-width : 450px)":{width:"90%"}}}>
  <TextField onChange={(e)=>{handleChange(e.target.value)}} id="outlined-basic" label="Search here ..." variant="outlined" InputProps={{style:{color:"#cbaf22"}}} InputLabelProps={{style: { color: '#cbaf22' }}} sx={{width:"100%"}} />
</Box>

        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
            <Box sx={styles.smallLine}>.</Box>
            <Box sx={styles.smallBox} >.</Box>
            <Box sx={styles.smallLine2}>.</Box>
        </Box>

       <Box sx={{display:"flex",flexWrap:"wrap"}}>
             {Data.map((gem,i)=>(
             <PackageCards mainHeading={gem.mainHeading} details={gem.details} image={gem.image}  link={gem.link} location={gem.location} />
            ))}

             </Box>
</Box>
  )
}

export default packages