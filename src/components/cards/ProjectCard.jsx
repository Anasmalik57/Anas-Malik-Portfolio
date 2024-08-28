import React from "react";

function ProjectCard({ project }) {
  return (
    <div
      id="Card"
      className="w-[330px] h-[460px] bg-slate-900  cursor-pointer rounded-[10px] shadow-lg shadow-slate-800  overflow-hidden px-5 py-[26px] flex flex-col gap-[14px]transition-all duration-500 ease-in-out hover:transform hover:-translate-x-2 hover:filter hover:brightness-125 ">
      <img src={project.image} className="w-full h-[180px] bg-white rounded-[10px] " />
      <span id="Tags" className="w-full flex items-center flex-wrap gap-2 mt-2" ></span>
      {/* Details */}
      <div id="details" className="w-full flex flex-col gap-0 px-0.5" >
        <div id="title" className="text-xl font-semibold text-purple-600 overflow-hidden webkit-box max-w-full text-ellipsis line-clamp-2">{project.title}</div>
        <div id="date" className="text-[10px] lg:text-[12px] ml-0.5 font-[400] text-slate-600 ">{project.date}</div>
        <div id="description" style={{WebkitBoxOrient: "vertical"}} className="font-[400] text-slate-500 overflow-hidden mt-2 mb-6 webkit-box max-w-full text-ellipsis line-clamp-3 " >{project.description}</div>
      </div>
      {/* Members */}
      <div id="Members" className="flex items-center pl-2  ">
        {project.member?.map((member) => (
          <img src={member.img} className="w-10 h-10 rounded-[50%] -ml-3 bg-white shadow-md shadow-purple-600 border-2 border-slate-700 mb-4 " />
        ))}
      </div>
      {/* Button */}
      <button className="text-purple-700 tracking-wider font-bold" >
        <a href={project.github} target="_blank">
          View Code
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;
