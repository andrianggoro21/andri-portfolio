import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import React from "../assets/react.svg";
import About from "../components/about/about";

const MainPage = () => {
  return (
    <>
      <div className="bg-bg-color max-w-screen min-h-screen ">
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
};
export default MainPage;
