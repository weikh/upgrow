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
    <div className="max-w-[1280px] h-[72px] flex justify-between items-center px-[40px] rounded-[20px] bg-white border border-black mt-[10px] mx-auto">
      <ul>
        <li>
          <a href="#">
            <img width={176} height={36} src={logo} alt="logo" />
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap-[50px] font-medium text-[18px] leading-5 text-[#393939]">
        <li>{t("about")}</li>
        <li>{t("services")}</li>
        <li>{t("portfolio")}</li>
        <li>{t("contacts")}</li>
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
