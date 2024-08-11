import React from "react";
import { testimonials } from "../_data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#B6866B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-start">
          <h2
            className="text-4xl font-extrabold text-white mb-2"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            Client Testimonials
          </h2>
          <p
            className="text-2xl text-[#A0735C] mb-6"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            We are honored to serve you
          </p>
        </div>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              className="text-white"
              key={index}
              style={{ fontFamily: "Abhaya Libre" }}
            >
              <p
                className="text-lg mb-2"
                style={{ fontFamily: "Abhaya Libre" }}
              >
                <span className="text-lg font-serif font-bold">&ldquo;</span>
                {testimonial.quote}
              </p>
              <footer
                className="font-semibold mt-2"
                style={{ fontFamily: "Abhaya Libre" }}
              >
                - {testimonial.name}, {testimonial.title}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
