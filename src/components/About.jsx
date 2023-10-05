import React from "react";
import { SectionWrapper } from "../hoc";


import { motion, spring } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center justify-center">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview!
          </h2>
        </motion.div>

        <motion.p
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center px-2"
          variants={fadeIn("", "", 0.1, 1)}
        >
          <span className="text-[#915eff]">
            Full Stack Web Developer {""}
          </span>
          with a flair for merging creativity and
          technical prowess. Adept at crafting
          user-centered applications by seamlessly
          blending front-end design and back-end
          functionality. Committed to agile
          problem-solving and continuous learning, I
          optimize performance and security while
          integrating emerging technologies. Ready to
          bring innovative thinking and expertise to
          elevate projects and collaborate within a
          dynamic team.
        </motion.p>
      </div>
      <div className="mt-20 mx-3 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <AboutCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
