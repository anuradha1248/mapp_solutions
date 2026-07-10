import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import FAQ from "../components/FAQ/FAQ";

const BUDGET_OPTIONS = ["<$25k", "$25k-$50k", "$50k-$100k", "$100k+"];

export default function ContactPage() {
  const [selectedBudget, setSelectedBudget] = useState("<$25k");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-page-wrap" style={{ background: "var(--bg-primary)" }}>
      
      {/* 1. Header Hero */}
      <section style={{ paddingBlock: "80px 40px", background: "linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)", borderBottom: "1px solid var(--border-color)", position: "relative" }}>
        <div className="red-glow" style={{ right: "10%", top: "-10%", width: "450px", height: "450px" }}></div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px", position: "relative", zIndex: 2 }}>
          <SectionHeading
            badge="Contact"
            title="Let's Build Something Great"
            subtitle="Partner with Maheshwari App Solutions to engineer custom software products. Submit your details for a free roadmap analysis."
          />
        </div>
      </section>

      {/* 2. Unified Form & Map Layout */}
      <section style={{ paddingBlock: "60px 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "24px" }}>
          
          <div className="responsive-grid-split" style={{ gap: "48px" }}>
            
            {/* Left side: Premium Contact Form */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "32px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "24px" }}>Project Brief</h2>
              
              {submitted ? (
                <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--text-heading)" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>Message Received!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Our solution architects will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="responsive-grid-2col">
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>YOUR NAME</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ background: "#0D0D0D", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", color: "#FFF", outline: "none", fontSize: "14px" }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>EMAIL ADDRESS</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ background: "#0D0D0D", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", color: "#FFF", outline: "none", fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="responsive-grid-2col">
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>PHONE NUMBER</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ background: "#0D0D0D", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", color: "#FFF", outline: "none", fontSize: "14px" }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>COMPANY NAME</label>
                      <input 
                        type="text" 
                        placeholder="Enterprise Corp" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{ background: "#0D0D0D", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", color: "#FFF", outline: "none", fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>ESTIMATED BUDGET</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={selectedBudget === opt ? "active" : ""}
                          onClick={() => setSelectedBudget(opt)}
                          style={{
                            background: selectedBudget === opt ? "var(--accent)" : "#0D0D0D",
                            border: "1px solid",
                            borderColor: selectedBudget === opt ? "var(--accent)" : "var(--border-color)",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            color: "#FFF",
                            fontSize: "13px",
                            fontWeight: "500",
                            cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message field */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>PROJECT DETAILS</label>
                    <textarea 
                      rows={5} 
                      placeholder="Outline your application specifications, required timelines, or integrations..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ background: "#0D0D0D", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", color: "#FFF", outline: "none", fontSize: "14px", resize: "vertical" }}
                    />
                  </div>

                  <Button variant="primary" type="submit" style={{ width: "100%", justifyContent: "center", paddingBlock: "14px" }}>
                    Submit Brief Request &nbsp;<Send size={16} />
                  </Button>
                </form>
              )}
            </div>

            {/* Right side: Contact Info, Office & Map */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              
              {/* Contact Details Card */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "20px" }}>Connect With Us</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(225, 29, 72, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={16} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)", display: "block" }}>EMAIL</span>
                      <a href="mailto:Maheshwariappsolutions@gmail.com" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none", fontWeight: "500" }}>Maheshwariappsolutions@gmail.com</a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(225, 29, 72, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={16} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)", display: "block" }}>CALL US</span>
                      <a href="tel:+919785460950" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none", fontWeight: "500" }}>+91 97854 60950</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map & Office Card */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <MapPin size={18} style={{ color: "var(--accent)" }} />
                  HQ Location
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--text-body)", fontWeight: "300", marginBottom: "20px" }}>
                  We operate as a distributed remote-first engineering agency. Our core architect headquarters are located in India, executing across global time zones.
                </p>

                <div style={{ width: "100%", height: "180px", borderRadius: "12px", background: "#0D0D0D", border: "1px solid var(--border-color)", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                  <div className="red-glow" style={{ width: "120px", height: "120px", background: "radial-gradient(circle, rgba(225, 29, 72, 0.2) 0%, transparent 70%)", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ zIndex: 2, textAlign: "center" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", margin: "0 auto", boxShadow: "0 0 10px var(--accent)" }}></div>
                    <span style={{ fontSize: "11px", color: "var(--text-heading)", fontWeight: "500", marginTop: "8px", display: "block" }}>Remote-First Hub</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. FAQ Section */}
      <FAQ />

    </div>
  );
}
