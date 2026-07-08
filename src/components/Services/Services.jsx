import { Globe, Smartphone, Code2, LayoutDashboard, Cpu, Palette, Link2, ShieldCheck } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance, search-optimized responsive web experiences built with modern stacks."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Premium cross-platform and native iOS & Android applications delivering fluid UX."
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Robust, scalable, tailored backend architectures and complex corporate systems."
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panels",
    desc: "Rich, data-dense administrative dashboards optimized for operations and analytics."
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Integrating cutting-edge LLMs and custom machine learning pipelines to streamline workflows."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "High-end product prototypes and wireframes centered around customer conversion."
  },
  {
    icon: Link2,
    title: "API Integration",
    desc: "Seamless third-party APIs and microservice orchestrations built for modern speed."
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Proactive uptime monitoring, security patching, and scaling operations support."
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <SectionHeading 
          badge="Our Services" 
          title="We Deliver End-to-End Digital Solutions" 
          subtitle="From design to launch and scaling, we build robust software platforms that drive tangible enterprise growth." 
        />

        <div className="services-grid">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="service-card">
                <div className="service-icon-box">
                  <Icon size={22} className="service-icon" />
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
                <div className="service-learn-more">
                  Learn More <span className="arrow">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
