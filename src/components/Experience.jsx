import React from "react";
import { SectionWrapper } from "../hoc";
import { motion, spring } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div variants={textVariant()} className="">
        <div>
          <p
            className={`${styles.sectionSubText} text-center`}
          >
            What I have done so far
          </p>
          <h2
            className={`${styles.sectionHeadText} text-center`}
          >
            Work Experience.
          </h2>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default SectionWrapper(Experience, "work");
