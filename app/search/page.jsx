'use client'
import { useState, useEffect } from 'react'
import Weather from '@/components/Weather'
import SearchResult from '@/components/SearchResult';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState(" ");
    const [inputValue, setInputValue] = useState("Search");
    const [favourites, setFavourites] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(inputValue);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    useEffect(() => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites) {
            setFavourites(JSON.parse(savedFavourites));
        }
    }, []);

    // Save favourites to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);
    
    const handleAddFavourite = () => {
        if (searchTerm.trim() !== '' && !favourites.includes(searchTerm)) { //Ensure not empty or duplicate
            setFavourites([...favourites, searchTerm]);
        }
    }

  return (
    <div>
        <div className='searchBox'>
        <input 
            className='searchBar'
            value={inputValue}
            onChange={handleInput}
        />
        <button type='submit' className='submitBtn' onClick={handleSubmit}>SUBMIT</button>
        <button className='submitBtn' onClick={handleAddFavourite}>ADD TO FAVOURITES</button>
        </div>
        <SearchResult place={searchTerm} />
        <h2>Favourites:</h2>
        <div >
            {favourites.map((place, index) => (
                <Weather key={index} place={place} />
            ))}
        </div>
        
    </div>
  )
}

export default Page
