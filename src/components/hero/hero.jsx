import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { hero } from "../../assets/icons/icons";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="hero"
      className="max-w-[1280px] mx-auto hero-bg mt-[110px] rounded-[20px] max-sm:hidden"
    >
      <div className="flex justify-between rounded-[20px]">
        <div className="max-w-[433px] w-full mt-[27px] ml-[90px] mb-[49px] flex flex-col">
          <h1 className="font-bold text-[72px] leading-[108px] text-[#393939]">
            {t("hero-text1")}
          </h1>
          <h2 className="font-bold text-[40px] leading-[60px] text-[#393939]">
            {t("hero-text2")}
          </h2>
          <p className="font-normal text-[24px] leading-[36px] text-[#5b5b5b]">
            {t("hero-text3")}
          </p>
          <div className="flex flex-wrap mt-[30px] gap-5 font-medium text-xl leading-6 text-[20px] text-[#5b5b5b]">
            <a
              href="#services"
              className="py-2 px-[33px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("mobile")}
            </a>
            <a
              href="#services"
              className="py-2 px-[21px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("veb")}
            </a>
            <a
              href="#services"
              className="py-2 px-[24px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("erp")}
            </a>
            <a
              href="#services"
              className="py-2 px-[30px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("commerce")}
            </a>
            <a
              href="#services"
              className="py-2 px-[20px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("startup")}
            </a>
          </div>
          <a href="#contact">
            <button className="py-[10px] px-[50px] mt-[59px] bg-gradient-to-r from-[#3d5aec] to-[#091e84] rounded-[15px] text-white font-medium text-[22px] leading-[26px] uppercase hover:scale-95">
              {t("start")}
            </button>
          </a>
        </div>

        <div>
          <img src={hero} className="w-full h-full" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
