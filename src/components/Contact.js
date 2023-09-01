import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiFillCompass} from 'react-icons/ai';
const Contact=()=> {

  return (
    <section id="contact" className='py-10 px-3 bg-[#0d2e4e] text-white'>
<div className='text-center mt-8'>
<h3 className=' text-3xl font-bold'>Contact</h3>

<div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-slate-700 p-6 rounded-lg mx-auto'>
  <form className='flex flex-col flex-1 gap-5'>
    <input type ="text" placeholder="your name"/>
    <input type ="Email" placeholder="your Email Adress"/>
    <textarea placeholder='your Message' rows={10}></textarea>
    <button className="bg-[#0d2e4e] px-5 py-4 mt-5 font-semibold rounded-full hover:bg-white hover:text-black w-fit ">Send Message</button>
  </form>
  <div className='flex flex-col gap-7'>
  <div className='flex flex-wrap  gap-4 w-fit item-center '>
      <div className='min-w-[4rem] h-[4rem] flex items-center justify-center text-2xl text-white bg-[#0d2e4e] rounded-full'>
        <AiOutlineMail/>
      </div>
      <p className='text-lg pt-5'>Maryamaducation@gmail.com</p>
    </div>
    <div className='flex flex-wrap gap-4 w-fit item-center '>
      <div className='min-w-[4rem] h-[4rem] flex items-center justify-center text-2xl text-white bg-[#0d2e4e] rounded-full'>
   <AiOutlineWhatsApp/>
      </div>
      <p className='text-lg pt-5'>+923869376496 </p>
    </div>
    <div className='flex flex-wrap gap-4 w-fit item-center '>
      <div className='min-w-[4rem] h-[4rem] flex items-center justify-center text-2xl text-white bg-[#0d2e4e] rounded-full'>
   <AiFillCompass/>
      </div>
      <p className='text-lg pt-5'>Location_demo </p>
    </div>
  </div>
 
  </div>
</div>

    </section>
  )
}

export default Contact
