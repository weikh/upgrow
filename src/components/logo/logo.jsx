import React from "react";
import "./main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animatelogo } from "../../assets/icons/icons";

const Logo = () => {
  const settings = {
    className: "center",
    centerMode: true,

    centerPadding: "0px",
    slidesToShow: 9,
    speed: 4000,
    dots: false,

    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full h-[40px] custom-gradient mx-auto">
      <Slider {...settings}>
        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <img
            src={animatelogo}
            alt="animatelogo"
            className="w-full h-auto max-w-[100px] my-2.5 object-contain"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Logo;
