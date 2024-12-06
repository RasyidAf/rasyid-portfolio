import React from "react";
import Education from "./ui/Education";
import LearnExperience from "./ui/LearnExperience";

const Learn = () => {
  return (
    <section id="learn" className="flex flex-col md:flex-row justify-between gap-4 py-14">
      <Education />
      <LearnExperience />
    </section>
  );
};

export default Learn;
