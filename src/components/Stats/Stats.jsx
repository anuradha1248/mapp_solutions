import "./Stats.css";

const STATS = [
  { value: "150+", label: "Projects" },
  { value: "98%", label: "Happy Clients" },
  { value: "8+", label: "Years" },
  { value: "99%", label: "Satisfaction" }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {STATS.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
