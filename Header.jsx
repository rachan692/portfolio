import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'





const Header = () => {
  return (
    <div className='bg-black text-white flex  px-5 py-3 justify-between'>
      <h1 className='text-xl hover:bg-white hover:text-black hover:ease-in duration-75 '>WebName</h1>
      
      
      <nav className='space-x-4 '>  
        
        <NavLink to={'/about-page'} className={'text-xl hover:bg-white hover:text-black animate-pulse'} >About</NavLink>
      
      <NavLink to={'/contact-page'} className={'hover:bg-white hover:text-black text-xl'}>Contact</NavLink>
      </nav>   
      
      
      
    </div>

  )
  
}

export default Header