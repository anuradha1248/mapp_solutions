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
    desc: "An enterprise-level SaaS dashboard displaying real-time business performance analytics.",
    image: apexImg,
    tags: ["React", "Node.js", "AWS"]
  },
  {
    title: "Aether Minimal Storefront",
    category: "Web",
    desc: "A fast, headless web storefront with a headless checkout flow and premium layout.",
    image: aetherImg,
    tags: ["React", "Laravel", "Docker"]
  },
  {
    title: "Velo Digital Wallet",
    category: "Mobile",
    desc: "A premium mobile app wallet featuring secure cryptocurrency storage and transfers.",
    image: veloImg,
    tags: ["Flutter", "Firebase", "Node.js"]
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
          badge="Portfolio" 
          title="Selected Case Showcase" 
          subtitle="A hand-picked selection of high-fidelity websites, custom software, and mobile apps built by our team." 
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

        {/* Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image-box">
                <img src={proj.image} alt={proj.title} className="project-image" />
                <div className="project-hover-overlay">
                  <Button variant="primary" className="view-project-btn">
                    View Project
                  </Button>
                </div>
                <div className="project-category-tag">{proj.category}</div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
