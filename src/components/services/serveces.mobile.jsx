import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "../../assets/icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesMobile = () => {
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
    <div className="max-w-[1280px] mx-auto pt-[100px] px-4 sm:hidden">
      <p
        className="sticky top-[110px] flex items-center gap-[10px] font-medium text-[15px] text-[#2644d9]"
      >
        <span className="h-4 border-[1px] border-[#2644d9] rounded-3xl"></span>
        {t("services1")}
      </p>
      <div className="mt-[30px]">
        <div className="sticky top-[160px] max-w-[380px] w-full rounded-[10px] my-2.5 p-5 bg-gradient-to-b from-[#d4dbff] to-white shadow-custom">
          <div className="flex gap-4 items-center pb-4 border border-b-[#818796] text-[#111111] text-xl font-semibold">
            <img width={20} height={20} src={services1} alt="services1" />{" "}
            {t("services1-text1")}
          </div>
          <p className="mt-4 font-normal text-[15px] leading-snug text-[#393939]">
            {t("services1-text2")}
          </p>

          <ul className="space-y-2 ml-5 mt-[36px] list-disc text-[#818796] text-sm font-normal leading-snug">
            <li>{t("services1-text3")}</li>
            <li>{t("services1-text4")}</li>
            <li>{t("services1-text5")}</li>
            <li>{t("services1-text6")}</li>
          </ul>
        </div>

        <div className="sticky top-[230px] max-w-[380px] w-full rounded-[10px] my-2.5 p-5 bg-gradient-to-b from-[#d4dbff] to-white shadow-custom">
          <div className="flex gap-4 items-center pb-4 border border-b-[#818796] text-[#111111] text-xl font-semibold">
            <img width={20} height={20} src={services2} alt="services2" />{" "}
            {t("services2-text1")}
          </div>
          <p className="mt-4 font-normal text-[15px] leading-snug text-[#393939]">
            {t("services2-text2")}
          </p>

          <ul className="space-y-2 ml-5 mt-[36px] list-disc text-[#818796] text-sm font-normal leading-snug">
            <li>{t("services2-text3")}</li>
            <li>{t("services2-text4")}</li>
            <li>{t("services2-text5")}</li>
            <li>{t("services2-text6")}</li>
            <li>{t("services2-text7")}</li>
          </ul>
        </div>

        <div className="sticky top-[300px] max-w-[380px] w-full rounded-[10px] my-2.5 p-5 bg-gradient-to-b from-[#d4dbff] to-white shadow-custom">
          <div className="flex gap-4 items-center pb-4 border border-b-[#818796] text-[#111111] text-xl font-semibold">
            <img width={20} height={20} src={services3} alt="services3" />{" "}
            {t("services3-text1")}
          </div>
          <p className="mt-4 font-normal text-[15px] leading-snug text-[#393939]">
            {t("services3-text2")}
          </p>

          <ul className="space-y-2 ml-5 mt-[36px] list-disc text-[#818796] text-sm font-normal leading-snug">
            <li>{t("services3-text3")}</li>
            <li>{t("services3-text4")}</li>
            <li>{t("services3-text5")}</li>
            <li>{t("services3-text6")}</li>
          </ul>
        </div>

        <div className="sticky top-[370px] max-w-[380px] w-full rounded-[10px] my-2.5 p-5 bg-gradient-to-b from-[#d4dbff] to-white shadow-custom">
          <div className="flex gap-4 items-center pb-4 border border-b-[#818796] text-[#111111] text-xl font-semibold">
            <img width={20} height={20} src={services4} alt="services4" />{" "}
            {t("services4-text1")}
          </div>
          <p className="mt-4 font-normal text-[15px] leading-snug text-[#393939]">
            {t("services4-text2")}
          </p>

          <ul className="space-y-2 ml-5 mt-[36px] list-disc text-[#818796] text-sm font-normal leading-snug">
            <li>{t("services4-text3")}</li>
            <li>{t("services4-text4")}</li>
            <li>{t("services4-text5")}</li>
          </ul>
        </div>

        <div className="sticky top-[440px] max-w-[380px] w-full rounded-[10px] my-2.5 p-5 bg-gradient-to-b from-[#d4dbff] to-white shadow-custom">
          <div className="flex gap-4 items-center pb-4 border border-b-[#818796] text-[#111111] text-xl font-semibold">
            <img width={20} height={20} src={services5} alt="services5" />{" "}
            {t("services5-text1")}
          </div>
          <p className="mt-4 font-normal text-[15px] leading-snug text-[#393939]">
            {t("services5-text2")}
          </p>

          <ul className="space-y-2 ml-5 mt-[36px] list-disc text-[#818796] text-sm font-normal leading-snug">
            <li>{t("services5-text3")}</li>
            <li>{t("services5-text4")}</li>
            <li>{t("services5-text5")}</li>
          </ul>
        </div>

        <div className="sticky top-[510px] max-w-[380px] w-full rounded-[10px] my-2.5 p-5 bg-gradient-to-b from-[#d4dbff] to-white shadow-custom">
          <div className="flex gap-4 items-center pb-4 border border-b-[#818796] text-[#111111] text-xl font-semibold">
            <img width={20} height={20} src={services6} alt="services6" />{" "}
            {t("services6-text1")}
          </div>
          <p className="mt-4 font-normal text-[15px] leading-snug text-[#393939]">
            {t("services6-text2")}
          </p>

          <ul className="space-y-2 ml-5 mt-[36px] list-disc text-[#818796] text-sm font-normal leading-snug">
            <li>{t("services6-text3")}</li>
            <li>{t("services6-text4")}</li>
            <li>{t("services6-text5")}</li>
            <li>{t("services6-text6")}</li>
            <li>{t("services6-text7")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
