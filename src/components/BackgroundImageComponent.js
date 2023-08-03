import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
const BackgroundImageComponent = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/44/db/93/44db938c4d86a7ea3ae51a511304a117.gif')",
      }}
    >
      {/* <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-20 pb-14 lg:pb-0 lg:w-auto z-10 lg-absolut flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-white text-3xl px-5 font-semibold">
              Maryam Education and Training Services and its mission
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12"></p>
          </div>
          <div className="flex justify-center pt-10 lg:max-h-max ">
            <div className="relative lg:justify-center  ">
            <input  className="py-5 px-10 md:px-24" type="text" placeholder="Enter your query"></input>
           <button className="bg-black hover:bg-[#108f8f]  text-white hover:text-black py-5 px-5 md:px-10 rounded-lg p-3"><AiOutlineSearch className="text-xl font-serif"/></button>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" pb-40">
        <h3 className=" text-2xl md:text-4xl px-10 md:px-20 text-white font-semibold py-20 pb-5 md:w-1/2">
          Maryam Education and Training Services and its mission
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-7 md:max-w-7xl mx-auto ">
          <div className="">
            <div className="text-gray-300 my-3 font-serif md:w-3/6 ">
              <p className="text-justify leading-8 mx-auto">
                organization focused on providing highquality education in a
                variety of fields to prepare students for successful careers.
                The organization seems to value community engagement and social
                responsibility, both locally in Pakistan and on a global scale.
                Their mission to establish, manage, and maintain educational
                institutions that provide high-quality education indicates that
                they may have multiple schools or programs, each with its own
                specialized focus.
              </p>
              <br />
              <button className="bg-[#0d2e4e] px-5 py-3  font-semibold rounded-full hover:bg-white hover:text-black ">
                Read more{" "}
              </button>
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center ">
            <div className=" lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img
                src="https://milindmorey.in/wp-content/uploads/2022/09/Untitled.png "
                alt=""
                className="w-full object-cover border-dotted rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
