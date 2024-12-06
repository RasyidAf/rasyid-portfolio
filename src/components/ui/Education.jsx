import React from "react";
import HeadingTwo from "./HeadingTwo";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Education = () => {
  const edu = [
    {
      school: "Elementary School",
      years: "2014 - 2020",
      info: "I entered elementary school in 2014 at the age of 7 and graduated in 2020.",
    },
    {
      school: "Junior High School",
      years: "2020 - 2023",
      info: "then I entered junior high school in 2020 during the corona pandemic and graduated in 2023",
    },
    {
      school: "Vocational High School",
      years: "2023 - 2026",
      info: "after that when entering vocational school in 2023 and taking the pplg major",
    },
  ];

  return (
    <article className="p-10 ">
      <HeadingTwo title={"My Education"} />
      {edu.map((li, index) => (
        <motion.ul
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          key={index}
          className="px-8 py-4 mt-4 md:w-[500px] border-l border-solid border-red-500"
        >
          <li className="font-bold text-red-700">{li.years}</li>
          <li className="text-xl font-semibold">{li.school}</li>
          <li className="font-thin text-justify">{li.info}</li>
        </motion.ul>
      ))}
    </article>
  );
};

export default Education;
