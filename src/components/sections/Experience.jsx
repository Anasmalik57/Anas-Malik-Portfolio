import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { experiences } from '../../data/constants'
import ExperienceCard from '../cards/ExperienceCard'

const Experience = () => {
  return <div id='Experience' className='flex flex-col justify-center items-center mt-12'>
  <div id="Wrapper" className="flex justify-between items-center w-full flex-col relative max-w-[1100px] gap-3 tracking-wide">
        <div id="Title" className="  w-fit text-5xl text-center font-semibold my-5  ">Experience</div>
        <div id="Desc" className="w-fit text-lg md:text-[20px] text-center font-[600] text-slate-600 mb-10 tracking-wider " >My work experience as a software engineer and work companies project</div>

        <VerticalTimeline className='cursor-pointer' >
            {experiences.map((experience, index)=>(
                <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
        </VerticalTimeline>
    </div>
  </div>
}

export default Experience