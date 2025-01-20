import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  logo,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
} from "../../assets/icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";

const SectionMobile = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
      offset: 10,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-[80px] px-4 sm:hidden">
      <p
        data-aos="fade-right"
        className="flex items-center gap-[10px] font-medium text-[15px] leading-[26px] text-[#2644d9]"
      >
        <span className="h-5 border-[1px] border-[#2644d9] rounded-3xl"></span>
        {t("section")}
      </p>

      <div className="flex flex-col mt-[40px] pb-[30px] px-5 space-y-[30px] rounded-[10px] bg-white shadow-custom">
        <div
          // data-aos="fade-right"
          className="max-w-[470px] w-full mt-[30px] flex flex-col items-center rounded-[20px] bg-[#fff] custom-transition"
        >
          <img
            className="max-w-[249px] w-full max-h-[49px] h-full"
            src={logo}
            alt="logo"
          />
          <p className="mt-2 font-medium text-[11px] leading-[17px]">
            {t("section-text1")}
          </p>
        </div>

        <div
          // data-aos="fade-left"
          className="max-w-[700px] w-full rounded-[20px] bg-[#fff] custom-transition"
        >
          <div className="flex flex-col items-center gap-[6px]">
            <img className="w-[24px] h-[24px]" src={section1} alt="section1" />
            <p className="text-[#393939] text-xl font-semibold">
              {t("section-text2")}
            </p>
          </div>
          <p className="max-w-[318px] mt-2.5 text-center text-[#818796] text-sm font-normal leading-[21px]">
            {t("section-text3")}
          </p>
        </div>

        <div
          // data-aos="fade-right"
          className="rounded-[20px] bg-[#fff] custom-transition"
        >
          <div className="flex flex-col items-center gap-[6px]">
            <img src={section2} className="w-[24px] h-[24px]" alt="section2" />
            <p className="text-[#393939] text-xl font-semibold">
              {t("section-text4")}
            </p>
          </div>
          <p className="max-w-[318px] mt-2.5 text-center text-[#818796] text-sm font-normal leading-[21px]">
            {t("section-text5")}
          </p>
        </div>

        <div
          // data-aos="fade-up"
          className="rounded-[20px] bg-[#fff] custom-transition"
        >
          <div className="flex flex-col items-center gap-[6px]">
            <img src={section3} className="w-[24px] h-[24px]" alt="section3" />
            <p className="text-[#393939] text-xl font-semibold">
              {t("section-text6")}
            </p>
          </div>
          <p className="max-w-[318px] mt-2.5 text-center text-[#818796] text-sm font-normal leading-[21px]">
            {t("section-text7")}
          </p>
        </div>

        <div
          // data-aos="fade-left"
          className="rounded-[20px] bg-[#fff] custom-transition"
        >
          <div className="flex flex-col items-center gap-[6px]">
            <img src={section4} alt="section4" />
            <p className="text-[#393939] text-xl font-semibold">
              {t("section-text8")}
            </p>
          </div>
          <p className="max-w-[318px] mt-2.5 text-center text-[#818796] text-sm font-normal leading-[21px]">
            {t("section-text9")}
          </p>
        </div>

        <div
          // data-aos="fade-right"
          className="rounded-[20px] bg-[#fff] custom-transition"
        >
          <div className="flex flex-col items-center gap-[6px]">
            <img src={section5} className="w-[24px] h-[24px]" alt="section5" />
            <p className="text-[#393939] text-xl font-semibold">
              {t("section-text10")}
            </p>
          </div>
          <p className="max-w-[318px] mt-2.5 text-center text-[#818796] text-sm font-normal leading-[21px]">
            {t("section-text11")}
          </p>
        </div>

        <div
          // data-aos="fade-left"
          className="rounded-[20px] bg-[#fff] custom-transition"
        >
          <div className="flex flex-col items-center gap-[6px]">
            <img src={section6} alt="section6" />
            <p className="text-[#393939] text-xl font-semibold">
              {t("section-text12")}
            </p>
          </div>
          <p className="max-w-[318px] mt-2.5 text-center text-[#818796] text-sm font-normal leading-[21px]">
            {t("section-text13")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionMobile;
