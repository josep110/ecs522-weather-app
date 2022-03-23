import React from 'react';
import moment from "moment";
import windIncon from "./icons/wind2.ico" ;
import humidity from "./icons/waterdrop.ico";
import precipitation from "./icons/rain.ico";
import stormIcon from "./icons/storm.ico";
import arrowIcon from "./icons/arrow.ico";
import snowIcon from "./icons/snow.ico";
import sunIcon from "./icons/sun.ico";
import rainyIcon from"./icons/rain.ico";
import './Todayweather.css';
import {useEffect, useState} from "react";
import hazeIcon from "./icons/haze.ico";
import cloudIcon from "./icons/cloud.ico"


const API_KEY = "c49b58637f116ba62e71ca04a520f9bb";
const API_URL='https://api.openweathermap.org/data/2.5';



function WeatherComp ({weatherData})  {

      const [lat, setLat] = useState([]);
      const [long, setLong] = useState([]);
      const [data, setData] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });

          await fetch(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        }
        fetchData();
      }, [lat,long])


      //chnage the weather icon according to the weather Id
 function get_WeatherIcon(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        return(stormIcon);
      case rangeId >= 300 && rangeId <= 321:
        return(rainyIcon);
      case rangeId >= 500 && rangeId <= 521:
        return(rainyIcon);
      case rangeId >= 600 && rangeId <= 622:
        return(snowIcon);
      case rangeId >= 701 && rangeId <= 781:
        return(hazeIcon);
      case rangeId === 800:
        return(sunIcon);
      case rangeId >= 801 && rangeId <= 804:
        return(precipitation);
      default:
        return(cloudIcon);;
    }
  }

return(

<div className="container">

{(typeof data.main != 'undefined') ? (
      <div>

        <main class= "App-body">

                    <p className="city-text">{data.name}</p>
                    <p className="date-text">{moment().format("dddd "+'LL')}</p>


                    <p className="temp">{Math.round(data.main.temp)}&deg;C</p>
                    <img className="main-icon" src={get_WeatherIcon(data.weather[0].id)}></img>

              <div className="wph-box">
                    <div className="wind">
                          <img className="icon-drop" src={windIncon}></img>
                          <p className="drop-text">{Math.round(data.wind.speed)} mph</p>
                          </div>
                    <div className="humidity">
                          <img className="icon-drop" src={humidity}></img>
                          <p className="drop-text">{Math.round(data.main.humidity)} %</p>
                          </div>
                    <div className="couldCover">
                          <img className="icon-drop" src={precipitation}></img>
                         <p className="drop-text">{data.weather[0].description}</p>
                          </div>
              </div>
        </main>
        <footer><a href="hourly.js"><img className="arrow-icon" src={arrowIcon}></img></a></footer>
        </div>
    ): (
      <id></id>
    )}
</div>
)
}

export default WeatherComp;