'use client'
import React, { useEffect, useState } from "react"
import WeatherCard from "./WeatherCard"

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
                console.error("FAILED LoADINg w data:", error)
                setError({ message: 'Failed to load' })
                setIsLoading(false)
            }
        }
        loadData();
    }, [place])

    if (isLoading) {
        return (<>
            <h1>Is Loading!!!!</h1>
        </>)
    }

    if (error) {
        return (<div className='error' style={{ color: 'red' }}>
            <h2>Error Loading</h2>
            <pre>
                {JSON.stringify(error, null, 2)}
            </pre>
        </div>)
    }

    return (<>

        <WeatherCard weather={weather} />
    </>

    )
}

export default Weather