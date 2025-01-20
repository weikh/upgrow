import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { clients1, clients2, clients3 } from "../../assets/icons/icons";
import { IoStar } from "react-icons/io5";
import "./main.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
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
    <div className="max-w-[1280px] mx-auto mt-[80px]">
      <p
        data-aos="fade-right"
        className="flex items-center gap-5 font-medium text-[22px] leading-[26px] text-[#2644d9] max-sm:px-4 max-sm:gap-[10px] max-sm:text-[15px]"
      >
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl max-sm:border-[1px]"></span>
        {t("clients")}
      </p>
      <div className="mt-[70px] pt-[15px] flex gap-[60px] overflow-x-auto scrollbar-hide max-sm:mt-[30px]">
        <div className="w-[360px] h-[340px] my-[40px] text-center shadow-custom bg-white rounded-[20px] flex-shrink-0 relative mt-[30px] max-sm:h-[220px]">
          <img
            src={clients1}
            alt="clients1"
            className="mx-auto absolute -top-[40px] left-[40%]"
          />
          <p className="mt-[30px] font-bold text-[24px] leading-[36px] text-[#393939] max-sm:text-base max-sm:leading-normal">
            {t("clients1-text1")}
          </p>
          <p className="mt-[5px] font-medium text-[14px] leading-[21px] text-[#393939]">
            {t("clients1-text2")}
          </p>
          <div className="flex gap-1 justify-center mt-5 sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
          <p className="max-w-[301px] mx-auto mt-5 font-medium text-[14px] leading-[21px] text-[#5b5b5b] max-sm:text-xs max-sm:font-normal max-sm:leading-[18px] max-sm:mt-2.5">
            {t("clients1-text3")}
          </p>
          <div className="flex gap-1 justify-center my-5 max-sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
        </div>

        <div className="w-[360px] h-[340px] my-[40px] text-center shadow-custom bg-white rounded-[20px] flex-shrink-0 relative mt-[30px] max-sm:h-[220px]">
          <img
            src={clients2}
            alt="clients2"
            className="mx-auto absolute -top-[40px] left-[40%]"
          />
          <p className="mt-[30px] font-bold text-[24px] leading-[36px] text-[#393939] max-sm:text-base max-sm:leading-normal">
            {t("clients2-text1")}
          </p>
          <p className="mt-[5px] font-medium text-[14px] leading-[21px] text-[#393939]">
            {t("clients2-text2")}
          </p>
          <div className="flex gap-1 justify-center mt-5 sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
          <p className="max-w-[301px] mx-auto mt-5 font-medium text-[14px] leading-[21px] text-[#5b5b5b] max-sm:text-xs max-sm:font-normal max-sm:leading-[18px] max-sm:mt-2.5">
            {t("clients2-text3")}
          </p>
          <div className="flex gap-1 justify-center my-5 max-sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
        </div>

        <div className="w-[360px] h-[340px] my-[40px] text-center shadow-custom bg-white rounded-[20px] flex-shrink-0 relative mt-[30px] max-sm:h-[220px]">
          <img
            src={clients3}
            alt="clients3"
            className="mx-auto absolute -top-[40px] left-[40%]"
          />
          <p className="mt-[30px] font-bold text-[24px] leading-[36px] text-[#393939] max-sm:text-base max-sm:leading-normal">
            {t("clients3-text1")}
          </p>
          <p className="mt-[5px] font-medium text-[14px] leading-[21px] text-[#393939]">
            {t("clients3-text2")}
          </p>
          <div className="flex gap-1 justify-center mt-5 sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
          <p className="max-w-[301px] mx-auto mt-5 font-medium text-[14px] leading-[21px] text-[#5b5b5b] max-sm:text-xs max-sm:font-normal max-sm:leading-[18px] max-sm:mt-2.5">
            {t("clients3-text3")}
          </p>
          <div className="flex gap-1 justify-center my-5 max-sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
        </div>

        <div className="w-[360px] h-[340px] my-[40px] text-center shadow-custom bg-white rounded-[20px] flex-shrink-0 relative mt-[30px] max-sm:h-[220px]">
          <img
            src={clients1}
            alt="clients1"
            className="mx-auto absolute -top-[40px] left-[40%]"
          />
          <p className="mt-[30px] font-bold text-[24px] leading-[36px] text-[#393939] max-sm:text-base max-sm:leading-normal">
            {t("clients1-text1")}
          </p>
          <p className="mt-[5px] font-medium text-[14px] leading-[21px] text-[#393939]">
            {t("clients1-text2")}
          </p>
          <div className="flex gap-1 justify-center mt-5 sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
          <p className="max-w-[301px] mx-auto mt-5 font-medium text-[14px] leading-[21px] text-[#5b5b5b] max-sm:text-xs max-sm:font-normal max-sm:leading-[18px] max-sm:mt-2.5">
            {t("clients1-text3")}
          </p>
          <div className="flex gap-1 justify-center my-5 max-sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
        </div>

        <div className="w-[360px] h-[340px] my-[40px] text-center shadow-custom bg-white rounded-[20px] flex-shrink-0 relative mt-[30px] max-sm:h-[220px]">
          <img
            src={clients2}
            alt="clients2"
            className="mx-auto absolute -top-[40px] left-[40%]"
          />
          <p className="mt-[30px] font-bold text-[24px] leading-[36px] text-[#393939] max-sm:text-base max-sm:leading-normal">
            {t("clients2-text1")}
          </p>
          <p className="mt-[5px] font-medium text-[14px] leading-[21px] text-[#393939]">
            {t("clients2-text2")}
          </p>
          <div className="flex gap-1 justify-center mt-5 sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
          <p className="max-w-[301px] mx-auto mt-5 font-medium text-[14px] leading-[21px] text-[#5b5b5b] max-sm:text-xs max-sm:font-normal max-sm:leading-[18px] max-sm:mt-2.5">
            {t("clients2-text3")}
          </p>
          <div className="flex gap-1 justify-center my-5 max-sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
        </div>

        <div className="w-[360px] h-[340px] my-[40px] text-center shadow-custom bg-white rounded-[20px] flex-shrink-0 relative mt-[30px] max-sm:h-[220px]">
          <img
            src={clients3}
            alt="clients3"
            className="mx-auto absolute -top-[40px] left-[40%]"
          />
          <p className="mt-[30px] font-bold text-[24px] leading-[36px] text-[#393939] max-sm:text-base max-sm:leading-normal">
            {t("clients3-text1")}
          </p>
          <p className="mt-[5px] font-medium text-[14px] leading-[21px] text-[#393939]">
            {t("clients3-text2")}
          </p>
          <div className="flex gap-1 justify-center mt-5 sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
          <p className="max-w-[301px] mx-auto mt-5 font-medium text-[14px] leading-[21px] text-[#5b5b5b] max-sm:text-xs max-sm:font-normal max-sm:leading-[18px] max-sm:mt-2.5">
            {t("clients3-text3")}
          </p>
          <div className="flex gap-1 justify-center my-5 max-sm:hidden">
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
            <IoStar size={21} color={"#ff921e"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
