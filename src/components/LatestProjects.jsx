import React, { useState } from 'react';

function LatestProjects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      src: 'project1.jpg',
      category: 'Mobile App development',
      description: 'A Mobile App development project using React and Node.js.',
      gitURL: '',
      livePreview: ''
    },
    {
      id: 2,
      name: 'Project 2',
      src: 'project2.jpg',
      category: 'web development',
      description: 'A web development project using React and Node.js.',
      gitURL: '',
      livePreview: ''
    },
    {
      id: 3,
      name: 'Project 3',
      src: 'project3.jpg',
      category: 'UI/UX Design',
      description: 'A web development project using React and Node.js.',
      gitURL: '',
      livePreview: ''
    },
    {
      id: 4,
      name: 'Project 4',
      src: 'project4.jpg',
      category: 'React js',
      description: 'A web development project using React and Node.js.',
      gitURL: '',
      livePreview: ''
    },
    {
      id: 5,
      name: 'Project 5',
      src: 'project5.jpg',
      category: 'web development',
      description: 'A web development project using React and Node.js.',
      gitURL: '',
      livePreview: ''
    },
    {
      id: 6, 
      name: 'Project 6',
      src: 'project6.jpg',
      category: 'web development',
      description: 'A web development project using React and Node.js.',
      gitURL: '',
      livePreview: ''
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className='mt-10 md:mt-40' id='projects'>
      <h2 className='md:text-center text-4xl font-bold text-gray-950 sm:text-6xl lg:mb-12' data-aos='fade-up'>My Latest Projects</h2>
      <div className='flex justify-center mt-10 md:mt-1'>
        {['All', 'Web Development', 'Mobile App Development',].map(category => (
          <button
            key={category}
            className='p-2 border border-b-4 border-black rounded-3xl lg:mb-12 ml-2 hover:bg-primary hover:text-white'
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 xl:gap-16 xl:px-16 mt-10 md:mt-0' data-aos='fade-up'>
        {filteredProjects.map(project => (
          <div key={project.id} className='group p-6 sm:p-8 bg-white border border-b-4 border-black rounded-3xl'>
            <div className='relative overflow-hidden rounded-xl'>
              <img
                src={project.src}
                alt="project picture"
                loading='lazy'
                width={1000}
                height={667}
                className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
              />
            </div>
            <div className='mt-6 relative'>
              <h3 className='text-2xl font-semibold text-primary'>{project.name}</h3>
              <p className='mt-6 mb-8'>{project.description}</p>
              <div className='flex max-w-full items-center gap-3 pt-9 flex-col sm:flex-row sm:w-mx sm:mx-auto lg:mx-0'>
               <a href={project.gitURL}>
  <button className='md:block p-4 bg-primary2 font-bold border border-b-4 border-black rounded-3xl hover:text-text-primary hover:border-primary2'>
    Code Source
  </button>
</a>

                <button className='md:block p-4 bg-primary font-bold border border-b-4 border-black rounded-3xl text-white'>
                  <a href={project.livePreview} className='flex justify-between hover:scale-105 transition-all ease-in-out'>
                    Live Preview
                    <svg viewBox='0 0 20 20' className='ml-1.5 h-6 w-6 fill-white' fillRule='evenodd' clipRule='evenodd'>
                      <path d='M7 3.25H3.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z' />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestProjects;
