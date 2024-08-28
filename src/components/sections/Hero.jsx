import React from "react";
import { Bio } from "../../data/constants.js";
import TypeWriter from "typewriter-effect";
import HeroImg from "../../Images/profile.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion.js";
import StartCanvas from "../canvas/Stars.jsx"

function Hero() {
  return (
    <>
      <div
        id="heroContainer"
        className=" flex justify-center relative px-4 py-8 md:16px lg:px-7 lg:py-20 z-10 [clip-path:polygon(0_0,100%_0,100%_100%,70%_95%,0_100%)]"
      >
        <div className="startContainer">
          <StartCanvas/>
        </div>
        <motion.div {...headContainerAnimation}>
          <div
            id="heroInnerContainer"
            className="relative flex justify-between flex-col lg:flex-row items-center w-full max-w-[69rem] lg:gap-12"
          >
            <div
              id="heroLeftContainer"
              className="w-full order-2 lg:order-1 mb-8 lg:mb-0 tracking-widest flex  flex-col  justify-center items-center gap-1"
            >
              <div
                id="title"
                className="text-4xl font-semibold text-center leading-[3rem]"
              >
                Hi, I am <br /> {Bio.name}
              </div>
              <motion.div {...headTextAnimation}>
                <div
                  id="textLoop"
                  className="text-2xl font-semibold flex leading-10 py-4"
                >
                  I am a
                  <span className="pl-2 text-purple-600 md:text-orange-600 lg:text-green-500">
                    <TypeWriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <div
                  id="subtitle"
                  className="text-[16.2px] leading-9 mb-10 text-slate-500 text-justify px-2"
                >
                  {" "}
                  {Bio.description}{" "}
                </div>
              </motion.div>

              <button
                id="checkResume"
                className="w-[95%] flex justify-center items-center max-w-[200px] md:max-w-[300px] font-semibold py-3  md:py-4 px-0 appearance-auto bg-[#8400ff]  [background:linear-gradient(225deg,#9f00ff_0%,#ff00f5_100%)] rounded-full text-[17px] tracking-widest active:scale-95 shadow-2xl shadow-[#37435b] transition-all"
              >
                {" "}
                Check Resume{" "}
              </button>
            </div>
            <div
              id="heroRightContainer"
              className="w-full order-1 mb-8 lg:mb-0 flex lg:flex-row justify-end items-center flex-col lg:order-2 box-border "
            >
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <img
                    src={HeroImg}
                    className=" rounded-[50%] w-full cursor-pointer h-full max-w-[280px] max-h-[280px] lg:max-w-[400px] lg:max-h-[400px] border-2 border-purple-500 shadow-md hover:shadow-purple-600 transition-all "
                  />
                </Tilt>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
