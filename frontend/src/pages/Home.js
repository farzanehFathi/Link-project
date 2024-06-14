import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import AllServicesSection from "../components/Home/AllServicesSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import ServicesSection from "../components/Home/ServicesSection";
import NewsSection from "../components/Home/NewsSection";
import ContactSection from "../components/Home/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AllServicesSection />
      <ProjectsSection />
      <ServicesSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
