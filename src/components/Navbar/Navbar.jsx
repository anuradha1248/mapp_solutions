import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process",   href: "#process" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── Scroll detection ──────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scroll" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container">
        {/* Logo */}
        <a
          href="/"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveLink("");
          }}
        >
          <img src={logoImg} alt="Maheshwari App Solutions" />
        </a>

        {/* Links */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${activeLink === link.href ? "active" : ""} nav-link-${link.label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Reusable primary button styled specifically for header */}
        {!isMobile && (
          <Button
            variant="primary"
            className="quote-btn"
            onClick={() => handleNavClick("#contact")}
          >
            Get a Quote
          </Button>
        )}
      </div>
    </motion.nav>
  );
}
