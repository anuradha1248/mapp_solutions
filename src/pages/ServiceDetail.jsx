import { useParams, useNavigate, Link } from "react-router-dom";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import Button from "../components/Button/Button";
import { SERVICES_DATA } from "../data/siteData";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Find matching service
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  // Fallback if service not found
  if (!service) {
    return (
      <div style={{ paddingBlock: "140px", textAlign: "center", background: "var(--bg-primary)", color: "var(--text-heading)" }}>
        <h2>Service Capability Not Found</h2>
        <p style={{ marginBlock: "16px 24px", color: "var(--text-body)" }}>The service you requested does not exist or has been relocated.</p>
        <Button variant="primary" onClick={() => navigate("/services")}>
          Return to Services
        </Button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="service-detail-wrap" style={{ background: "var(--bg-primary)", color: "var(--text-body)" }}>
      {/* Detail Header */}
      <section style={{ paddingBlock: "80px 60px", background: "linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)", borderBottom: "1px solid var(--border-color)", position: "relative" }}>
        <div className="red-glow" style={{ right: "10%", top: "-10%", width: "450px", height: "450px" }}></div>
        <div style={{ maxWidth: "900px", margin: "0 auto", paddingInline: "24px", position: "relative", zIndex: 2 }}>
          {/* Back button */}
          <Link to="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", textDecoration: "none", fontSize: "14px", marginBottom: "32px", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "var(--accent)"} onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}>
            <ChevronLeft size={16} /> Back to Services
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(225, 29, 72, 0.08)", border: "1px solid rgba(225, 29, 72, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={28} style={{ color: "var(--accent)" }} />
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", color: "var(--text-heading)", letterSpacing: "-0.02em" }}>{service.title}</h1>
          </div>

          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "var(--text-body)", fontWeight: "300" }}>
            {service.longDesc}
          </p>
        </div>
      </section>

      {/* Details Grid */}
      <section style={{ paddingBlock: "80px 100px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", paddingInline: "24px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "64px" }}>
          
          {/* Left: Features list */}
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "28px" }}>Key Features & Offerings</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {service.features.map((feat, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--accent)", marginTop: "3px", flexShrink: 0 }} />
                  <p style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--text-body)", margin: 0 }}>{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech Stack list */}
          <div>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px", position: "sticky", top: "100px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "20px" }}>Technology Stack</h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "20px", lineHeight: "1.5" }}>
                We utilize high-performance, industry-proven stacks to deploy this capability.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {service.techStack.map((tech) => (
                  <span key={tech} style={{ fontSize: "12px", color: "var(--text-heading)", background: "#222222", border: "1px solid #333333", padding: "6px 12px", borderRadius: "8px", fontWeight: "500" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section style={{ paddingBlock: "80px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingInline: "24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", color: "var(--text-heading)", fontWeight: "700", marginBottom: "16px" }}>Ready to Build?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "32px", fontSize: "15px" }}>
            Get in touch with our engineering team to start building custom solutions utilizing our {service.title} expertise.
          </p>
          <Button variant="primary" onClick={() => navigate("/contact")}>
            Consult Our Team Today
          </Button>
        </div>
      </section>
    </div>
  );
}
