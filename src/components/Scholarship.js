import React from "react";

const Scholarship = () => {
  return (
    <section id="Scholarship" className="py-20  bg-black text-white  ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">Scholarship & Donation</h3>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-7 max-w-6xl mx-auto">
          <div className="">
            <div className="text-gray-300 my-3 font-serif ">
              <p className="text-justify leading-8 mx-auto">
                Details about any scholarship or financial aid opportunities
                available to students at your educational institutions
                Information about eligibility requirements, application
                processes, and deadlines Testimonials from previous scholarship
                recipients to showcase the impact of your financial aid programs
              </p>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center ">
            <div className=" lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img
                src="https://statewide.usu.edu/_images/icon-scholarships.png"
                alt=""
                className="w-full object-cover  rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Scholarship;
