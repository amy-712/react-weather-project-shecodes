import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="today-emoji"
          />
          <h1>
            {Math.round(props.data.temperature)}
            <span className="temperatureUnit">℃</span>
          </h1>
        </div>
        <div className="col-4">
          <ul className="weatherType">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="location">
            <h2>{props.data.city}</h2>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
