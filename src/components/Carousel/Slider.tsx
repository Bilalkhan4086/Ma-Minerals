import React, { useEffect, useState } from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
 import two from '../../Images/partner4.webp'
 import three from '../../Images/partner2.webp'
 import four from '../../Images/partner3.webp'
 import five from '../../Images/partner5.webp'
 import one from '../../Images/partner1.webp'
import { Box } from 'theme-ui';

export const Sliderr =()=>{
  const [ready,setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, [])
  
    const [sildes,setSlides] = useState([
        (<img src={one} alt="No" width="100px"/>),
        (<img src={two} alt="yes" width="100px"/>),
        (<img src={three} alt="No" width="100px"/>),
        (<img src={four} alt="yes" width="100px"/>),
        (<img src={five} alt="No" width="100px"/>),
    ]);

    if(!ready){
return(
  <Box sx={{marginTop:"50px",marginBottom:"200px",display:"flex",justifyContent:"space-around","@media (max-width:640px)":{overFlow:"hidden"}}}>
    <img src={one} alt="No" width="100px"/>
        <img src={two} alt="yes" width="100px"/>
        <img src={three} alt="No" width="100px"/>
      <img src={four} alt="yes" width="100px"/>
      <img src={five} alt="No" width="100px"/>
  </Box>
)
    }

    return (
        <Carousel style={{marginTop:"50px",marginBottom:"200px"}}
        slides={sildes}
        plugins={[
            'infinite',
            'autoPlay',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 5
              }
            },
          ]}   
          animationSpeed={1000}
          breakpoints={{
            640: {
              plugins: [
                'infinite',
               'autoPlay',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 3
                 }
               },
             ]
            },
            400: {
              plugins: [
                'infinite',
               'autoPlay',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               },
             ]
            }
          }}
        />
    );
  };