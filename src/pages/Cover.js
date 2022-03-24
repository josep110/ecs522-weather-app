import React from 'react';

var d = new Date();
//This component holds the HTML layout just for the middle section, where the uv index and cloud cover are stored. The data is taken from App.js, and is placed within the html using javascript.
const Cover = (props) => {
  return (
    <div>
    <div className="uv">
    <div className="test">
    <i className="logo1 wi wi-day-sunny"></i>
    </div>
    <h1 className="text h1">UV Index:</h1>
    <h1 className="text h1">{props.description3}</h1>
    </div>

    <div className="vertical-row"></div>

    <div className="cloud">
    <i className="logo2 wi wi-cloud "></i>
    <h1 className="text h1">Cloud Cover:</h1>
    <h1 className="text h1">{props.description2}</h1>
    </div>
    <hr></hr>

    </div>
  )
}

export default Cover
