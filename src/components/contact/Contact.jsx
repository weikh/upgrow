import React, { useState, useEffect } from "react";
import "./contact.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { telephoneWhite } from "../../assets/icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("+998");
  const [error, setError] = useState(false);

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (!value.startsWith("998")) {
      value = "998";
    }

    if (value.length > 12) {
      value = value.slice(0, 12);
    }

    let formattedPhone = `+${value.slice(0, 3)}`;
    if (value.length > 3) formattedPhone += ` ${value.slice(3, 5)}`;
    if (value.length > 5) formattedPhone += ` ${value.slice(5, 8)}`;
    if (value.length > 8) formattedPhone += ` ${value.slice(8, 10)}`;
    if (value.length > 10) formattedPhone += ` ${value.slice(10, 12)}`;

    setPhone(formattedPhone);
    setError("");
  };

  const handleBlur = () => {
    const uzbekPhoneRegex =
      /^\+998 (90|91|93|94|95|98|99|33|50|55|77|88|20) \d{3} \d{2} \d{2}$/;

    if (phone === "+998") {
      setError("");
      return;
    }

    if (!uzbekPhoneRegex.test(phone)) {
      setError("Telefon raqami noto'g'ri kiritildi!");
    } else {
      setError("");
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (error) return;

    setLoading(true);
    const token = "6813259261:AAEJKDtww2rVu73wT9ns9wy_6epU1C-u0DU";
    const chatId = -1002158530694;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Telegramga yuborish uchun formatlash
    const phoneForTelegram = phone.replace(/\s/g, "");

    const messageContent = `💻Web saytdan mijoz\n Ismi: ${name} \n Telefon raqami: ${phoneForTelegram} \n Email: ${email}`;

    axios
      .post(url, { chat_id: chatId, text: messageContent })
      .then(() => {
        document.getElementById("form").reset();
        setPhone("+998");
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
    <section
      className="overflow-hidden contact contact-bg mt-[100px] max-sm:px-4"
      id="contact"
    >
      <div className="mx-auto py-24 max-w-7xl flex justify-between max-sm:flex-col max-sm:py-10">
        <div className="flex flex-col justify-between max-w-[600px] w-full text-white">
          <h2
            data-aos="fade-right"
            className="text-[42px] font-bold leading-[63px] max-sm:text-lg max-sm:leading-[27px] max-sm:text-center"
          >
            {t("contact1")}
          </h2>
          <div className="my-3 max-sm:hidden">
            <p data-aos="fade-right" className="font-medium text-lg">
              {t("contact2")}
            </p>
            <a
              data-aos="fade-right"
              href="tel:+998 77 708 41 41"
              className="flex items-center gap-3 my-3 transform hover:scale-95 transition-transform duration-300"
            >
              <img src={telephoneWhite} className="w-9 h-9" alt="telephone" />
              <p className="text-[32px] font-semibold">
                <span>+998 77 708 41 41</span>
              </p>
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex justify-center max-sm:mt-10 max-sm:max-w-full max-sm:flex-col"
        >
          <form
            onSubmit={sendMessage}
            id="form"
            className="w-[520px] rounded-[10px] p-10 bg-[#f9f9f9] max-sm:w-full max-sm:p-5"
          >
            <div className="flex flex-col mb-5">
              <label className="ml-5 font-normal text-base text-[#5B5B5B] my-1">
                {t("contact3")}
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder={t("contact3")}
                className="border border-[#a7a7a7] pl-5 text-[#393939] text-lg h-[46px] font-medium rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="ml-5 font-normal text-base text-[#5B5B5B] my-1">
                {t("contact4")}
              </label>
              <input
                type="tel"
                id="telephone"
                required
                value={phone}
                onChange={handlePhoneInput}
                onBlur={handleBlur}
                placeholder="+998 90 777 77 77"
                className="border border-[#a7a7a7] pl-5 text-[#393939] text-lg h-[46px] font-medium rounded-lg outline-none"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="flex flex-col">
              <label className="ml-5 font-normal text-base text-[#5B5B5B] my-1">
                {t("contact5")}
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="example@gmail.com"
                className="border border-[#a7a7a7] pl-5 text-[#393939] text-lg h-[46px] font-medium rounded-lg outline-none"
              />
            </div>
            <button
              type="submit"
              className="contact-btn-bg w-full mt-10 h-[46px] text-white text-[22px] font-medium rounded-lg max-sm:text-base max-sm:font-normal"
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
