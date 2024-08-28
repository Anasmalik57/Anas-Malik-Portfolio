import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function ExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      icon={
        <img
          src={experience?.img}
          alt={experience?.school}
          className="w-full h-full rounded-[50%] object-cover "
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
        border: "1px solid #ffffff20",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: " 7px solid #ffffff4d",
      }}
      date={experience?.date}
    >
      <div id="Top" className="w-full flex max-w-full gap-3 ">
        <img src={experience?.img} className=" h-10 lg:h-12 rounded-xl mt-1" />
        <div id="body" className="w-full flex flex-col">
          <div id="role" className="text-[14px] lg:text-[18px]  text-slate-400"> {experience?.role} </div>
          <div id="company" className="text-[12px] lg:text-[14px] font-[500]  text-slate-500" > {experience?.company} </div>
          <div id="date" className="text-[10px] lg:text-[12px] font-[400]  text-[#5b6a7e]" > {experience?.date} </div>
        </div>
      </div>
        <div id="Description" className="w-full text-[12px] lg:text-[12px] font-[400] text-slate-400 mb-3 " >
             {experience?.desc && ( 
                <span className="display-webkit-box">{experience?.desc}</span>
                )}
                {experience?.skills && (
            <>
              <br />
              <div id="Skills" className="w-full flex gap-3 mt-3 ">
                <b>Skills</b>
                <div id="ItemWrapper" className="flex flex-wrap gap-2" >
                    {
                         experience?.skills?.map((skill, index) => (
                            <div>• {skill}</div>
                        ))
                    }
                </div>
              </div> 
            </>
          )}
      </div>
        
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
