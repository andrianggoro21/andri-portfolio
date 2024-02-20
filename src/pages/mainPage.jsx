import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import React from "../assets/react.svg";
import About from "../components/about/about";
import Skills from "../components/skills/skills";

const MainPage = () => {
  return (
    <>
      <div className="bg-bg-color max-w-screen min-h-screen ">
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
};
export default MainPage;
