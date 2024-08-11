import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-end items-center py-4 px-6">
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#attorneys" className="hover:text-gray-400">
            Our Attorneys
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
            About Us
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
            Our Attorneys
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
