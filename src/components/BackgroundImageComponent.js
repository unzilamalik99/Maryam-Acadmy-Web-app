import { useNavigate } from "react-router-dom";

const BackgroundImageComponent = () => {

  const navigate = useNavigate();

  const someEventHandler = () => {
      navigate('/Read');
  
}

 return(
   <>
    <div
      className="md:w-full md:h-screen bg-cover bg-center py-10"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/44/db/93/44db938c4d86a7ea3ae51a511304a117.gif')",
      }}
    >
      <div className={`md:w-full pb-40 item-center relative data-aos={"flip-left"}}`}>
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

              <a
             
              >
                <button type="button" onClick={someEventHandler} className="bg-[#0d2e4e] px-5 py-3  font-semibold rounded-full hover:bg-white hover:text-black ">
                  Read more{" "}
                </button>
              </a>
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

   </>
  );
};

export default BackgroundImageComponent;
