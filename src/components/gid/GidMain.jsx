import React from "react";
import GeographyHero from "../gid/GidHero";
import GidNavigation from "./GidNavigation";

const GidMain = () => {
  return (
    <div className="main">
      <GeographyHero/>
      <GidNavigation/>
    </div>
  );
}

export default GidMain