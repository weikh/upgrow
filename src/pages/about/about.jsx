import {
  aboutgroup,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  companyImg1,
  companyImg2,
} from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import Contact from "../../components/contact/Contact";
import "./main.css";

const ValueCard = ({ icon, title, description }) => (
  <div className="w-[380px] h-[250px] bg-white rounded-[20px] pt-[30px] shadow-custom max-sm:px-5">
    <img src={icon} className="mx-auto" width={30} height={30} alt={title} />
    <p className="text-center mt-2 text-[#1e2f84] text-2xl font-semibold max-sm:text-xl">
      {title}
    </p>
    <p className="max-w-[349px] mx-auto mt-5 text-center text-[#5b5b5b] text-base font-normal leading-relaxed max-sm:text-[#818796] max-sm:text-sm max-sm:leading-[21px]">
      {description}
    </p>
  </div>
);

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: box1,
      title: t("section-text2"),
      description: t("section-text3"),
    },
    {
      icon: box2,
      title: t("section-text6"),
      description: t("section-text7"),
    },
    {
      icon: box3,
      title: t("section-text8"),
      description: t("section-text9"),
    },
    {
      icon: box4,
      title: t("section-text4"),
      description: t("section-text5"),
    },
    {
      icon: box5,
      title: t("section-text10"),
      description: t("section-text11"),
    },
    {
      icon: box6,
      title: t("section-text12"),
      description: t("section-text13"),
    },
  ];

  return (
    <>
      <div className="about_bg border">
        <div className="mx-auto mt-[342px] max-sm:mt-[220px]">
          <h2 className="max-w-[1199px] mx-auto text-center text-[#1e2f84] text-[42px] font-semibold leading-[63px] max-sm:text-xl max-sm:leading-[30px] max-sm:px-4">
            {t("about1")}
          </h2>
          <div>
            <p className="max-w-[978px] mx-auto mt-2.5 text-center text-[#393939] text-xl font-normal leading-[30px] max-sm:mt-[30px] max-sm:text-base max-sm:leading-7 max-sm:px-4">
              {t("about2")}
            </p>
            <div className="overflow-hidden max-w-[580px] mt-[40px] ml-[40px] sm:hidden max-sm:px-4 max-sm:ml-0">
              <img
                data-aos="fade-right"
                className="max-w-[460px] max-h-[260px] max-sm:max-w-[265px] max-sm:max-h-[149px]"
                src={companyImg1}
                alt="img"
              />
              <img
                data-aos="fade-left"
                className="max-w-[460px] max-h-[260px] ml-auto mt-[20px] max-sm:max-w-[265px] max-sm:max-h-[149px]"
                src={companyImg2}
                alt="img"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto max-sm:px-4">
            <h3 className="mt-20 text-center text-[#1e2f84] text-[42px] font-bold leading-[63px] max-sm:mt-[60px] max-sm:text-xl max-sm:font-semibold max-sm:leading-[30px]">
              {t("company-text3")}
            </h3>
            <div className="flex justify-between mt-[60px] max-sm:mt-[30px]">
              <div className="max-w-[580px]">
                <p className="text-[#393939] text-2xl font-normal font-['Barlow Semi Condensed'] leading-9 max-sm:text-base max-sm:leading-7">
                  {t("about3")}
                </p>
              </div>
              <div className="max-sm:hidden">
                <img src={aboutgroup} alt="about" />
              </div>
            </div>
          </div>

          <div className="mt-20 max-sm:mt-[60px]">
            <h3 className="text-[#1e2f84] text-center text-[42px] font-bold leading-[63px] max-sm:px-4 max-sm:text-xl max-sm:font-semibold max-sm:leading-[30px]">
              {t("about4")}
            </h3>
            <div className="max-w-[1200px] mx-auto mt-[60px] flex justify-between gap-[30px] max-sm:px-4 max-sm:mt-[30px] max-sm:flex-col max-sm:items-center">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
