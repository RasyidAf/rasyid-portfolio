import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import HeadingTwo from "./ui/HeadingTwo";
import Rasyid from "../assets/images/Me.png";
import TableBio from "./ui/TableBio";
import Button from "./ui/Button";
import RasyidCV from "../assets/images/cvv.png";

const About = () => {
  return (
    <section id="about" className="py-6 my-12">
      <div className="content flex flex-wrap items-end justify-between px-8 md:px-20 md:mt-0">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="bio"
        >
          <div className="head mt-16 px-1 md:px-4">
            <HeadingTwo title="About Me" />
            <p className="mt-10 mb-6">my biodata.</p>
          </div>
          <TableBio />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="image"
        >
          <img src={Rasyid} alt="me" className="max-h-[450px] mb-8" />
          <Button btn={"Download CV"} link={RasyidCV} foto={"RASYID_CV"} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
