import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Progress = () => {
  const skills = [
    { name: "HTML5", completed: 95 },
    { name: "CSS3", completed: 95 },
    { name: "JavaScript", completed: 42 },
    { name: "Tailwind CSS", completed: 30 },
    { name: "React JS", completed: 67 },
    { name: "Java", completed: 16 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6  shadow-md text-white">
      <div className="flex flex-wrap justify-between gap-10">
        {skills.map((skill, index) => (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className="w-full md:w-[48%] mb-5"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium">{skill.name}</h4>
              <span className="text-sm font-light">{skill.completed}%</span>
            </div>
            <ProgressBar
              completed={skill.completed}
              height="12px"
              baseBgColor="#374151"
              bgColor="#FF0000"
              labelSize="12px"
              isLabelVisible={false}
              className="rounded-full shadow-[5px_5px_20px_0px_rgba(255,_0,_0,_0.35)]"
              animateOnRender={true}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
