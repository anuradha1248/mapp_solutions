import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Info Block */}
        <div className="footer-brand-column">
          <Link to="/" className="footer-logo">
            <img src={logoImg} alt="Maheshwari App Solutions" />
          </Link>
          <p className="footer-brand-desc">
            Architecting modern digital solutions for enterprise businesses. Delivering speed, security, and performance.
          </p>
        </div>

        {/* 4 columns: Company, Services, Portfolio, Quick Links */}
        <div className="footer-links-grid">
          <div className="footer-links-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Our Process</Link></li>
              <li><Link to="/about">Why Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/mobile-app-development">Mobile Applications</Link></li>
              <li><Link to="/services/custom-software">Custom Software</Link></li>
              <li><Link to="/services/ai-automation">AI Automations</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Portfolio</h4>
            <ul>
              <li><Link to="/portfolio/restaurant-tablet">Restaurant Tablet</Link></li>
              <li><Link to="/portfolio/cleaning-app">Cleaning App</Link></li>
              <li><Link to="/portfolio/beauty-store">Beauty Store</Link></li>
              <li><Link to="/portfolio/hospital-management">Hospital System</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="mailto:Maheshwariappsolutions@gmail.com">Email Support</a></li>
              <li><a href="tel:+919785460950">Direct Line</a></li>
              <li><Link to="/contact">Request Quote</Link></li>
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
