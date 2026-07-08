import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import laptopScreenImg from "../../assets/fintech_preview.png";
import mobileScreenImg from "../../assets/mobile_app_preview.png";
import "./Hero.css";

export default function Hero() {
  const handleScrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPortfolio = () => {
    const target = document.querySelector("#portfolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Background Glow */}
      <div className="red-glow"></div>
      <div className="grid-bg"></div>

      <div className="hero-container">
        {/* Left */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">
            Custom Software • Mobile Apps • Websites
          </span>

          <h1>
            We Build <span>Digital Products</span> for Modern Businesses.
          </h1>

          <p>
            Maheshwari App Solutions delivers modern websites, mobile applications,
            custom enterprise software, and AI-powered business solutions that help companies scale faster and run smarter.
          </p>

          <div className="hero-buttons">
            <Button variant="primary" onClick={handleScrollToContact}>
              Get Started
              <ArrowRight size={18}/>
            </Button>

            <Button variant="secondary" onClick={handleScrollToPortfolio}>
              View Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* High-fidelity Laptop frame */}
          <div className="laptop-wrapper">
            <div className="laptop-bezel">
              <div className="laptop-camera"></div>
              <div className="laptop-screen">
                <img src={laptopScreenImg} alt="Enterprise SaaS Dashboard Preview" className="mockup-img" />
              </div>
            </div>
            <div className="laptop-base">
              <div className="laptop-notch"></div>
            </div>
          </div>

          {/* High-fidelity Mobile frame overlapping the laptop */}
          <div className="mobile-wrapper">
            <div className="mobile-bezel">
              <div className="mobile-speaker"></div>
              <div className="mobile-screen">
                <img src={mobileScreenImg} alt="iOS Mobile App Preview" className="mockup-img" />
              </div>
              <div className="mobile-home-bar"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
