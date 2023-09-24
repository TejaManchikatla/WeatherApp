import "../cityInfo/cityInfo.css"
const CityInfo = ({cityName, latitude, longitude}) => {
    return ( 
        <div className="cityInfo">
            You searched for :<div className="cityName"><span>{cityName}</span></div>
            <div className="cityCoords">
            <div className="latitude">Lati:  <span className="coordsSpan">{latitude}</span> N</div>
            <div></div>
            <div className="longitude">Long:  <span className="coordsSpan">{longitude}</span> E</div>
            </div>
        </div>
     );
}
 
export default CityInfo;