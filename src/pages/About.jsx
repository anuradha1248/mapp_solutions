import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Process from "../components/Process/Process";
import TechStack from "../components/TechStack/TechStack";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Button from "../components/Button/Button";
import { ShieldCheck, Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "About Us | Maheshwari App Solutions";
  }, []);

  return (
    <div className="about-page-wrap" style={{ background: "var(--bg-primary)" }}>
      {/* 1. About Hero & Story */}
      <section style={{ paddingBlock: "100px 80px", background: "linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)", borderBottom: "1px solid var(--border-color)", position: "relative" }}>
        <div className="red-glow" style={{ left: "10%", top: "-10%", width: "450px", height: "450px" }}></div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px", position: "relative", zIndex: 2 }}>
          <SectionHeading
            badge="About Us"
            title="Maheshwari App Solutions"
            subtitle="We are a premium software development agency engineering custom digital platforms, mobile apps, and enterprise solutions."
          />
          
          <div style={{ marginTop: "48px", alignItems: "center" }} className="responsive-grid-2col">
            {/* Image/Visual graphic card */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "20px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", minHeight: "280px" }}>
              <div className="red-glow" style={{ width: "150px", height: "150px", background: "radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 70%)", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}></div>
              <div style={{ padding: "32px", textAlign: "center", zIndex: 2 }}>
                <div style={{ fontSize: "56px", marginBottom: "12px" }}>🚀</div>
                <h4 style={{ color: "var(--text-heading)", fontSize: "18px", fontWeight: "700" }}>Maheshwari App Solutions</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "4px" }}>Custom Engineering Agency</p>
              </div>
            </div>

            {/* Text description */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-body)", fontWeight: "300", marginBottom: "20px" }}>
                Founded with the goal of bridging high-fidelity design with robust backend engineering, Maheshwari App Solutions delivers software products for fast-growing companies and enterprise businesses. 
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-body)", fontWeight: "300", margin: 0 }}>
                We specialize in performant web stacks, cross-platform Android/iOS applications, and custom machine learning pipelines. We partner directly with our clients to audit existing systems, design intuitive prototypes, and ship clean code optimized for latency and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section style={{ paddingBlock: "80px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", paddingInline: "24px" }} className="responsive-grid-2col">
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(225, 29, 72, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Target size={24} style={{ color: "var(--accent)" }} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-heading)", margin: 0 }}>Our Mission</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--text-body)", fontWeight: "300", margin: 0 }}>
              To engineer secure, high-performance software that drives concrete operational value and user growth. We avoid templates and rebuild custom logic fitted to business workflows.
            </p>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(225, 29, 72, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Rocket size={24} style={{ color: "var(--accent)" }} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-heading)", margin: 0 }}>Our Vision</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--text-body)", fontWeight: "300", margin: 0 }}>
              To remain the premium digital engineering partner for enterprise leaders, pioneering in sub-second API telemetries, fluid mobile interface designs, and secure data compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Development Process */}
      <Process />

      {/* 4. Technology Stack */}
      <TechStack />

      {/* 5. Team Overview */}
      <section style={{ paddingBlock: "80px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px" }}>
          <SectionHeading
            badge="Our Crew"
            title="Engineered by Experts"
            subtitle="Meet our dedicated team of software architects, product designers, and security engineers."
          />

          <div className="testimonials-grid" style={{ marginTop: "48px" }}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(225, 29, 72, 0.08)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Users size={32} style={{ color: "var(--accent)" }} />
              </div>
              <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "4px" }}>Architects & Devs</h4>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>Specialists in React, Go, and Flutter</p>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(225, 29, 72, 0.08)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Users size={32} style={{ color: "var(--accent)" }} />
              </div>
              <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "4px" }}>Product Designers</h4>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>Figma UI/UX experts & wireframers</p>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(225, 29, 72, 0.08)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldCheck size={32} style={{ color: "var(--accent)" }} />
              </div>
              <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "4px" }}>Security Engineers</h4>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>Auditors for HIPAA & GDPR databases</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. CTA */}
      <section style={{ paddingBlock: "80px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingInline: "24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "30px", color: "var(--text-heading)", fontWeight: "700", marginBottom: "16px" }}>Let's Build Something Great Together</h2>
          <p style={{ color: "var(--text-body)", marginBottom: "32px", fontSize: "15px" }}>
            Reach out to discuss your technical blueprint and receive an execution roadmap.
          </p>
          <Button variant="primary" onClick={() => navigate("/contact")}>
            Connect With Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
