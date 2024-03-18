import Man from "../../assets/man.svg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-bg-color3 max-w-screen min-h-screen flex items-center justify-center "
    >
      <div className="w-4/5 h-full xl:h-500 flex flex-col-reverse xl:flex-row gap-12 xl:gap-0">
        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center gap-4">
          <div className="hidden xl:block">
            <span className="text-white font-raleway font-extrabold text-48">
              About
            </span>
          </div>
          <p className="text-white font-raleway font-normal text-xl tracking-normal text-left">
            An electrical engineering graduate committed to exploring the field
            of software development with enthusiasm to expand knowledge and
            skills in information technology. Possesses a strong understanding
            of technical concepts and basic programming, along with a strong
            desire to become a skilled software developer. Aiming to leverage
            existing technical skills and problem-solving abilities to build a
            successful career in software development. Ready to take on new
            challenges in the world of technology with determination and
            dedication.
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
