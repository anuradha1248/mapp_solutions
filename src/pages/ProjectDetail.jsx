import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  Check,
  Code2,
  Layers3,
  Tag,
} from "lucide-react";
import Button from "../components/Button/Button";
import { PROJECTS_DATA } from "../data/siteData";
import "../components/Portfolio/Portfolio.css";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

function BrandMark() {
  return (
    <span className="portfolio-brand-mark case-brand-mark" aria-hidden="true">
      <i></i>
      <b></b>
    </span>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const currentIndex = PROJECTS_DATA.findIndex(
    (project) => project.id === projectId,
  );
  const project = currentIndex >= 0 ? PROJECTS_DATA[currentIndex] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} Case Study | Maheshwari App Solutions`;
    }
  }, [project]);

  if (!project) {
    return (
      <main className="portfolio-page-wrap case-not-found">
        <div>
          <span className="portfolio-kicker">404 / CASE STUDY</span>
          <h1>PROJECT NOT FOUND.</h1>
          <p>
            The case study you requested does not exist or has been relocated.
          </p>
          <Button variant="primary" onClick={() => navigate("/portfolio")}>
            Return to Portfolio
          </Button>
        </div>
      </main>
    );
  }

  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
  const features = project.features || [];
  const technologies = project.technologies || [];

  return (
    <main className="project-detail-wrap portfolio-reference-theme">
      <section className="case-study-hero">
        <div className="case-study-grid-glow" aria-hidden="true"></div>
        <div className="portfolio-showcase-container">
          <Link to="/portfolio" className="case-back-link">
            <ChevronLeft size={17} /> BACK TO PORTFOLIO
          </Link>

          <div className="case-hero-layout">
            <div className="case-hero-copy">
              <div className="case-category-line">
                <BrandMark />
                <span>{project.category}</span>
              </div>
              <h1>{project.title}</h1>
              <p>{project.tagline || project.shortDesc}</p>

              <div className="case-meta-list">
                <div>
                  <CalendarDays size={17} />
                  <span>
                    <small>TIMELINE</small>
                    {project.timeline || "Flexible delivery"}
                  </span>
                </div>
                <div>
                  <Tag size={17} />
                  <span>
                    <small>SERVICE</small>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="case-device-stage">
              <div className="case-device-arc" aria-hidden="true"></div>
              <div className="case-browser-frame">
                <div className="case-browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <i>{project.title}</i>
                </div>
                <img
                  src={project.image || FALLBACK_IMAGE}
                  alt={`${project.title} interface`}
                />
                <div className="case-browser-shade"></div>
              </div>
              <span className="case-frame-label">
                CASE
                <br />
                STUDY
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-content">
        <div className="portfolio-showcase-container">
          <div className="case-overview-grid">
            <div className="case-heading-block">
              <span className="portfolio-kicker">01 / OVERVIEW</span>
              <h2>
                BUILT FOR
                <br />
                <span>BETTER RESULTS.</span>
              </h2>
            </div>
            <p className="case-large-copy">{project.overview}</p>
          </div>

          <div className="case-challenge-grid">
            <article className="case-info-card">
              <span className="case-card-number">01</span>
              <h3>The Challenge</h3>
              <p>{project.problem}</p>
            </article>
            <article className="case-info-card case-solution-card">
              <span className="case-card-number">02</span>
              <h3>Our Solution</h3>
              <p>{project.solution}</p>
            </article>
          </div>

          <section className="case-visual-section">
            <div className="case-section-intro">
              <span className="portfolio-kicker">02 / THE EXPERIENCE</span>
              <h2>
                DESIGNED TO
                <br />
                <span>PERFORM.</span>
              </h2>
            </div>
            <div className="case-visual-window">
              <div className="case-visual-window-bar">
                <BrandMark />
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img
                src={project.image || FALLBACK_IMAGE}
                alt={`${project.title} project preview`}
              />
              <div className="case-visual-window-caption">
                <Code2 size={18} />
                <span>{project.title} / Production Interface</span>
              </div>
            </div>
          </section>

          <div className="case-specs-grid">
            <section className="case-features-panel">
              <div className="case-panel-title">
                <Layers3 size={20} />
                <h3>Integrated Features</h3>
              </div>
              <ul>
                {features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} /> {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="case-tech-panel">
              <span className="portfolio-kicker">TECHNOLOGY STACK</span>
              <h3>
                THE TOOLS
                <br />
                BEHIND THE BUILD.
              </h3>
              <div className="case-tech-list">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>
          </div>

          <section className="case-result-strip">
            <span>THE RESULT</span>
            <p>“{project.result}”</p>
          </section>

          <section className="case-next-project">
            <div>
              <span>NEXT CASE STUDY</span>
              <h2>{nextProject.title}</h2>
            </div>
            <Link to={`/portfolio/${nextProject.id}`}>
              VIEW PROJECT <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
