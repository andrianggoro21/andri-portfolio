import Man from "../../assets/man.svg";

const About = () => {
  return (
    <div id="about" className="bg-bg-color3 max-w-screen min-h-screen flex items-center justify-center ">
      <div className="w-4/5 h-full xl:h-500 flex flex-col-reverse xl:flex-row gap-12 xl:gap-0">
        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center gap-4">
          <div className="hidden xl:block">
            <span className="text-white font-raleway font-extrabold text-48">
              About
            </span>
          </div>
          <p className="text-white font-raleway font-normal text-xl text-justify tracking-normal xl:text-left">
            An Electrical Engineering Graduate who has a great enthusiast for
            learning about Software Development. Passionate about developing,
            designing, and testing websites. Software skills include HTML, CSS,
            JavaScript, Bootstrap, React.js, and Git. Have interpersonal skills,
            problem-solving, time management, and eager to learn.
          </p>
        </div>
        <div className="w-full xl:w-1/2 h-full flex items-center justify-center xl:justify-end">
          <img src={Man} alt="man" />
        </div>
        <div className="flex xl:hidden justify-center">
          <span className="text-white font-raleway font-extrabold text-48">
            About
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
