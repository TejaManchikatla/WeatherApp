import Temperature from "./components/temperature/temperature"
import "../src/home.css"
import Humidity from "./components/humidity/humidity"
import Weather from "./components/weather/weather"
import CityInfo from "./components/cityInfo/cityInfo"
import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
import SearchBar from "./components/searchBar/searchBar"
const Home = () => {
    //const [list, setList] = useState([]);
    const [cityName, setCityName] = useState("Default");
    const [latitude, setLatitude] = useState("23.567");
    const [longitude, setLongitude] = useState("12.345567");
    const [minTemp, setMinTemp] = useState("00");
    const [maxTemp, setMaxTemp] = useState("00");
    const [currTemp, setCurrTemp] = useState("00");
    const [humidity, setHumidity] = useState("00");
    const [weatherName, setWeatherName] = useState("Name");
    const [weatherIcon, setWeatherIcon] = useState("Image");
    const [weatherDesc, setWeatherDesc] = useState("Random");
    const [bgColor, setBgColor] = useState("white");
    const [id, setId] = useState(24);
    const i=1;
  
    const changeId = (newId)=>{
        setId(newId);
    }
    useEffect(()=>{
        const g = async()=>{
        
            let response = await fetch('http://127.0.0.1:8000/api/tasks/'+id+'/');
            let list = await response.json();
            console.log("fetched",id,"data",list);
            console.log(list);
            if(list["weatherIcon"].at(-1)=='n'){
                setBgColor("rgb(58, 58, 141)");
            }else{
                setBgColor("rgb(107, 107, 255)");
            };
            setCityName(list["cityName"]);
                        setLatitude(list["latitude"]);
                        setLongitude(list["longitude"]);
                        setMinTemp(list["minTemp"]);
                        setMaxTemp(list["maxTemp"]);
                        setCurrTemp(list["temp"]);
                        setHumidity(list["humidity"]);
                        setWeatherName(list["weatherName"]);
                        setWeatherDesc(list["weatherDesc"]);
                        setWeatherIcon(list["weatherIcon"]);
            }
            g();
    },[id])
    
    
    return (



        <div className="home" style={{backgroundColor:bgColor}}>
            <SearchBar handleClick={changeId}></SearchBar>
            <CityInfo cityName={cityName} latitude={latitude} longitude={longitude}></CityInfo>
            <Temperature minTemp={minTemp} maxTemp={maxTemp} currTemp={currTemp}></Temperature>
            <Humidity humidity={humidity}></Humidity>
            <Weather weatherName = {weatherName} weatherIcon = {weatherIcon} weatherDesc={weatherDesc}></Weather>
        </div>
    );
}
 
export default Home;