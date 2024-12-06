import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaPhoneAlt,
  FaMailBulk,
  FaSearchLocation,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const FootContent = () => {
  return (
    <article className="w-full flex items-baseline gap-8 md:gap-0 md:justify-between flex-wrap">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="font-bold text-xl">ArthurINC.</h2>
        <p className="md:w-[500px] font-thin mt-4 mb-5">
          This website is made using React JS, if you want to know more, please
          go to my social media below.
        </p>
        <div className="icon flex gap-2">
          <div className="facebook">
            <a href="https://www.facebook.com/dick.ochid">
              <FaFacebook size={20} />
            </a>
          </div>
          <div className="twitter">
            <a href="https://x.com/Kings_Arthur01?t=fEhXFEy7XhgincBuoDoiaQ&s=09">
              <FaTwitter size={20} />
            </a>
          </div>
          <div className="youtube">
            <a href="https://youtube.com/@rasyidamrulfathony1291">
              <FaYoutube size={20} />
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/RasyidAf">
              <FaGithub size={20} />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/arthur_level0/profilecard/?igsh=MzV2NHR1ZTZvaGJw">
              <FaInstagram size={20} />
            </a>
          </div>
          <div className="tiktok">
            <a href="https://www.tiktok.com/@king_arthurpendragon?_t=8ryCtIExylk&_r=1">
              <FaTiktok size={20} />
            </a>
          </div>
          <div className="linkedidn">
            <a href="https://www.linkedin.com/in/rasyid-amrul-fathony-12b411323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pas"
      >
        <h4 className="font-semibold mb-2">Pages</h4>
        <ul>
          <li>
            <a className="font-thin hover:underline" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-thin hover:underline" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-thin hover:underline" href="#skill">
              Skill
            </a>
          </li>
          <li>
            <a className="font-thin hover:underline" href="#learn">
              Learn
            </a>
          </li>
          <li>
            <a className="font-thin hover:underline" href="#project">
              Project
            </a>
          </li>
          <li>
            <a className="font-thin hover:underline" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="contact flex flex-col gap-2"
      >
        <h4 className="font-semibold mb-2">Support</h4>
        <div className="flex font-thin items-center gap-2">
          <FaPhoneAlt /> +62 852-1334-0499
        </div>
        <div className="flex font-thin items-center gap-2">
          <FaMailBulk /> rasyidanaksekolah@gmail.com
        </div>
        <div className="flex font-thin items-center gap-2">
          <FaSearchLocation /> Krandegan RT03/01, Sidorejo, Jatsirono, Wonogiri.
        </div>
      </motion.div>
    </article>
  );
};

export default FootContent;
