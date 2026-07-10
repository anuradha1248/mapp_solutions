import { Eye, Palette, Code2, CheckSquare, Rocket, LifeBuoy } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Process.css";

const STEPS = [
  { num: "01", icon: Eye, name: "Discovery", desc: "Analyze business goals, user personas, and project technical requirements." },
  { num: "02", icon: Palette, name: "UI/UX Design", desc: "Wireframe layouts and design premium, conversion-focused user interfaces." },
  { num: "03", icon: Code2, name: "Development", desc: "Engineer backend database microservices and responsive frontends." },
  { num: "04", icon: CheckSquare, name: "QA Testing", desc: "Conduct security audits, integration tests, and sub-second speed checks." },
  { num: "05", icon: Rocket, name: "Production Launch", desc: "Provision secure cloud hostings and publish production-ready builds." },
  { num: "06", icon: LifeBuoy, name: "Ongoing Support", desc: "Monitor telemetry analytics, patch updates, and manage system scaling." }
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <SectionHeading 
          badge="Development Process" 
          title="How We Build Products" 
          subtitle="A battle-tested structured pipeline designed to deliver secure, reliable, and premium code." 
        />

        <div className="process-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-steps">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="timeline-step">
                  <div className="step-dot-wrap">
                    <div className="step-dot">
                      <Icon size={18} className="step-icon-img" />
                    </div>
                  </div>
                  <div className="step-content">
                    <span className="step-num">{step.num}</span>
                    <h3 className="step-name">{step.name}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
