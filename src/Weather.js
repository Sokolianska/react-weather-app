import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    
    function handleResponce(responce) {
        setWeatherData({
            ready:true,
            temperature: responce.data.main.temp,
            humidity: responce.data.main.humidity,
            wind: responce.data.wind.speed,
            description: responce.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            city: responce.data.name
        });
    }

    if (weatherData.ready) {
        return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
        </form>
            <h1>{weatherData.city}</h1>   
        <ul>
            <li>Wednesday 07:00</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row  mt-3">
            <div className="col-6">
                <div className="clearfix">
                    <img src={weatherData.iconUrl}
                        alt={weatherData.description}/>
                
              <span class="temperature">{Math.round(weatherData.temperature)}</span><span class="unit">°C</span>
                </div>
            </div>
            <div className="col-6">
                <ul>
<li>Humidity: {weatherData.humidity}%</li>
<li>Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
      </div>);
    } else {
       const apiKey = "e0dced0781a18aa3906255142be14578";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
   
        return "Loading...";
    }   
}