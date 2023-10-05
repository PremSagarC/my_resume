import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { motion, spring } from "framer-motion";

const AboutCard = ({
  index,
  title,
  icon,
  description,
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn(
          "right",
          spring,
          index * 0.5,
          0.75
        )}
        className="w-full green-pink-gradient p-[1px] rounded-md shadow-card"
      >
        <div
          className="bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-[12px] text-center">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default AboutCard;
