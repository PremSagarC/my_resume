import React, { useState } from "react";
import { fadeIn } from "../utils/motion";
import { GitHub } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  source_link,
  disable,
  tags,
}) => {
  return (
    <motion.div
      variants={fadeIn(
        "up",
        "spring",
        index * 0.18,
        0.75
      )}
      className="flex justify-center relative"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div>
          <p>{name}</p>
          <img
            src={image}
            alt={name}
            className="h-[200px] w-full object-cover rounded-xl mt-3"
          />
          <p className="text-secondary mt-2">
            {description}
          </p>
          <div className="flex gap-3 mb-0">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`${tag.color} text-[14px] mt-2`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute top-[60px] right-7 flex flex-col gap-2">
          <a
            href={source_code_link}
            target="_blank"
            className="p-2 bg-black rounded-full hover:bg-gray-300 hover:text-[#2b3137]"
          >
            <button>
              <GitHub />
            </button>
          </a>
          <a href={source_link} target="_blank">
            <button
              disabled={disable}
              className={`p-2 bg-black rounded-full hover:bg-blue-700 ${
                disable ? "hidden" : "block"
              }`}
            >
              <OpenInNewIcon />
            </button>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
