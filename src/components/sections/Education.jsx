import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { education } from '../../data/constants'
import EducationCard from '../cards/EducationCard'
// import EarthCanvas from '../canvas/Earth'

function Education () {
  return <div className='mt-8 flex flex-col justify-center items-center'>
  <div id="Wrapper" className="flex justify-between items-center w-full flex-col relative max-w-[1100px] gap-3 tracking-wide">
        <div id="Title" className="  w-fit text-5xl text-center font-semibold my-5  ">Education</div>
        <div id="Desc" className="w-fit text-lg md:text-[20px] text-center font-[600] text-slate-600 mb-10 tracking-wider " >My education has been a journey of self-discovery and growth. My
        educational details are as follows.</div>

        <VerticalTimeline className='cursor-pointer'>
            {education.map((item, index)=>(
                <EducationCard key={`education-${index}`} education={item} />
            ))}
        </VerticalTimeline>
    </div>
    {/* <EarthCanvas/> */}
  </div>
}

export default Education