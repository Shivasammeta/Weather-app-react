# Weather-app-react
Weather App built with React that provides real-time weather information based on your location or city search. Features include temperature, humidity, wind speed, and weather conditions, all displayed in a user-friendly interface. Built using React, OpenWeather API, and custom styling for a seamless and responsive experience

1.Setting Up Your React Project
You can create a new React application using Create React App, which sets up everything you need for a React project.

npx create-react-app weather-app
cd weather-app

2.Install dependencies
If you're using npm:

npm install

3.Start the development server
After installing the dependencies, you can start the development serve

npm start

4.React Folder Structure
By default, the structure of a React app will look like this:

weather-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── (other files)
├── package.json
└── (other config files)

5.Creating Components
React apps are made of components, which are reusable pieces of UI. Components can be written as either classes or functions.

exapmle:
app.jsx

import Weatherapp from './Weatherapp';
import './Infobox.css'
import Button from '@mui/material/Button';
 return(
  <>
  <Weatherapp /> //it is an component which contain further component
  </>
 );
}

export default App;

6.State and Props
State: Allows components to manage their own data that can change over time.
Props: Short for "properties", these are used to pass data from parent components to child components.

import { useState } from 'react';
export default function Searchbox({updateInfo}){
    let [City, setCity] = useState("");
    return(
    <div className="Searchbox">
        <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={City} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type='Submit'>Search
      </Button>
      )
}

7.Event Handling
React handles events like clicks, form submissions, etc., through props. Event handlers are passed to elements as props (like onClick, onSubmit, etc.).
export default function Searchbox({updateInfo}){
    let [City, setCity] = useState("");
     let handleSubmit = async (evt) =>{
        alert('form submited'); // its for an example full structured code is provided
    };
     return(
    <div className="Searchbox">
        <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={City} onChange={handleChange}/>
        <Button variant="contained" type='Submit'>Search
      </Button>
      )
  }
8.Styling
You can style your React components in various ways:

Inline styles (using style attribute).
CSS classes (import a .css file).
Styled-components (for more advanced and scoped CSS).

9.Using API 
using aplication programming interface for getting weather information(data) of various city's 

10.Deployment
using netlify to deploy project





