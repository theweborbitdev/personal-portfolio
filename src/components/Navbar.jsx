import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = [
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='z-20'>
      <nav className='flex justify-center'>
        <div className='flex items-center relative bg-white w-[90%] md:w-4/5 p-3 justify-between rounded-3xl'>
          {/* logo */}
          <div className='text-3xl font-bold flex'>
            <img src={logo} alt="Logo" className="w-28 h-18 ml-2" />
          </div>

          {/* Mobile toggle Button */}
          <div className='md:hidden z-30'>
            <button
              type='button'
              className='block focus:outline-none'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <span className='text-5xl'>
                  <img
                    src='https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png'
                    alt='close'
                    width={50}
                    height={50}
                  />
                </span>
              ) : (
                <span className='text-5xl'>
                  <img
                    src='https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png'
                    alt='menu'
                    width={50}
                    height={50}
                  />
                </span>
              )}
            </button>
          </div>

          {/* Responsive Menu */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } fixed inset-0 z-20 flex-col items-center justify-center bg-primary
            md:relative md:bg-transparent md:flex md:flex-row md:space-x-5 md:justify-between md:items-center`}
          >
            <ul className='flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium'>
              {Menu.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='block transition hover:text-primary ease-linear text-2xl md:text-sm
                            lg:text-lg text-white md:text-black'
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Button visible on both mobile & desktop */}
            <button
              className='mt-6 md:mt-0 bg-primary2 font-bold py-2 px-6 border-b-4 border-black rounded-3xl
              hover:text-primary hover:border-primary2 transition-all duration-200'
            >
              Let's Talk
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
