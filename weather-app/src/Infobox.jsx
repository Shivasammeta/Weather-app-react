import { ClassNames } from "@emotion/react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Infobox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Infobox({ info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1496347315686-5f274d046ccc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UfGVufDB8fDB8fHww";
    const COLD_URL ="https://images.unsplash.com/photo-1522255735762-120ef02c394d?q=80&w=782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJBSU58ZW58MHx8MHx8fDA%3D";
    return (
        <div className="Infobox"><br></br><br></br>
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
        info.humidity > 70
             ? RAIN_URL
             : info.temp > 15
             ? HOT_URL 
             : COLD_URL 
         }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City} { 
          info.humidity > 70 
          ? <ThunderstormIcon/>
           : info.temp > 10
            ? <WbSunnyIcon/>
            : <AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min temp = {info.tempMin}&deg;C</p>
          <p>Max temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}