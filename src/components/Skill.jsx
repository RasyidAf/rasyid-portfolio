import React from "react";
import HeadingTwo from "./ui/HeadingTwo";
import Progress from "./ui/Progress";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Skill = () => {
  return (
    <section id="skill" className="my-10 py-20">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="title text-center"
      >
        <HeadingTwo title={"My Skills"} />
        <p className="mt-10 mb-6">skills that i have.</p>
      </motion.div>
      <div className="progress mt-10">
        <Progress />
      </div>
    </section>
  );
};

export default Skill;
