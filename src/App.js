import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import React from 'react';
import FiveDayForecast from "./pages/FiveDayForecast"
import Today from "./pages/Today"




class App extends React.Component {

  state = {
    location:null,
    //degreetype has been det to metric by default and will be changed according ot the settings
    degreeType: "metric",
    //lat and lon set by default 
    lat:51.5211064,
    lon:-0.1580341,
    
  }
  


  render(){
 
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route exact path="/Home" render={() => (
      
         <Home Message={"to be passed"} City={"to be passed"}/>
   )}/>
      <Route  path='/Today' render={() => (
      
      <Today  City={"to be passed"} Latitude={this.state.lat} Longitude={this.state.lon} Units={this.state.degreeType}/>
)} />
      <Route  path='/FiveDayForecast' exact component={FiveDayForecast} />
      <Route path='/Profile' exact component={Profile} />
      <Route path='/Settings' exact component={Settings} />
      </Switch>
    </Router>
  );
}
}

export default App;

