import React from "react";
import { logo, language } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import "./main.css";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // `useTranslation` orqali tarjima funksiyasi olinadi. `t` - matnlarni tarjima qilish uchun, `i18n` esa tilni o'zgartirish uchun ishlatiladi.
  const languages = localStorage.getItem("i18nextLng"); // Brauzerdan hozirgi tanlangan tilni `localStorage` orqali olamiz.

  // Tilni o'zgartirish funksiyasi
  const handleChange = (e) => {
    const selectedLanguage = e.target.value; // Foydalanuvchi tanlagan til kodini oladi.
    i18n.changeLanguage(selectedLanguage); // `i18n` yordamida tanlangan tilni o'rnatadi.
  };

  return (
    <div className="bg-[#f7f9fd] border border-transparent">
      <div className="fixed top-0 left-0 right-0 mt-[20px] mx-auto max-w-[1280px] w-full h-[72px] flex justify-between items-center px-[40px] rounded-[20px] bg-white bg-opacity-60 backdrop-blur-[60px] z-50">
        <ul>
          <li>
            <a href="#">
              <img width={176} height={36} src={logo} alt="logo" />{" "}
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-[50px] font-medium text-[18px] leading-5 text-[#393939]">
          <a href="#company" className="cursor-pointer hover:text-[#2d44d9]">
            {t("about")}
          </a>
          <a href="#services" className="cursor-pointer hover:text-[#2d44d9]">
            {t("services")} 
          </a>
          <a href="#" className="cursor-pointer hover:text-[#2d44d9]">
            {t("portfolio")}
          </a>
          <a href="#contact" className="cursor-pointer hover:text-[#2d44d9]">
            {t("contacts")} 
          </a>

          <li className="w-[160px] flex justify-end">
            <div className="language-selector">
              <button className="language-button">
                <img
                  src={language}
                  className="mr-[20px]"
                  width={24}
                  height={24}
                  alt="language"
                />
                {languages === "uz" ? "Uz" : languages === "ru" ? "Ru" : "En"}
              </button>

              <div className="dropdown">
                <img
                  src={language}
                  className="ml-[15px]"
                  width={24}
                  height={24}
                  alt="language"
                />
                <span onClick={() => i18n.changeLanguage("uz")}>Uz</span>{" "}
                <span onClick={() => i18n.changeLanguage("ru")}>Ru</span>{" "}
                <span onClick={() => i18n.changeLanguage("en")}>En</span>{" "}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
