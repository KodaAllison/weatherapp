'use client'
import Weather from '@/components/Weather'
import React, { useEffect } from 'react'

const page = () => {
    return (
        <div>
            <Weather place="London" />
            <Weather place="New York " />
        </div>
    )
}

export default page
