import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, Tag, ShieldCheck } from "lucide-react";
import Button from "../components/Button/Button";
import { PROJECTS_DATA } from "../data/siteData";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find index of current project
  const currentIdx = PROJECTS_DATA.findIndex((p) => p.id === projectId);

  const project = currentIdx !== -1 ? PROJECTS_DATA[currentIdx] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} Case Study | Maheshwari App Solutions`;
    }
  }, [project]);

  if (currentIdx === -1) {
    return (
      <div style={{ paddingBlock: "140px", textAlign: "center", background: "var(--bg-primary)", color: "var(--text-heading)" }}>
        <h2>Case Study Not Found</h2>
        <p style={{ marginBlock: "16px 24px", color: "var(--text-body)" }}>The project you requested does not exist or has been relocated.</p>
        <Button variant="primary" onClick={() => navigate("/portfolio")}>
          Return to Portfolio
        </Button>
      </div>
    );
  }

  const nextProject = PROJECTS_DATA[(currentIdx + 1) % PROJECTS_DATA.length];

  return (
    <div className="project-detail-wrap" style={{ background: "var(--bg-primary)", color: "var(--text-body)" }}>
      {/* Project Hero */}
      <section style={{ paddingBlock: "80px 60px", background: "linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)", borderBottom: "1px solid var(--border-color)", position: "relative" }}>
        <div className="red-glow" style={{ left: "5%", top: "-10%", width: "450px", height: "450px" }}></div>
        <div style={{ maxWidth: "1000px", margin: "0 auto", paddingInline: "24px", position: "relative", zIndex: 2 }}>
          {/* Back button */}
          <Link to="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", textDecoration: "none", fontSize: "14px", marginBottom: "32px", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "var(--accent)"} onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}>
            <ChevronLeft size={16} /> Back to Portfolio
          </Link>

          <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", display: "block" }}>
            {project.category}
          </span>
          <h1 style={{ fontSize: "40px", fontWeight: "800", color: "var(--text-heading)", letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: "1.2" }}>
            {project.title}
          </h1>
          <p style={{ fontSize: "20px", color: "var(--text-muted)", fontWeight: "300", lineHeight: "1.5", maxWidth: "700px" }}>
            {project.tagline}
          </p>

          {/* Meta specs row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--border-color)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={16} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: "14px", color: "var(--text-body)" }}><strong>Timeline:</strong> {project.timeline}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Tag size={16} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: "14px", color: "var(--text-body)" }}><strong>Sector:</strong> {project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Details */}
      <section style={{ paddingBlock: "80px 100px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", paddingInline: "24px" }}>
          
          {/* 1. Overview */}
          <div style={{ marginBottom: "56px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "16px" }}>Project Overview</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text-body)", fontWeight: "300" }}>
              {project.overview}
            </p>
          </div>

          {/* 2. Challenge & Solution Grid */}
          <div className="responsive-grid-2col" style={{ marginBottom: "56px" }}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }}></span>
                The Challenge
              </h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--text-body)", fontWeight: "300", margin: 0 }}>
                {project.problem}
              </p>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }}></span>
                Our Solution
              </h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--text-body)", fontWeight: "300", margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* 3. Screenshots / Device Preview Frame */}
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "20px" }}>Visual Interface Mockup</h2>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "20px", overflow: "hidden", padding: "16px", display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", aspectRatio: "16/9", background: "#0D0D0D", border: "1px solid #222222", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div className="red-glow" style={{ width: "200px", height: "200px", background: "radial-gradient(circle, rgba(225, 29, 72, 0.05) 0%, transparent 70%)" }}></div>
                <div style={{ textAlign: "center", zIndex: 2 }}>
                  <ShieldCheck size={48} style={{ color: "var(--accent)", marginBottom: "12px" }} />
                  <h4 style={{ color: "var(--text-heading)", fontSize: "16px", fontWeight: "600" }}>{project.title} Production Interface</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "4px" }}>Encrypted High-Fidelity UI View</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Tech stack list & features */}
          <div className="responsive-grid-2col" style={{ marginBottom: "64px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "20px" }}>Integrated Features</h3>
              <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {project.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.4" }}>{feat}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "20px" }}>Technologies Employed</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{ fontSize: "12px", color: "var(--text-heading)", background: "#222222", border: "1px solid #333333", padding: "6px 12px", borderRadius: "8px", fontWeight: "500" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Result box */}
          <div style={{ background: "rgba(225, 29, 72, 0.04)", border: "1px solid rgba(225, 29, 72, 0.15)", borderRadius: "16px", padding: "40px", marginBottom: "80px", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--accent)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Operational Result</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "var(--text-heading)", fontWeight: "500", margin: 0, letterSpacing: "-0.01em" }}>
              "{project.result}"
            </p>
          </div>

          {/* Next project loop */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-color)", paddingTop: "40px" }}>
            <div>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>CURRENT CASE STUDY</span>
              <h4 style={{ color: "var(--text-heading)", fontSize: "16px", fontWeight: "600", marginTop: "4px" }}>{project.title}</h4>
            </div>
            
            <Link to={`/portfolio/${nextProject.id}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-heading)", textDecoration: "none", padding: "14px 24px", borderRadius: "12px", transition: "all 0.3s ease", fontWeight: "600" }} onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.transform = "translateX(4px)"; }} onMouseLeave={(e) => { e.target.style.borderColor = "var(--border-color)"; e.target.style.transform = "translateX(0)"; }}>
              Next Project: {nextProject.title} <ChevronRight size={16} style={{ color: "var(--accent)" }} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
