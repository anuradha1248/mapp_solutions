import { Eye, Layers, Palette, Code2, CheckSquare, Cloud, LifeBuoy } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Process.css";

const STEPS = [
  { icon: Eye, name: "Discovery", desc: "Analyze business goals and project specifications." },
  { icon: Layers, name: "Planning", desc: "Map architecture, define scopes, and align milestones." },
  { icon: Palette, name: "Design", desc: "Create high-fidelity wireframes and responsive mockups." },
  { icon: Code2, name: "Development", desc: "Build backend microservices and scalable frontends." },
  { icon: CheckSquare, name: "Testing", desc: "Perform unit tests, integration audits, and load checks." },
  { icon: Cloud, name: "Deployment", desc: "Secure cloud provisioning and production build release." },
  { icon: LifeBuoy, name: "Support", desc: "Provide telemetry monitoring, bug fixes, and scaling help." }
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
