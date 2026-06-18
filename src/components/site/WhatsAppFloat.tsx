import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/products";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 z-40 size-14 rounded-full grid place-items-center text-white shadow-card-hover transition-transform hover:scale-110"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="size-7" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--whatsapp)] opacity-50 animate-ping" />
    </a>
  );
}
