import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { companyImg1, companyImg2 } from "../../assets/icons/icons";
import { PiArrowUpRightBold } from "react-icons/pi";
import { BsTelephoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import './main.css'

const Company = () => {
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
    <div className="max-w-[1240px] mx-auto pt-[100px]" id="company">
      <p
        data-aos="fade-right"
        className="flex items-center gap-5 font-medium text-[22px] leading-[26px] text-[#2644d9]"
      >
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl"></span>
        {t("company-text1")}
      </p>

      <div className="flex">
        <div className="w-[580px] mt-[40px] ml-[40px]">
          <img
            data-aos="fade-right"
            className="max-w-[460px] max-h-[260px]"
            src={companyImg1}
            alt="img"
          />
          <img
            data-aos="fade-left"
            className="max-w-[460px] max-h-[260px] ml-auto mt-[20px]"
            src={companyImg2}
            alt="img"
          />
        </div>

        <div className="max-w-[580px] mt-[40px] ml-[40px] company-bg">
          <p
            data-aos="fade-right"
            className="font-normal text-[24px] leading-[43px] text-[#2644d9]"
          >
            {t("company-text2")}
          </p>
          <h2
            data-aos="fade-left"
            className="max-w-[570px] font-bold text-[52px] leading-[78px] text-[#1e2f84]"
          >
            {t("company-text3")}
          </h2>
          <p
            data-aos="fade-right"
            className="mt-[20px] font-normal text-[24px] leading-9 text-[#5b5b5b]"
          >
            {t("company-taxt4")}
          </p>
          <div className="flex items-center gap-[30px] mt-[85px]">
            <button
              data-aos="fade-left"
              className="flex items-center gap-[10px] py-2 px-[65px] border-[2px] border-[#2644d9] rounded-[15px] font-medium text-[22px] leading-[26px] text-[#2644d9] hover:!scale-95"
            >
              {t("portfolio")} <PiArrowUpRightBold color="#2644d9" />
            </button>
            <a href="tel:+998 77 708 41 41" className="hover:scale-95">
              <button
                data-aos="fade-right"
                className="flex items-center gap-[10px] py-[10px] px-[65px] bg-gradient-to-r from-[#3d5aec] to-[#091e84] rounded-[15px] text-white font-medium text-[22px] leading-[26px]"
              >
                <BsTelephoneFill />
                {t("company-text5")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
