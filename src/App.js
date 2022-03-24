import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherToday from './pages/Todayweather';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import FiveDayForecast from './pages/FiveDayForecast';
import Hourly from './pages/Hourly';
import React from 'react';



class App extends React.Component { /* Prototype for root 'App' class */

  state = {username: ""}
  render(){
 
  return (    /* Sets up links to other .js files acting as application 'pages' */
    <Router>
      <Sidebar />
      <Switch>
      <Route exact path="/Home" render={() => (
      
         <Home Message={'Hi !'} />
   )}/>
      <Route  path='/Todayweather' exact component={WeatherToday} />    
      <Route path='/Profile' exact component={Profile} />
      <Route path='/FiveDayForecast' exact component={FiveDayForecast} />
      <Route path='/Hourly' exact component={Hourly} />
      <Route path='/Settings' exact component={Settings} />
      </Switch>
    </Router>
  );
}
}

export default App;

