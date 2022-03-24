import React from "react";
import './settings-dark.css';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Children } from "react/cjs/react.production.min";
import App from "../App";


class Entry extends React.Component {
  constructor(props){
    super(props);
    this.state = {inputText: ""};
    // console.log(props)
  }

  render(){
    return (
      <div>
        <h2>Username</h2>
        <input value={this.state.inputText} onChange={(e)=> this.setState({inputText: e.target.value})}/>
        <button text="Submit"  onClick={() => {this.props.parentCallback(this.state.inputText)}}>Submit</button>
      </div>
    )
  }
}

class Setting extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      triggered: false
    };
  }

  handleClick = (e) => {
  
    this.setState({triggered: !this.state.triggered})

    if(e==="Dark Mode") {
      this.props.parentCallback("dark");
    } else if (e==="Units"){
      this.props.parentCallBack("celsius");
    } else {
      console.log(e)
    }
  }

  render() {

    this.e = this.props.label;

    if (this.state.triggered == true){
      return (
        <button to={this.props.path} className="setting-triggered" onClick={(e) => this.handleClick(this.e)}>
        <div>
          <h2 className="settinglabel">{this.props.label}</h2>
        </div>
        </button>
      )
    } else {
      return (
        <button to={this.props.path} className="setting-untriggered" onClick={(e) => this.handleClick(this.e)}>
        <div>
          <h2 className="settinglabel">{this.props.label}</h2>
        </div>
        </button>
      );
    }
  }

} 
class Settings extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    
  }

  render() {

    return (
        <div>
          <div className="App">
            <div className="title">
            <h1>App Settings</h1>
            </div>
            <div className="App-body">
              <Entry label="Username" parentCallback={this.props.parentCallback}/>
              <Setting label="Dark Mode" parentCallback={this.props.parentCallback}/>
              <Setting label="Units" parentCallback={this.props.parentCallback}/>
            </div>
          </div>
        </div>
      )
    }
}


const SettingsButton = styled(Link)`
`;

export default Settings;


// TODO: Pass entered UName,Location to Home, Dark Mode!!