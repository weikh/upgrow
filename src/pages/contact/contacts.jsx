import React, { useState } from "react";
import { sms, telephone, location } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";

const Contacts = () => {
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

  return (
    <div className="max-w-7xl mx-auto mt-[176px] py-10 px-20 rounded-[20px] bg-[#ffffff] shadow-custom max-sm:p-5 max-sm:bg-inherit max-sm:mt-[106px] max-sm:shadow-none">
      <h2 className="font-medium text-[32px] leading-[39px] text-[#393939] max-sm:text-2xl max-sm:font-semibold max-sm:leading-9">
        {t("contacts")}
      </h2>

      <div className="mt-10 flex justify-between max-sm:bg-[#ffffff] max-sm:p-5 max-sm:rounded-[10px] max-sm:flex-col max-sm:shadow-custom">
        <div>
          <iframe
            className="rounded-[20px] max-sm:w-full max-sm:h-[277px]"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2998.6950050489972!2d69.22920287552786!3d41.2719762031467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzE5LjEiTiA2OcKwMTMnNTQuNCJF!5e0!3m2!1sen!2s!4v1736940766624!5m2!1sen!2s"
            width="500"
            height="299"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <ul className="flex flex-col gap-[30px] mt-11 max-sm:mt-[30px] max-sm:flex-col-reverse max-sm:gap-5">
            <li className="flex items-center gap-5 max-sm:gap-[14px]">
              <img
                className="w-[30] h-[30px] max-sm:w-6 max-sm:h-6"
                src={location}
                alt="location"
              />
              <p className="text-[22px] leading-[33px] text-[#5b5b5b] max-sm:text-[#393939] max-sm:text-[15px] max-sm:leading-snug">
                Toshkent, Yakkasaroy, Bog’ibo’ston k. 186-188
              </p>
            </li>
            <li className="flex items-center gap-5 max-sm:gap-[14px]">
              <img
                className="w-[30] h-[30px] max-sm:w-6 max-sm:h-6"
                src={telephone}
                alt="tel"
              />
              <p className="text-[22px] leading-[33px] text-[#5b5b5b] max-sm:text-[15px] max-sm:leading-snug">
                +998 77 708 41 41
              </p>
            </li>
            <li className="flex items-center gap-5 max-sm:gap-[14px]">
              <img
                className="w-[30] h-[30px] max-sm:w-6 max-sm:h-6"
                src={sms}
                alt="sms"
              />
              <p className="text-[22px] leading-[33px] text-[#5b5b5b] max-sm:text-[15px] max-sm:leading-snug">
                upgrow@info.uz
              </p>
            </li>
          </ul>
        </div>

        <div className="max-w-[410px]">
          <p className="font-medium text-[18px] leading-[27px] text-[#393939] max-sm:hidden">
            {t("contacts1")}
          </p>
          <form
            onSubmit={sendMessage}
            id="form"
            className="max-w-[410px] mt-[42px]"
          >
            <div className="flex flex-col mb-5">
              <label className="ml-5 text-[18px] leading-[22px] text-[#5B5B5B] mb-2.5">
                {t("contact3")}
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder={t("contact3")}
                className="border border-[#a7a7a7] pl-[20px] text-[#393939] h-[50px] text-[22px] leading-[27px] font-medium rounded-[10px] outline-none"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="ml-5 text-[18px] leading-[22px] text-[#5B5B5B] mb-2.5">
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
              <label className="ml-5 text-[18px] leading-[22px] text-[#5B5B5B] mb-2.5">
                {t("contact5")}
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="example@gmail.com"
                className="border border-[#a7a7a7] pl-[20px] text-[#393939] h-[50px] text-[22px] leading-[27px] font-medium rounded-[10px] outline-none"
              />
            </div>
            <button
              loading={loading}
              type="submit"
              className="contact-btn-bg w-full mt-10 h-[46px] text-[#fff] text-[22px] leading-[26px] font-medium rounded-lg max-sm:font-normal max-sm:text-base"
            >
              {loading ? t("contact6") : t("contact7")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
