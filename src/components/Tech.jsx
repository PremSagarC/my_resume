import React from "react";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { resume } from "../assets";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="text-center"
      >
        <p className="text-3xl font-bold mb-5">SKILLS</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <motion.div
            className="w-28 h-28 flex flex-col justify-center items-center"
            key={tech.name}
          >
            <BallCanvas icon={tech.icon} />
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
      <motion.div className="mt-24 flex justify-center">
        <a
          href={resume}
          download
          className=" bg-tertiary py-3 px-7 text-[20px] rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:text-black-100 hover:bg-white transition-all ease-in-out duration-[400ms] hover:scale-125"
        >
          Download Resume
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
