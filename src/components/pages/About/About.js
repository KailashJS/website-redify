import React from "react";
import HeroSection from "../../HeroSection";
import { aboutOne } from "./Data";

function About() {
  return (
    <>
      <HeroSection {...aboutOne} />
    </>
  );
}

export default About;