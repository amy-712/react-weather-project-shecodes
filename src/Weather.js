import React from "react"
import './weather.css'

export default function Weather(){
    return <div className="Weather">
        <div className="container">
            
            <form>
                <div className="row">
                <div className="col-4">
 
                <input type="text" placeholder="🕵🏼‍♀️Search for City"></input>
                </div>
                <div className="col-4">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
                <div className="col-4">
                    <button type="submit" class="btn btn-success">Use My Location</button>
                </div>
                </div>
            </form>
            <div className="row">
                <div className="col-4">
                    <h2>🌤 5℃</h2>
                </div>
                <div className="col-4">
                    <ul>
                        <li>Humidity: 17%</li>
                        <li>Wind: 5mph</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <h2>London</h2>
                        <li>
                            Thursday 20:50
                        </li>
                        <li>Partly Cloudy</li>
                    </ul>
                </div>
            </div>
            </div>
        
    </div>
}