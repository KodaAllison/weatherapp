import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="header">
      <div className="header-left">
         <Link className="link" href="/" > 
            <Image src = "/icons/cloud.svg" 
            alt = "Logo"
            width={30}
            height={30} />    
        </Link>
        </div>
        
        <p>WeatherApp</p>
    </div>
  )
}

export default Nav;