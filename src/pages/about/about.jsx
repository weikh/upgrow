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
import Contact from "../../components/contact/Contact";
import "./main.css";

const values = [
  {
    icon: box1,
    title: "Qiziqish",
    description:
      "Har bir loyiha va biz doimo uni rivojlantirishning yangi usullarini izlaymiz. Shuning uchun biz har doim yangi yechimlarni topish uchun harakatdamiz.",
  },
  {
    icon: box2,
    title: "Innovatsiya",
    description:
      "Loyihalarimizda eng yangi texnologiyalardan foydalanamiz. Innovatsiyalar to’xtamaydi, biz ham to’xtamaymiz.",
  },
  {
    icon: box3,
    title: "Shaffoflik",
    description:
      "Upgrowda biz maqsadlarimiz va qadriyatlarimizni aniq baham ko’ramiz. Bu bizga mijozlarimiz va jamoamiz bilan ishonchni mustahkamlashga yordam beradi.",
  },
  {
    icon: box4,
    title: "Chellenj",
    description:
      "Boshqa kompaniyalardan farqli o’laroq, biz qiyinchiliklarni yaxshi ko’ramiz. Shuning uchun ham Upgrow mavjud!",
  },
  {
    icon: box5,
    title: "Tezlik",
    description:
      "Biz tezlik va sifatni qadrlaymiz. Biz mijozlarimizga loyihalarni sifatli ishlab chiqish orqali raqobatchilardan ustun kelishlariga yordam beramiz.",
  },
  {
    icon: box6,
    title: "O’sish uchun intilish",
    description:
      "Mijozlarimiz bilan ishlaganimizda, biz ularning g’oyalarini haqiqatga aylantirishga harakat qilamiz. Ularga rahbarlik qilish orqali.",
  },
];

const ValueCard = ({ icon, title, description }) => (
  <div className="w-[380px] h-[250px] bg-white rounded-[20px] pt-[30px] shadow-custom">
    <img src={icon} className="mx-auto" width={30} height={30} alt={title} />
    <p className="text-center mt-2 text-[#1e2f84] text-2xl font-semibold">
      {title}
    </p>
    <p className="max-w-[349px] mx-auto mt-5 text-center text-[#5b5b5b] text-base font-normal leading-relaxed">
      {description}
    </p>
  </div>
);

const About = () => {
  return (
    <>
      <div className="about_bg border">
        <div className="mx-auto mt-[342px] max-sm:mt-[220px]">
          <h2 className="max-w-[1199px] mx-auto text-center text-[#1e2f84] text-[42px] font-semibold leading-[63px] max-sm:text-xl max-sm:leading-[30px] max-sm:px-4">
            BIZ SIZNING BIZNESINGIZNI INNOVATSION YECHIMLAR ORQALI YANGI
            BOSQICHGA OLIB CHIQISHGA YORDAM BERAMIZ
          </h2>
          <div>
            <p className="max-w-[978px] mx-auto mt-2.5 text-center text-[#393939] text-xl font-normal leading-[30px] max-sm:mt-[30px] max-sm:text-base max-sm:leading-7 max-sm:px-4">
              Upgrow innovatsion raqamli yechimlarni yaratishga ixtisoslashgan
              dinamik rivojlanayotgan IT kompaniya. Biz mijozlarizga biznes
              maqsadlariga erishishda yordam beradigan noyob mahsulot va
              xizmatlarni taklif qilish uchun ilg’or texnologiya va tajribani
              birlashtiraiz. Bizning jamoamiz murakkab muammolarni hal qilishga
              va tez o’zgaruvchan bozor sharoitlariga moslashishga tayyor
              bo’lgan yuqori malakali mutaxassislardan iborat.
            </p>
            <div className="max-w-[580px] mt-[40px] ml-[40px] sm:hidden max-sm:px-4 max-sm:ml-0">
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
              BIZ IT YECHIMLARI BO’YICHA YETAKCHIMIZ
            </h3>
            <div className="flex justify-between mt-[60px] max-sm:mt-[30px]">
              <div className="max-w-[580px]">
                <p className="text-[#393939] text-2xl font-normal font-['Barlow Semi Condensed'] leading-9 max-sm:text-base max-sm:leading-7">
                  Biz O‘zbekiston IT mahsulotlar ishlab chiqish bozorida
                  2023-yildan buyon yorqin faoliyat yuritib kelmoqdamiz. Biz har
                  bir loyiha uchun loyiha menejerlari, biznes-tahlilchilar,
                  UI/UX dizaynerlari, DevOps, backend va front-end
                  mutaxassislari jamoasini yig'ish orqali noyob IT yechimlarini
                  taklif qilamiz. 40 ga yaqin turli sohalardagi yirik korxonalar
                  va startaplarni dasturiy taʼminot, veb va mobil ilovalarni
                  ishlab chiqish, bulutli hisoblash, maʼlumotlar bazasini
                  boshqarish kabi xizmatlar bilan taʼminlab kelmoqdamiz. Bizning
                  vazifamiz raqamli transformatsiyani amalga oshirish va
                  korxonalarning tez rivojlanayotgan raqamli landshaftda
                  rivojlanishiga yordam berishdir.
                </p>
              </div>
              <div className="max-sm:hidden">
                <img src={aboutgroup} alt="about" />
              </div>
            </div>
          </div>

          <div className="mt-20 max-sm:mt-[60px]">
            <h3 className="text-[#1e2f84] text-center text-[42px] font-bold leading-[63px] max-sm:px-4">
              QADRIYATLARIMIZ
            </h3>
            <div className="max-w-[1200px] mx-auto mt-[60px] flex flex-wrap justify-between gap-[30px] max-sm:px-4 max-sm:mt-[30px]">
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
