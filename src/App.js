import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Today from "./pages/Today"
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import FiveDayForecast from './pages/FiveDayForecast';
import Apps from './pages/App';
import React from 'react';


class App extends React.Component { /* Prototype for root 'App' class */

  constructor(props){
    super(props)
    this.state = {username: "", darkmode: true, celsius: true}
    console.log(this.state)
  }

  callbackFunction = (entry) => {
    if (entry === "unit"){
      // this.setState({celsius: true})
    } else if (entry === "dark"){
      // this.setState({darkmode: !darkmode})
    } else {
      this.setState({username: entry})
    }
  }
  render(){
 
    return (    /* Sets up links to other .js files acting as application 'pages' */
      <Router>
        <Sidebar />
        <Switch>
        <Route exact path="/Home" render={() => (
        
          <Home Message={'Hi ' + this.state.username + '!'} />
    )}/>
   <Route  path='/Today' render={() => (
      
      <Today Latitude={"51.51257250195812"} Longitude={this.state.lon} Units={this.state.degreeType}/>
     
        <Route path='/Profile' exact component={Profile} />
        <Route path='/FiveDayForecast' exact component={FiveDayForecast} />
        <Route path='/App' exact component={Apps} />
        <Route path='/Settings' exact component={() => <Settings parentCallback={this.callbackFunction}/>} />
        </Switch>
      </Router>
    );
}
}

export default App;

