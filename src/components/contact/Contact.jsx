import React, { useState, useEffect } from "react";
import "./contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const sendMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    const token = "7502554917:AAHm-8pBtm6ejWkZpnyKKzPxGiGdVqVESTs";
    const chatId = 1546796954;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const messageContent = `Ismi: ${name} \n Telefon raqami: ${telephone} \n Email: ${email}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: messageContent,
      },
    })
      .then(() => {
        document.getElementById("form").reset();
        toast.success(t("success"));
      })
      .catch(() => {
        toast.error(t("error"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
      offset: 10,
    });
  }, []);

  return (
    <section className="contact contact-bg mt-[100px]" id="contact">
      <div className="mx-auto py-24  max-w-[1280px] flex justify-between">
        <div className="flex flex-col justify-between max-w-[600px] w-full text-[#fff]">
          <h2
            data-aos="fade-right"
            className="text-[42px] font-bold leading-[63px]"
          >
            {t("contact1")}
          </h2>
          <div className="my-3">
            <p data-aos="fade-right" className="font-medium text-[18px]">
              {t("contact2")}
            </p>
            <a
              data-aos="fade-right"
              href="tel:+998 77 708 41 41"
              className="max-w-[278px] flex gap-3 my-3 text-[#fff] transform hover:scale-95 transition-transform duration-300"
            >
              <BsTelephoneFill size={36} />
              <p className="text-[32px] font-normal leading-[38.4px]">
                <span>+998 77 708 41 41</span>
              </p>
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex justify-center w-2/4 items-center"
        >
          <form
            onSubmit={sendMessage}
            id="form"
            className="w-[520px] rounded-3xl p-7 bg-[#f9f9f9]"
          >
            <div className="flex flex-col mb-3">
              <label className="ml-[20px] font-normal text-[16px] leading-[19px] text-[#5B5B5B] my-1">
                {t("contact3")}
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="name"
                className="border-t border-t-[#e8e8e8] pl-[20px] text-[#1d1c1c] text-[18px] h-[46px] font-medium rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="ml-[20px] font-normal text-[16px] leading-[19px] text-[#5B5B5B] my-1">
                {t("contact4")}
              </label>
              <input
                type="tel"
                id="telephone"
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9+]/g, "");
                }}
                placeholder="+998 90 777 77 77"
                className="border-t border-t-[#e8e8e8] pl-[20px] text-[#1d1c1c] h-[46px] text-[18px] font-medium rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col ">
              <label className="ml-[20px] font-normal text-[16px] leading-[19px] text-[#5B5B5B] my-1">
                {t("contact5")}
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="example@gmail.com"
                className="border-t border-t-[#e8e8e8] pl-[20px] text-[#1d1c1c] h-[46px] text-[18px] font-medium rounded-lg outline-none"
              />
            </div>
            <button
              loading={loading}
              type="submit"
              className="contact-btn-bg w-full mt-6 h-[46px] text-[#fff] text-[22px] leading-[26px] font-medium rounded-lg"
            >
              {loading ? t("contact6") : t("contact7")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
