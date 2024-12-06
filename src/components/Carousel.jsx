import React from "react";
import CarouselCard from "./ui/CarouselCard";
import HeadingTwo from "./ui/HeadingTwo";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Carousel = () => {
  return (
    <section className="flex flex-col justify-center items-center py-4">
      <motion.article
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="head mt-10"
      >
        <HeadingTwo title={"My Awards"} />
        <p className="mt-10 mb-6">just some achievement</p>
      </motion.article>
      <CarouselCard />
    </section>
  );
};

export default Carousel;
