import React from 'react';

function Contact() {
  return (
    <section className='bg-black w-full border-y-4 border-primary2' id='contact'>
      <div className='grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-12 py-10 gap-8'>

        {/* Left side content */}
        <div>
          <h2 className='text-primary2 text-2xl font-bold mb-4 sm:ml-14'>Let's Talk</h2>
          <p className='text-sm text-white mb-8 sm:ml-14'>
            I develop intuitive and high-performance mobile apps for both Android and iOS. From concept to launch, I deliver seamless user experiences.
          </p>

          {/* Email */}
          <div className='mb-8 sm:ml-14'>
            <h3 className='text-primary2 text-base font-bold mb-2'>Email</h3>
            <ul>
              <li className='flex items-center'>
                <div className='bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <img src="https://img.icons8.com/ios-filled/24/new-post.png" alt="new-post" />
                </div>
                <a href="mailto:theweborbit.dev@gmail.com" className='text-white text-sm ml-4'>
                  <small className='block'>Mail</small>
                  <strong>theweborbit.dev@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className='sm:ml-14'>
            <h3 className='text-primary2 text-base font-bold mb-2'>Socials</h3>
            <ul className='flex space-x-4 mt-2'>
              <li className='bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center'>
<<<<<<< HEAD
                <a 
                  href="https://www.facebook.com/share/1BF3KSum55/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
=======
                <a href="#">
>>>>>>> f6829f599c7bd44152a9911a61e7045675391e67
                  <img src="https://img.icons8.com/material/24/facebook-f.png" alt="facebook" />
                </a>
              </li>
              <li className='bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center'>
<<<<<<< HEAD
                <a 
                  href="https://www.linkedin.com/in/aliahmad-webdev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
=======
                <a href="#">
>>>>>>> f6829f599c7bd44152a9911a61e7045675391e67
                  <img src="https://img.icons8.com/ios-filled/24/linkedin-2--v1.png" alt="linkedin" />
                </a>
              </li>
              <li className='bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center'>
<<<<<<< HEAD
                <a 
                  href="https://www.instagram.com/aliahmadabbas88?igsh=cngzaXF2eTkzeTd0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
=======
                <a href="#">
>>>>>>> f6829f599c7bd44152a9911a61e7045675391e67
                  <img src="https://img.icons8.com/ios-filled/24/instagram-new--v1.png" alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <form className='space-y-4 w-full' data-aos='zoom-in-down'>
          <input
            type="text"
            placeholder='Name'
            className='w-full rounded-md py-3 px-4 bg-transparent text-white text-sm border border-white outline-none'
          />
          <input
            type="email"
            placeholder='Email'
            className='w-full rounded-md py-3 px-4 bg-transparent text-white text-sm border border-white outline-none'
          />
          <input
            type="text"
            placeholder='Subject'
            className='w-full rounded-md py-3 px-4 bg-transparent text-white text-sm border border-white outline-none'
          />
          <textarea
            placeholder='Message'
            rows='6'
            className='w-full rounded-md py-3 px-4 bg-transparent text-white text-sm border border-white outline-none'
          ></textarea>

          <button className='w-full bg-primary2 p-4 font-bold border border-b-4 border-white rounded-3xl hover:text-primary transition'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
