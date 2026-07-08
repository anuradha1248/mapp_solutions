import { Check } from "lucide-react";
import "./WhyChooseUs.css";

const CAPABILITIES = ["Websites", "Mobile Apps", "ERP", "AI", "SaaS"];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="about">
      <div className="why-container">
        
        {/* Left Column: Who We Are */}
        <div className="about-left">
          <span className="about-badge">About Us</span>
          <h2 className="about-title">Who We Are</h2>
          <p className="about-subtitle">
            We build software that helps businesses grow faster.
          </p>
        </div>

        {/* Right Column: Key Deliverables List */}
        <div className="about-right">
          <div className="capabilities-list">
            {CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="capability-row">
                <div className="check-box">
                  <Check size={14} className="check-icon" />
                </div>
                <span className="capability-text">{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
