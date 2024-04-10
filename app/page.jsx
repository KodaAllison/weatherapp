'use client'
import Weather from '@/components/Weather'
import React, { useEffect } from 'react'

const page = () => {
    return (
        <div className="weather-cards">
            <Weather place="London" />
            <Weather place="New York" />
            <Weather place="Tokyo" />
            <Weather place="Boston" />
            <Weather place="Berlin" />
            <Weather place="Sydney" />
        </div>
    )
}

export default page
