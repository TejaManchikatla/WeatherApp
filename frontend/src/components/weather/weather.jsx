import logo from '../../logo.svg';
import "../weather/weather.css"
const Weather = ({weatherName, weatherIcon, weatherDesc}) => {
    let imageUrl = "https://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";
    return (
        <>
        <span style={{fontSize:"1.5rem", fontWeight:"bold", marginTop:"1rem"}}>Weather Information</span>
    <div className="weather">
        <img className="weatherImage" src={imageUrl}></img>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", width:"50%"}}>
            
        <div className="weatherShortInfo">Currently {weatherName}</div>
        <div className="weatherLongInfo">{weatherDesc}</div>
        </div>
    </div> </>);
}
 
export default Weather;