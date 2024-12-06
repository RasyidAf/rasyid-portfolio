import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Icon from "../../assets/images/logo Rasyid-Merah.png"

const Nav = () => {
  return (
    <>
      <a href="#" className="md:mr-auto text-red-600 text-xl">
        <img src={Icon} alt="" width={30} />
      </a>
      <a className="hover:underline" href="#home">Home</a>
      <a className="hover:underline" href="#about">About</a>
      <a className="hover:underline" href="#skill">Skill</a>
      <a className="hover:underline" href="#learn">Learn</a>
      <a className="hover:underline" href="#project">Project</a>
      <a className="hover:underline" href="#contact">Contact</a>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center gap-3">
        <div className="hidden md:flex items-center justify-end text-white font-semibold gap-6 w-full">
          <Nav />
        </div>
        <div className="md:hidden flex items-center w-full justify-end">
          <button onClick={handleToggle}>
            {isOpen ? (
              <X size={24} color="#ffff" />
            ) : (
              <Menu size={24} color="#ffff" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="text-white">
          <nav className="md:hidden flex flex-col justify-center items-center gap-1 font-semibold">
            <Nav />
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
