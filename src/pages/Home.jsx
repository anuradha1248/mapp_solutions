import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import TechStack from "../components/TechStack/TechStack";
import Button from "../components/Button/Button";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import { SERVICES_DATA, PROJECTS_DATA } from "../data/siteData";
import "../components/Services/Services.css";
import "../components/Portfolio/Portfolio.css";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Maheshwari App Solutions - Custom Software Development Agency";
  }, []);

  return (
    <div className="home-page-wrap">
      {/* 1. Hero banner */}
      <Hero />

      {/* 2. Social Proof / Trusted By */}
      <TrustedBy />

      {/* 3. Featured Services (4 cards) */}
      <section className="services-section">
        <div className="services-container">
          <SectionHeading
            badge="Featured Services"
            title="Bespoke Technical Capabilities"
            subtitle="We build high-performance software, mobile applications, and AI pipelines to automate your operations and scale your growth."
          />

          <div className="featured-services-grid">
            {SERVICES_DATA.slice(0, 4).map((srv) => {
              const Icon = srv.icon;
              return (
                <div key={srv.id} className="service-card secondary">
                  <div className="service-card-header">
                    <div className="service-icon-box">
                      <Icon size={20} className="service-icon" />
                    </div>
                    <h3 className="service-title">{srv.title}</h3>
                  </div>
                  <p className="service-desc">{srv.shortDesc}</p>
                  <Link to={`/services/${srv.id}`} className="service-learn-more">
                    Learn More <span className="arrow">→</span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Button variant="secondary" onClick={() => navigate("/services")}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects (3 cards) */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <SectionHeading
            badge="Featured Projects"
            title="Premium Product Delivery"
            subtitle="Explore our selected case studies demonstrating bespoke development and high design fidelity."
          />

          <div className="portfolio-list">
            {PROJECTS_DATA.slice(0, 3).map((proj, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={proj.id} className={`portfolio-item ${isEven ? "even" : "odd"}`}>
                  <div className="portfolio-item-preview">
                    <div className="preview-image-wrap">
                      <img src={proj.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} alt={proj.title} className="preview-img" loading="lazy" />
                      <div className="preview-overlay"></div>
                    </div>
                  </div>

                  <div className="portfolio-item-info">
                    <span className="item-category-tag">{proj.category}</span>
                    <h3 className="item-title">{proj.title}</h3>
                    <p className="item-desc">{proj.shortDesc}</p>
                    
                    <div className="item-tags">
                      {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="item-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="item-cta-box">
                      <Button variant="secondary" className="view-case-btn" onClick={() => navigate(`/portfolio/${proj.id}`)}>
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Button variant="primary" onClick={() => navigate("/portfolio")}>
              View Entire Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Technologies Grid */}
      <TechStack />

      {/* 6. Unified CTA section */}
      <section className="cta-banner-section" style={{ paddingBlock: "100px", position: "relative", overflow: "hidden", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="red-glow" style={{ right: "auto", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 70%)" }}></div>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingInline: "24px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: "36px", fontWeight: "800", color: "var(--text-heading)", marginBottom: "20px", letterSpacing: "-0.02em" }}>Ready to Architect Your Digital Product?</h2>
          <p style={{ fontSize: "16px", color: "var(--text-body)", marginBottom: "36px", lineHeight: "1.6", maxWidth: "600px", marginInline: "auto" }}>
            Partner with Maheshwari App Solutions to design, develop, and scale high-fidelity software products engineered for enterprise-grade performance.
          </p>
          <Button variant="primary" onClick={() => navigate("/contact")} style={{ padding: "16px 36px" }}>
            Start Your Project Today
          </Button>
        </div>
      </section>
    </div>
  );
}
