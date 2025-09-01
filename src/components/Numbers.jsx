import React from "react";

function Numbers() {
  return (
    <section className="md:mt-40 ">
      <div className="bg-black w-full  border-y-4 border-primary2 flex flex-wrap justify-center p-14  gap-5 md:gap-40 text-white">
        
        <div className="text-center" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-white">+200</h2>
          <p className="text-white">Happy Clients</p>
        </div>

        <div className="text-center" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-white">+30</h2>
          <p className="text-white">Completed Projects</p>
        </div>

        <div className="text-center" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-white">+2</h2>
          <p className="text-white">Years Experience</p>
        </div>

      </div>
    </section>
  );
}

export default Numbers;
