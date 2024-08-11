import React from "react";
import { about } from "../_data/about";

//UI
const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white p-10 flex flex-col justify-between "
    >
      {/* Title */}
      <h1
        className="text-5xl font-bold mb-16 text-start"
        style={{ fontFamily: "Abhaya Libre" }}
      >
        About Our Firm
      </h1>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {about.map((item, index) => (
          <div className="flex flex-col items-start justify-start" key={index}>
            <div
              className="text-lg font-bold text-brown-600 mb-4 bg-[#b4816b] px-2 py-1 "
              style={{ fontFamily: "Abhaya Libre" }}
            >
              0{index + 1}
            </div>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              {item.title}
            </h2>
            <p style={{ fontFamily: "Abhaya Libre" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
