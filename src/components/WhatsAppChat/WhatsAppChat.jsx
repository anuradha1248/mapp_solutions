import { MessageCircle } from "lucide-react";
import "./WhatsAppChat.css";

const WHATSAPP_NUMBER = "919785460950";
const DEFAULT_MESSAGE =
  "Hello Maheshwari App Solutions, I would like to discuss a project.";

export default function WhatsAppChat() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Maheshwari App Solutions on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2.2} aria-hidden="true" />
      <span>Chat with us</span>
    </a>
  );
}
