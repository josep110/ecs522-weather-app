import React from 'react';
import './Card.css';
import rain from './icons/rain.ico'
import sun from './icons/sun.ico'
import clouds from './icons/cloud.ico'
import rainSun from './icons/rain&sun.ico'
import storm from './icons/storm.ico'
import snow from './icons/snow.ico'


class Card extends React.Component {
  // Props: day, key(index)
  
  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)

    // choose an icon based on weather description
    if(this.props.day.weather[0].description.includes("light rain")){
        var imgURL = lightRain
    }
    else if(this.props.day.weather[0].description.includes("rain") && this.props.day.weather[0].description.includes("sun")){
        var imgURL = rainSun
    }
    else if(this.props.day.weather[0].description.includes("rain")){
        var imgURL = rain
    }
    else if(this.props.day.weather[0].description.includes("clouds")){
        var imgURL = clouds
    }
    else if(this.props.day.weather[0].description.includes("snow")){
        var imgURL = snow
    }
    else if(this.props.day.weather[0].description.includes("lightning") || this.props.day.weather[0].description.includes("thunder")){
        var imgURL = storm
    }
    else{
        var imgURL = sun
    }

    // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32

    // days and months arrays
    // will index depending on date returned by API
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    // day will be used to give each "card" a unique id
    const day=days[newDate.getDay()];
    const month=months[newDate.getMonth()];

    // called if "less or more" button clicked
    function lessOrMore() {
        // gets elements
        var dots = document.getElementById("dots"+day);
        var moreText = document.getElementById("more"+day);
        var btnText = document.getElementById("myBtn"+day);
        console.log("clicked")

        // if the element exists
        if(dots){
            // if dots aren't visible
            if (dots.style.display === "none") {
                // make dots visible, change button to "more", make "more text" invisible
                dots.style.display = "inline";
                btnText.innerHTML = "Read more"; 
                moreText.style.display = "none";
            } 
            else {
                // make dots invisible, change button to "less", make "more text" visible
                dots.style.display = "none";
                btnText.innerHTML = "Read less"; 
                moreText.style.display = "inline";
            }
        }
        }

    

    return (
      <div className="col-auto">
        <div className="card">
          <h3 className="card-title">{day}</h3>
          <p className="text-muted">{month+" "+newDate.getDate()+", 18:00"}</p>
          <img className="icon" src={imgURL} />
          <h2>{Math.round(this.props.day.main.temp)} °F</h2>
          <div className="card-body">
            <p className="card-text">{this.props.day.weather[0].description}</p>
            <span id={"dots"+day}>...</span>
            <span id={"more"+day}>
                <p>Feels like {Math.round(this.props.day.main.feels_like)} °F</p>
                <table>
                    <thead>
                        <th>Minimum Temp</th><th>Maximum Temp</th>
                    </thead>
                    <tbody>
                        <tr>{Math.round(this.props.day.main.temp_min)}°F<td>{Math.round(this.props.day.main.temp_max)}°F</td></tr>
                    </tbody>
                </table>
                <p>Humidity: {Math.round(this.props.day.main.humidity)}</p>
                <p>Pressure: {Math.round(this.props.day.main.pressure)}</p>
                <p>Sea Level: {Math.round(this.props.day.main.sea_level)}</p>
            </span>
            <button id={"myBtn"+day} onClick={lessOrMore} >More Detail</button>
          </div>
        </div>
      </div>
    )

  }

  
}

export default Card
