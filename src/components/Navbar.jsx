import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center text-2xl bg-slate-950 h-20 lg:px-12 shadow-md shadow-purple-950">
      {/* Logo */}
      <Link to={"/"} > <span id="Logo" className=' text-[22px] font-semibold text-purple-500 active:text-green-400 tracking-widest cursor-pointer  duration-300' >{"<AnasMalik/>"}</span></Link>

      {/* Links */}
      <ul className="hidden list-none lg:flex justify-center items-center font-[500] gap-8 tracking-wide text-sm md:text-lg lg:text-[1.17rem]">
        <li><Link to="/about" className="hover:text-purple-600 cursor-pointer duration-200 ">About</Link></li>
        <li><Link to="/skills" className="hover:text-purple-600 cursor-pointer duration-200 ">Skills</Link></li>
        <li><Link to="/experience" className="hover:text-purple-600 cursor-pointer duration-200 ">Experience</Link></li>
        <li><Link to="/projects" className="hover:text-purple-600 cursor-pointer duration-200 ">Projects</Link></li>
        <li><Link to="/education"className="hover:text-purple-600 cursor-pointer duration-200 ">Education</Link></li>
      </ul>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="z-20 backdrop-blur-lg list-none lg:hidden  text-lg rounded-b-3xl absolute top-20 mt-2 w-full text-center transition-all duration-300">
          <li  onClick={() => setIsOpen(!isOpen)} className=" py-3 hover:text-purple-500  border-b-2 border-transparent border-slate-900 tracking-widest ">
            <Link to="/about" className="cursor-pointer duration-300">About</Link>
          </li>
          <li  onClick={() => setIsOpen(!isOpen)} className=" py-3 hover:text-purple-500  border-b-2 border-transparent border-slate-900 tracking-widest ">
            <Link to="/skills" className="cursor-pointer duration-300">Skills</Link>
          </li>
          <li  onClick={() => setIsOpen(!isOpen)} className=" py-3 hover:text-purple-500  border-b-2 border-transparent border-slate-900 tracking-widest ">
            <Link to="/experience" className="cursor-pointer duration-300">Experience</Link>
          </li>
          <li  onClick={() => setIsOpen(!isOpen)} className=" py-3 hover:text-purple-500  border-b-2 border-transparent border-slate-900 tracking-widest ">
            <Link to="/projects" className="cursor-pointer duration-300">Projects</Link>
          </li>
          <li  onClick={() => setIsOpen(!isOpen)} className=" py-3 hover:text-purple-500 tracking-widest ">
            <Link to="/education" className="cursor-pointer duration-300">Education</Link>
          </li>
          <button className="text-[0.9rem] cursor-pointer border-2 md:text-lg md:border-[3px] mt-3 px-8 py-1 rounded-3xl font-semibold tracking-widest border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white active:scale-105  duration-300">
            <a href="https://github.com/Anasmalik57" target="_blank" >Github</a>
          </button>
        </ul>
      )}

      {/* Button */}
      <button className="text-[0.9rem] cursor-pointer border-2 md:text-lg md:border-[3px] hidden lg:block md:px-4 md:py-1 rounded-xl font-semibold tracking-wide border-blue-600 text-blue-600 hover:bg-blue-600 md:border-orange-600 md:text-orange-600 md:hover:bg-orange-600 lg:border-purple-600 lg:text-purple-600 lg:hover:bg-purple-600 hover:text-white active:scale-95  duration-300">
      <a href="https://github.com/Anasmalik57" target="_blank" >Github</a>
      </button>

      {/* Menu Icon */}
      <CiMenuFries
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden text-3xl cursor-pointer active:pr-10 transition-all mr-8"
      />
    </div>
  );
}

export default Navbar;
