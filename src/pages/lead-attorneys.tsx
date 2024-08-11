import React from "react";
import { attorneys } from "../_data";

const LeadAttorneys: React.FC = () => {
  return (
    <div className="bg-[#b4816b] p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {attorneys.map((attorney, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg  border-4 border-white"
            />
            <h3
              className="text-2xl font-semibold mb-1"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              {attorney.name}
            </h3>
            <p className="text-sm text-gray-100 mb-2">{attorney.email}</p>
            <p className="text-sm text-gray-200">{attorney.school}</p>
            <p className="text-sm text-gray-200">
              Experience: {attorney.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadAttorneys;
