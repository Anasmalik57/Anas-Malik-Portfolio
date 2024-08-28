import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";

function Projects() {
  const [toggle, setToggle] = useState("all");

  return (
    <div
      id="Project"
      className="flex flex-col justify-center items-center mt-12 py-4"
    >
      <div
        id="wrapper"
        className="flex justify-between items-center w-full flex-col relative max-w-[1100px] gap-3 tracking-wide"
      >
        <div
          id="title"
          className="w-fit text-5xl text-center font-semibold my-5"
        >
          Projects
        </div>
        <div id="disc" className="mb-10">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>

        {/* Toggle Button */}
        <div
          id="ToggleButtonGroup"
          className="flex border-2 border-purple-600 text-purple-600 text-[11.8px] lg:text-[16px] rounded-xl font-[500] my-7 overflow-hidden"
        >
          <div
            id="ToggleButton"
            onClick={() => setToggle("all")}
            className={`px-2 py-1.5 lg:px-2 lg:py-[14px] rounded-md cursor-pointer hover:bg-slate-900 tracking-widest ${
              toggle === "all" ? "bg-slate-800" : ""
            }`}
          >
            All
          </div>
          <span className="bg-purple-600 w-[1.2px]"></span> 
          <div
            id="ToggleButton"
            onClick={() => setToggle("web app")}
            className={`px-2 py-1.5 lg:px-2 lg:py-[14px] rounded-md cursor-pointer hover:bg-slate-900 tracking-widest ${
              toggle === "web app" ? "bg-slate-800" : ""
            }`}
          > 
            Web App
          </div>
          <span className="bg-purple-600 w-[1.2px]"></span>
          <div
            id="ToggleButton"
            onClick={() => setToggle("android app")}
            className={`px-2 py-1.5 lg:px-2 lg:py-[14px] rounded-md cursor-pointer hover:bg-slate-900 tracking-widest ${
              toggle === "android app" ? "bg-slate-800" : ""
            }`}
          >
            Android App
          </div>
          <span className="bg-purple-600 w-[1.8px]"></span>
          <div
            id="ToggleButton"
            onClick={() => setToggle("machine learning")}
            className={`px-2 py-1.5 lg:px-2 lg:py-[14px] rounded-md cursor-pointer hover:bg-slate-900 tracking-widest ${
              toggle === "machine learning" ? "bg-slate-800" : ""
            }`}
          >
            Machine Learning App
          </div>
        </div>
        {/* Card Container */}
        <div
          id="CardContainer"
          className=" flex justify-center items-center gap-7 flex-wrap "
        >
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}

            {projects.filter((item)=> item.category === toggle).map((project) => <ProjectCard project={project} />)}
        </div>
      </div>
    </div>
  );
}

export default Projects;
