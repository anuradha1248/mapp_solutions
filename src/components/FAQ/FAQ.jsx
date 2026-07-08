import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./FAQ.css";

const FAQS = [
  {
    q: "What types of custom software projects do you handle?",
    a: "We design and build customized web applications, native & cross-platform mobile apps (iOS/Android), enterprise administrative portals, cloud gateway interfaces, and AI/ML data automations."
  },
  {
    q: "Do you offer post-launch support and security maintenance?",
    a: "Yes. We offer flexible ongoing support agreements covering proactive cloud server scaling, zero-day threat patches, minor adjustments, telemetry monitoring, and database optimizations."
  },
  {
    q: "How do you manage communication and project timelines?",
    a: "We work in structured 2-week sprints under Agile principles. Clients receive regular dashboard access, scheduled video reviews, and automated staging link deployments."
  },
  {
    q: "Can you build solutions integrated with existing enterprise APIs?",
    a: "Absolutely. We specialize in microservices orchestration and bridging legacy enterprise databases with modern frontend interfaces via secure, authenticated REST or GraphQL APIs."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <SectionHeading 
          badge="FAQ" 
          title="Frequently Asked Questions" 
          subtitle="Get quick answers regarding our service contracts, delivery timelines, maintenance capacity, and support." 
        />

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button className="faq-question-btn" onClick={() => toggleFAQ(idx)}>
                  <span>{faq.q}</span>
                  {isOpen ? <Minus size={18} className="faq-icon" /> : <Plus size={18} className="faq-icon" />}
                </button>
                <div className="faq-answer-wrap">
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
