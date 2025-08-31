import React from 'react'

function Contact() {
  return (
    <section className='bg-black w-full border-y-4 border-primary2' id='contact'>
      <div className='grid sm:grid-cols-2 p-8 gap-8'>

        {/* Left side content */}
        <div>
          <h2 className='text-white text-2xl font-bold mb-4'>Let's Talk</h2>
          <p className='text-sm text-gray-500 mb-8'>
            I develop intuitive and high-performance mobile apps for both Android and iOS. From concept to launch, I deliver seamless user experiences.
          </p>

          {/* Email */}
          <div className='mb-8'>
            <h3 className='text-white text-base font-bold mb-2'>Email</h3>
            <ul>
              <li className='flex items-center'>
                <div className='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <img src="https://img.icons8.com/ios-filled/24/new-post.png" alt="new-post" width={24} height={24} />
                </div>
                <a href="mailto:theweborbit.dev@gmail.com" className='text-white text-sm ml-4'>
                  <small className='block'>Mail</small>
                  <strong>theweborbit.dev@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className='text-white text-base font-bold mb-2'>Socials</h3>
            <ul className='flex space-x-4 mt-2'>
              <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center'>
                <a href="#">
                  <img src="https://img.icons8.com/material/24/facebook-f.png" alt="facebook" />
                </a>
              </li>
              <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center'>
                <a href="#">
                  <img src="https://img.icons8.com/ios-filled/24/linkedin-2--v1.png" alt="linkedin" />
                </a>
              </li>
              <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center'>
                <a href="#">
                  <img src="https://img.icons8.com/ios-filled/24/instagram-new--v1.png" alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <form className='space-y-4' data-aos='zoom-in-down'>
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
  )
}

export default Contact
