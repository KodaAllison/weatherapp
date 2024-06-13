'use client'
import { useState, useEffect } from 'react'
import Weather from '@/components/Weather'

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites) {
            setFavourites(JSON.parse(savedFavourites));
        }
    }, []);

    return (
        <div>
            <h2>Favourites:</h2>
            <div>
                {favourites.map((place, index) => (
                    <Weather key={index} place={place} />
                ))}
            </div>
        </div>
    );
};

export default Favourites;
