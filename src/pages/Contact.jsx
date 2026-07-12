import { useEffect, useMemo, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Button from "../components/Button/Button";
import "./Contact.css";

const BUDGET_OPTIONS = ["Under ₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L+"];
const EMAIL = "Maheshwariappsolutions@gmail.com";
const PHONE = "+91 97854 60950";
const WHATSAPP_NUMBER = "919785460950";
const FORMSUBMIT_URL = "https://formsubmit.co/maheshwariappsolutions@gmail.com";

export default function ContactPage() {
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[0]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Contact Us | Maheshwari App Solutions";
  }, []);

  const whatsappLink = useMemo(() => {
    const message =
      "Hello Maheshwari App Solutions, I would like to discuss a project.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, []);

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

            <form
              className="premium-contact-form"
              action={FORMSUBMIT_URL}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Maheshwari App Solutions Website Enquiry"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_replyto" value={email} />
              <input type="hidden" name="budget" value={selectedBudget} />

              <div className="contact-field-grid">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    name="phone"
                    placeholder="+91 00000 00000"
                    required
                  />
                </label>
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
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
                  name="message"
                  rows="5"
                  placeholder="Tell us about the goals, features and timeline for your project..."
                  required
                />
              </label>

              <Button
                type="submit"
                variant="primary"
                className="contact-submit"
              >
                Send Enquiry <Send size={16} />
              </Button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
