import React from 'react';

function About() {
  // Experience data
  const experience = [
    {
      id: 1, // ✅ Fixed typo: changed 'di' to 'id'
      role: 'Software Engineer',
      company: 'Microsoft',
      date: 'Jan 2025 - Present',
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Fiverr',
      date: 'Jan 2024',
    },
  ];

  // Education data
  const education = [
    {
      id: 1,
      role: 'BSc Computer Science',
      school: 'Virtual University of Pakistan',
      year: '2023 - 2027',
    },
    {
      id: 2,
      role: 'Intermediate (Pre-Engineering)',
      school: 'Punjab Group Of College',
      year: '2021 - 2023',
    },
  ];

  return (
    <section className='mt-9 md:mt-40' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16'>
        {/* Left Side - Education */}
        <div className='mt-4 md:mt-0 text-left flex flex-col z-10 h-full'>
          <h2
            className='text-4xl text-gray-950 sm:text-6xl lg:mb-8 font-bold'
            data-aos='zoom-in-up'
          >
            My Education
          </h2>

          <div className='flex justify-start'>
            <div
              className='space-y-8 py-8 w-full md:w-4/5'
              data-aos='zoom-in-up'
            >
              {education.map((element) => (
                <div
                  key={element.id}
                  className='flex items-center rounded-xl bg-primary p-5 md:justify-end'
                >
                  <div className='w-1/4'>
                    <img
                      src='https://img.icons8.com/ios-filled/100/ffffff/lawyer.png'
                      alt='education icon'
                    />
                  </div>
                  <div className='w-3/4 pl-4'>
                    <h5 className='mb-2 text-2xl font-semibold tracking-tight text-primary2'>
                      {element.role}
                    </h5>
                    <p className='max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8'>
                      {element.school}
                    </p>
                    <p className='max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8'>
                      {element.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Experience */}
        <div>
          <h2
            className='text-4xl text-gray-950 sm:text-6xl lg:mb-8 font-bold'
            data-aos='zoom-in-up'
          >
            My Experience
          </h2>

          <div className='flex justify-start'>
            <div
              className='space-y-8 py-8 w-full md:w-4/5'
              data-aos='zoom-in-up'
            >
              {experience.map((element) => (
                <div
                  key={element.id}
                  className='flex items-center rounded-xl bg-primary p-5 md:justify-end'
                >
                  <div className='w-1/4'>
                    <img
                      src='https://img.icons8.com/ios-filled/100/ffffff/lawyer.png'
                      alt='experience icon'
                    />
                  </div>
                  <div className='w-3/4 pl-4'>
                    <h5 className='mb-2 text-2xl font-semibold tracking-tight text-primary2'>
                      {element.role}
                    </h5>
                    <p className='max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8'>
                      {element.company}
                    </p>
                    <p className='max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8'>
                      {element.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
