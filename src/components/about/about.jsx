import Man from "../../assets/man.svg";

const About = () => {
  return (
    <div className="bg-bg-color3 max-w-screen min-h-screen flex items-center justify-center">
      <div className="w-4/5 h-500 flex">
        <div className="w-1/2 h-full flex flex-col justify-center gap-4">
          <span className='text-white font-raleway font-extrabold text-48'>About</span>
          <p className='text-white font-raleway font-normal text-lg'>
            An Electrical Engineering Graduate who has a great enthusiast for
            learning about Software Development. Passionate about developing,
            designing, and testing websites. Software skills include HTML, CSS,
            JavaScript, Bootstrap, React.js, and Git. Have interpersonal skills,
            problem-solving, time management, and eager to learn.
          </p>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end">
          <img src={Man} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default About;
