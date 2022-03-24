var d = new Date();
//This component holds the HTML layout just for the top section, where the country, logo, description, max and min temperatures are stored. The data is taken from App.js and is placed within the html using javascript.
const Header = (props) => {
  return (
    <header>
    <button onclick="javascript:window.history.back();" type="submit" className="button1 btn btn-secondary btn-lg">Back</button>
    <h1 className="cityName h1">{props.city}, {props.country}</h1>
    <div className="sectionOne">
    <i className={`logo wi ${props.weatherIcon} display-1`}></i>
    <h2 className="caps h2">{props.description}</h2>
    </div>
    <div className="sectionOne">
    <h1 className="temp h1">Maximum Temperature:</h1>
    <h1 className="h1">{props.temp_max}&deg;</h1>
    </div>
    <div className="sectionOne">
    <h1 className="temp h1">Minimum Temperature:</h1>
    <h1 className="h1">{props.temp_min}&deg;</h1>
    </div>
    <hr></hr>
 


    </header>
  )
}

export default Header
