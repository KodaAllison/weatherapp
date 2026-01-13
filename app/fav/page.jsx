'use client'
import { useState, useEffect } from 'react'
import Weather from '@/components/Weather'

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    const removeFromFavourites = (place) => {
        const updatedFavourites = favourites.filter(item => item !== place);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    useEffect(() => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites) {
            setFavourites(JSON.parse(savedFavourites));
        }
    }, []);

    return (
        <div className="min-h-screen px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                        Favorite Locations
                    </h1>
                    <p className="text-gray-400">Your saved weather locations</p>
                </div>

                {/* Empty State */}
                {favourites.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="bg-glass-white backdrop-blur-md rounded-2xl p-12 border border-glass-border shadow-glass text-center max-w-md">
                            <div className="text-6xl mb-4">⭐</div>
                            <h2 className="text-xl font-semibold text-gray-300 mb-2">No Favorites Yet</h2>
                            <p className="text-gray-400 mb-6">
                                Search for a city and add it to your favorites to see it here!
                            </p>
                            <a 
                                href="/search"
                                className="inline-block bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl shadow-glass hover:shadow-glass-hover transition-all hover:-translate-y-0.5"
                            >
                                Go to Search
                            </a>
                        </div>
                    </div>
                ) : (
                    /* Favorites Grid */
                    <div className="flex flex-wrap justify-center">
                        {favourites.map((place, index) => (
                            <div key={`${place}-${index}`} className="relative group">
                                <Weather place={place} />
                                <button 
                                    onClick={() => removeFromFavourites(place)}
                                    className="absolute top-0 right-0 m-5 bg-red-500/80 hover:bg-red-500 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 z-10"
                                    title="Remove from favorites"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favourites;
