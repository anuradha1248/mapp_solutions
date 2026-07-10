import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobileState = window.innerWidth <= 900;
      setIsMobile(mobileState);
      if (!mobileState) {
        setMenuOpen(false); // Auto close drawer when resizing to desktop
      }
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
      className={`navbar ${scrolled || menuOpen ? "navbar-scroll" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container">
        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logoImg} alt="Maheshwari App Solutions" width="140" height="40" />
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

        {/* Hamburger Menu Toggle Button */}
        {isMobile && (
          <button 
            className="menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} style={{ color: "var(--accent)" }} /> : <Menu size={24} style={{ color: "#FFFFFF" }} />}
          </button>
        )}

        {/* CTA Button */}
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

      {/* Mobile Drawer Overlay */}
      {isMobile && (
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
