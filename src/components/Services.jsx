import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: 'https://img.icons8.com/color/96/code.png',
      description:
        "I build fast, responsive, and scalable websites tailored to your business needs. From landing pages to full-stack web apps — I turn your ideas into reality.",
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: 'https://img.icons8.com/color/96/smartphone-tablet.png',
      description:
        "I develop intuitive and high-performance mobile apps for both Android and iOS. From concept to launch, I deliver seamless user experiences.",
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: 'https://img.icons8.com/color/96/design.png',
      description:
        "I craft clean and user-friendly interface designs that enhance user experience. My focus is on intuitive layouts, accessibility, and visual consistency.",
    },
  ];

  return (
    <section className='mt-11 md:mt-48' id='services'>
      <h2
        className='text-center text-4xl font-bold text-gray-950 sm:text-6xl lg:mb-12'
        data-aos='fade-up'
      >
        My Services
      </h2>

      <div
        className='py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3'
        data-aos='fade-up'
      >
        {services.map((service) => (
          <div
            key={service.id}
            className='p-6 bg-white border border-black border-b-4 rounded-3xl shadow-md'
          >
            <img
              src={service.icon}
              alt={`${service.title} icon`}
              className='w-16 h-16 mb-6'
            />
            <h5 className='mb-3 text-2xl font-semibold tracking-tight text-primary'>
              {service.title}
            </h5>
            <p className='text-gray-800 text-base leading-relaxed'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
