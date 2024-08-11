import { services } from "../_data/services";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Main Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                className="flex flex-col items-start justify-start 
                max-w-80
                "
                key={index}
              >
                <div
                  className="text-lg font-bold text-brown-600 mb-4 bg-[#b4816b] px-2 py-1 text-white"
                  style={{ fontFamily: "Abhaya Libre" }}
                >
                  0{index + 1}
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-4 w-32 h-24  object-cover rounded-md"
                />
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "Abhaya Libre" }}
                >
                  {service.title}
                </h2>
                <p style={{ fontFamily: "Abhaya Libre" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/law-cases.jpg" // Replace with the correct image path
            alt="Law Books"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
