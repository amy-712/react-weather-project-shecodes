import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const apiKey = "2236c7e355f68293390c37c68fbd7525";
  let city = "London";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row gx-0">
            <div className="col-4">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="🕵🏼‍♀️Search for City"
                  autoFocus="on"
                ></input>
              </div>
            </div>
            <div className="col-4">
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </div>
            <div className="col-4">
              <button
                type="submit"
                class="btn btn-success"
                id="my-location-button"
              >
                Use My Location
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-4">
            <img
              className="today-emoji"
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt="broken clouds"
            />
            <h1>
              5<span className="temperatureUnit">℃</span>
            </h1>
          </div>
          <div className="col-4">
            <ul className="weatherType">
              <li>Humidity: 17%</li>
              <li>Wind: 5mph</li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="location">
              <h2>London</h2>
              <li>Thursday 20:50</li>
              <li>Partly Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
