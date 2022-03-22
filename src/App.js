import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherToday from './pages/Todayweather';




function App() {


 
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route exact path="/Home" render={() => (
         <Home/>
   )}/>
      <Route  path='/Todayweather' exact component={WeatherToday} />
      </Switch>
    </Router>
  );
}

export default App;
