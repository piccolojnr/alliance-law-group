import React, { useState } from "react";
import { teamMembers } from "../_data/team";

const TeamMembers: React.FC = () => {
  const [visibleMembers, setVisibleMembers] = useState(8);

  const loadMoreMembers = () => {
    setVisibleMembers((prev) => prev + 8);
  };

  return (
    <section className="bg-gray-400  py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, visibleMembers).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-lg p-4 rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        {visibleMembers < teamMembers.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreMembers}
              className="px-8 py-2 bg-[#b4816b] hover:bg-[#b37b63] text-white font-semibold rounded"
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
