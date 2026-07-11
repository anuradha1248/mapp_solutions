import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import Button from "../Button/Button";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const syncViewport = () => {
      const nextIsMobile = window.innerWidth <= 900;
      setIsMobile(nextIsMobile);
      if (!nextIsMobile) setMenuOpen(false);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`navbar ${scrolled || menuOpen ? "navbar-scroll" : ""}`}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container">
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
          aria-label="Maheshwari App Solutions home"
        >
          <img
            src={logoImg}
            alt="Maheshwari App Solutions"
            width="140"
            height="40"
          />
        </Link>

        {!isMobile && (
          <div className="nav-links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}

        {!isMobile ? (
          <Button
            variant="primary"
            className="quote-btn"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </Button>
        ) : (
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              id="mobile-navigation"
              className="mobile-drawer open"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            >
              <div className="mobile-nav-links">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button
                  variant="primary"
                  onClick={() => {
                    closeMenu();
                    navigate("/contact");
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
