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
    this.state = {username: "[NO NAME ENTERED]", imageurl: "", stylePath: "./App-alt.css", celsius: true}   /* initialising state variables for root App objects */
    console.log(this.state)
  }


  callbackFunction = (entry) => {          /* Callback function for receiving data from child components */
    if (entry === "unit"){
      console.log("UNIT")
      this.setState({celsius: !this.state.celsius})
    } else if (entry === "dark"){
      if (this.state.stylePath === "./App-alt.css"){
        this.setState({stylePath: "./App.css"})
      } else {
        this.setState({stylePath: "./App-alt.css"})
      }
    } else {
      this.setState({username: entry})
    }
  }

  render(){
 
    return (    /* Sets up links to other .js files acting as application 'pages' */
    //The Router allows th app to swtich to the different pages via the Sidebar
      
      <Router>
      <Sidebar />
        <Switch>
        <Route exact path="/Home" render={() => (
        
          <Home Message={'Hi ' + this.state.username + '!'} />
    )}/>

        <Route  path="/Today" render={() => (
        <Today cels={this.state.celsius} />
  )}/>  
        <Route path='/Profile' exact component={() => <Profile name={this.state.username} stylepath={this.state.stylePath}/>} />
        <Route path='/FiveDayForecast' exact component={FiveDayForecast}  stylepath={this.state.stylePath}/>
        <Route path='/App' exact component={Apps} />
        <Route path='/Settings' exact component={() => <Settings parentCallback={this.callbackFunction} stylepath={this.state.stylePath}/>} />

        </Switch>
      </Router>
    );
}
}

export default App;
