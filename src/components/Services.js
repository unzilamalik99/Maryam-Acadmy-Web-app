import React from "react";

const Services = () => {
  return (
    <section id="Services" className="py-10 bg-[#0d2e4e] relative">
      <div className="mt-8 text-gray-100 text-center">
        <h1 className="text-4xl font-semibold font-serif px-5">
          {" "}
          What m<span className="text-black">ake us </span>Unique{" "}
        </h1>
        <h3 className="font-serif text-gray-400 mt-3 texl-xl px-5 md:text-lg">
          {" "}
          Specialized areas of expertise or unique features of your services{" "}
        </h3>
        <p className="text-white font-sans text-justify mt-5 mb-5  font-2xl px-5 md:px-20 leading-5 ">
          Extensive experience and expertise in legal, human rights, peace
          education, climate change, environmental law, information technology,
          and AI education A commitment to providing high-quality education and
          training programs that are accessible to all, regardless of background
          or financial resources A focus on promoting diversity, inclusion, and
          social justice in all aspects of our work
        </p>
        <h1 className="text-white font-serif px-10  mt-10  text-3xl  font-bold">
          Trainig Programs{" "}
        </h1>
        <div className="flex items-center justify-center  mt-12 gap-10 flex-wrap">
          <div className="border-2 border-white relative min-w-[15rem] shadow-lg max-w-[16rem] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:bg-[#0d2e4e]  p-5 rounded-xl overflow-hidden hover:scale-105 duration-500">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-xl"
              src="https://hope-revival.ngo/wp-content/uploads/2022/10/sexisme-tranche1-.png"
              alt="Card"
            />

            <div className="">
              <div className="uppercase tracking-wide text-sm text-white font-semibold">
                Category
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Gender-Based Violence
              </a>
              <p className="mt-2 text-white justify-center leading-5 ">
                In this training, you will learn about the various forms of
                gender-based violence, which constitutes a human rights
                violation and result from gender and other intersecting forms of
                discrimination....
                {/* <button className="bg-[#0d2e4e] px-4 py-2 mt-5 font-semibold rounded-full hover:bg-white hover:text-black ">
                  Read more{" "}
                </button> */}
              </p>
            </div>
          </div>
          <div className="border-2 border-white relative min-w-[15rem] shadow-lg-gray max-w-[16rem] bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-900 hover:bg-[#0d2e4e]  p-5 rounded-xl overflow-hidden hover:scale-105 duration-500 shadow-lg">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-full"
              src="https://w1.pngwing.com/pngs/530/353/png-transparent-school-background-design-flat-design-education-training-elearning-retraining-distance-education-course.png"
              alt="Card"
            />

            <div className="">
              <div className="uppercase tracking-wide text-sm text-white font-semibold">
                Category
              </div>
             
               <a href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Peace Education Training Programs
              </a>
              <p className="mt-2 text-white justify-center leading-5 ">
                These programs aim to promote peacebuilding and conflict
                resolution skills through topics such as intercultural
                communication, conflict management, ....
                {/* <button className="bg-[#0d2e4e] px-4 py-2 mt-5 font-semibold rounded-full hover:bg-white hover:text-black ">
                  Read more{" "}
                </button> */}
              </p>
            </div>
          </div>
          <div className="border-2 border-white relative min-w-[15rem] shadow-lg-gray max-w-[16rem] bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-900 hover:bg-[#0d2e4e]  p-5 rounded-xl overflow-hidden hover:scale-105 duration-500 shadow-lg">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-full"
              src="https://p7.hiclipart.com/preview/509/838/535/international-court-environmental-law-international-law-ice-circle.jpg"
              alt="Card"
            />

            <div className="">
              <div className="uppercase tracking-wide text-sm text-white font-semibold">
                Category
              </div>
              <a href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Environmental Law and Climate Change
              </a>
              <p className="mt-2 text-white justify-center leading-5 ">
                In this training we focus on educating individuals about
                environmental laws and regulations, as well as the impact of
                climate change on the environment. Topics ....
                {/* <button className="bg-[#0d2e4e] px-4 py-2 mt-5 font-semibold rounded-full hover:bg-white hover:text-black ">
                  Read more{" "}
                </button> */}
              </p>
            </div>
          </div>
          <div className="border-2 border-white relative min-w-[15rem] shadow-lg-gray max-w-[16rem]  bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-900 hover:bg-[#0d2e4e]  p-5 rounded-xl overflow-hidden hover:scale-105 duration-500 shadow-lg">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-full bg-black"
              src="https://png.pngtree.com/png-vector/20210917/ourmid/pngtree-climate-change-illustrator-caring-for-the-earth-png-image_3925259.jpg"
              alt="Card"
            />

            <div className="">
              <div className="uppercase tracking-wide text-sm text-white font-semibold">
                Category
              </div>
              <a href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Climate Change and Human Rights
              </a>
              <p className="mt-2 text-white justify-center leading-5 ">
                This Training course explores the relationship between climate
                change and human rights. By the end of the course, you will be
                able to critically evaluate both the ....
                {/* <button className="bg-[#0d2e4e] px-4 py-2 mt-5 font-semibold rounded-full hover:bg-white hover:text-black ">
                  Read more{" "}
                </button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
