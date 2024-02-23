import { useEffect, useState } from "react";

const Loading = () => {
  const [dotColor, setDotColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotColor((prevColor) => (prevColor + 1) % 5);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const dots = ['.', '..', '...', '....', '.....'];
  return (
    <div className="bg-bg-color max-w-screen min-h-screen flex flex-col items-center justify-center">
      <span className="text-white font-raleway font-extrabold text-4xl">
        Loading
      </span>
      <span
        className={`text-white font-raleway font-extrabold text-4xl`}
      >
         {dots[dotColor]}
      </span>
    </div>
  );
};

export default Loading;