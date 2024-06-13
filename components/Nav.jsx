import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="header">
      <div className="header-left">
         <Link href="/" > 
            <Image src = "/icons/cloud.svg" 
            alt = "Logo"
            width={30}
            height={30} />    
        </Link>
      </div>
        
      <p>WeatherApp</p>
      
      <div className='header-right'>
        <div>
          <Link href="/fav" > 
              <Image src = "/icons/star.svg" 
              alt = "Logo"
              width={30}
              height={30} />    
          </Link> 
        </div>

        <div>
          <Link href="/search" > 
              <Image src = "/icons/search.svg" 
              alt = "Logo"
              width={30}
              height={30} />    
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default Nav;