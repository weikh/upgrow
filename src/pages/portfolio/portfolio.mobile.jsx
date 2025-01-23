import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { img1, img2 } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import "./style.css";

const PortfolioMobile = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-10 border border-transparent flex flex-col gap-[20px] sm:hidden">
        <div className="mt-[130px] pb-4 relative parent_img1 border border-transparent rounded-[10px]">
          <div className="absolute -top-[140px] left-0 right-0">
            <img
              src={img1}
              className="max-w-[358px] max-h-[258px]"
              alt="img1"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-[#111111] text-2xl font-medium">Topuy</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-[#393939] justify-center items-center inline-flex text-[#393939] text-xs font-normal">
                {t("veb")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-[#393939] text-base font-medium leading-normal">
              Topuy — bu O‘zbekistonda ko‘chmas mulk sotib olish, sotish va
              ijaraga berish bo‘yicha xizmat ko‘rsatadigan onlayn platforma.
              Sayt ko‘chmas mulk bozoridagi jarayonlarni soddalashtirish va
              foydalanuvchilarga qulay sharoit yaratish uchun mo‘ljallangan.
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-[#2644d8] text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative parent_img2 rounded-[10px]">
          <div className="absolute -top-[140px] left-0 right-0">
            <img
              src={img2}
              className="max-w-[358px] max-h-[258px]"
              alt="img2"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-white text-2xl font-medium">Topuy</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-white justify-center items-center inline-flex text-white text-xs font-normal">
                {t("veb")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-white text-base font-medium leading-normal">
              Topuy — bu O‘zbekistonda ko‘chmas mulk sotib olish, sotish va
              ijaraga berish bo‘yicha xizmat ko‘rsatadigan onlayn platforma.
              Sayt ko‘chmas mulk bozoridagi jarayonlarni soddalashtirish va
              foydalanuvchilarga qulay sharoit yaratish uchun mo‘ljallangan.
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-white text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative parent_img1 border border-transparent rounded-[10px]">
          <div className="absolute -top-[140px] left-0 right-0">
            <img
              src={img1}
              className="max-w-[358px] max-h-[258px]"
              alt="img1"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-[#111111] text-2xl font-medium">Topuy</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-[#393939] justify-center items-center inline-flex text-[#393939] text-xs font-normal">
                {t("veb")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-[#393939] text-base font-medium leading-normal">
              Topuy — bu O‘zbekistonda ko‘chmas mulk sotib olish, sotish va
              ijaraga berish bo‘yicha xizmat ko‘rsatadigan onlayn platforma.
              Sayt ko‘chmas mulk bozoridagi jarayonlarni soddalashtirish va
              foydalanuvchilarga qulay sharoit yaratish uchun mo‘ljallangan.
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-[#2644d8] text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>

        <div className="mt-[130px] pb-4 relative parent_img2 rounded-[10px]">
          <div className="absolute -top-[140px] left-0 right-0">
            <img
              src={img2}
              className="max-w-[358px] max-h-[258px]"
              alt="img2"
            />
          </div>

          <div className="px-5 mt-[140px]">
            <div className="flex justify-between items-center">
              <p className="text-white text-2xl font-medium">Topuy</p>
              <button className="h-[26px] px-2.5 rounded-[50px] border border-white justify-center items-center inline-flex text-white text-xs font-normal">
                {t("veb")}
              </button>
            </div>
            <p className="w-[310px] mt-5 text-white text-base font-medium leading-normal">
              Topuy — bu O‘zbekistonda ko‘chmas mulk sotib olish, sotish va
              ijaraga berish bo‘yicha xizmat ko‘rsatadigan onlayn platforma.
              Sayt ko‘chmas mulk bozoridagi jarayonlarni soddalashtirish va
              foydalanuvchilarga qulay sharoit yaratish uchun mo‘ljallangan.
            </p>
            <button className="mt-8 flex items-center gap-[10px] text-white text-base font-medium font-['Clash Display']">
              {t("portfolio2")} <PiArrowUpRightBold size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioMobile;
