import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { hero } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="hero"
      className="max-w-[1280px] mx-auto hero-bg mt-[110px] rounded-[20px] max-sm:hidden"
    >
      <div className="flex justify-between rounded-[20px]">
        <div className="max-w-[548px] w-full mt-[27px] ml-[90px] pb-[49px] flex flex-col">
          <h1 className="font-semibold text-7xl leading-[108px] text-[#111111]">
            {t("hero-text1")}
          </h1>
          <h2 className="font-semibold text-[40px] leading-[60px] text-[#111111]">
            {t("hero-text2")}
          </h2>
          <p className="font-normal text-2xl leading-9 text-[#393939]">
            {t("hero-text3")}
          </p>
          <div className="flex flex-wrap mt-[30px] gap-5 font-medium text-xl text-[#5b5b5b]">
            <Link
              to="/services"
              className="py-2 px-[33px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("mobile")}
            </Link>
            <Link
              to="/services"
              className="py-2 px-[21px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("veb")}
            </Link>
            <Link
              to="/services"
              className="py-2 px-[24px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("erp")}
            </Link>
            <Link
              to="/services"
              className="py-2 px-[30px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("commerce")}
            </Link>
            <Link
              to="/services"
              className="py-2 px-[20px] border border-[#5b5b5b] rounded-[15px] hover:bg-[#2d44d9] hover:text-[#fff]"
            >
              {t("startup")}
            </Link>
          </div>
          <a href="#contact">
            <button className="py-[10px] px-[50px] mt-[59px] bg-gradient-to-r from-[#3c5aeb] to-[#091d84] border-b-2 border-[#1e2f84] rounded-[15px] text-white font-medium text-[22px] uppercase hover:scale-95">
              {t("start")}
            </button>
          </a>
        </div>

        <div className="h-inherit">
          <img src={hero} className="w-full h-full object-cover" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
