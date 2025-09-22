import React from 'react';
function SkillsSection() {
  const skills = [
    { id: 1, icon: 'https://img.icons8.com/fluency/48/html-5.png' },
    { id: 2, icon: 'https://icons8.com/icon/21278/css3' },
    { id: 3, icon: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 4, icon: 'https://img.icons8.com/plasticine/100/087ea4/react.png' },
    { id: 5, icon: 'https://icons8.com/icon/hsPbhkOH4FMe/node-js' },
    { id: 6, icon: 'https://icons8.com/icon/kg46nzoJrmTR/express-js' },
    { id: 7, icon: 'https://icons8.com/icon/74402/mongodb' },
    { id: 8, icon: 'https://img.icons8.com/color/48/tailwindcss.png' },
  ];

  return (
    <section id='skills'>
      <div className='bg-black w-full py-8 px-4 border-y-4 border-primary2 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-24'>
        {skills.map((skill) => (
          <div key={skill.id} data-aos='zoom-in-up'>
            <figure className='w-20 h-20 flex justify-center items-center rounded-full ml-2 mt-2'>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid white',
                  backdropFilter: 'blur(9px)',
                  WebkitBackdropFilter: 'blur(9px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={skill.icon}
                  alt='skills icon'
                  className='w-10 h-12 relative z-10'
                />
              </div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
