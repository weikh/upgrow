import React from "react";
import { logo } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="fixed top-0 left-0 right-0 mt-[20px] mx-auto max-w-[1280px] w-full h-[72px] flex justify-between items-center px-[40px] rounded-[20px] bg-white z-50">
      <ul>
        <li>
          <a href="#">
            <img width={176} height={36} src={logo} alt="logo" />
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap-[50px] font-medium text-[18px] leading-5 text-[#393939]">
        <a href="#company" className="cursor-pointer hover:text-[#2d44d9]">{t("about")}</a>
        <a href="#services" className="cursor-pointer hover:text-[#2d44d9]">{t("services")}</a>
        <a href="#" className="cursor-pointer hover:text-[#2d44d9]">{t("portfolio")}</a>
        <a href="#contact" className="cursor-pointer hover:text-[#2d44d9]">{t("contacts")}</a>
        <li>
          <select
            className="h-[30px] rounded-lg border border-[#a7a7a7] outline-none"
            onChange={handleChange}
            value={languages}
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
