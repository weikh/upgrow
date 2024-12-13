import React, { useEffect } from "react";
import "./main.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="h-[300px] mt-[80px] flex flex-col items-center justify-center bg-custom-gradient">
      <h3
        data-aos="fade-down"
        className="max-w-[842px] mt-[50px] font-bold text-[42px] leading-[63px] text-[#fff] text-center"
      >
        {t("project")}
      </h3>
      <button
        data-aos="fade-up"
        className="max-w-[250px] py-[10px] px-[50px] mt-[24px] bg-gradient-to-r from-[#3d5aec] to-[#091e84] rounded-[15px] text-white hover:scale-95 hover:brightness-110 transition-transform duration-300"
      >
        <a href="tel:+998777084141">{t("project-text")}</a>
      </button>
    </div>
  );
};

export default Project;
