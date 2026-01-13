'use client'
import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    return (
        <label className="weather-card-container block m-3 transition-transform hover:-translate-y-2 hover:shadow-glass-hover">
            <input type="checkbox" />
            <div className="card-inner relative w-full h-full">
                {/* Front of Card */}
                <div className="card-front bg-glass-white backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-glass">
                    <div className="flex flex-col h-full justify-between">
                        {/* Location Header */}
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400 mb-1">
                                {weather.location.name}
                            </h3>
                            <p className="text-sm text-gray-400">{weather.location.country}</p>
                        </div>
                        
                        {/* Temperature Display */}
                        <div className="flex flex-col items-center justify-center flex-1">
                            <div className="text-7xl font-bold bg-gradient-to-br from-blue-300 to-purple-400 bg-clip-text text-transparent">
                                {Math.round(weather.current.temp_c)}°
                            </div>
                            <p className="text-gray-300 text-lg mt-2">{weather.current.condition.text}</p>
                        </div>

                        {/* Tap to flip hint */}
                        <div className="text-center text-xs text-gray-500 mt-4">
                            Tap for details
                        </div>
                    </div>
                </div>

                {/* Back of Card */}
                <div className="card-back bg-glass-white backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-glass">
                    <div className="flex flex-col h-full">
                        <h3 className="text-lg font-semibold text-purple-400 mb-6">Weather Details</h3>
                        
                        <div className="grid grid-cols-2 gap-4 flex-1">
                            {/* Feels Like */}
                            <div className="bg-glass-white rounded-lg p-4 border border-glass-border">
                                <p className="text-xs text-gray-400 mb-1">Feels Like</p>
                                <p className="text-2xl font-semibold text-blue-300">{Math.round(weather.current.feelslike_c)}°C</p>
                            </div>

                            {/* Wind */}
                            <div className="bg-glass-white rounded-lg p-4 border border-glass-border">
                                <p className="text-xs text-gray-400 mb-1">Wind</p>
                                <p className="text-lg font-semibold text-cyan-300">{weather.current.wind_mph} mph</p>
                                <p className="text-xs text-gray-400">{weather.current.wind_dir}</p>
                            </div>

                            {/* Humidity */}
                            <div className="bg-glass-white rounded-lg p-4 border border-glass-border">
                                <p className="text-xs text-gray-400 mb-1">Humidity</p>
                                <p className="text-2xl font-semibold text-teal-300">{weather.current.humidity}%</p>
                            </div>

                            {/* UV Index */}
                            <div className="bg-glass-white rounded-lg p-4 border border-glass-border">
                                <p className="text-xs text-gray-400 mb-1">UV Index</p>
                                <p className="text-2xl font-semibold text-orange-300">{weather.current.uv}</p>
                            </div>
                        </div>

                        {/* Tap to flip back hint */}
                        <div className="text-center text-xs text-gray-500 mt-4">
                            Tap to go back
                        </div>
                    </div>
                </div>
            </div>
        </label>
    )
}

export default WeatherCard