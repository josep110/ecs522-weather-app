import React from 'react';
import precipitation from "./icons/rain.ico";
import Todayweather from "./Todayweather";
import hazeIcon from "./icons/haze.ico";
import cloudIcon from "./icons/cloud.ico"
import stormIcon from "./icons/storm.ico";
import snowIcon from "./icons/snow.ico";
import sunIcon from "./icons/sun.ico";
import rainyIcon from"./icons/rain.ico";





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
          return(cloudIcon);
        default:
          return(cloudIcon);;
      }
    }



class Today extends React.Component{
      state = {
            city: null,
            temp:null,
            lat:"51.5211064",
            lon:"-0.1580341",
            wind:null,
          description:null,
          humidity:null,
          rangeId:null,
          units:"metric",
          }

          /** function to get the current location, for seom reason it is not working
           
          getLocation(){
          navigator.geolocation.getCurrentPosition(position =>{
            this.setState({
                  lat:JSON.stringify(position.coords.latitude),
                  lon:JSON.stringify(position.coords.longitude),
            })
            console.log("latitude",this.state.lat , "longitude", this.state.lon)
      })
      }
      */
          

          componentDidMount =()=>{

             fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${this.state.lat}&lon=${this.state.lon}&units=${this.state.units}&appid=c49b58637f116ba62e71ca04a520f9bb`)
            
            .then(res => res.json())
          .then(result => {
            console.log("cdata fetched by esther",result);
            this.setState({
                  city:result.name,
                  temp:result.main.temp,
                  wind:result.wind.speed,
                  description:result.weather[0].description,
                  humidity:result.main.humidity,
                  rangeId:result.weather[0].id,
                  
            })
          });
          }


          render(){
 
            return (
                  <Todayweather City={this.props.City} temperature={this.state.temp} Wind={this.state.wind} Humidity={this.state.humidity} Description={this.state.description}     Icon={get_WeatherIcon(this.state.rangeId)}/>

            )}
}

export default Today;