import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p
            className={`${styles.sectionSubText} text-center`}
          >
            My Projects
          </p>
          <h2
            className={`${styles.sectionHeadText} text-center`}
          >
            Projects.
          </h2>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
          ></motion.p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  ); 
};

export default SectionWrapper(Works, "");
