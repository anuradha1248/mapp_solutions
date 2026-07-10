import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { PROJECTS_DATA } from "../data/siteData";
import "../components/Portfolio/Portfolio.css";

const CATEGORIES = ["All", "Web", "Mobile", "Custom Software"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Web") return p.category.includes("Web");
    if (activeCategory === "Mobile") return p.category.includes("Mobile");
    if (activeCategory === "Custom Software") return p.category.includes("Custom Software");
    return false;
  });

  return (
    <div className="portfolio-page-wrap" style={{ background: "var(--bg-primary)" }}>
      {/* Portfolio Hero */}
      <section className="portfolio-hero" style={{ paddingBlock: "100px 60px", background: "linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)", borderBottom: "1px solid var(--border-color)", position: "relative" }}>
        <div className="red-glow" style={{ right: "10%", top: "-10%", width: "450px", height: "450px" }}></div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px", position: "relative", zIndex: 2 }}>
          <SectionHeading
            badge="Portfolio"
            title="Bespoke Software Implementations"
            subtitle="Explore our production case studies showcasing enterprise database architectures, native iOS/Android apps, and custom web products."
          />
        </div>
      </section>

      {/* Grid listing */}
      <section className="portfolio-section" style={{ paddingBlock: "60px 120px", background: "var(--bg-primary)" }}>
        <div className="portfolio-container">
          
          {/* Filters */}
          <div className="portfolio-filters" style={{ marginBottom: "64px" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Alternating Wide Row Layout */}
          <div className="portfolio-list">
            {filteredProjects.map((proj, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={proj.id} className={`portfolio-item ${isEven ? "even" : "odd"}`}>
                  
                  {/* Project Image Wrapper (Left/Right alternating) */}
                  <div className="portfolio-item-preview">
                    <div className="preview-image-wrap">
                      <img src={proj.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} alt={proj.title} className="preview-img" loading="lazy" />
                      <div className="preview-overlay"></div>
                    </div>
                  </div>

                  {/* Project Content Wrapper */}
                  <div className="portfolio-item-info">
                    <span className="item-category-tag">{proj.category}</span>
                    <h3 className="item-title">{proj.title}</h3>
                    <p className="item-desc">{proj.shortDesc}</p>
                    
                    <div className="item-tags">
                      {proj.technologies.map((tech, tIdx) => (
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
        </div>
      </section>
    </div>
  );
}
