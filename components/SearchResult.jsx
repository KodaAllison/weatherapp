'use client'
import React, { useEffect, useState } from "react"

const SearchResult = ({ place }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/${place}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data. HTTP Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();

                if (!data || !data.location || !data.current) {
                    throw new Error("Invalid data structure received from the API.");
                }

                setWeather(data);
            } catch (error) {
                setError(error.message || "An unexpected error occurred.");
            } finally {
                setIsLoading(false);
            }
        };

        if (place) {
            loadData();
        } else {
            setError("No place specified for weather search.");
            setIsLoading(false);
        }
    }, [place]);

    if (isLoading) {
        return (
            <div className="max-w-2xl mx-auto mt-8 animate-pulse">
                <div className="bg-glass-white backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-glass skeleton-shimmer">
                    <div className="h-8 bg-glass-hover rounded w-48 mb-6 mx-auto"></div>
                    <div className="space-y-4">
                        <div className="h-6 bg-glass-hover rounded w-32 mx-auto"></div>
                        <div className="h-6 bg-glass-hover rounded w-40 mx-auto"></div>
                        <div className="h-6 bg-glass-hover rounded w-36 mx-auto"></div>
                        <div className="h-6 bg-glass-hover rounded w-28 mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-2xl mx-auto mt-8">
                <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-8 border border-red-500/30 shadow-glass">
                    <div className="flex flex-col items-center text-center">
                        <div className="text-5xl mb-4">🌐</div>
                        <h2 className="text-red-400 font-semibold text-xl mb-2">Error Loading Data</h2>
                        <p className="text-gray-400">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return weather ? (
        <div className="max-w-2xl mx-auto mt-8 animate-in fade-in duration-500">
            <div className="bg-glass-white backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-glass hover:shadow-glass-hover transition-shadow">
                {/* Location Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                        {weather.location.name}
                    </h2>
                    <p className="text-gray-400">{weather.location.country}</p>
                </div>

                {/* Main Temperature */}
                <div className="text-center mb-8">
                    <div className="text-7xl font-bold bg-gradient-to-br from-blue-300 to-purple-400 bg-clip-text text-transparent mb-2">
                        {Math.round(weather.current.temp_c)}°C
                    </div>
                    <p className="text-xl text-gray-300">{weather.current.condition.text}</p>
                </div>

                {/* Weather Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-glass-white rounded-xl p-4 border border-glass-border text-center">
                        <p className="text-xs text-gray-400 mb-1">Feels Like</p>
                        <p className="text-2xl font-semibold text-blue-300">{Math.round(weather.current.feelslike_c)}°C</p>
                    </div>
                    
                    <div className="bg-glass-white rounded-xl p-4 border border-glass-border text-center">
                        <p className="text-xs text-gray-400 mb-1">Wind</p>
                        <p className="text-xl font-semibold text-cyan-300">{weather.current.wind_mph} mph</p>
                        <p className="text-xs text-gray-400">{weather.current.wind_dir}</p>
                    </div>
                    
                    <div className="bg-glass-white rounded-xl p-4 border border-glass-border text-center">
                        <p className="text-xs text-gray-400 mb-1">Humidity</p>
                        <p className="text-2xl font-semibold text-teal-300">{weather.current.humidity}%</p>
                    </div>
                    
                    <div className="bg-glass-white rounded-xl p-4 border border-glass-border text-center">
                        <p className="text-xs text-gray-400 mb-1">UV Index</p>
                        <p className="text-2xl font-semibold text-orange-300">{weather.current.uv}</p>
                    </div>
                    
                    <div className="bg-glass-white rounded-xl p-4 border border-glass-border text-center">
                        <p className="text-xs text-gray-400 mb-1">Visibility</p>
                        <p className="text-xl font-semibold text-purple-300">{weather.current.vis_miles} mi</p>
                    </div>
                    
                    <div className="bg-glass-white rounded-xl p-4 border border-glass-border text-center">
                        <p className="text-xs text-gray-400 mb-1">Pressure</p>
                        <p className="text-xl font-semibold text-indigo-300">{weather.current.pressure_mb} mb</p>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default SearchResult;