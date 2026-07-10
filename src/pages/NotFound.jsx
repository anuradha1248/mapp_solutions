import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--bg-primary)", color: "var(--text-body)", position: "relative", overflow: "hidden", textAlign: "center", paddingInline: "24px" }}>
      <div className="red-glow" style={{ width: "350px", height: "350px", background: "radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 70%)", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}></div>
      
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{ fontSize: "120px", fontWeight: "900", color: "var(--accent)", margin: 0, lineHeight: 1, letterSpacing: "-0.04em", filter: "drop-shadow(0 0 15px rgba(225,29,72,0.25))" }}>404</h1>
        <h2 style={{ fontSize: "28px", fontWeight: "800", color: "var(--text-heading)", marginTop: "16px", marginBottom: "8px", letterSpacing: "-0.01em" }}>Page Not Found</h2>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "400px", margin: "0 auto 36px", lineHeight: "1.5" }}>
          The link you followed may be broken or the page has been permanently relocated.
        </p>
        <Button variant="primary" onClick={() => navigate("/")} style={{ padding: "14px 32px" }}>
          Return to Home Page
        </Button>
      </div>
    </div>
  );
}
