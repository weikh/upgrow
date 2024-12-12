import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import {hero} from '../../assets/icons/icons'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1280px] min-h-[536px] mx-auto mt-[20px] border border-black flex justify-between hero-bg rounded-tr-[20px] rounded-br-[20px]">
      <div className="max-w-[433px] w-full mt-[27px] ml-[90px] mb-[49px] flex flex-col border border-black">
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
          <button className="py-2 px-[33px] border border-[#5b5b5b] rounded-[15px]">
            {t("mobile")}
          </button>
          <button className="py-2 px-[21px] border border-[#5b5b5b] rounded-[15px]">
            {t("veb")}
          </button>
          <button className="py-2 px-[24px] border border-[#5b5b5b] rounded-[15px]">
            {t("erp")}
          </button>
          <button className="py-2 px-[30px] border border-[#5b5b5b] rounded-[15px]">
            {t("commerce")}
          </button>
          <button className="py-2 px-[20px] border border-[#5b5b5b] rounded-[15px]">
            {t("startup")}
          </button>
        </div>
        <button className="max-w-[250px] py-[10px] px-[50px] mt-[59px] bg-gradient-to-r from-[#3d5aec] to-[#091e84] rounded-[15px] text-white">
          {t("start")}
        </button>
      </div>
      <div className="border border-black rounded-tr-[20px] rounded-br-[20px]">
         <img src={hero} className="w-full h-full" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
