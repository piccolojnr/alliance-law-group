import { useState } from "react";
import { Link } from "react-scroll";

const menu = [
  { name: "Home", link: "home" },
  { name: "About Us", link: "about" },
  { name: "Our Attorneys", link: "team" },
  { name: "Services", link: "services" },
  { name: "Contact", link: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-end items-center py-4 px-6">
        <div className="hidden md:flex space-x-6">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-gray-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
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
          <div className="flex flex-col space-y-4 px-4 py-2">
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                onClick={toggleMenu}
                className="hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
