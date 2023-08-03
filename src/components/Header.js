import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {AiOutlineClose} from 'react-icons/ai';

export default function Header() {
  const [open, setOpen] = useState(false);
  // const handleClick = (event) => {
  //   event.preventDefault(); // This will prevent the default link behavior
  //   // Perform any custom actions or navigation here
  //   console.log('Custom click handler executed');
  // };

  const menuLinks = [
    { name: "Home", link: "#" },
    { name: "About Us", link: "#About " },
    { name: " Our Team", link: "#OurTeam" },
    { name: "Services, Institutions & Programs", link: "#Services " },
    { name: "Scholarship & Donation",  link: "#Scholarship "},
    { name: " Events & News", link: "#Events" },
    { name: "Contact us", link: "#contact" },
  ];

  return (
    <>
      <div>
    
  
        <div className="bg-[#0d2e4e] flex w-[100%] gap-3 px-5 md:px-20 py-2">
          <div className="w-10">
            <img src="logo12.png" alt="Logo" />
          </div>
          <h1 className="font-bold text-[12px] md:text-[15px] flex-wrap w-1/2 items-center py-2 md:w-1/5 text-white uppercase">
            {" "}
            M<span className="text-cyan-600">ary</span>am E
            <span className="text-cyan-600">duca</span>tion &{" "}
            <span className="text-cyan-600">Tra</span>ining Ser
            <span className="text-cyan-600">vices</span>
          </h1>
        </div>

        <nav className="w-full left-0 top-0 z-[999]">
          <div>
            <div className="bg-black  w-full text-white md:block hidden px-7 py-2 font-medium ">
              <ul className="flex items-center gap-7 text-lg ">
                {menuLinks?.map((menu, i) => (
                  <li onClick={()=> setOpen(false)} 
                  key={i} className="hover:border-y-2 border-[#0d2e4e] py-2  ">
                    <a href={menu?.link} onClick={()=>setOpen(!open)}>{menu?.name}</a>
                  </li>
                ))}
              </ul>

            </div>
            <div className="bg-black md:hidden w-full py-5 px-5 text-xl justify-between text-white">
              <div>Menu
                {
                  open?
                  <div onClick={() => setOpen(!open)} className={`md:hidden float-right text-white text-3xl ${open ? "text-gray-900" : "text-gray-900"}`}>
                  <AiOutlineClose />
                </div>
                :
                <div onClick={() => setOpen(!open)} className={`md:hidden float-right text-white text-3xl ${open ? "text-gray-900" : "text-gray-200"}`}>
                <AiOutlineMenu name="menu" />
              </div>
                }
             
              </div>
            </div>
          </div>
          <div className={`md:hidden text-gray-900 w-full absolute font-medium bg-white top-25 max-w-xs h-screen right-0 z-20 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
            <ul className="h-full flex flex-col justify-center item-center  text-primary font-semibold text-xl">
              {menuLinks?.map((menu, i) => (
                <li key={i} className="p-10 px-5 border border-gray-200 shadow-gray-400 py-5 w-200">
                  <a href={menu?.link} >{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      
    </>
  );
}