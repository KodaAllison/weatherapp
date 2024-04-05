'use client'
import React from 'react';

const WeatherCard = ({ weather }) => {
    if (weather) {
        return (
            <div>
                <label key={weather.location.name} id={weather.location}>
                <input type="checkbox" />
                    <div className="card">
                        <div className="front">
                            <header>
                            <h2>Location: {weather.location.name}</h2>
                            </header>
                            <h2>Current Temp: {weather.current.temp_c}</h2>
                            
                        </div>
                        <div className="back">
                            <h2>feels like: {weather.current.feelslike_c}</h2>

                        </div>
                    </div>
                    </label>
            </div>
        )
    }
}

export default WeatherCard