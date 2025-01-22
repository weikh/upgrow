import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "../../assets/icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,

    centerPadding: "10px",
    slidesToShow: 3,
    speed: 4000,
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
      offset: 10,
    });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto pt-[100px] max-sm:hidden">
      <p
        data-aos="fade-right"
        className="flex items-center gap-5 font-medium text-[22px] leading-[26px] text-[#2644d9]"
      >
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl"></span>
        {t("services1")}
      </p>
      <div className="mt-[0px]">
        <Slider {...settings}>
          <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
            <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
              <img width={24} height={24} src={services1} alt="services1" />{" "}
              {t("services1-text1")}
            </div>
            <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
              {t("services1-text2")}
            </p>
            <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#393939] text-base font-normal leading-relaxed space-y-2 marker:text-[#393939]">
              <li>{t("services1-text3")}</li>
              <li>{t("services1-text4")}</li>
              <li>{t("services1-text5")}</li>
              <li>{t("services1-text6")}</li>
            </ul>
          </div>

          <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
            <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
              <img width={24} height={24} src={services2} alt="services2" />{" "}
              {t("services2-text1")}
            </div>
            <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
              {t("services2-text2")}
            </p>
            <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#393939] text-base font-normal leading-relaxed space-y-2 marker:text-[#393939]">
              <li>{t("services2-text3")}</li>
              <li>{t("services2-text4")}</li>
              <li>{t("services2-text5")}</li>
              <li>{t("services2-text6")}</li>
              <li>{t("services2-text7")}</li>
            </ul>
          </div>

          <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
            <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
              <img width={24} height={24} src={services3} alt="services3" />{" "}
              {t("services1-text1")}
            </div>
            <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
              {t("services3-text2")}
            </p>
            <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#393939] text-base font-normal leading-relaxed space-y-2 marker:text-[#393939]">
              <li>{t("services3-text3")}</li>
              <li>{t("services3-text4")}</li>
              <li>{t("services3-text5")}</li>
              <li>{t("services3-text6")}</li>
            </ul>
          </div>

          <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
            <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
              <img width={24} height={24} src={services4} alt="services4" />{" "}
              {t("services4-text1")}
            </div>
            <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
              {t("services4-text2")}
            </p>
            <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#393939] text-base font-normal leading-relaxed space-y-2 marker:text-[#393939]">
              <li>{t("services4-text3")}</li>
              <li>{t("services4-text4")}</li>
              <li>{t("services4-text5")}</li>
            </ul>
          </div>

          <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
            <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
              <img width={24} height={24} src={services5} alt="services5" />{" "}
              {t("services5-text1")}
            </div>
            <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
              {t("services5-text2")}
            </p>
            <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#393939] text-base font-normal leading-relaxed space-y-2 marker:text-[#393939]">
              <li>{t("services5-text3")}</li>
              <li>{t("services5-text4")}</li>
              <li>{t("services5-text5")}</li>
            </ul>
          </div>

          <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
            <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
              <img width={24} height={24} src={services6} alt="services6" />{" "}
              {t("services6-text1")}
            </div>
            <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
              {t("services6-text2")}
            </p>
            <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#393939] text-base font-normal leading-relaxed space-y-2 marker:text-[#393939]">
              <li>{t("services6-text3")}</li>
              <li>{t("services6-text4")}</li>
              <li>{t("services6-text5")}</li>
              <li>{t("services6-text6")}</li>
              <li>{t("services6-text7")}</li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
