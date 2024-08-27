import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sports.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        display: "block",
        background: "white",
        right: "13%",
        top: "50%",
        zIndex: "1",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        left: "10%",
        top: "50%",
        zIndex: "1",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

const sports = [
  { name: "Athletics", image: "../../Sports/Athletics.svg" },
  { name: "Badminton", image: "../../Sports/Badminton.svg" },
  { name: "Basket Ball", image: "../../Sports/Basketball.svg" },
  { name: "Squash", image: "../../Sports/Squash.svg" },
  { name: "Swimming", image: "../../Sports/Swimming.svg" },
  { name: "Volleyball", image: "../../Sports/Volleyball.svg" },
];

const Sports = () => {
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container mx-auto my-8 bg-black w-[100vw] flex flex-col justify-center items-center">
      <h2 className="text-center sm:text-7xl text-4xl text-white mt-8 sm:h-[100px] h-[80px] font-bold mb-4">
        Sports at Play
      </h2>
      <div className="sports sm:text-lg text-base lg:px-[100px] sm:px-[50px] px-[10px] sm:min-h-[0vh] min-h-[35vh] sm:max-h-[35vh] w-[90vw] text-white mb-5">
        Welcome to the highly anticipated Inter-IIT Sports Meet, 2024! This
        year's competition promises to be an exhilarating showcase of athletic
        talent, teamwork, and sportsmanship. Here's a glimpse into the exciting
        games that will be featured:
      </div>
      <Slider
        {...settings}
        className="btn overflow-visible w-[100vw] flex flex-row justify-center items-center"
      >
        {sports.map((sport, index) => (
          <div key={index} className="sports_main p-5 sm:w-[600px] w-[500px]">
            <div className="sports relative sm:w-[500px] w-[500px] saturate-[0.4] contrast-[0.7] hover:saturate-[1] hover:contrast-[1] hover:brightness-150 transition-all hover:scale-105 hover:z-10">
              <img
                src={sport.image}
                alt={sport.name}
                className="sports w-[500px] sm:h-[325px] h-[225px] object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="sports_name  text-white text-center text-xl font-semibold">
                  {sport.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sports;
