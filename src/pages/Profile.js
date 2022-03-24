import React from "react";
import './profile.css';
import joseph from './images/joseph.jpg';
import {Link} from "react-router-dom";

class Section extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      triggered: false
    };
  }

  handleClick = (e) => {
  
    this.setState({triggered: !this.state.triggered});
    

    if (e==="Home"){
      console.log('Home');
    } else if(e==="Weather") {
      console.log("weather");
    } else if (e==="Settings"){

    } else {
      console.log("Logout");
    }
  }

  render() {
    return (
    <div>
        <Link className="setting-untriggered" to={this.props.to}>{this.props.label}</Link>
    </div>
    )
  }
}


const H_Settings = () => {
    return (
      <div>
        <div className="App">
          <div className="title">
          <h1>Profile</h1>
          </div>
          <div className="App-body">
            <img className="profilepic" src={joseph} alt="this is a picture"/>
            <Section label="Home" to="./Home"/>
            <Section label="Weather" to="./Weather"/>
            <Section label="Settings" to="./Settings" />
          </div>
        </div>
      </div>
    )
}

export default H_Settings;