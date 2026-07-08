import { Globe, Smartphone, Code2, Cpu, Palette, Link2, ShieldCheck } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";

const FEATURED_SERVICE = {
  icon: Code2,
  title: "Custom Software Development",
  desc: "We build robust, scalable, and secure tailormade software solutions configured for your business workflows. From complex enterprise database architectures to custom API microservices, our systems are built to scale and adapt."
};

const SECONDARY_SERVICES = [
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
    icon: Cpu,
    title: "AI Automation",
    desc: "Integrating cutting-edge LLMs and custom machine learning pipelines to automate operations."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "High-end product prototypes, user journeys, and wireframes centered around conversion."
  }
];

const HIGHLIGHT_SERVICES = [
  {
    icon: Link2,
    title: "API Integrations",
    desc: "Bridging databases with modern frontend interfaces via secure REST or GraphQL APIs."
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Uptime monitoring, patches, and scaling support to keep operations smooth."
  }
];

export default function Services() {
  const FeaturedIcon = FEATURED_SERVICE.icon;

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <SectionHeading 
          badge="Our Services" 
          title="We Deliver End-to-End Digital Solutions" 
          subtitle="From design to launch and scaling, we build robust software platforms that drive tangible enterprise growth." 
        />

        <div className="services-bento-grid">
          
          {/* 1. Large Featured Card (Row 1, spans 2 columns) */}
          <div className="service-card featured">
            <div className="featured-content-wrap">
              <div className="service-icon-box">
                <FeaturedIcon size={26} className="service-icon" />
              </div>
              <h3 className="service-title">{FEATURED_SERVICE.title}</h3>
              <p className="service-desc">{FEATURED_SERVICE.desc}</p>
              <div className="service-learn-more">
                Learn More <span className="arrow">→</span>
              </div>
            </div>
          </div>

          {/* 2. Secondary Service 1 (Row 1, column 3) */}
          {SECONDARY_SERVICES.slice(0, 1).map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="service-card secondary">
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

          {/* 3. Secondary Services 2, 3, 4 (Row 2, columns 1, 2, 3) */}
          {SECONDARY_SERVICES.slice(1).map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="service-card secondary">
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

          {/* 4. Highlight Service 1 (Row 3, spans 2 columns) */}
          {HIGHLIGHT_SERVICES.slice(0, 1).map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="service-card highlight-wide">
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

          {/* 5. Highlight Service 2 (Row 3, column 3) */}
          {HIGHLIGHT_SERVICES.slice(1).map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="service-card secondary">
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
