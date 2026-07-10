import { Star } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    avatar: "SJ",
    company: "Apex Fintech",
    rating: 5,
    quote: "Maheshwari App Solutions delivered our analytics platform within scope and ahead of schedule. The engineering quality is exceptional.",
    author: "Sarah Jenkins",
    role: "VP of Engineering"
  },
  {
    avatar: "DC",
    company: "Velo Payments",
    rating: 5,
    quote: "Their clean code architecture and transparent development cycles made scaling our iOS wallet app a completely painless process.",
    author: "David Chen",
    role: "Co-Founder"
  },
  {
    avatar: "ER",
    company: "Zenith Logistics",
    rating: 5,
    quote: "The custom admin dashboard they built has saved our operations team dozens of weekly hours. Highly recommended for enterprise projects.",
    author: "Elena Rostova",
    role: "Director of Operations"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <SectionHeading 
          badge="Testimonials" 
          title="Client Endorsements" 
          subtitle="What engineering leaders and founders say about their partnerships with Maheshwari App Solutions." 
        />

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div className="testimonial-meta">
                  <h4 className="author-name">{t.author}</h4>
                  <p className="author-role">{t.role}</p>
                  <span className="company-logo-badge" style={{ fontSize: "11px", color: "var(--accent)", background: "rgba(225, 29, 72, 0.05)", border: "1px solid rgba(225, 29, 72, 0.15)", padding: "2px 8px", borderRadius: "6px", display: "inline-block", marginTop: "4px", fontWeight: "600" }}>
                    {t.company}
                  </span>
                </div>
              </div>

              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#E11D2E" color="#E11D2E" />
                ))}
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
