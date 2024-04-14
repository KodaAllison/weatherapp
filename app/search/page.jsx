'use client'
import { useState } from 'react'
import Weather from '@/components/Weather'

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
        <input 
            className='searchBox'
            value={inputValue}
            onChange={handleInput}
        />
        <button type='submit' onClick={handleSubmit}>SUBMIT</button>
        
        <Weather place={searchTerm} />
        <p className='searchResult'>Searching for {searchTerm}</p>
    </div>
  )
}

export default Page
