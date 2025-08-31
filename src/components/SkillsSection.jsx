import React from 'react';

function SkillsSection() {
  const skills = [
    {
      id: 1,
      icon: 'https://img.icons8.com/fluency/48/html-5.png',
    },
    {
      id: 2,
      icon: 'https://img.icons8.com/color/48/javascript--v1.png',
    },
    {
      id: 3,
      icon: 'https://img.icons8.com/plasticine/100/087ea4/react.png',
    },
    {
      id: 4,
      icon: 'https://img.icons8.com/color/48/tailwindcss.png',
    },
    {
      id: 5,
      icon: 'https://img.icons8.com/fluency/48/figma.png',
    },
    {
      id: 6,
      icon: 'https://img.icons8.com/fluency/48/angularjs.png',
    },
    {
      id: 7,
      icon: 'https://img.icons8.com/fluency/48/vuejs.png',
    },
  ];

  return (
    <section id='skills'>
      <div className='bg-black w-full border-b-5 border-y-4 border-primary2 flex flex-wrap justify-center p-2 gap-0 lg:gap-24'>
        {skills.map((skill) => (
          <div key={skill.id} data-aos='zoom-in-up'>
            <figure className='w-20 h-20 flex justify-center items-center rounded-full ml-2 mt-2'>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(9px)',
                  WebkitBackdropFilter: 'blur(9px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={skill.icon} alt='skills icon' className='w-10 h-12 absolute z-10' />
              </div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
