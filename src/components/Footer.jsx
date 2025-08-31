import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='z-10 border border-transparent text-white bg-primary'>
      <div className='container p-8 flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='w-25 h-14 ml-2' />
        </div>
        <p className='text-white pr-20'>All rights reserved &copy; Developed by ❤️ Ali Ahmad Webdeveloper </p>
      </div>
    </footer>
  )
}

export default Footer
