import "./SectionHeading.css";

export default function SectionHeading({ badge, title, subtitle }) {
  return (
    <div className="section-header">
      {badge && <span className="section-badge">{badge}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
