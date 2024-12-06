import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Rasyid.", "Junior Front End Dev.", "Tech Enthusiast."],
    loop: true,
    typeSpeed: 120,
    backspeed: 100,
    deleteSpeed: 100,
  });

  return (
    <section
      id="home"
      className="h-[90vh] w-full flex justify-center items-center text-white"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center drop-shadow-xl">
        Hello I'm {""} <br className="md:hidden" />
        <span className="text-red-600">{text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
    </section>
  );
};

export default Home;
