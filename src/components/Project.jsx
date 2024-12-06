import React from "react";
import HeadingTwo from "./ui/HeadingTwo";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Project = () => {
  return (
    <section id="project" className="my-10 py-20">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="title text-center"
      >
        <HeadingTwo title={"My Projects"} />
        <p className="mt-10 mb-6">what projects i make</p>
      </motion.div>
      <article className="cards-project">
        <ProjectCard />
      </article>
    </section>
  );
};

export default Project;
