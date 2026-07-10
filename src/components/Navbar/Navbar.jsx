import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",      path: "/" },
  { label: "Services",  path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About",     path: "/about" },
  { label: "Contact",   path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();

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

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scroll" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container">
        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={() => setActiveLink("")}
        >
          <img src={logoImg} alt="Maheshwari App Solutions" />
        </Link>

        {/* Links */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `${isActive ? "active" : ""} nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button - Reusable primary button styled specifically for header */}
        {!isMobile && (
          <Button
            variant="primary"
            className="quote-btn"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </Button>
        )}
      </div>
    </motion.nav>
  );
}
