import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className="min-h-screen animated-background w-full bg-gradient-to-br from-red-900 via-gray-900 to-red-900 font-Montserrat">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Container;
