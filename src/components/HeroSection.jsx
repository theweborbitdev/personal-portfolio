import React from 'react';

function HeroSection() {
  return (
    <section className='relative w-full' data-aos='zoom-in'>
      <div className='w-full px-5 sm:px-8 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative'>
        <div className='grid lg:grid-cols-2 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
          
          {/* Left Content */}
          <div className='lg:py-6 md:mt-5'>
            <h1 className='text-[5.5rem] leading-[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl'>
              Hi, I'm Web Developer
            </h1>
            <p className='mt-8 max-w-lg text-xl leading-7 font-medium text-white sm:text-2xl'>
              "I'm a passionate Web Developer specializing in creating responsive, user-friendly websites. I turn ideas into interactive digital experiences using modern web technologies."
            </p>

            {/* Buttons */}
            <div className='flex flex-col md:flex-row items-center gap-3 pt-9 sm:w-max sm:mx-auto lg:mx-0'>
              <button className='md:block w-48 bg-primary2 p-6 font-bold border border-b-4 border-black
                rounded-3xl hover:text-primary hover:border-primary2'>
                Hire Me
              </button>

              <button className='md:block w-48 bg-primary p-3 font-bold border border-b-4 border-black
                rounded-3xl text-white'>
                <a
                  href="/resume.pdf"
                  download='resume.pdf'
                  className='flex items-center justify-center gap-2 hover:scale-105 transition-all ease-in-out'
                >
                  Download Resume
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/download--v1.png"
                    alt="download"
                    width={20}
                    height={20}
                  />
                </a>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className='lg:h-full md:flex'>
            <div className='flex w-full min-h-[24rem] lg:min-h-[none] lg:w-full relative md:justify-end'>
              <img
                src="/hero.png"
                alt="Hero Picture"
                loading='lazy'
                className='w-[550px] h-auto lg:w-[400px] lg:h-auto'
              />
              <div className='absolute top-96 left-20 flex items-center justify-center'>
                <div className='relative inline-block text-white text-3xl font-bold px-4 py-2'>
                   {/* <span className='block w-60 text-center bg-black text-white text-2xl font-bold skew-y-4 py-1 shadow-lg'>
                    Ali Ahmad
                  </span>
                  <span className='block w-60 text-center bg-black text-white text-2xl font-bold skew-y-3 py-1 shadow-lg'>
                    Web developer
                  </span>  */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
