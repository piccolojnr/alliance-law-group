import React from "react";
import { Attorney, attorneys } from "../_data";

const LeadAttorneys: React.FC = () => {
  return (
    <div className="bg-[#946a5867] p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {attorneys.map((attorney, index) => (
          <LeadAttorneyCard key={index} attorney={attorney} />
        ))}
      </div>
    </div>
  );
};

export default LeadAttorneys;

const LeadAttorneyCard: React.FC<{ attorney: Attorney }> = ({ attorney }) => {
  return (
    <div className="relative w-full md:w-1/2 hover:z-10">
      <div className="overflow-hidden rounded-lg shadow-lg group">
        <img
          src={attorney.image}
          alt={attorney.name}
          onError={
            ((e: { currentTarget: { src: string } }) => {
              e.currentTarget.src = "/images/placeholder.jpg";
            }) as any
          }
          className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex justify-start items-end p-4 bg-transparent group-hover:bg-black group-hover:bg-opacity-50 transition-all duration-300">
          <div className="transform group-hover:translate-y- group-hover:translate-x-1/3 group-hover:scale-125 transition-transform duration-300">
            <h3
              className="text-xs md:text-sm font-semibold text-white mb-1 transition-all duration-300 group-hover:text-2xl group-hover:mb-2"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              {attorney.name}
            </h3>
            <p
              className="text-xs md:text-xs text-gray-200 transition-all duration-300 group-hover:text-base group-hover:mb-1"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              {attorney.email}
            </p>
            <p
              className="text-xs md:text-xs text-gray-200 transition-all duration-300 group-hover:text-base group-hover:mb-1"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              {attorney.school}
            </p>
            <p
              className="text-xs md:text-xs text-gray-200 transition-all duration-300 group-hover:text-base"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              Experience: {attorney.experience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
