import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Code2, Play, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "../components/Button/Button";
import { PROJECTS_DATA } from "../data/siteData";
import "../components/Portfolio/Portfolio.css";

const CATEGORIES = ["All", "Mobile App", "Web / E-Commerce", "Custom Software"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Portfolio & Case Studies | Maheshwari App Solutions";
  }, []);

  const filteredProjects = PROJECTS_DATA.filter(
    (proj) => activeCategory === "All" || proj.category.includes(activeCategory) || (activeCategory === "Mobile App" && proj.category.includes("Mobile"))
  );

  return (
    <main className="portfolio-page-wrap portfolio-reference-theme">
      {/* 1. Hero Showcase Header */}
      <section className="portfolio-showcase-hero">
        <div className="portfolio-hero-noise" aria-hidden="true"></div>
        <div className="portfolio-dot-grid portfolio-dot-grid-top" aria-hidden="true"></div>

        <div className="portfolio-showcase-container">
          <div className="portfolio-hero-topline">
            <div className="portfolio-brand-lockup">
              <span className="portfolio-brand-mark">
                <i></i>
                <b></b>
              </span>
              <div className="portfolio-brand-name">
                MAPP SOLUTIONS
                <small>ENGINEERING PORTFOLIO</small>
              </div>
            </div>

            <div className="portfolio-hero-promise">
              <span></span>
              <p>
                Delivering high-fidelity digital products
                <strong>Guaranteed Scalability & Performance</strong>
              </p>
            </div>
          </div>

          <div className="portfolio-hero-layout">
            <div className="portfolio-hero-copy">
              <span className="portfolio-kicker">FEATURED ENGINEERING CASE STUDIES</span>
              <h1>
                <span>PRODUCTION-READY</span>
                <em>DIGITAL</em> <strong>PRODUCTS.</strong>
              </h1>

              <div className="portfolio-title-rule">
                <i></i>
                <b></b>
              </div>

              <p className="portfolio-hero-description">
                Explore our portfolio of bespoke web applications, cross-platform mobile solutions, and enterprise software systems engineered for scale.
              </p>

              <div className="portfolio-capability-list">
                <div>
                  <CheckCircle2 size={15} /> 50+ Enterprise Applications Delivered
                </div>
                <div>
                  <CheckCircle2 size={15} /> Sub-Second Load Performance & High Concurrency
                </div>
                <div>
                  <CheckCircle2 size={15} /> 100% HIPAA & GDPR Compliant Security
                </div>
              </div>
            </div>

            <div className="portfolio-hero-visual">
              <div className="portfolio-visual-arch" aria-hidden="true"></div>
              <div className="portfolio-screen-frame">
                <div className="portfolio-screen-topbar">
                  <span className="portfolio-brand-lockup compact">
                    <span className="portfolio-brand-mark">
                      <i></i>
                      <b></b>
                    </span>
                  </span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <img
                  src={PROJECTS_DATA[0].image}
                  alt="Featured Application Preview"
                />
                <div className="portfolio-screen-overlay">
                  <span>PRODUCTION DEMO SHOWCASE</span>
                  <strong>{PROJECTS_DATA[0].title}</strong>
                </div>
              </div>

              <div className="portfolio-floating-card">
                <span>99.9%</span>
                <small>UPTIME &<br />RELIABILITY</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Work Listing Section */}
      <section className="portfolio-work-section">
        <div className="portfolio-work-curve" aria-hidden="true"></div>
        <div className="portfolio-showcase-container portfolio-work-content">
          <div className="portfolio-section-heading">
            <div>
              <span className="portfolio-kicker">SELECTED WORK</span>
              <h2>
                OUR <span>DELIVERED PROJECTS.</span>
              </h2>
            </div>
            <p>
              Filter through our case studies to explore how we solve technical problems and drive business growth.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="portfolio-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-project-grid">
            {filteredProjects.map((proj, idx) => (
              <article key={proj.id} className="portfolio-project-card">
                <div className="portfolio-project-image-wrap">
                  <span className="portfolio-project-index">0{idx + 1}</span>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="portfolio-project-image"
                    loading="lazy"
                  />
                  <div className="portfolio-project-image-shade"></div>
                  <span className="portfolio-project-category">{proj.category}</span>
                </div>

                <div className="portfolio-project-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.shortDesc || proj.tagline}</p>

                  <div className="portfolio-project-tags">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: "16px", padding: "12px", background: "rgba(255, 126, 41, 0.12)", borderRadius: "6px", borderLeft: "3px solid var(--accent)" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--accent)", display: "block", marginBottom: "3px" }}>IMPACT & RESULT</span>
                    <span style={{ fontSize: "13px", color: "var(--text-body)" }}>{proj.result}</span>
                  </div>

                  <div className="portfolio-project-action" style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                    <Button
                      variant="secondary"
                      className="view-case-btn"
                      style={{ flex: 1 }}
                      onClick={() => navigate(`/portfolio/${proj.id}`)}
                    >
                      View Case Study <ArrowRight size={14} />
                    </Button>

                    <Button
                      variant="primary"
                      style={{ flex: 1, padding: "10px 14px", fontSize: "11px" }}
                      onClick={() => setSelectedDemoProject(proj)}
                    >
                      Live Demo <Play size={13} style={{ fill: "currentColor" }} />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Live Demo Interactive Modal */}
      {selectedDemoProject && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            display: "grid",
            placeItems: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedDemoProject(null)}
        >
          <div 
            style={{
              maxWidth: "750px",
              width: "100%",
              background: "#0E1117",
              border: "1px solid var(--accent)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "18px 24px", background: "#161B22", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Sparkles size={18} color="var(--accent)" />
                <h3 style={{ margin: 0, color: "#fff", fontSize: "18px", fontWeight: "700" }}>Live Interactive Demo: {selectedDemoProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedDemoProject(null)}
                style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "20px", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: "28px 24px" }}>
              <div style={{ aspectRatio: "16/9", borderRadius: "10px", overflow: "hidden", background: "#050505", border: "1px solid rgba(255, 255, 255, 0.1)", position: "relative", display: "grid", placeItems: "center" }}>
                <img src={selectedDemoProject.image} alt={selectedDemoProject.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center", padding: "20px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 0 30px rgba(255, 126, 41, 0.5)" }}>
                    <Play size={28} style={{ marginLeft: "4px", fill: "currentColor" }} />
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", fontSize: "20px", margin: "0 0 6px" }}>{selectedDemoProject.title} Simulator</h4>
                    <p style={{ color: "#CBD5E1", fontSize: "14px", margin: 0, maxWidth: "420px" }}>
                      {selectedDemoProject.overview}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div style={{ padding: "14px", background: "#161B22", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "12px", display: "block", marginBottom: "4px" }}>CORE PROBLEM SOLVED</strong>
                  <p style={{ color: "#CBD5E1", fontSize: "13px", margin: 0 }}>{selectedDemoProject.problem}</p>
                </div>
                <div style={{ padding: "14px", background: "#161B22", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "12px", display: "block", marginBottom: "4px" }}>OUR TECHNICAL SOLUTION</strong>
                  <p style={{ color: "#CBD5E1", fontSize: "13px", margin: 0 }}>{selectedDemoProject.solution}</p>
                </div>
              </div>
            </div>

            <div style={{ padding: "16px 24px", background: "#161B22", borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#94A3B8" }}>Timeline: {selectedDemoProject.timeline}</span>
              <Button variant="primary" onClick={() => { setSelectedDemoProject(null); navigate(`/portfolio/${selectedDemoProject.id}`); }}>
                Read Full Case Study <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom CTA Strip */}
      <section className="portfolio-connect-section">
        <div className="portfolio-showcase-container">
          <div className="portfolio-connect-strip">
            <div className="portfolio-connect-icon">
              <Code2 size={24} />
            </div>
            <div>
              <span>HAVE A CUSTOM SOFTWARE OR APP IDEA?</span>
              <h2>LET'S ARCHITECT YOUR DIGITAL PRODUCT.</h2>
            </div>
            <Button variant="primary" onClick={() => navigate("/contact")}>
              Get a Technical Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
