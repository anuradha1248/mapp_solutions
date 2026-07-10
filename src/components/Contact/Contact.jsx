import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import "./Contact.css";

const BUDGET_OPTIONS = ["<$25k", "$25k-$50k", "$50k-$100k", "$100k+"];

export default function Contact() {
  const [selectedBudget, setSelectedBudget] = useState("<$25k");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Column */}
        <div className="contact-info-column">
          <SectionHeading 
            badge="Contact" 
            title="Let's Discuss Your Project" 
            subtitle="Partner with us to architect scalable software products. Submit your details for a free initial consultation." 
          />

          <div className="contact-details-list">
            <div className="details-item">
              <Mail size={18} className="details-icon" />
              <div>
                <h4>Email Us</h4>
                <p>Maheshwariappsolutions@gmail.com</p>
              </div>
            </div>
            <div className="details-item">
              <Phone size={18} className="details-icon" />
              <div>
                <h4>Call Us</h4>
                <p>+91 9785460950</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-form-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <div className="form-group-row">
              <div className="form-group">
                <label>YOUR NAME</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>COMPANY NAME</label>
                <input 
                  type="text" 
                  placeholder="Acme Corp" 
                  required 
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>ESTIMATED BUDGET</label>
              <div className="selector-grid">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`selector-btn ${selectedBudget === opt ? "active" : ""}`}
                    onClick={() => setSelectedBudget(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>PROJECT BRIEF</label>
              <textarea 
                rows="4" 
                placeholder="Outline the core goals and requirements of your software..." 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" variant="primary" className="submit-btn">
              {submitted ? "Inquiry Received" : "Send Inquiry"}
              <Send size={16} />
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}
