import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox({updateInfo}){
    let [City, setCity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8579ff63bc3417109c9fcb1a03827a50";

    let getWeatherInfo = async () => {
    try{
        let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
           City: City,
           temp: jsonResponse.main.temp,
           tempMin: jsonResponse.main.temp_min,
           tempMax: jsonResponse.main.temp_max,
           humidity: jsonResponse.main.humidity,
           feelsLike: jsonResponse.main.feels_like,
           weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) =>{
        try{
            evt.preventDefault();
             console.log(City);
             setCity("");
             let newinfo =await getWeatherInfo();
             updateInfo(newinfo)
        }catch(err){
            seterror(true)
        }
    };

    return(
    <div className="Searchbox">
        <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={City} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type='Submit'>Search
      </Button>
      {error && <p>city not found</p>}
        </form>
    </div>
    )
}