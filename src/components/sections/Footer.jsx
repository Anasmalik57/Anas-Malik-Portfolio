import React from 'react'
import { Link } from 'react-router-dom'
import { Bio } from '../../data/constants'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { IoLogoVercel } from 'react-icons/io5'

function Footer() {
  return<>
  <div id="FooterContainer" className='w-full px-0 py-8 flex justify-center z-10' >
    {/* FootWrapper */}
  <div id="FooterWrapper" className="w-full max-w-[1200px] flex flex-col gap-3 items-center p-4 text-slate-500 " >
       <Link to={"/"} > <span id="Logo" className=' text-xl font-semibold text-purple-500 active:text-green-400 tracking-widest cursor-pointer duration-200' >{"<AnasMalik/>"}</span></Link>
        <nav className="w-full max-w-[800px] mt-1  flex flex-row flex-wrap gap-4 text-center text-[14px] lg:text-lg justify-center lg:gap-8 list-none " >
            <li><Link to="/about" className="hover:text-purple-600 cursor-pointer duration-300 ">About</Link></li>
            <li><Link to="/skills" className="hover:text-purple-600 cursor-pointer duration-300 ">Skills</Link></li>
            <li><Link to="/experience" className="hover:text-purple-600 cursor-pointer duration-300 ">Experience</Link></li>
            <li><Link to="/projects" className="hover:text-purple-600 cursor-pointer duration-300 ">Projects</Link></li>
            <li><Link to="/education" className="hover:text-purple-600 cursor-pointer duration-300 ">Education</Link></li>
        </nav>
        <div id="SocialMediaIcons" className='flex mt-4 w-full justify-center '>
        <div id="SocialMediaIcon" className='flex mx-4 text-[1rem] text-slate-400 transition-all duration-300 gap-3 h-5 md:h-7 mt-0 lg:h-8 ' >
            <a href={Bio.facebook} target='display' title='Facebook' ><FaFacebook className='w-full h-full hover:text-blue-500 duration-200' /></a>
            <a href={Bio.insta} target='display' title='Instagram' ><FaInstagram className='w-full h-full hover:text-pink-500 duration-200' /></a>
            <a href={Bio.vercel} target='display' title='Vercel' ><IoLogoVercel className='w-full h-full hover:text-blue-500 duration-200' /></a>
            <a href={Bio.linkedin} target='display' title='LinkedIn' ><LiaLinkedin className='w-full h-full hover:text-blue-500 duration-200' /></a>
        </div>
        </div>
    </div>
    {/* CopyRight */}
    <div id="CopyWright">

    </div>
  </div>
  </>
}

export default Footer