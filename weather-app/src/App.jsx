import Weatherapp from './Weatherapp';
import './Infobox.css'

import Button from '@mui/material/Button';
function App() {
  let handleClick =() => {
    console.log("button was clicked");
  };
 return(
  <>
  <Weatherapp />
  </>
 );
}

export default App;
