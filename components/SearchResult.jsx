'use client'
import React, { useEffect, useState } from "react"

const SearchResult = ({ place }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true); // Reset loading state
            setError(null);     // Clear previous errors
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
                // Handle fetch or JSON parsing errors
                setError(error.message || "An unexpected error occurred.");
            } finally {
                setIsLoading(false); // Ensure the loading spinner stops
            }
        };

        // Prevent unnecessary API calls if `place` is not defined
        if (place) {
            loadData();
        } else {
            setError("No place specified for weather search.");
            setIsLoading(false);
        }
    }, [place]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return (
            <div className="error" style={{ color: 'red', padding: '1em', border: '1px solid red', borderRadius: '4px' }}>
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

export default SearchResult;