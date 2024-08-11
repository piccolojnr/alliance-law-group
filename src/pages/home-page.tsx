import React from "react";
import { home } from "../_data";
import LeadAttorneys from "./lead-attorneys";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-hero bg-cover bg-center flex items-center justify-start p-16"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-left text-white max-w-4xl">
        <div className="mb-8">
          <p
            className="font-bold text-sm leading-tight mb-4"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            {home.brand}
          </p>
          <p
            className="mt-6 mb-6 text-2xl"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            {home.tagline}
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            {home.slogan}
          </h1>
        </div>
        <LeadAttorneys />
        <button className="mt-8 px-8 py-2 bg-[#b4816b] hover:bg-[#b37b63] text-sm">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
