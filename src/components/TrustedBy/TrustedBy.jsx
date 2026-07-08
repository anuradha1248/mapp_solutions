import "./TrustedBy.css";

const CLIENTS = ["ACME", "STRIPE", "VERCEL", "LINEAR", "FRAMER", "WEBFLOW"];

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="trusted-container">
        <p className="trusted-title">Trusted By Innovative Companies Worldwide</p>
        <div className="marquee">
          <div className="marquee-track">
            {/* Render list multiple times to allow infinite seamless marquee */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((logo, idx) => (
              <div key={idx} className="client-logo">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
