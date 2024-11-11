import Searchbox from './searchbox';
import Infobox from"./Infobox";
import { useState } from 'react';
export default function Weatherapp(){
    const [weatherInfo , setWeatherInfo]=useState({
        City: "Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather: "haze",
    });
    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    );
}