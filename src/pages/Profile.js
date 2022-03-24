import React from "react";
import './profile.css';
import joseph from './images/joseph.jpg';

class Section extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      triggered: false
    };
  }

  handleClick = (e) => {
  
    this.setState({triggered: !this.state.triggered})s
    

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

    this.e = this.props.label;

    if (this.state.triggered === true){
      return (
       <div>
        
        <button className="setting-triggered" onClick={(e) => this.handleClick(this.e)}>
        <div>
          <h2 className="settinglabel">{this.props.label}</h2>
        </div>
        </button>
       </div>
      )
    } else {
      return (
        <button className="setting-untriggered" onClick={(e) => this.handleClick(this.e)}>
        <div>
          <h2 className="settinglabel">{this.props.label}</h2>
        </div>
        </button>
      );
    }
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
            <Section label="Home"/>
            <Section label="Weather"/>
            <Section label="Settings"/>
            <Section label="Logout" />
          </div>
        </div>
      </div>
    )
}

export default H_Settings;