import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ali Ahmad',
      src: 'testimonials.jpg',
      comment:
        'The website was built flawlessly, and the user experience is fantastic. Highly recommend for web development services!',
    },
    {
      id: 2,
      name: 'Sohaib',
      src: 'testimonials.jpg',
      comment:
        'The mobile app is incredibly user-friendly and smooth. A game-changer for our business!',
    },
    {
      id: 3,
      name: 'Nabeel',
      src: 'testimonials.jpg',
      comment:
        'Amazing React development skills! Our project was completed on time with great attention to detail.',
    },
    {
      id: 4,
      name: 'Shahbaz',
      src: 'testimonials.jpg',
      comment:
        'The UI/UX consultation helped us revamp our user experience, and the results were beyond expectations.',
    },
  ];

  return (
    <section className="flex items-center justify-center pt-5 pb-10 bg-gray-50" id="testimonials">
      <div className="w-full px-4 md:px-10 max-w-7xl">
        <div className="text-center mt-10 mb-16">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            What People Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {testimonials.map((element) => (
            <div
              key={element.id}
              className="bg-white rounded-2xl p-6 border border-black border-b-2 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border">
                  <img
                    src={element.src}
                    alt="testimonial user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h6 className="text-sm font-semibold text-gray-700 uppercase">{element.name}</h6>
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed">“{element.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
