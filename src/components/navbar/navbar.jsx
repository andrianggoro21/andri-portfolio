import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center py-14 ">
      <nav className="bg-bg-color2 bg-opacity-70 w-4/5 h-14 rounded-xl flex items-center justify-between px-2 fixed z-50">
        <img src={Logo} alt="logo" />
        <div className="flex items-center gap-12">
          <a href="#" className="text-white font-raleway font-normal text-lg">
            Home
          </a>
          <a href="#" className="text-white font-raleway font-normal text-lg">
            About
          </a>
          <a href="#" className="text-white font-raleway font-normal text-lg">
            Project
          </a>
          <a href="#" className="text-white font-raleway font-normal text-lg">
            Contact
          </a>
          <button
            type="button"
            className="text-white font-raleway font-normal text-base bg-bg-button px-3 py-1 rounded-lg"
          >
            Download CV
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
