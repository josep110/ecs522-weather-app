import React from 'react';
import Todayweather from "./Todayweather";
import hazeIcon from "./icons/haze.ico";
import cloudIcon from "./icons/cloud.ico"
import stormIcon from "./icons/storm.ico";
import snowIcon from "./icons/snow.ico";
import sunIcon from "./icons/sun.ico";
import rainyIcon from"./icons/rain.ico";


/** This is a class component that passes props to the Todayweather component.
 It takes geolocation props  that are then passed to the call of the openweathermap API.
 The data from this call is stored in the state variables and passed as props to the Todaywather component
 */


/** function that sets the correct weather icon according tot he current weather conditions 
i.e sunny, cloudy, etc. It takes the rangeID as a property*/
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

      constructor (props) {
    //state variables to pass to the Todayweather component 
        super(props)
        this.state = {
                city: null,
                temp:null,
                lat:"51.5211064",
                lon:"-0.1580341",
                wind:null,
                description:null,
                humidity:null,
                rangeId:null,
                units:"metric",
                cels: this.props.cels
              }
    }

          /** function to get the current location
           
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
            console.log(result);
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
            //we the state variables as propr to Todayweather
            return (
                  <Todayweather cels={this.props.cels} City={this.state.city} temperature={this.state.temp} Wind={this.state.wind} Humidity={this.state.humidity} Description={this.state.description}     Icon={get_WeatherIcon(this.state.rangeId)}/>
            )}
}

export default Today;
