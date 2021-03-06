import React from 'react'
import header_desktop from '../components/bg-header-desktop.svg';

const Navbar = () => {
  return (
    <div className='bg-teal-600 mb-28 lg:mb-20'>
        <div className='w-full h-32 lg:h-auto '>
            <img src={header_desktop} className="w-full h-full"/>
        </div>
    </div>
    
  )
}

export default Navbar
