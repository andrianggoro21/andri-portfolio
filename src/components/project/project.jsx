import Pure from "../../assets/pure.png";
import Cashier from "../../assets/cashier.png";
import Ticket from "../../assets/ticket.png";
import FoodRecipe from "../../assets/food-recipe.png";
import Movie from "../../assets/movie.png";
import FoodJournal from "../../assets/food-journal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Project = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      id="project"
      className="bg-bg-color3 max-w-screen min-h-fit flex justify-center pb-20"
    >
      <div className=" w-full xl:w-4/5 px-6 xl:px-0 h-fit flex flex-col items-center xl:items-start gap-6">
        <div>
          <span className="text-white font-raleway font-extrabold text-48">
            Project
          </span>
        </div>
        <div id="img-project" className="w-full flex items-center gap-12">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex justify-center">
              {" "}
              <div className="w-80 lg:w-350 h-52 lg:h-200 rounded-lg overflow-hidden">
                <img src={Pure} alt="pure" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="px-4 py-2 bg-bg-see text-white rounded"
                    onClick={() =>
                      window.open(
                        "https://github.com/andrianggoro21/PURE",
                        "_blank"
                      )
                    }
                  >
                    See Detail
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-black bg-opacity-45 text-white opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur">
                  <h3 className="text-white font-raleway font-normal text-md">
                    Warehouse Management System
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              {" "}
              <div className="w-80 lg:w-350 h-52 lg:h-200  rounded-lg overflow-hidden">
                <img src={Cashier} alt="cashier" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="px-4 py-2 bg-bg-see text-white rounded"
                    onClick={() =>
                      window.open(
                        "https://github.com/andrianggoro21/mp-jcwd0210-04-fe",
                        "_blank"
                      )
                    }
                  >
                    See Detail
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-black bg-opacity-45 text-white opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur">
                  <h3 className="text-white font-raleway font-normal text-md">
                    Cashier
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              {" "}
              <div className="w-80 lg:w-350 h-52 lg:h-200 rounded-lg overflow-hidden">
                <img src={Ticket} alt="ticket" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="px-4 py-2 bg-bg-see text-white rounded"
                    onClick={() =>
                      window.open(
                        "https://github.com/andrianggoro21/mini-project",
                        "_blank"
                      )
                    }
                  >
                    See Detail
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-black bg-opacity-45 text-white opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur">
                  <h3 className="text-white font-raleway font-normal text-md">
                    Ticket Online App
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              {" "}
              <div className="w-80 lg:w-350 h-52 lg:h-200 rounded-lg overflow-hidden">
                <img
                  src={FoodRecipe}
                  alt="food-recipe"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-bg-see text-white rounded">
                    See Detail
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-black bg-opacity-45 text-white opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur">
                  <h3 className="text-white font-raleway font-normal text-md">
                    Food Receipe
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              {" "}
              <div className="w-80 lg:w-350 h-52 lg:h-200 rounded-lg overflow-hidden">
                <img src={Movie} alt="movie" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="px-4 py-2 bg-bg-see text-white rounded"
                    onClick={() =>
                      window.open(
                        "https://streamin-movie.netlify.app",
                        "_blank"
                      )
                    }
                  >
                    See Detail
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-black bg-opacity-45 text-white opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur">
                  <h3 className="text-white font-raleway font-normal text-md">
                    Movie Streaming
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              {" "}
              <div className="w-80 lg:w-350 h-52 lg:h-200 rounded-lg overflow-hidden">
                <img
                  src={FoodJournal}
                  alt="food-journal"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-bg-see text-white rounded">
                    See Detail
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-black bg-opacity-45 text-white opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur">
                  <h3 className="text-white font-raleway font-normal text-md">
                    Food Journal
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
