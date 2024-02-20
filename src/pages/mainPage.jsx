import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Project from "../components/project/project";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

const MainPage = () => {
  return (
    <>
      <div className="bg-bg-color max-w-screen min-h-screen ">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default MainPage;
