import React from "react";
import HeroSection from "../../HeroSection";
import { collaborateOne } from "./Data";

function Collaborate() {
  return (
    <>
      <HeroSection {...collaborateOne} />
    </>
  );
}

export default Collaborate;