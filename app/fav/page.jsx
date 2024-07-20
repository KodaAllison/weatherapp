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
        <div className='main-content'>
            <h1>Favourites:</h1>
            <div className='weather-cards'>
                {favourites.map((place, index) => (
                    <div key={place}>
                    <Weather key={index} place={place} />
                    <button className='submitBtn' onClick={() => removeFromFavourites(place)}>Remove</button>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Favourites;
