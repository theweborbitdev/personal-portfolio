import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className='z-10 border-t-4 border-primary2 text-white bg-primary'>
      <div className='container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left'>
        
        {/* Logo */}
        <div className='mb-4 sm:mb-0'>
          <img src={logo} alt="logo" className='w-28 h-auto' />
        </div>

        {/* Text */}
        <p className='text-sm sm:text-base max-w-md'>
          All rights reserved &copy; Developed by ❤️ <strong>Ali Ahmad</strong> Web Developer
        </p>
      </div>
    </footer>
  );
}

export default Footer;
