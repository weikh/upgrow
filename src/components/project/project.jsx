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
      offset: 10,
    });
  });
  return (
    <div className="overflow-hidden mt-20 flex flex-col items-center justify-center bg-custom-gradient max-sm:mt-10">
      <h3
        data-aos="fade-left"
        className="max-w-[842px] mt-10 font-bold text-[42px] leading-[63px] text-[#fff] text-center max-sm:text-lg"
      >
        {t("project")}
      </h3>
      <a
        className="w-full text-center mt-11 mb-10 max-sm:mt-4"
        href="tel:+998777084141"
      >
        <button
          data-aos="fade-right"
          className="max-w-[268px] w-full h-[50px] bg-white rounded-[10px] text-[#1e2f84] text-xl font-medium max-sm:text-base max-sm:font-normal"
        >
          {t("project-text")}
        </button>
      </a>
    </div>
  );
};

export default Project;
