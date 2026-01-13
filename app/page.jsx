'use client'
import Weather from '@/components/Weather'
import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        Global Weather
                    </h1>
                    <p className="text-xl text-gray-400 mb-2">Real-time weather conditions around the world</p>
                    <p className="text-sm text-gray-500">Click any card to see more details</p>
                </div>

                {/* Weather Cards Grid */}
                <div className="flex flex-wrap justify-center">
                    <Weather place="London" />
                    <Weather place="New York" />
                    <Weather place="Tokyo" />
                    <Weather place="Boston" />
                    <Weather place="Berlin" />
                    <Weather place="Sydney" />
                </div>
            </div>
        </div>
    )
}

export default page
