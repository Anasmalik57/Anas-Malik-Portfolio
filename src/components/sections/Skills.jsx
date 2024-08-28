import React from "react";
import { skills } from "../../data/constants.js";
import { Tilt } from "react-tilt";

function Skills() {
  return (
    <>
      <div
        id="skills"
        className=" flex flex-col justify-center items-center relative z-10"
      >
        <div
          id="wrapper"
          className="flex justify-between items-center w-full flex-col relative max-w-[1100px] gap-3 tracking-wide"
        >
          <div
            id="Title"
            className="  w-fit text-5xl text-center font-semibold mt-5  "
          >
            Skills
          </div>
          <div
            id="Desc"
            className="w-fit text-lg md:text-[20px] text-center font-[600] text-slate-600 mb-10 tracking-wider"
          >
            {" "}
            Here are some of my skills on which I have been worked past 3 years{" "}
          </div>

          <div
            id="SkillsContainer"
            className=" w-full flex flex-wrap mt-5 gap-12 justify-center  cursor-pointer"
          >
            {skills.map((skill, index) => (
              <Tilt>

              <div
                id="Skill" 
                key={`skill-${index}`}
                className="w-full max-w-[330px] md:max-w-[400px] lg:max-w-[500px] bg-[#111928d4] border border-slate-600 shadow-lg shadow-[#175ce626] rounded-2xl px-9 py-4"
              >
                <div id="SkillTitle" className="text-3xl font-[600] text-slate-500 text-clip mb-5 text-center">{skill.title} </div>
                <div id="SkillList" className="flex justify-center flex-wrap gap-3 mb-5">
                  {skill.skills.map((item, index_x) => (
                    <div id="skillItem" key={`skill-x-${index_x}`} className="text-[14px] px-3 py-1.5  md:px-3 md:py-2 lg:text-[16px] font-[400] text-slate-400 border-[1px] border-slate-400 text-center flex justify-center items-center lg:px-4 lg:py-3 rounded-xl gap-2 ">
                      <img src={item.image} className="w-6 h-6 text-center" />
                      {item.name}
                    </div>
                  ))}{" "}
                </div>
              </div>
              </Tilt>

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
