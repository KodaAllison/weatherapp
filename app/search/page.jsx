'use client'
import { useState, useEffect } from 'react'
import SearchResult from '@/components/SearchResult';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState();
    const [inputValue, setInputValue] = useState("");
    const [favourites, setFavourites] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setSearchTerm(inputValue);
        }
    }

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites) {
            setFavourites(JSON.parse(savedFavourites));
        }
    }, []);

    useEffect(() => {
        if (favourites.length > 0) {
            localStorage.setItem('favourites', JSON.stringify(favourites));
        }
    }, [favourites]);
    
    const handleAddFavourite = () => {
        if (searchTerm && searchTerm.trim() !== '' && !favourites.includes(searchTerm)) {
            setFavourites([...favourites, searchTerm]);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    }

  return (
    <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
            {/* Search Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    Search Weather
                </h1>
                <p className="text-gray-400">Search for any city worldwide</p>
            </div>

            {/* Search Input Section */}
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                    <input 
                        type="text"
                        className="flex-1 max-w-md bg-glass-white backdrop-blur-md border border-glass-border rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        value={inputValue}
                        onChange={handleInput}
                        placeholder="Enter city name..."
                    />
                    <button 
                        type="submit" 
                        className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-glass hover:shadow-glass-hover transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* Add to Favorites Button */}
            {searchTerm && (
                <div className="flex justify-center mb-6 animate-in fade-in duration-300">
                    <button 
                        onClick={handleAddFavourite}
                        disabled={favourites.includes(searchTerm)}
                        className="bg-glass-white backdrop-blur-md border border-glass-border hover:bg-glass-hover text-purple-400 font-semibold px-6 py-3 rounded-xl shadow-glass hover:shadow-glass-hover transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center gap-2"
                    >
                        <span>⭐</span>
                        {favourites.includes(searchTerm) ? 'Already in Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            )}

            {/* Success Message */}
            {showSuccess && (
                <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-green-500/10 backdrop-blur-md border border-green-500/30 text-green-400 px-6 py-3 rounded-xl shadow-glass">
                        ✓ Added to favorites!
                    </div>
                </div>
            )}

            {/* Search Results */}
            {searchTerm && <SearchResult place={searchTerm} />}
        </div>
    </div>
  )
}

export default Page
