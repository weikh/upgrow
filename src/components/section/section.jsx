import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  logo,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
} from "../../assets/icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto mt-[80px]">
      <p data-aos="fade-right" className="flex items-center gap-5 font-medium text-[22px] leading-[26px] text-[#2644d9]">
        <span className="h-5 border-[2px] border-[#2644d9] rounded-3xl"></span>
        {t("section")}
      </p>

      <div className="flex flex-col mt-[40px] ml-[40px]">
        <div className="flex justify-between gap-[30px]">
          <div data-aos="fade-right" className="max-w-[470px] w-full flex flex-col items-center rounded-[20px] bg-[#fff] py-[54px] hover:shadow-xl">
            <img
              className="max-w-[327px] w-full max-h-[66px] h-full"
              src={logo}
              alt="logo"
            />
            <p className="mt-2 font-medium text-[14px] leading-[22px]">
              {t("section-text1")}
            </p>
          </div>

          <div data-aos="fade-left" className="max-w-[700px] w-full pt-[30px] pl-[30px] rounded-[20px] bg-[#fff] hover:shadow-xl">
            <div className="flex items-center gap-[20px]">
              <img
                className="w-[38px] h-[38px]"
                src={section1}
                alt="section1"
              />
              <p className="font-semibold text-[32px] leading-[38px]">
                {t("section-text2")}
              </p>
            </div>
            <p className="max-w-[628px] mt-5 font-normal text-[16px] leading-[25px] text-[#5b5b5b]">
              {t("section-text3")}
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-[30px] mt-[30px]">
          <div data-aos='fade-right' className="py-[30px] px-[30px] rounded-[20px] bg-[#fff] hover:shadow-xl">
            <div className="flex items-center gap-[20px]">
              <img src={section2} alt="section2" />
              <p className="font-semibold text-[32px] leading-[38px]">{t("section-text4")}</p>
            </div>
            <p className="max-w-[320px] mt-5 font-normal text-[16px] leading-[25px] text-[#5b5b5b]">{t("section-text5")}</p>
          </div>

          <div data-aos='fade-up' className="py-[30px] px-[30px] rounded-[20px] bg-[#fff] hover:shadow-xl">
            <div className="flex items-center gap-[20px]">
              <img src={section3} alt="section3" />
              <p className="font-semibold text-[32px] leading-[38px]">{t("section-text6")}</p>
            </div>
            <p className="max-w-[310px] mt-5 font-normal text-[16px] leading-[25px] text-[#5b5b5b]">{t("section-text7")}</p>
          </div>

          <div data-aos='fade-left' className="py-[30px] px-[30px] rounded-[20px] bg-[#fff] hover:shadow-xl">
            <div className="flex items-center gap-[20px]">
              <img src={section4} alt="section4" />
              <p className="font-semibold text-[32px] leading-[38px]">{t("section-text8")}</p>
            </div>
            <p className="max-w-[310px] mt-5 font-normal text-[16px] leading-[25px] text-[#5b5b5b]">{t("section-text9")}</p>
          </div>
        </div>

        <div className="flex justify-between mt-[30px]">
          <div data-aos='fade-right' className="max-w-[585px] w-full rounded-[20px] bg-[#fff] p-[30px] hover:shadow-xl">
            <div className="flex items-center gap-[20px]">
              <img src={section5} alt="section5" />
              <p className="font-semibold text-[32px] leading-[38px]">{t("section-text10")}</p>
            </div>
            <p className="max-w-[515px] mt-5 font-normal text-[16px] leading-[25px] text-[#5b5b5b]">{t("section-text11")}</p>
          </div>

          <div data-aos='fade-left' className="max-w-[585px] w-full rounded-[20px] bg-[#fff] p-[30px] hover:shadow-xl">
            <div className="flex items-center gap-[20px]">
              <img src={section6} alt="section6" />
              <p className="font-semibold text-[32px] leading-[38px]">{t("section-text12")}</p>
            </div>
            <p className="max-w-[515px] mt-5 font-normal text-[16px] leading-[25px] text-[#5b5b5b]">{t("section-text13")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
