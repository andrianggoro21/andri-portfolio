import { useState } from "react";
import Logo from "../../assets/logo.png";
// import { IconSun, IconMoon } from "@tabler/icons-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    8;
  };

  return (
    <div
      className={`flex items-center justify-center relative top-14 ${
        showMenu ? "pb-72" : ""
      }`}
    >
      <nav className="bg-bg-color2 bg-opacity-70 mx-auto w-72 md:w-4/5 h-14 rounded-xl flex items-center justify-between px-2 fixed z-50">
        <img src={Logo} alt="logo" className="h-10" />
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white font-raleway font-normal text-lg"
            onClick={toggleMenu}
          >
            <span
              className={`block h-1 w-6 bg-white my-1 rounded transition-all duration-300 ${
                showMenu ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white my-1 rounded transition-all duration-300 ${
                showMenu ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white my-1 rounded transition-all duration-300 ${
                showMenu ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white font-raleway font-normal text-lg cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-raleway font-normal text-lg cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-raleway font-normal text-lg cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-raleway font-normal text-lg cursor-pointer"
          >
            Project
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-raleway font-normal text-lg cursor-pointer"
          >
            Contact
          </Link>
          <button
            type="button"
            className="text-white font-raleway font-normal text-base bg-bg-button px-3 py-1 rounded-lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1SGC40mT6t-TYxkwYXaplbMfKsO9hRk4E/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download CV
          </button>
          {/* <button type="button" className="bg-bg-light px-3 py-1 rounded-lg">
            <IconSun color="white" />
          </button> */}
        </div>
        {showMenu && (
          <div className="absolute top-full left-0 bg-bg-color2 w-full py-2 flex flex-col items-center gap-3 rounded-xl">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white font-raleway font-normal text-lg cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={500}
              className="text-white font-raleway font-normal text-lg cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white font-raleway font-normal text-lg cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white font-raleway font-normal text-lg cursor-pointer"
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white font-raleway font-normal text-lg cursor-pointer"
            >
              Contact
            </Link>
            <div className="flex items-center gap-6 mb-2">
              <button
                type="button"
                className="text-white font-raleway font-normal text-base bg-bg-button px-3 py-1 rounded-lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1jhocTctSMkTKUjxVXOfuNXHrBy98wBFS/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Download CV
              </button>
              {/* <button
                type="button"
                className="bg-bg-light px-3 py-1 rounded-lg"
              >
                <IconSun color="white" />
              </button> */}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
