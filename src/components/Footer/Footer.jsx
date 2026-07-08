import logoImg from "../../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  const handleScrollToSection = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Info Block */}
        <div className="footer-brand-column">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); handleScrollToSection("#home"); }}>
            <img src={logoImg} alt="Maheshwari App Solutions" />
          </a>
          <p className="footer-brand-desc">
            Architecting modern digital solutions for enterprise businesses. Delivering speed, security, and performance.
          </p>
        </div>

        {/* 4 columns: Company, Services, Portfolio, Quick Links */}
        <div className="footer-links-grid">
          <div className="footer-links-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection("#about"); }}>About Us</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); handleScrollToSection("#process"); }}>Our Process</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection("#about"); }}>Why Us</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection("#services"); }}>Web Development</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection("#services"); }}>Mobile Applications</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection("#services"); }}>Custom Software</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection("#services"); }}>AI Automations</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Portfolio</h4>
            <ul>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleScrollToSection("#portfolio"); }}>Apex Analytics</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleScrollToSection("#portfolio"); }}>Aether Storefront</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleScrollToSection("#portfolio"); }}>Velo Wallet</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="mailto:Maheshwariappsolutions@gmail.com">Email Support</a></li>
              <li><a href="tel:+919785460950">Direct Line</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollToSection("#contact"); }}>Request Quote</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Maheshwari App Solutions. All rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#twitter" aria-label="Twitter">Twitter</a>
            <a href="#github" aria-label="GitHub">GitHub</a>
            <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
