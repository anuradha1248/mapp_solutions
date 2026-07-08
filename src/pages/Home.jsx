import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import Stats from "../components/Stats/Stats";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import Portfolio from "../components/Portfolio/Portfolio";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import TechStack from "../components/TechStack/TechStack";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <CaseStudies />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
