import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Saturday 18:00",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
                {Math.round(weatherData.temperature)}
                <span className="temperatureUnit">℃</span>
              </h1>
            </div>
            <div className="col-4">
              <ul className="weatherType">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="location">
                <h2>London</h2>
                <li>Thursday 20:50</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2236c7e355f68293390c37c68fbd7525";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
