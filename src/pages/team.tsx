import React, { useState } from "react";
import { teamMembers } from "../_data/team";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const TeamMembers: React.FC = () => {
  const [visibleMembers, setVisibleMembers] = useState(12);

  const loadMoreMembers = () => {
    setVisibleMembers((prev) => prev + 12);
  };

  return (
    <section id="team" className="bg-gray-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, visibleMembers).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg transform transition-transform duration-300 bg-gray-200 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150";
                }}
                className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-gray-200 shadow-md
                "
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-500">{member.email}</p>

              {/* socials */}

              <div className="flex gap-4 mt-4">
                {member.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="text-gray-500 hover:text-[#b4816b] transition-colors duration-300"
                  >
                    {social.icon === "F" && <CiFacebook />}
                    {social.icon === "T" && <CiTwitter />}
                    {social.icon === "I" && <CiInstagram />}
                    {social.icon === "L" && <CiLinkedin />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {visibleMembers < teamMembers.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreMembers}
              className="px-8 py-3 bg-[#b4816b] hover:bg-[#b37b63] text-white font-bold rounded-full transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamMembers;
