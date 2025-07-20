import React from "react";
import fur1 from "../assets/fur-1.png";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center rounded-none md:rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${fur1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 h-full w-full max-w-[95%] sm:max-w-md md:max-w-xl lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between px-4 md:px-6 py-16 text-white gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            Bringing <span className="text-[#c0a57d]">Simplicity</span> <br />
            In The Furnishing Market
          </h1>
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-sm lg:text-base mb-6 text-gray-200 max-w-md">
            Compatto simplifies the complex process of furnishing all-inclusive,
            boutique & high-end hotels, and luxury residences in Greece &
            Cyprus.
          </p>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-[#c0a57d] transition text-sm">
            Start Your Furnishing Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
