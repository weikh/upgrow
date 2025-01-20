import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Rasmlarni import qilish
import {
  partners1,
  partners2,
  partners3,
  partners4,
  partners5,
  partners6,
} from "../../assets/icons/icons";

const Partners = () => {
  useEffect(() => {
    // AOS animatsiyasini boshlash
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
      offset: 10,
    });
  }, []);

  // Slider sozlamalari
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 4000,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.8 },
      },
    ],
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-[80px]">
      {/* Sarlavha */}
      <p
        data-aos="fade-right"
        className="flex items-center gap-5 font-medium text-[22px] leading-[26px] text-[#2644d9] max-sm:px-4"
      >
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl max-sm:border-[1px]"></span>
        Bizning hamkorlarimiz
      </p>

      {/* Slider */}
      <div className="mt-[40px]">
        <Slider {...settings}>
          {[
            partners1,
            partners2,
            partners3,
            partners4,
            partners5,
            partners6,
          ].map((partner, index) => (
            <div
              key={index}
              className="w-[190px] h-[68px] flex items-center justify-center"
            >
              <img
                className="w-[190px] h-[68px] filter grayscale hover:grayscale-0 transition"
                src={partner}
                alt={`partner-${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
