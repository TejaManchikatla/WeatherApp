import "../humidity/humidity.css"

const Humidity = ({humidity}) => {
    return ( 
        <div className="humidity">
            <span className="humiText">Humidity</span>
            <div className="humidNumber">{humidity} </div> %
        </div>
     );
}
 
export default Humidity;