import React from "react";
import { home } from "../_data";
import LeadAttorneys from "./lead-attorneys";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-hero bg-cover bg-center flex items-center justify-start p-16"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-left text-white max-w-4xl">
        <div className="mb-8">
          <h1
            className="font-black text-[4em] leading-tight mb-4"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            {home.brand}
          </h1>

          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            {home.slogan}
          </h3>
          <p
            className="mt-6 mb-6 text-lg opacity-50"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            {home.tagline}
          </p>
        </div>
        <LeadAttorneys />
        <button className="mt-8 px-8 py-2 bg-[#b4816b60] hover:bg-[#b37b63] text-sm rounded-md">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
