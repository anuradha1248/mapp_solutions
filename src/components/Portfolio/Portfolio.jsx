import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import "./Portfolio.css";
import apexImg from "../../assets/fintech_preview.png";
import aetherImg from "../../assets/ecommerce_preview.png";
import veloImg from "../../assets/mobile_app_preview.png";

const CATEGORIES = ["All", "Web", "Mobile", "SaaS"];

const PROJECTS = [
  {
    title: "Apex Analytics Platform",
    category: "SaaS",
    desc: "An enterprise-level SaaS dashboard displaying real-time business performance analytics, offering sub-second telemetry speeds and distributed database syncing.",
    image: apexImg,
    tags: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    title: "Aether Minimal Storefront",
    category: "Web",
    desc: "A fast, search-optimized headless web storefront featuring dynamic SSR routing, integrated CMS inventory synchronizations, and an optimized checkout layout.",
    image: aetherImg,
    tags: ["React", "Next.js", "Laravel", "Docker"]
  },
  {
    title: "Velo Digital Wallet",
    category: "Mobile",
    desc: "A premium mobile app wallet featuring secure localized keychain storage, real-time crypto transfers, and clean biometric verification gates.",
    image: veloImg,
    tags: ["Flutter", "Firebase", "Node.js", "Android"]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <SectionHeading 
          badge="Selected Work" 
          title="Bespoke Software Delivery" 
          subtitle="A detailed showcase of custom digital products engineered to solve complex operational challenges." 
        />

        {/* Filters */}
        <div className="portfolio-filters">
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
              <div key={idx} className={`portfolio-item ${isEven ? "even" : "odd"}`}>
                
                {/* Project Image Wrapper (Left/Right alternating) */}
                <div className="portfolio-item-preview">
                  <div className="preview-image-wrap">
                    <img src={proj.image} alt={proj.title} className="preview-img" />
                    <div className="preview-overlay"></div>
                  </div>
                </div>

                {/* Project Content Wrapper */}
                <div className="portfolio-item-info">
                  <span className="item-category-tag">{proj.category}</span>
                  <h3 className="item-title">{proj.title}</h3>
                  <p className="item-desc">{proj.desc}</p>
                  
                  <div className="item-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="item-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="item-cta-box">
                    <Button variant="secondary" className="view-case-btn" onClick={() => {
                      const target = document.querySelector("#contact");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}>
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
  );
}
