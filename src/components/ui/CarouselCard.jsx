import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { slides } from "../utils/carouselData";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const CarouselCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      if (delay !== null) {
        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, 3000);

  const handlePrevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlides = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlides);
  };

  const handleNextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlides = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlides);
  };

  return (
    <motion.article
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-[300px] h-[212px] md:max-w-[700px] md:h-[495px] w-full m-auto relative group mb-12"
    >
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div
        onClick={handlePrevSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-slate-800 cursor-pointer"
      >
        <FaAngleLeft size={30} />
      </div>

      <div
        onClick={handleNextSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-slate-800 cursor-pointer"
      >
        <FaAngleRight size={30} />
      </div>
    </motion.article>
  );
};

export default CarouselCard;
