import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { img1, img2, img3, img4, img5 } from "../../assets/icons/icons";
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
          <button className="h-[25px] px-5 rounded-[50px] border border-[#5b5b5b] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("veb")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#5b5b5b] justify-center items-center inline-flex max-sm:min-w-[200px]">
            {t("mobile")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#5b5b5b] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("portfolio1")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#5b5b5b] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("commerce")}
          </button>
          <button className="h-[25px] px-5 rounded-[50px] border border-[#5b5b5b] justify-center items-center inline-flex max-sm:min-w-[150px]">
            {t("startup")}
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-10 max-sm:hidden">
        <div className="rounded-tl-[40px] rounded-bl-[40px] shadow-custom parent_div">
          <div className="max-w-[1230px] pl-[30px] flex justify-between items-center">
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
                <div className="flex gap-[10px]">
                  <button className="h-[25px] px-5 rounded-[50px] border border-[#393939] text-[#393939] text-xs font-medium leading-tight">
                    {t("veb")}
                  </button>
                  <button className="h-[25px] px-5 rounded-[50px] border border-[#393939] text-[#393939] text-xs font-medium leading-tight">
                    {t("mobile")}
                  </button>
                </div>
              </div>
              <p className="max-w-[580px] mt-[34px] text-[#393939] text-2xl font-normal font-['Clash Display'] leading-9">
                {t("portfolio-text1")}
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

        <div className="rounded-tr-[40px] rounded-br-[40px] shadow-custom parent_div1">
          <div className="ml-auto max-w-[1230px] pr-[30px] flex justify-between items-center">
            <div className="max-w-[580px] w-full h-[436px] pt-10 relative">
              <div className="flex justify-between items-center">
                <p className="text-white text-4xl font-semibold">Podari</p>
                <button className="h-[25px] px-5 rounded-[50px] border border-white text-white text-xs font-medium leading-tight">
                  {t("commerce")}
                </button>
              </div>
              <p className="max-w-[580px] mt-[34px] text-white text-2xl font-normal font-['Clash Display'] leading-9">
                {t("portfolio-text2")}
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

        <div className="rounded-tl-[40px] rounded-bl-[40px] shadow-custom parent_div">
          <div className="max-w-[1230px] flex pl-[30px] justify-between items-center">
            <div>
              <img
                src={img3}
                className="max-w-[580px] max-h-[420px]"
                alt="img"
              />
            </div>

            <div className="max-w-[580px] w-full h-[436px] pt-10 relative">
              <div className="flex justify-between items-center">
                <p className="text-[#393939] text-4xl font-semibold">Uzpin</p>
                <button className="h-[25px] px-5 rounded-[50px] border border-[#393939] text-[#393939] text-xs font-medium leading-tight">
                  {t("veb")}
                </button>
              </div>
              <p className="max-w-[580px] mt-[34px] text-[#393939] text-2xl font-normal font-['Clash Display'] leading-9">
                {t("portfolio-text3")}
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

        <div className="rounded-tr-[40px] rounded-br-[40px] shadow-custom parent_div1">
          <div className="ml-auto max-w-[1230px] flex pr-[30px] justify-between items-center">
            <div className="max-w-[580px] w-full h-[436px] pt-10 relative">
              <div className="flex justify-between items-center">
                <p className="text-white text-4xl font-semibold">Salonchi</p>
                <button className="h-[25px] px-5 rounded-[50px] border border-white text-white text-xs font-medium leading-tight">
                  {t("commerce")}
                </button>
              </div>
              <p className="max-w-[580px] mt-[34px] text-white text-2xl font-normal font-['Clash Display'] leading-9">
                {t("portfolio-text4")}
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
                src={img4}
                className="max-w-[580px] max-h-[420px]"
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="rounded-tl-[40px] rounded-bl-[40px] shadow-custom parent_div">
          <div className="max-w-[1230px] pl-[30px] flex justify-between items-center">
            <div>
              <img
                src={img5}
                className="max-w-[580px] max-h-[420px]"
                alt="img"
              />
            </div>

            <div className="max-w-[580px] w-full h-[436px] pt-10 relative">
              <div className="flex justify-between items-center">
                <p className="text-[#393939] text-4xl font-semibold">
                  Rayyon market
                </p>
                <button className="h-[25px] px-5 rounded-[50px] border border-[#393939] text-[#393939] text-xs font-medium leading-tight">
                  {t("commerce")}
                </button>
              </div>
              <p className="max-w-[580px] mt-[34px] text-[#393939] text-2xl font-normal font-['Clash Display'] leading-9">
                {t("portfolio-text5")}
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
      </div>
      <PortfolioMobile />
    </div>
  );
};

export default Portfolio;
