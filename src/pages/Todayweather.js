import React from 'react';
import moment from "moment";
import windIncon from "./icons/wind2.ico" ;
import humidity from "./icons/waterdrop.ico";
import precipitation from "./icons/rain.ico";
import './Todayweather.css';

/**this is a  function component that renders the weather for the day, it gets props passed by Today.js.
 The props to be passed are: City, Temperature,Humidity, Wind speed, General conditions and  an icon that represents the weather description, 
*/


function Todayweather (props)  {
 
return(

<div className="weather-container">

      <div className="w-container">

        <main class= "w-body">

                    <p className="city-text">{props.City}</p>
                    <p className="date-text">{moment().format("dddd "+'LL')}</p>
                    <p className="temp">{Math.round(props.temperature)}&deg;F</p>
                    <img className="main-icon" src={props.Icon}></img>

              <div className="wph-box">
                    <div className="wind">
                          <img className="icon-drop" src={windIncon}></img>
                          <p className="drop-text">{Math.round(props.Wind)} mph</p>
                          </div>
                    <div className="humidity">
                          <img className="icon-drop" src={humidity}></img>
                          <p className="drop-text">{Math.round(props.Humidity)} %</p>
                          </div>
                    <div className="couldCover">
                          <img className="icon-drop" src={precipitation}></img>
                         <p className="drop-text">{props.Description}</p>
                          </div>
              </div>
        </main>
        </div>
</div>
)
}

export default Todayweather;
