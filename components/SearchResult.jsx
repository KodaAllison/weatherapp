'use client'
import React, { useEffect, useState } from "react"

const SearchResult = ({ place }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(`/api/${place}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, [place]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return (
            <div className='error' style={{ color: 'red' }}>
                <h2>Error Loading Data</h2>
                <p>{error}</p>
            </div>
        );
    }

    return weather ? (
        <div className="searchResults">
            <h2 className="searchName">{weather.location.name}</h2>
            <h2 className="searchData">{weather.current.temp_c}°C</h2>
            <h2 className="searchData">Wind: {weather.current.wind_mph} mph, {weather.current.wind_dir}</h2>
            <h2 className="searchData">Humidity: {weather.current.humidity}%</h2>
            <h2 className="searchData">UV: {weather.current.uv}</h2>
        </div>
    ) : null;
};


export default SearchResult
