import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  partners1,
  partners2,
  partners3,
  partners4,
  partners5,
  partners6,
} from "../../assets/icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,

    centerPadding: "0px",
    slidesToShow: 4,
    speed: 2000,
    dots: false,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEasy: "linear",
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
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div className="max-w-[1240px] ml-[80px] mt-[80px]">
      <p data-aos="fade-right" className="flex items-center gap-5 font-medium text-[22px] leading-[26px] text-[#2644d9]">
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl"></span>
        {t("partners")}
      </p>
      <div className="mt-[40px]">
        <Slider {...settings}>
          <div className="w-[100px] h-[68px] flex items-center justify-center">
            <img className="w-[190px] h-[68px]" src={partners1} alt="partners1" />
          </div>
          <div className="w-[100px] h-[68px] flex items-center justify-center">
            <img className="w-[140px] h-[68px]" src={partners2} alt="partners2" />
          </div>
          <div className="w-[100px] h-[68px] flex items-center justify-center">
            <img className="w-[100px] h-[68px]" src={partners3} alt="partners3" />
          </div>
          <div className="w-[100px] h-[68px] flex items-center justify-center">
            <img className="w-[140px] h-[68px]" src={partners4} alt="partners4" />
          </div>
          <div className="w-[100px] h-[68px] flex items-center justify-center">
            <img className="w-[160px] h-[68px]" src={partners5} alt="partners5" />
          </div>
          <div className="w-[100px] h-[68px] flex items-center justify-center">
            <img className="w-[200px] h-[68px]" src={partners6} alt="partners6" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
