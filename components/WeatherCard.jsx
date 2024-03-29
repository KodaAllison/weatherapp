'use client'
import React from 'react'

const WeatherCard = ({ weather }) => {
    if (weather) {
        return (
            <div className='border-black shadow-lg m-4 rounded-xl p-8'>
                <h1>Location: {weather.location.name}</h1>
                <h1>Current Temp: {weather.current.temp_c}</h1>
            </div>
        )
    }
}

export default WeatherCard