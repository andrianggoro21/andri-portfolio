import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Project from "../components/project/project";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Loading from "../components/loading/loading";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-bg-color max-w-screen min-h-screen ">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};
export default MainPage;
