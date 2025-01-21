import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("veb"),
      description: (t('services3')),
    },
    {
      title: t("erp"),
      description: (t('services4')),
    },
    {
      title: t("mobile"),
      description: (t('services5')),
    },
    {
      title: t("services4-text1"),
      description: (t('services6')),
    },
    {
      title: t("commerce"),
      description: (t('services7')),
    },
    {
      title: t("consultation"),
      description: (t('services6')),
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Ekran o'lchamini aniqlash uchun effekt
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // max-sm uchun 640px dan kichik ekranlar
    };
    handleResize(); // Boshlang‘ich holatni aniqlash
    window.addEventListener("resize", handleResize); // Oyna o‘lchami o‘zgarsa kuzatish
    return () => window.removeEventListener("resize", handleResize); // Kuzatuvni to‘xtatish
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-[172px] max-sm:px-4">
      <h2 className="text-[#111111] text-center text-[32px] font-semibold leading-[48px] max-sm:text-2xl max-sm:leading-9">
        {t("footer-text2")}
      </h2>
      <p className="mt-2.5 text-center text-[#393939] text-xl font-medium leading-[30px] max-sm:text-base max-sm:leading-normal">
        {t("services2")}
      </p>

      <div className="mt-[105px] flex flex-col gap-[10px] max-sm:mt-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="sticky pt-10 pb-20 px-[60px] bg-white rounded-[20px] shadow-custom z-[1] max-sm:px-5 max-sm:pb-5"
            style={{
              maxHeight: "calc(100vh - 150px)",
              overflowY: "auto",
              top: `${isSmallScreen ? 120 + index * 60 : 120 + index * 20}px`,
            }}
          >
            <div className="flex justify-between items-start max-sm:flex-col">
              <div>
                <p className="text-[#111111] text-4xl font-semibold font-['Clash Display'] uppercase leading-[54px] max-sm:text-2xl max-sm:leading-9">
                  {section.title}
                </p>
              </div>
              <div className="max-sm:mt-[30px]">
                <p className="max-w-[710px] text-[#393939] text-lg font-normal font-['Clash Display'] leading-[27px] max-sm:text-sm max-sm:leading-[21px]">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
