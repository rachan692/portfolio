import React from 'react'
import Header from './Header'


import { Outlet } from 'react-router'
import Footer from './Footer'

const Routelayout = () => {
  return (
    <div>
        
            <Header/>
        <div className='px-8'>    
        
        <Outlet/>
    </div>
    
    </div>
  )
}

export default Routelayout