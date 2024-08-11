import React, { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Thomas L’Palmer",
    email: "Tpalmer.ALG@gmail.com",
    school: "[Placeholder School]",
    experience: "[Placeholder Experience]",
    image: "/images/placeholder1.jpg",
  },
  {
    name: "Darren L’Morrison",
    email: "Dmorrison.LP@gmail.com",
    school: "[Placeholder School]",
    experience: "[Placeholder Experience]",
    image: "/images/placeholder2.jpg",
  },
  {
    name: "Attorney Name 3",
    email: "attorney3@example.com",
    school: "[Placeholder School]",
    experience: "[Placeholder Experience]",
    image: "/images/placeholder3.jpg",
  },
  {
    name: "Attorney Name 4",
    email: "attorney4@example.com",
    school: "[Placeholder School]",
    experience: "[Placeholder Experience]",
    image: "/images/placeholder4.jpg",
  },
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-b-lg">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm">{member.email}</p>
              <p className="text-sm">{member.school}</p>
              <p className="text-sm">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
