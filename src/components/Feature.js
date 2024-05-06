import React from "react";
import intractiveImg from "../assets/desktop/image-interactive.jpg";

const Feature = () => {
  return (
    <div
      id="feature"
      className="relative  container flex max-w-6xl flex-col mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0"
    >
      {" "}
      <img src={intractiveImg} alt="interactive" />
      <div className="top-48 pr-0 bg-gray-100 md:absolute md:right-0 md:py-20 md:pl-20">
        <h2 className="max-w-lg mt-10 mb-6 font-sans text-2xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
          The leader in interactive VR
        </h2>
        <p className="max-w-md text-center md:text-justify">
          {" "}
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Feature;
