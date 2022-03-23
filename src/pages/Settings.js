import React from "react";
import './settings-dark.css';


class Setting extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      triggered: false
    };
  }

  handleClick = (e) => {
  
    this.setState({triggered: !this.state.triggered})

    if (e==="Profile"){
      // useNavigate(`./Login`)
    } else if(e==="Dark Mode") {
      if (this.state.triggered){
        document.getElementById("stylesheet").setAttribute("href","settings.css");
      } else {
        document.getElementById("stylesheet").setAttribute("href","settings-dark.css");
      }
    } else if (e==="Units"){
      console.log("unit")
    } else {
      console.log("location")
    }
  }

  render() {

    this.e = this.props.label;

    if (this.state.triggered == true){
      return (
        <button className="setting-triggered" onClick={(e) => this.handleClick(this.e)}>
        <div>
          <h2 className="settinglabel">{this.props.label}</h2>
        </div>
        </button>
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


const Settings = () => {
    return (
      <div>
        <div className="App">
          <div className="title">
          <h1>App Settings</h1>
          </div>
          <div className="App-body">
            <Setting label="Profile"/>
            <Setting label="Dark Mode"/>
            <Setting label="Units"/>
            <Setting label="Location" />
          </div>
        </div>
      </div>
    )
}

export default Settings;