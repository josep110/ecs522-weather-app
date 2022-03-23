
import'./Home.css';
import hand from"./icons/hand.ico";
import locpin from "./icons/pin.ico";
import calendar from "./icons/calendar.ico";
import moment from "moment";
import React from 'react';
import weatherIcon from "./icons/rain&sun.ico"
import ideaIcon from "./icons/idea.ico"
import profileIco from "./icons/profile.ico"
import {useEffect, useState} from "react";


//function that creates icons with textx used in the home page
function Item(props){
      return(
            <div className="item-box">
            <img className="icon" src={props.Icon}></img>
            <span className="iconText">{props.Text}</span>
            </div>)
}

      
         
const API_KEY = "c49b58637f116ba62e71ca04a520f9bb";
const API_URL='https://api.openweathermap.org/data/2.5';



//home page function
    function Home (props){

      // variables to store longitude, latitude and weather data 
      const [lat, setLat] = useState([]);
      const [long, setLong] = useState([]);
      const [data, setData] = useState([]);


      //using the useEffect hook to perform side effects like fetching location and weather data
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


      //recommend a plan from a predtermined list according to weather id     
      function get_plan(rangeId) {
            var sunnyPlans=["Go to the park!","Have a picnik!","Grab a bite in a terrace!","Go cycling!"]
            var stormPlans=["Try to stay indoors","Seek sheldter"]
            var rainPlans=["Grab an umbrella!","Bake some cookies!","Go to a museums!","Watch a film!"]
            var plansSnow=["Go skying!","Go ice skating!","Go sledding!","Build a snowman!"]
            var fogPlans=["Reduced visivility ourdoors","Try not to drive",""]
            switch (true) {
              case rangeId >= 200 && rangeId < 232: 
                    return(stormPlans[Math.floor(Math.random()*stormPlans.length)])
              case rangeId >= 300 && rangeId <= 321:     
                return(rainPlans[Math.floor(Math.random()*rainPlans.length)]);
              case rangeId >= 500 && rangeId <= 531:
                  return(rainPlans[Math.floor(Math.random()*rainPlans.length)]);
              case rangeId >= 600 && rangeId <= 622:  
                    return(plansSnow[Math.floor(Math.random()*plansSnow.length)]);
              case rangeId >= 701 && rangeId <= 781:  
                  return(fogPlans[Math.floor(Math.random()*fogPlans.length)]);
              case rangeId === 800:  
                  return(sunnyPlans[Math.floor(Math.random()*sunnyPlans.length)]);
              case rangeId >= 801 && rangeId <= 804:
                  return(sunnyPlans[Math.floor(Math.random()*sunnyPlans.length)]);
              default:
                    return(sunnyPlans[Math.floor(Math.random()*sunnyPlans.length)]);
            }
          }
      
      return(
            <div>

                  <div className="container">
                        <div className="header-box">
                        <div className="greeting-box "><Item  Icon={hand} Text={props.Message}></Item></div>
                        <div className="location-box"><Item  Icon={locpin} Text={data.name}></Item></div>
                        <div className="date-box"><Item  Icon={calendar} Text={moment().format("dddd"+'LL')}></Item></div>
                        <div className="plan-box"><Item  Icon={ideaIcon} Text={get_plan()}></Item></div>
                        </div>
     
                  </div>
                  <footer className="icon-box">
                              <a href="Todayweather"><img className="icon-weather" src={weatherIcon}></img></a>
                              <a href="Profile"><img className="icon-profile" src={profileIco}></img></a>
                        </footer>
            </div>

            )
      

}

export default Home;

