'use client'
import { useState } from 'react'
import Weather from '@/components/Weather'
import SearchResult from '@/components/SearchResult';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState("SEARCH");
    const [inputValue, setInputValue] = useState('SEARCH');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(inputValue);
    }

    const handleInput = (e) => {
        setInputValue(e.target.value);
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
        </div>
        <SearchResult place={searchTerm} />
    </div>
  )
}

export default Page
