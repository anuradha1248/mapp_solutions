import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navRef = useRef(null);

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

  /* ── Close menu on outside click ───────────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Lock body scroll when menu is open ───────────── */
  useEffect(() => {
    const checkResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", checkResize);
    
    if (window.innerWidth <= 900) {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", checkResize);
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      ref={navRef}
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
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeLink === link.href ? "active" : ""}
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

        {/* Hamburger Menu Button */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </div>
      </div>
    </motion.nav>
  );
}
