import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Button from "../components/Button/Button";
import "./Contact.css";

const BUDGET_OPTIONS = ["Under ₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L+"];
const EMAIL = "Maheshwariappsolutions@gmail.com";
const PHONE = "+91 97854 60950";
const WHATSAPP_NUMBER = "919785460950";

// This public form key was already used in the supplied project source.
// You may override it safely through VITE_WEB3FORMS_ACCESS_KEY in .env.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "62d0fb83-75e1-4c60-a292-91d14ad5db43";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[0]);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.title = "Contact Us | Maheshwari App Solutions";
  }, []);

  const whatsappLink = useMemo(() => {
    const message =
      "Hello Maheshwari App Solutions, I would like to discuss a project.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, []);

  const updateField = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New project enquiry from ${formData.name || "website visitor"}`,
          from_name: "Maheshwari App Solutions Website",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          budget: selectedBudget,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(result.message || "Unable to send form");

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="contact-page-wrap premium-contact-page">
      <section className="contact-hero">
        <div className="contact-hero-grid" aria-hidden="true"></div>
        <div className="contact-shell">
          <span className="contact-eyebrow">LET'S CONNECT</span>
          <h1>
            LET'S BUILD SOMETHING <span>AMAZING.</span>
          </h1>
          <p>
            Tell us about your idea. We will help you shape it into a digital
            product built for growth.
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-shell contact-layout">
          <aside className="contact-info-panel">
            <span className="contact-eyebrow">START A CONVERSATION</span>
            <h2>YOUR NEXT GREAT IDEA STARTS HERE.</h2>
            <p>
              Reach our team directly, send a WhatsApp message, or share your
              project requirements using the form.
            </p>

            <div className="contact-direct-list">
              <a href={`mailto:${EMAIL}`} className="contact-direct-item">
                <span>
                  <Mail size={19} />
                </span>
                <b>
                  Email us<small>{EMAIL}</small>
                </b>
              </a>
              <a href="tel:+919785460950" className="contact-direct-item">
                <span>
                  <Phone size={19} />
                </span>
                <b>
                  Call us<small>{PHONE}</small>
                </b>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-direct-item whatsapp-direct"
              >
                <span>
                  <MessageCircle size={19} />
                </span>
                <b>
                  WhatsApp us<small>Chat directly with our team</small>
                </b>
              </a>
              <div className="contact-direct-item contact-location">
                <span>
                  <MapPin size={19} />
                </span>
                <b>
                  Available across India
                  <small>Remote-first digital delivery</small>
                </b>
              </div>
            </div>
          </aside>

          <section
            className="contact-form-panel"
            aria-labelledby="contact-form-heading"
          >
            <div className="contact-form-title">
              <span>PROJECT BRIEF</span>
              <h2 id="contact-form-heading">TELL US WHAT YOU NEED.</h2>
            </div>

            {status === "success" ? (
              <div className="contact-success" role="status">
                <CheckCircle2 size={44} />
                <h3>MESSAGE RECEIVED.</h3>
                <p>
                  Thank you. Your enquiry has been sent to our team and we will
                  get back to you soon.
                </p>
                <Button variant="secondary" onClick={() => setStatus("idle")}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="contact-field-grid">
                  <label>
                    Name
                    <input
                      type="text"
                      value={formData.name}
                      onChange={updateField("name")}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      value={formData.email}
                      onChange={updateField("email")}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <div className="contact-field-grid">
                  <label>
                    Phone
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={updateField("phone")}
                      placeholder="+91 00000 00000"
                      required
                    />
                  </label>
                  <label>
                    Company
                    <input
                      type="text"
                      value={formData.company}
                      onChange={updateField("company")}
                      placeholder="Company name"
                    />
                  </label>
                </div>

                <fieldset>
                  <legend>Estimated budget</legend>
                  <div className="contact-budget-options">
                    {BUDGET_OPTIONS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={selectedBudget === option ? "active" : ""}
                        onClick={() => setSelectedBudget(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label>
                  Project details
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={updateField("message")}
                    placeholder="Tell us about the goals, features and timeline for your project..."
                    required
                  />
                </label>

                {status === "error" && (
                  <p className="contact-error" role="alert">
                    Your message could not be sent right now. Please use
                    WhatsApp or email us directly.
                  </p>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Enquiry"}{" "}
                  <Send size={16} />
                </Button>
              </form>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
