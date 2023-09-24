import '../temperature/temperature.css'

const Temperature = ({minTemp, maxTemp, currTemp}) => {
    let width;
    if(parseFloat(maxTemp)-parseFloat(minTemp)===0) width=27.5;
    else width=(parseFloat(currTemp)-parseFloat(minTemp))*(27.5/(parseFloat(maxTemp)-parseFloat(minTemp)))+1;
    return ( 
        <div className="temp">
            <span className="tempText">Temperature</span>
            <div className="currTemp" style={{backgroundColor: "transparent",
    borderRadius: "50%",
    width: "2rem",
    height: "2rem",
    marginLeft: width+"rem",
    position:"absolute"}}>{currTemp}</div>
            <div className="tempInfo">
            
            <div className="tempBar" style={{width:width+"rem"}}></div>
            <div className="tempStore">
            <div className="minTemp"><span>{minTemp}</span>*C</div>
            <div className="maxTemp"><span>{maxTemp}</span>*C</div>
            
            </div>
            </div>
        </div>
     );
}
 
export default Temperature;