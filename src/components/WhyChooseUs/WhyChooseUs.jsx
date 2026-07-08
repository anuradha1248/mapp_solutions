import { ShieldCheck, Zap, Cpu, HelpCircle } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./WhyChooseUs.css";

const ITEMS = [
  {
    icon: Zap,
    title: "Agile Delivery",
    desc: "Speed-to-market is critical. Our sprint-based delivery ensures consistent updates and transparent project tracking."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Enterprise-grade encryption, secure data transmission protocols, and strict industry compliance are built-in."
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    desc: "We align architectures with premium technologies like React, Flutter, and Node.js for maximum speed and scale."
  },
  {
    icon: HelpCircle,
    title: "Long Term Support",
    desc: "Our relationship doesn't end at launch. We provide round-the-clock maintenance, bug patches, and dev capacity."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="about">
      <div className="why-container">
        <SectionHeading 
          badge="Why Choose Us" 
          title="Built for Enterprise Performance" 
          subtitle="We partner with growing brands to build technical solutions that solve real business problems." 
        />

        <div className="why-grid">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <Icon size={20} className="why-icon" />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
