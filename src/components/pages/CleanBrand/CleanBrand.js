import React from "react";
import HeroSection from "../../HeroSection";
import { cleanBrandOne } from "./Data";

function CleanBrand() {
  return (
    <>
      <HeroSection {...cleanBrandOne} />
    </>
  );
}

export default CleanBrand;