import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease", once: false, offset: 10 });
  }, []);

  const servicesData = [
    {
      icon: services1,
      title: t("services1-text1"),
      description: t("services1-text2"),
      points: [
        t("services1-text3"),
        t("services1-text4"),
        t("services1-text5"),
        t("services1-text6"),
      ],
    },
    {
      icon: services2,
      title: t("services2-text1"),
      description: t("services2-text2"),
      points: [
        t("services2-text3"),
        t("services2-text4"),
        t("services2-text5"),
        t("services2-text6"),
        t("services2-text7"),
      ],
    },
    {
      icon: services3,
      title: t("services3-text1"),
      description: t("services3-text2"),
      points: [
        t("services3-text3"),
        t("services3-text4"),
        t("services3-text5"),
        t("services3-text6"),
      ],
    },
    {
      icon: services4,
      title: t("services4-text1"),
      description: t("services4-text2"),
      points: [
        t("services4-text3"),
        t("services4-text4"),
        t("services4-text5"),
      ],
    },
    {
      icon: services5,
      title: t("services5-text1"),
      description: t("services5-text2"),
      points: [
        t("services5-text3"),
        t("services5-text4"),
        t("services5-text5"),
      ],
    },
    {
      icon: services6,
      title: t("services6-text1"),
      description: t("services6-text2"),
      points: [
        t("services6-text3"),
        t("services6-text4"),
        t("services6-text5"),
        t("services6-text6"),
        t("services6-text7"),
      ],
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto pt-[100px] max-sm:hidden">
      <p
        data-aos="fade-right"
        className="flex items-center gap-5 font-medium text-[22px] text-[#2644d8]"
      >
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl"></span>
        {t("services1")}
      </p>
      <div>
        <Swiper
          direction={"horizontal"}
          slidesPerView={3}
          spaceBetween={0}
          speed={1000}
          mousewheel={{
            releaseOnEdges: true,
            sensitivity: 1,
          }}
          modules={[Mousewheel]}
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[380px] w-full h-[470px] rounded-[20px] my-[40px] p-[30px] bg-gradient-to-b from-[#d4dbff] to-white hover:bg-none shadow-custom">
                <div className="flex gap-4 pb-[30px] items-center font-semibold text-2xl text-[#111111] border-b border-b-[#818796]">
                  <img
                    width={24}
                    height={24}
                    src={service.icon}
                    alt={service.title}
                  />
                  {service.title}
                </div>
                <p className="max-w-[285px] mt-[30px] font-medium text-base leading-relaxed text-[#393939]">
                  {service.description}
                </p>
                <ul className="list-disc ml-[15px] mt-[30px] max-w-[310px] text-[#818796] text-base font-normal leading-relaxed space-y-2 marker:text-[#818796]">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
