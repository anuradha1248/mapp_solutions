import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { SERVICES_DATA } from "../data/siteData";
import "../components/Services/Services.css";

export default function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Our Services | Maheshwari App Solutions";
  }, []);

  return (
    <div className="services-page-wrap" style={{ background: "var(--bg-primary)" }}>
      {/* Services Hero */}
      <section className="services-hero-section" style={{ paddingBlock: "100px 60px", background: "linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)", borderBottom: "1px solid var(--border-color)", position: "relative" }}>
        <div className="red-glow" style={{ left: "10%", top: "-10%", width: "450px", height: "450px" }}></div>
        <div className="services-container" style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px", position: "relative", zIndex: 2 }}>
          <SectionHeading
            badge="Capabilities"
            title="Our Digital Services"
            subtitle="We design, engineer, and deploy modern software systems optimized for speed, scalability, and Conversion-focused user experiences."
          />
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="services-list-section" style={{ paddingBlock: "80px 120px", background: "var(--bg-primary)" }}>
        <div className="services-container" style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px" }}>
          <div className="services-bento-grid">
            {SERVICES_DATA.map((srv) => {
              const Icon = srv.icon;
              return (
                <div key={srv.id} className="service-card secondary" style={{ minHeight: "320px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div className="service-card-header">
                      <div className="service-icon-box">
                        <Icon size={20} className="service-icon" />
                      </div>
                      <h3 className="service-title">{srv.title}</h3>
                    </div>
                    <p className="service-desc" style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--text-body)", marginBottom: "20px" }}>
                      {srv.longDesc.substring(0, 140)}...
                    </p>
                    
                    <div className="service-tech-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                      {srv.techStack.map((tech) => (
                        <span key={tech} style={{ fontSize: "11px", color: "var(--accent)", background: "rgba(225, 29, 72, 0.06)", border: "1px solid rgba(225, 29, 72, 0.15)", padding: "3px 8px", borderRadius: "6px", fontWeight: "500" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="secondary" onClick={() => navigate(`/services/${srv.id}`)} style={{ width: "100%", justifyContent: "center", fontSize: "14px" }}>
                    Learn More &nbsp;→
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="services-cta-section" style={{ paddingBlock: "80px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingInline: "24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", color: "var(--text-heading)", fontWeight: "700", marginBottom: "16px" }}>Need a Custom Engineering Solution?</h2>
          <p style={{ color: "var(--text-body)", marginBottom: "32px", fontSize: "15px" }}>
            Reach out to our architects to receive a free roadmap analysis and cost estimation tailored to your system goals.
          </p>
          <Button variant="primary" onClick={() => navigate("/contact")}>
            Consult Our Engineers
          </Button>
        </div>
      </section>
    </div>
  );
}
