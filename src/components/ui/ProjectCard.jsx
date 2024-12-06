import React from "react";
import cardData from "../utils/cardData";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const ProjectCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {cardData.map((card, index) => (
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          key={index}
          className="text-white rounded-lg overflow-hidden relative group shadow-[6px_6px_20px_-1px_rgba(255,_0,_0,_0.3)]"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full max-w-[350px] h-[196.88px] rounded-lg"
          />
          <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-red-600/50 group-hover:backdrop-blur-sm divide-neutral-500 duration-500">
            <div className="">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="font-thin mt-4 mb-2">{card.description}</p>
              <Button link={card.link} btn={"View >>"} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
