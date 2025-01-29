import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import {
  img1mobile,
  img2mobile,
  img3mobile,
  img4mobile,
  img5mobile,
} from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import "./style.css";

const PortfolioMobile = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-10 border border-transparent flex flex-col gap-[20px] sm:hidden">
        <div className="mt-[130px] pb-4 relative shadow-custom parent_img1 border border-transparent rounded-[10px]">
          <div className="absolute -top-[100px] left-0 right-0">
            <img
              src={img1mobile}
              className="mx-auto max-w-[358px] max-h-[258px]"
              alt="img1"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-[#111111] text-2xl font-medium">Topuy</p>
              <div className="flex gap-[10px]">
                <button className="h-[26px] px-2.5 rounded-[50px] border border-[#393939] justify-center items-center inline-flex text-[#393939] text-xs font-normal">
                  {t("veb")}
                </button>
                <button className="h-[26px] px-2.5 rounded-[50px] border border-[#393939] justify-center items-center inline-flex text-[#393939] text-xs font-normal">
                  {t("commerce")}
                </button>
              </div>
            </div>
            <p className="w-[310px] mt-5 text-[#393939] text-base font-medium leading-normal">
              {t("portfolio-text1")}
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-[#2644d8] text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative shadow-custom parent_img2 rounded-[10px]">
          <div className="absolute -top-[100px] left-0 right-0">
            <img
              src={img2mobile}
              className="mx-auto max-w-[358px] max-h-[258px]"
              alt="img2"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-white text-2xl font-medium">Podari</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-white justify-center items-center inline-flex text-white text-xs font-normal">
                {t("commerce")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-white text-base font-medium leading-normal">
              {t("portfolio-text2")}
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-white text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative shadow-custom parent_img1 border border-transparent rounded-[10px]">
          <div className="absolute -top-[100px] left-0 right-0">
            <img
              src={img3mobile}
              className="mx-auto max-w-[358px] max-h-[258px]"
              alt="img3"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-[#111111] text-2xl font-medium">Uzpin</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-[#393939] justify-center items-center inline-flex text-[#393939] text-xs font-normal">
                {t("veb")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-[#393939] text-base font-medium leading-normal">
              {t("portfolio-text3")}
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-[#2644d8] text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative shadow-custom parent_img2 rounded-[10px]">
          <div className="absolute -top-[100px] left-0 right-0">
            <img
              src={img4mobile}
              className="mx-auto max-w-[358px] max-h-[258px]"
              alt="img4"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-white text-2xl font-medium">Salonchi</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-white justify-center items-center inline-flex text-white text-xs font-normal">
                {t("commerce")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-white text-base font-medium leading-normal">
              {t("portfolio-text4")}
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-white text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative shadow-custom parent_img1 border border-transparent rounded-[10px]">
          <div className="absolute -top-[100px] left-0 right-0">
            <img
              src={img5mobile}
              className="mx-auto max-w-[358px] max-h-[258px]"
              alt="img5"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-[#111111] text-2xl font-medium">Rayyon market</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-[#393939] justify-center items-center inline-flex text-[#393939] text-xs font-normal">
                {t("commerce")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-[#393939] text-base font-medium leading-normal">
              {t("portfolio-text5")}
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-[#2644d8] text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioMobile;
