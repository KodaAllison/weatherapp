'use client'
import { useState } from 'react'

const page = () => {
    const [searchTerm, setSearchTerm] = useState("SEARCH")

  return (
    <div>
      <>
        <input 
            className='searchBox'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />      
        <p className='searchResult'>Sarching for {searchTerm}</p>
      </>
    </div>
  )
}

export default page
