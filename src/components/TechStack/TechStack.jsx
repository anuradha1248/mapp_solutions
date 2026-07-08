import SectionHeading from "../SectionHeading/SectionHeading";
import "./TechStack.css";

const TECHS = [
  { name: "React", type: "Frontend Framework" },
  { name: "Laravel", type: "Backend PHP Framework" },
  { name: "Flutter", type: "Cross-Platform SDK" },
  { name: "Android", type: "Native Mobile Platform" },
  { name: "Node.js", type: "Backend Javascript" },
  { name: "Python", type: "AI & Machine Learning" },
  { name: "MongoDB", type: "NoSQL Database" },
  { name: "Firebase", type: "BaaS Platform" },
  { name: "AWS", type: "Cloud Architecture" },
  { name: "Docker", type: "DevOps Containerization" }
];

export default function TechStack() {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <SectionHeading 
          badge="Technology Stack" 
          title="Built on Modern Architecture" 
          subtitle="We utilize robust frameworks, cloud solutions, and databases optimized for scale, security, and velocity." 
        />

        <div className="tech-grid">
          {TECHS.map((tech, idx) => (
            <div key={idx} className="tech-card">
              <span className="tech-logo">{tech.name[0]}</span>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-type">{tech.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
