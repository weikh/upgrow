import React, { useState } from "react";
import { logo, language } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import "./main.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation(); // `useTranslation` orqali tarjima funksiyasi olinadi. `t` - matnlarni tarjima qilish uchun, `i18n` esa tilni o'zgartirish uchun ishlatiladi.
  const languages = localStorage.getItem("i18nextLng"); // Brauzerdan hozirgi tanlangan tilni `localStorage` orqali olamiz.

  // Tilni o'zgartirish funksiyasi
  const handleChange = (e) => {
    const selectedLanguage = e.target.value; // Foydalanuvchi tanlagan til kodini oladi.
    i18n.changeLanguage(selectedLanguage); // `i18n` yordamida tanlangan tilni o'rnatadi.
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#f7f9fd] border border-transparent">
      <div
        className={`fixed top-0 left-0 right-0 mt-[20px] mx-auto max-w-7xl ${
          open ? "h-[400px]" : "h-[72px]"
        }  flex items-center px-[40px] rounded-[20px] bg-white bg-opacity-60 backdrop-blur-[60px] z-[999] max-lg:mx-4 max-lg:items-start max-lg:px-5 max-lg:py-5 max-lg:rounded-xl max-lg:flex-col`}
      >
        <div className="w-full flex items-center justify-between">
          <ul>
            <li>
              <Link to="/">
                <img
                  width={176}
                  height={36}
                  className="max-sm:w-[128px] max-sm:h-[28px]"
                  src={logo}
                  alt="logo"
                />{" "}
              </Link>
            </li>
          </ul>
          <ul className="max-lg:hidden flex items-center gap-[50px] text-[#393939] text-lg font-medium">
            <Link to="/about" className="cursor-pointer hover:text-[#2d44d9]">
              {t("about")}
            </Link>
            <Link
              to="/services"
              className="cursor-pointer hover:text-[#2d44d9]"
            >
              {t("services")}
            </Link>
            <Link
              to="/portfolio"
              className="cursor-pointer hover:text-[#2d44d9]"
            >
              {t("portfolio")}
            </Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#2d44d9]">
              {t("contacts")}
            </Link>

            <li className="w-[180px] flex justify-end">
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
          <button className="lg:hidden" onClick={handleOpen}>
            {open ? (
              <MdOutlineClose size={24} />
            ) : (
              <HiOutlineMenuAlt2 size={24} />
            )}
          </button>
        </div>

        {open && (
          <ul className="w-full relative flex flex-col items-center gap-10 mt-10 font-medium text-[18px] leading-5 text-[#393939]">
            <li className="absolute top-0 right-0 w-[180px] flex justify-end">
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

            <Link
              to="/about"
              className="mt-20 cursor-pointer hover:text-[#2d44d9]"
            >
              {t("about")}
            </Link>
            <Link
              to="/services"
              className="cursor-pointer hover:text-[#2d44d9]"
            >
              {t("services")}
            </Link>
            <Link
              to="/portfolio"
              className="cursor-pointer hover:text-[#2d44d9]"
            >
              {t("portfolio")}
            </Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#2d44d9]">
              {t("contacts")}
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
