'use client'
import React from 'react';

const WeatherCard = ({ weather }) => {
    if (weather) {
        return (
                <label key={weather.location.name} id='location'>
                    <input className='weatherCard' type="checkbox" />
                        <div className="card">
                            <div className="front">
                                <header>
                                <h2>Location: {weather.location.name}</h2>
                                </header>
                                <h2>Current Temp: <p>{weather.current.temp_c}°C</p></h2>
                                
                            </div>
                            <div className="back">
                                <h2>Feels like: {weather.current.feelslike_c}</h2>
                                <h2>Wind: {weather.current.wind_mph}, {weather.current.wind_dir}</h2>
                                <h2>Humidity: {weather.current.humidity}</h2>
                                <h2>UV: {weather.current.uv}</h2>
                            </div>
                        </div>
                    </label>
        )
    }
}

export default WeatherCard