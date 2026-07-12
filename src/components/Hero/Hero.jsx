
import { ArrowRight, Code2, Globe2, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import laptopScreenImg from "../../assets/fintech_preview.png";
import mobileScreenImg from "../../assets/mobile_app_preview.png";
import "./Hero.css";

const SERVICES = [
  {
    icon: Globe2,
    title: "Website Development",
    text: "Fast, responsive and SEO-ready websites.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Android and iOS apps built to perform.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "Focused tools for real business workflows.",
  },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="red-glow" aria-hidden="true"></div>
      <div className="grid-bg" aria-hidden="true"></div>
      <div className="hero-dot-grid" aria-hidden="true"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="accent-line"></div>
          <span className="badge">MAHESHWARI APP SOLUTIONS</span>
          <h1>
            WE BUILD DIGITAL <span>SOLUTIONS</span> <em>That</em>{" "}
            <strong>GROW YOUR BUSINESS.</strong>
          </h1>
          <p>
            From powerful websites to scalable apps and custom software, we turn
            ambitious ideas into digital success.
          </p>

          <div className="hero-service-rail" aria-label="Core digital services">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div className="hero-service-item" key={title}>
                <span className="hero-service-icon">
                  <Icon size={17} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <Button variant="primary" onClick={() => navigate("/contact")}>
              Start Your Project <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" onClick={() => navigate("/portfolio")}>
              View Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          aria-label="Website and mobile application preview"
        >
          <div className="hero-visual-arc" aria-hidden="true"></div>
          <div className="laptop-wrapper">
            <div className="laptop-bezel">
              <div className="laptop-camera"></div>
              <div className="laptop-screen">
                <img
                  src={laptopScreenImg}
                  alt="Maheshwari App Solutions website project preview"
                  className="mockup-img"
                />
              </div>
            </div>
            <div className="laptop-base">
              <div className="laptop-notch"></div>
            </div>
          </div>
          <div className="mobile-wrapper">
            <div className="mobile-bezel">
              <div className="mobile-speaker"></div>
              <div className="mobile-screen">
                <img
                  src={mobileScreenImg}
                  alt="Maheshwari App Solutions mobile application preview"
                  className="mockup-img"
                />
              </div>
              <div className="mobile-home-bar"></div>
            </div>
          </div>
          <span className="hero-code-mark" aria-hidden="true">
            &lt;/&gt;
          </span>
        </motion.div>
      </div>

      <button
        type="button"
        className="scroll-indicator"
        aria-label="Scroll to about section"
        onClick={() =>
          document
            .querySelector(".why-choose-us")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </button>
    </section>
  );
}

