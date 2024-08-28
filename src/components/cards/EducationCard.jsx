import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function EducationCard({ education }) {
  return (
    <VerticalTimelineElement
      icon={
        <img
          src={education?.img}
          alt={education?.school}
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
      date={education?.date}
    >
      <div id="Top" className="w-full flex max-w-full gap-3 ">
        <img src={education?.img} className=" h-10 lg:h-12 rounded-xl mt-1" />
        <div id="body" className="w-full flex flex-col">
          <div id="school" className="text-[14px] lg:text-[18px]  text-slate-400"> {education?.school} </div>
          <div id="degree" className="text-[12px] lg:text-[14px] font-[500]  text-slate-500" > {education?.degree} </div>
          <div id="date" className="text-[10px] lg:text-[12px] font-[400]  text-[#5b6a7e]" > {education?.date} </div>
        </div>
      </div>
      <div id="Grade">
        <b>Grade : </b>
        {education?.grade}
      </div>
        <div id="Description" className="w-full text-[12px] lg:text-[12px] font-[400] text-slate-400 mb-3 " >
            {education?.desc && ( 
                <span className="display-webkit-box">{education?.desc}</span>
            )}   
      </div>
        
    </VerticalTimelineElement>
  );
}

export default EducationCard;
