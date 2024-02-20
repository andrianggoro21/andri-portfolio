import Avatar from "../../assets/avatar.svg";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconBrandReact,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <div
      className="bg-bg-color max-w-screen min-h-screen flex items-center justify-center relative"
      style={{ overflow: "hidden" }}
    >
      <div className="w-4/5 h-screen flex justify-between">
        <div className="w-1/2 h-4/6 flex flex-col justify-center gap-4">
          <div className="bg-bg-color2 w-28 flex items-center justify-center rounded-lg">
            <span className="text-bg-button font-raleway font-bold text-xl">
              👋 Hello!
            </span>
          </div>
          <div>
            <span className="text-white font-raleway font-extrabold text-56">
              It's Andri Anggoro
            </span>
          </div>
          <div>
            <span className="text-white font-raleway font-normal text-2xl">
              Software Developer
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            <IconBrandLinkedin color="#A6A6A6" size={36} strokeWidth={1.5} />
            <IconBrandInstagram color="#A6A6A6" size={36} strokeWidth={1.5} />
            <IconMail color="#A6A6A6" size={36} strokeWidth={1.5} />
          </div>
        </div>
        <div className="w-1/2 h-4/6 flex items-center justify-end">
          <img src={Avatar} alt="" />
        </div>
      </div>
      <IconBrandReact
        color="#201938"
        size={500}
        strokeWidth={1}
        className="absolute"
        style={{
          left: "-90px",
          bottom: "-350px",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default Home;
