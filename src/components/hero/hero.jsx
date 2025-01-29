import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id="hero" className="hero-bg pt-[65px] rounded-[20px] max-sm:hidden">
      <div className="max-w-7xl mx-auto flex justify-between rounded-[20px]">
        <div className="max-w-[658px] mt-[70px] w-full ml-[50px] pb-[70px] flex flex-col">
          <h1 className="font-bold text-7xl leading-[108px] text-[#111111]">
            {t("hero-text1")}
          </h1>
          <h2 className="font-semibold text-5xl leading-[72px] text-[#2644d8]">
            {t("hero-text2")}
          </h2>
          <p className="max-w-[543px] font-medium text-2xl leading-9 text-[#393939]">
            {t("hero-text3")}
          </p>
          <div className="max-w-[500px] flex flex-wrap mt-[108px] gap-2.5 text-[#393939] text-xl font-medium">
            <Link
              to="/services"
              className="h-[41px] px-[25px] py-2 bg-white/60 rounded-[30px] border border-[#393939] backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex"
            >
              {t("mobile")}
            </Link>
            <Link
              to="/services"
              className="h-[41px] px-[25px] py-2 bg-white/60 rounded-[30px] border border-[#393939] backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex"
            >
              {t("veb")}
            </Link>
            <Link
              to="/services"
              className="h-[41px] px-[25px] py-2 bg-white/60 rounded-[30px] border border-[#393939] backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex"
            >
              {t("erp")}
            </Link>
            <Link
              to="/services"
              className="h-[41px] px-[25px] py-2 bg-white/60 rounded-[30px] border border-[#393939] backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex"
            >
              {t("commerce")}
            </Link>
            <Link
              to="/services"
              className="h-[41px] px-[25px] py-2 bg-white/60 rounded-[30px] border border-[#393939] backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex"
            >
              {t("startup")}
            </Link>
          </div>
          {/* <a href="#contact">
            <button className="py-[10px] px-[50px] mt-[59px] bg-gradient-to-r from-[#3c5aeb] to-[#091d84] border-b-2 border-[#1e2f84] rounded-[15px] text-white font-medium text-[22px] uppercase hover:scale-95">
              {t("start")}
            </button>
          </a> */}
        </div>

        <div className="mt-[140px]">
          {/* <DotLottieReact
            src="https://lottie.host/830b0dd4-3c07-4de7-a9a6-2c3ada652e14/FymIhJJsVu.lottie"
            loop={true}
            autoplay={true}
            className="w-[500px] h-[500px]"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
