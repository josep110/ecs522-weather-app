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
    degreeType: null,
    lat:null,
    lon:null,
    
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
      
      <Today  City={"to be passed"}/>
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

