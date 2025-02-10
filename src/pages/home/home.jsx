import Clients from "../../components/clients/clients";
import Company from "../../components/company/company";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/hero";
import Logo from "../../components/logo/logo";
import Partners from "../../components/partners/partners";
import Project from "../../components/project/project";
import Section from "../../components/section/section";
import SectionMobile from "../../components/section/section.mobile";
import Services from "../../components/services/services";
import ServicesMobile from "../../components/services/serveces.mobile";

const Home = () => {
  return (
    <div>
      <div className="h-[100vh] border border-black">
        <Hero />
        <Logo />
      </div>
      <Company />
      <Services />
      <ServicesMobile />
      <Partners />
      <Project />
      <Section />
      <SectionMobile />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
