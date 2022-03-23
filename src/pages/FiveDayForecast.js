import React from 'react';
import Card from './Card';

class FiveDayForecast extends React.Component {
  //TODO: take location, unit etc. from settings
  
  state = {
    days: [],
    location: "zip=10302",
    city: "New York",
    country: "US",
    degreeType: "imperial"
  }

  componentDidMount = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=e5f8ee9342a7aa4b3e39a90cf5a9e97f`;
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      // data returned by API output to console
      console.log("Data List Loaded", data.list)
      // filter data for time 18:00
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  // Card element (Card.js) returned for each day from API
  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }


  
  render() {
    return (
      <div className="container">
        <h1 className="display-1 jumbotron">5-Day Forecast</h1>
        <h5 className="display-5 text-muted">{this.state.city+", "+this.state.country}</h5>
        <div className="row justify-content-center" id='row justify-content-center'>

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default FiveDayForecast;
