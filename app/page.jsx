'use client'
import Weather from '@/components/Weather'
import React, { useEffect } from 'react'

const page = () => {
    return (
        <div className="weather-cards">
            <Weather place="London" />
            <Weather place="New York " />
        </div>
    )
}

export default page
