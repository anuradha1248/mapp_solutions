import SectionHeading from "../SectionHeading/SectionHeading";
import "./CaseStudies.css";

const CASE_STUDIES = [
  {
    title: "Apex Analytics Platform",
    client: "Fintech Leader",
    challenge: "An enterprise financial intelligence platform was utilizing a legacy data architecture that caused critical reporting delays, leading to client churn and poor telemetry.",
    solution: "We re-architected the frontend using a customized React platform and established a Node.js gateway that streamed data asynchronously into a highly tuned database layer.",
    technology: "React, Node.js, AWS, MongoDB",
    result: "Achieved an 8x reduction in telemetry retrieval latency and increased client retention rates by 34% over two quarters."
  },
  {
    title: "Velo Digital Wallet",
    client: "Decentralized Payments",
    challenge: "A startup required a secure, consumer-facing application capable of executing wallet transfers under high concurrency, with low confirmation overhead.",
    solution: "Developed a Flutter-based mobile app employing strict local keychain storage and a distributed Redis-based request queue on the backend.",
    technology: "Flutter, Node.js, Firebase, Docker",
    result: "Successfully launched on iOS and Android, scaling to over 100k active users with sub-second transfer confirmations."
  }
];

export default function CaseStudies() {
  return (
    <section className="cases-section">
      <div className="cases-container">
        <SectionHeading 
          badge="Case Studies" 
          title="Proven Project Delivery" 
          subtitle="An in-depth review of major problems solved, technology strategies, and concrete outcomes delivered for clients." 
        />

        <div className="cases-list">
          {CASE_STUDIES.map((cs, idx) => (
            <div key={idx} className="case-study-row">
              <div className="case-header">
                <span className="case-client">{cs.client}</span>
                <h3 className="case-title">{cs.title}</h3>
              </div>
              
              <div className="case-grid">
                <div className="case-block">
                  <h4>CHALLENGE</h4>
                  <p>{cs.challenge}</p>
                </div>
                <div className="case-block">
                  <h4>SOLUTION</h4>
                  <p>{cs.solution}</p>
                </div>
                <div className="case-block">
                  <h4>TECHNOLOGY</h4>
                  <p className="tech-p">{cs.technology}</p>
                </div>
                <div className="case-block">
                  <h4>RESULT</h4>
                  <p className="result-p">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
