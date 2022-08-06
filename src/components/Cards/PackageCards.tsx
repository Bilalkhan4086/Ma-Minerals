import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { navigate } from 'gatsby';


export default function ActionAreaCard({mainHeading,image,location,details,link}) {
  return (
    <Card sx={{ backgroundColor:"#284862",margin:"24px auto",maxWidth: 345 }} onClick={()=>{navigate(link)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{color:"#a2cfcd"}} variant="h5" component="div">
            {mainHeading} <Typography variant="span" sx={{fontSize:"16px"}}>from <span style={{fontSize:"19px",color:"#cbaf22"}}>{location}</span></Typography>
          </Typography>
          <Typography variant="body2" sx={{color:"#cbaf22"}} >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
