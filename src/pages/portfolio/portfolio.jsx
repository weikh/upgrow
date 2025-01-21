import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { img1, img2 } from "../../assets/icons/icons";
import PortfolioMobile from "./portfolio.mobile";
import { useTranslation } from "react-i18next";
import "./style.css";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[132px] max-sm:px-4 max-sm:mt-[122px]">
      <div className="max-w-7xl uppercase mx-auto flex justify-between items-center max-sm:flex-col max-sm:items-start">
        <h2 className="text-[#393939] text-[42px] font-semibold leading-[63px] max-sm:text-2xl">
          {t("portfolio")}
        </h2>
        <div className="flex justify-between gap-5 text-[#5b5b5b] text-xs font-medium leading-tight max-sm:overflow-x-scroll max-sm:w-full max-sm:gap-[10px] max-sm:text-sm max-sm:pb-3 max-sm:mt-5">
          <button className="h-[25px] px-5 rounded-[50px] border border-[#2644d8] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("veb")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#2644d8] justify-center items-center inline-flex max-sm:min-w-[200px]">
            {t("mobile")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#2644d8] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("portfolio1")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#2644d8] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("commerce")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#2644d8] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("startup")}
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5 max-sm:hidden">
        <div className="rounded-tl-[20px] rounded-bl-[20px] parent_div">
          <div className="max-w-7xl flex justify-between">
            <div>
              <img
                src={img1}
                className="max-w-[580px] max-h-[420px]"
                alt="img"
              />
            </div>

            <div className="max-w-[580px] w-full h-[436px] pt-10 relative">
              <div className="flex justify-between items-center">
                <p className="text-[#393939] text-4xl font-semibold">Topuy</p>
                <button className="w-[80.14px] h-[25px] rounded-[50px] border border-[#393939] text-[#393939] text-xs font-medium leading-tight">
                  {t("veb")}
                </button>
              </div>
              <p className="max-w-[580px] mt-[34px] text-[#393939] text-2xl font-normal font-['Clash Display'] leading-9">
                Topuy — bu O‘zbekistonda ko‘chmas mulk sotib olish, sotish va
                ijaraga berish bo‘yicha xizmat ko‘rsatadigan onlayn platforma.
                Sayt ko‘chmas mulk bozoridagi jarayonlarni soddalashtirish va
                foydalanuvchilarga qulay sharoit yaratish uchun mo‘ljallangan.
              </p>
              <button className="absolute bottom-10 right-0 max-w-[270.47px] w-full h-10 rounded-[20px] border border-[#2644d8] text-[#2644d8] text-base font-normal leading-normal">
                {t("portfolio2")}{" "}
                <PiArrowUpRightBold
                  className="absolute top-3 right-5"
                  color="#2644d9"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end rounded-tr-[20px] rounded-br-[20px] parent_div1">
          <div className="max-w-7xl flex gap-20 justify-between">
            <div className="max-w-[580px] w-full h-[436px] pt-10 relative">
              <div className="flex justify-between items-center">
                <p className="text-white text-4xl font-semibold">Topuy</p>
                <button className="w-[80.14px] h-[25px] rounded-[50px] border border-white text-white text-xs font-medium leading-tight">
                  {t("veb")}
                </button>
              </div>
              <p className="max-w-[580px] mt-[34px] text-white text-2xl font-normal font-['Clash Display'] leading-9">
                Topuy — bu O‘zbekistonda ko‘chmas mulk sotib olish, sotish va
                ijaraga berish bo‘yicha xizmat ko‘rsatadigan onlayn platforma.
                Sayt ko‘chmas mulk bozoridagi jarayonlarni soddalashtirish va
                foydalanuvchilarga qulay sharoit yaratish uchun mo‘ljallangan.
              </p>
              <button className="absolute bottom-10 left-0 max-w-[270.47px] w-full h-10 rounded-[20px] border border-white text-white text-base font-normal leading-normal">
                {t("portfolio2")}{" "}
                <PiArrowUpRightBold
                  className="absolute top-3 right-5"
                  color="#fff"
                />
              </button>
            </div>

            <div>
              <img
                src={img2}
                className="max-w-[580px] max-h-[420px]"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <PortfolioMobile />
    </div>
  );
};

export default Portfolio;
