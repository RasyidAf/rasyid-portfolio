import React from "react";
import HeadingTwo from "./HeadingTwo";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const LearnExperience = () => {
  const exps = [
    {
      heading: "Youtube - Autodidact",
      sub: "learn independently by searching on youtube.",
    },
    {
      heading: "Class Industri - Crocodic",
      sub: "sign up for a class at software house crocodic and learn front end developer.",
    },
    {
      heading: "Dicoding - Online Class",
      sub: " seek more structured knowledge by registering for online classes at dicoding.",
    },
    {
      heading: "Dunia Coding - Online Seminars",
      sub: "seek additional knowledge by attending seminars",
    },
  ];

  return (
    <aside className="p-10">
      <HeadingTwo title={"Learning Experience"} />
      <div className="cards flex flex-col gap-6 mt-4 px-2">
        {exps.map((exp, index) => (
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="card md:w-[550px] shadow-[5px_5px_12px_4px_rgba(255,_0,_0,_0.35)] hover:bg-red-600 p-4 group cursor-pointer"
            key={index}
          >
            <h3 className="text-lg font-semibold text-red-500 group-hover:text-white">
              {exp.heading}
            </h3>
            <p className="font-thin">{exp.sub}</p>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default LearnExperience;
