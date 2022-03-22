import'./Home.css';
import hand from"./icons/hand.ico";
import locpin from "./icons/pin.ico";
import calendar from "./icons/calendar.ico";
import moment from "moment";
import React from 'react';
import weatherIcon from "./icons/rain&sun.ico"
import map from "./icons/map.ico"


function Item(props){
      return(
            <div className="item-box">
            <img className="icon" src={props.Icon}></img>
            <span className="iconText">{props.Text}</span>
            </div>)
}




    class Home extends React.Component{
      constructor(props) {
            super(props);

          }

      render(){
      return(
            <div>

                  <div className="container">
                        <div className="header-box">
                        <div className="greeting-box "><Item  Icon={hand} Text="UserName"></Item></div>
                        <div className="location-box"><Item  Icon={locpin} Text="London"></Item></div>
                        <div className="date-box"><Item  Icon={calendar} Text={moment().format("dddd "+'LL')}></Item>   </div>
                        </div>
                        <div className="plan-list">

                        </div>
                        <footer className="icon-box">
                              <a href="Todayweather"><img className="icon-weather" src={weatherIcon}></img></a>
                              <a href=""><img className="icon-bottom" src={map}></img></a>
                        </footer>
                  </div>
            </div>

            )
      }

}

export default Home;
