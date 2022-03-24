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



class App extends React.Component {

  render(){
 
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route exact path="/Home" render={() => (
      
         <Home Message="Hi UserName !" />
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

