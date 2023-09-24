import axios from "axios";
import "../searchBar/searchBar.css"
import searchIcon from "../../images/search.svg"

const SearchBar = ({handleClick}) => {
    const search = async()=>{
        let elem = document.getElementsByClassName("search");
        if(elem[0].value==="") return 0;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elem[0].value}&appid=4b5a65025d13ee9942eea87bce98d878&units=metric`);
        let list = await response.json();

        let item = {"cityName":elem[0].value,
        "latitude":list["coord"]["lat"], 
        "longitude":list["coord"]["lon"],
        "minTemp":list["main"]["temp_min"],
        "maxTemp":list["main"]["temp_max"],
        "temp":list["main"]["temp"],
        "humidity":list["main"]["humidity"],
        "weatherIcon":list["weather"][0]["icon"],
        "weatherDesc":list["weather"][0]["description"],
        "weatherName":list["weather"][0]["main"]};
        
        
        let res = await axios.post('http://127.0.0.1:8000/api/tasks/',item)
        .then(resp=>{console.log(resp.data["id"]);handleClick(resp.data["id"]);})
        .catch(err=>console.log(err));
        //console.log(res);
        //console.log('2,',item);
        
        

    }
    return ( 
        <div className="searchBox">
            <input type="text" className="search" placeholder="SEARCH"></input>
            <button className="searchBtn" onClick={()=>{search();}}><img src={searchIcon}/></button>
        </div>
     );
}
 
export default SearchBar;