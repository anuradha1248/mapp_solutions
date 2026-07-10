import { MapPin } from "lucide-react";
import ContactForm from "../components/Contact/Contact";
import FAQ from "../components/FAQ/FAQ";

export default function ContactPage() {
  return (
    <div className="contact-page-wrap" style={{ background: "var(--bg-primary)" }}>
      {/* 1. Main Contact Info & Form */}
      <ContactForm />

      {/* 2. Office Location Map */}
      <section style={{ paddingBlock: "0 80px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "64px", alignItems: "center" }} className="form-group-row">
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "16px", letterSpacing: "-0.01em" }}>Office Location</h2>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-body)", fontWeight: "300", margin: 0 }}>
                We operate as a distributed remote-first engineering agency. Our core architect headquarters are located in India, supported by remote cloud infrastructure developers worldwide. This allows us to deliver high-velocity execution across multiple time zones.
              </p>
            </div>
            
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "var(--text-heading)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                <MapPin size={18} style={{ color: "var(--accent)" }} />
                Global Architecture HQ
              </h3>
              <div style={{ width: "100%", height: "200px", borderRadius: "12px", background: "#0F0F0F", border: "1px solid #222222", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "16px" }}>
                {/* Visual grid representing Map */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                <div className="red-glow" style={{ width: "120px", height: "120px", background: "radial-gradient(circle, rgba(225, 29, 72, 0.2) 0%, transparent 70%)" }}></div>
                <div style={{ zIndex: 2, textAlign: "center" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent)", margin: "0 auto", boxShadow: "0 0 10px var(--accent)" }}></div>
                  <span style={{ fontSize: "12px", color: "var(--text-heading)", fontWeight: "500", marginTop: "8px", display: "block" }}>Remote-First Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Accordion */}
      <FAQ />
    </div>
  );
}
