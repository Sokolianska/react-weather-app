import React from "react";
import "./Weather.css";

export default function Weather() {
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
        </form>
        <h1>Dnipro</h1>   
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy" />
              6°C
            </div>
            <div className="col-6">
                <ul>
<li>Опади: 0%</li>
<li>Вологість: 50%</li>
<li>Вітер: 16 км/год</li>
                </ul>
            </div>
        </div>
      </div>);
}