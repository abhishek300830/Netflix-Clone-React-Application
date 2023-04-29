import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Netflix = () => {
  // state to check is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // understand it later
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return <Navbar isScrolled={isScrolled} />;
};

export default Netflix;
