'use client'
import React, { useEffect, useState } from "react"
import WeatherCard from "./WeatherCard"

const WeatherSkeleton = () => (
    <div className="weather-card-container block m-3">
        <div className="bg-glass-white backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-glass skeleton-shimmer">
            <div className="flex flex-col h-full justify-between">
                {/* Location skeleton */}
                <div>
                    <div className="h-6 bg-glass-hover rounded w-32 mb-2"></div>
                    <div className="h-4 bg-glass-hover rounded w-24"></div>
                </div>
                
                {/* Temperature skeleton */}
                <div className="flex flex-col items-center justify-center flex-1 my-8">
                    <div className="h-24 w-32 bg-glass-hover rounded-lg mb-3"></div>
                    <div className="h-6 bg-glass-hover rounded w-28"></div>
                </div>

                {/* Bottom hint skeleton */}
                <div className="h-3 bg-glass-hover rounded w-24 mx-auto"></div>
            </div>
        </div>
    </div>
)

const Weather = ({ place }) => {
    const [weather, setWeather] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(`/api/${place}`);
                const data = await response.json();
                setWeather(data)
                setIsLoading(false)
            } catch (error) {
                console.error("Failed loading weather data:", error)
                setError({ message: 'Failed to load weather data. Please try again.' })
                setIsLoading(false)
            }
        }
        loadData();
    }, [place])

    if (isLoading) {
        return <WeatherSkeleton />
    }

    if (error) {
        return (
            <div className="weather-card-container block m-3">
                <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-8 border border-red-500/30 shadow-glass">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="text-4xl mb-4">⚠️</div>
                        <h2 className="text-red-400 font-semibold text-lg mb-2">Error Loading</h2>
                        <p className="text-gray-400 text-sm">{error.message}</p>
                    </div>
                </div>
            </div>
        )
    }

    return <WeatherCard weather={weather} />
}

export default Weather