import React from "react";
import { logo, sms, telephone, location } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="mx-auto  mt-28 max-w-[1280px] my-3">
      <ul className="flex justify-between my-5 ">
        <li>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <h2 className="font-medium leading-6 text-[16px] mt-5">
            {t("footer-text1")}
          </h2>
          <div className="flex gap-6 mt-[50px] text-[#5B5B5B]">
            <a
              href="https://www.instagram.com/"
              className="hover:text-[#2644D9]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://t.me/omonov_20_02"
              className="hover:text-[#2644D9]"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
              className="hover:text-[#2644D9]"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/home?original_referer=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"
              className="hover:text-[#2644D9]"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          <a
            href="mailto:upgrow@info.uz"
            className="flex items-center gap-3 my-3 mt-5 text-[#5B5B5B] hover:text-[#2644D9]"
          >
            <img src={sms} className="w-[24px] h-[24px]" alt="email" />
            <p className="text-[12px] font-normal leading-[18px]">
              upgrow@info.uz
            </p>
          </a>
          <a
            href="tel:+998777084141"
            className="flex items-center gap-3 my-3 text-[#5B5B5B] hover:text-[#2644D9]"
          >
            <img
              src={telephone}
              className="w-[24px] h-[24px]"
              alt="telephone"
            />
            <p className="text-[12px] font-normal leading-[18px]">
              +998 77 708 41 41
            </p>
          </a>
          <a href="#" className="flex items-center gap-3 my-3 text-[#5B5B5B] hover:text-[#2644D9]">
            <img src={location} className="w-[24px] h-[24px]" alt="location" />
            <p className="text-[12px] font-normal leading-[18px]">
              Toshkent, Yakkasaroy, Bog'iboston k. 186-188
            </p>
          </a>
        </li>
        <li className="flex flex-col gap-4">
          <a
            href="#"
            className="font-medium leading-[24px] text-[#2644D9] mb-5 hover:text-[#2644D9] transition-all"
          >
            {t("footer-text2")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text3")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text4")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text5")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text6")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text7")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text8")}
          </a>
        </li>
        <li className="flex flex-col gap-4">
          <a
            href="#"
            className="font-medium  leading-[24px]  text-[#2644D9] mb-5 hover:text-[#2644D9] transition-all"
          >
            {t("footer-text9")}
          </a>
          <a
            href="#company"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text10")}
          </a>
          <a
            href="#services"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text11")}
          </a>
          <a
            href="#hero"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text12")}
          </a>
          <a
            href="#contact"
            className="font-medium text-[#393939] leading-[24px] hover:text-[#2644D9] transition-all"
          >
            {t("footer-text13")}
          </a>
        </li>
      </ul>
      <div className="border-b-[0.5px] border-[#A7A7A7]"></div>
      <div className="flex justify-center items-center py-2 gap-5 text-[#5B5B5B]">
        <p>© Upgrow</p>
        <p>{t("footer-text14")}</p>
      </div>
    </footer>
  );
};

export default Footer;
