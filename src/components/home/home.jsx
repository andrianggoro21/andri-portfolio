import Avatar1 from "../../assets/avatar1.png";
import React from "../../assets/reactjs.svg";
import Html from "../../assets/html.svg";
import Javasript from "../../assets/javascript.svg";
import Typescript from "../../assets/typescript.svg";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandReact,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-bg-color max-w-screen min-h-screen flex items-center justify-center relative pb-24 xl:pb-0 pt-24 xl:pt-0"
      style={{ overflow: "hidden" }}
    >
      <div className="w-full xl:w-4/5 h-screen flex flex-col-reverse xl:flex-row items-center justify-center xl:justify-between px-4">
        <div className="w-full xl:w-1/2 h-1/2 xl:h-4/6 flex flex-col items-center xl:items-start justify-center gap-4">
          <div className="bg-bg-color2 w-28 flex items-center justify-center rounded-lg">
            <span className="text-bg-button font-raleway font-bold text-lg">
              👋 Hello!
            </span>
          </div>
          <div className="text-center xl:text-left">
            <span className="text-white font-raleway font-extrabold text-56">
              Andri <br className="xl:hidden" /> Anggoro
            </span>
          </div>
          <div>
            <span className="text-white font-raleway font-normal text-2xl">
              Software Developer
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            <IconBrandLinkedin color="#A6A6A6" size={36} strokeWidth={1.5} />
            <IconMail color="#A6A6A6" size={36} strokeWidth={1.5} />
            <IconBrandGithub color="#A6A6A6" size={36} strokeWidth={1.5} />
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-1/2 xl:h-4/6 flex items-center justify-center ">
          <div className="avatar-container relative flex items-center justify-center">
            <div
              className="xs:hidden circle absolute animate-spin rounded-full w-550 h-550 z-40"
              style={{ animationDuration: "30s" }}
            >
              {" "}
              <div className="xs:hidden text-white w-16 h-16 bg-bg-color flex items-center rounded-full justify-center absolute top-28 xl:top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={React} alt="react" />
              </div>
              <div className="xs:hidden text-white w-16 h-16 bg-bg-color flex items-center rounded-full justify-center absolute bottom-28 xl:bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <img src={Html} alt="html" />
              </div>
              <div className="xs:hidden text-white w-16 h-16 bg-bg-color flex items-center rounded-full justify-center absolute bottom-1/2 left-28 xl:left-0 transform -translate-x-1/2 translate-y-1/2">
                <img src={Javasript} alt="javscript" />
              </div>
              <div className="xs:hidden text-white w-16 h-16 bg-bg-color flex items-center rounded-full justify-center absolute bottom-1/2 right-12 xl:-right-16 transform -translate-x-1/2 translate-y-1/2">
                <img src={Typescript} alt="typescript" />
              </div>
            </div>
            <div className="w-80 xs:w-60 xl:w-550 xs:h-60 h-80 xl:h-550 rounded-full z-10 bg-bg-button bg-opacity-30 flex items-center justify-center">
              <img src={Avatar1} alt="avatar" className=" w-56 xs:w-40 xl:w-96"  />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <IconBrandReact
          color="#201938"
          size={400}
          strokeWidth={1}
          className="absolute"
          style={{
            left: "-70px",
            bottom: "-300px",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
