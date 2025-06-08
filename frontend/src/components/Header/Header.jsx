import React from "react";
import Container from "../Common/Container";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="relative w-full bg-[var(--very-light-gray)]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
