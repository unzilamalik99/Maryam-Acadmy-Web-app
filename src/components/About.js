import { useNavigate } from "react-router-dom";
import React from 'react'

const About=() =>{
  const navigate = useNavigate();

  const someEventHandler = () => {
      navigate('/AboutRead');
  
}
  
 return (
 <section id="About" className='py-10 bg-black text-white  '>
<div className='text-center mt-8'>
  <h3 className='text-4xl font-semibold'>
    About <span className='text-[#0d2e4e]'>Us</span>

  </h3>
  <p className='text-gray-400 my-3 text:lg'> Information about company</p>
<div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-7 max-w-6xl mx-auto'>
  <div className=''>
   <div className='text-gray-300 my-3 font-serif '>
    <p className='text-justify leading-8 mx-auto'> 
    Maryam Education and Training Services (METS) is an educational company founded with a mission to promote, establish, run, manage and maintain educational institutions, colleges of arts, research, sciences, information technology and business administration, higher-level schools, academics, technical training centers and other such educational institutions to promote and advance education in the country. METS believes that quality education is essential to the development and progress of any society. 
      
    </p>
   <br/>
 <button type="button" onClick={someEventHandler}  className='bg-[#0d2e4e] px-5 py-3  font-semibold rounded-full hover:bg-white hover:text-black '>Read more </button>

 
   </div>
  </div>
  <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center '>
    <div className=' lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm'>
      <img src="https://www.pngplay.com/wp-content/uploads/13/Software-IT-Services-Transparent-PNG.png" alt='' className='w-full object-cover  rounded-xl'/>

    </div>

  </div>
</div>
</div>
  </section>
 ) 
}

export default About
