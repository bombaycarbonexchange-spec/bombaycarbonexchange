import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  factory: z.string().trim().min(2, "Please enter your factory name").max(100),
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s\-()]+$/, "Phone can only contain digits, spaces and + - ( )"),
  channel: z.enum(["WhatsApp", "Phone", "Email"]),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
  sector: z.string().trim().max(50).optional().or(z.literal("")),
});

type Props = {
  sector?: string;
  variant?: "ink" | "light";
};

// Replace with the real BCX WhatsApp number (international format, no +)
const WHATSAPP_NUMBER = "919999999999";

const ContactForm = ({ sector, variant = "light" }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const onInk = variant === "ink";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      factory: String(fd.get("factory") || ""),
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      channel: String(fd.get("channel") || "WhatsApp"),
      notes: String(fd.get("notes") || ""),
      sector: sector || "",
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const v = parsed.data;
    const message =
      `Hi Bombay Carbon Exchange — I'd like to book a discovery call.\n\n` +
      `Factory: ${v.factory}\n` +
      `Name: ${v.name}\n` +
      `Phone: ${v.phone}\n` +
      `Preferred contact: ${v.channel}` +
      (v.sector ? `\nSector: ${v.sector}` : "") +
      (v.notes ? `\nNotes: ${v.notes}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — finish sending the message there.");
    setTimeout(() => setSubmitting(false), 800);
  };

  const inputBase = onInk
    ? "w-full bg-transparent border-b hairline-ink py-3 text-ink-foreground placeholder:text-ink-muted focus:outline-none focus:border-accent-glow transition-colors"
    : "w-full bg-transparent border-b hairline py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";

  const labelBase = onInk
    ? "mono-label !text-ink-muted block mb-1"
    : "mono-label block mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label className={labelBase} htmlFor="factory">Factory name *</label>
          <input id="factory" name="factory" required maxLength={100} className={inputBase} placeholder="e.g. ABC Textiles" />
        </div>
        <div>
          <label className={labelBase} htmlFor="name">Your name *</label>
          <input id="name" name="name" required maxLength={80} className={inputBase} placeholder="Full name" />
        </div>
        <div>
          <label className={labelBase} htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" required maxLength={20} className={inputBase} placeholder="+91 …" />
        </div>
        <div>
          <label className={labelBase} htmlFor="channel">Preferred contact</label>
          <select id="channel" name="channel" defaultValue="WhatsApp" className={`${inputBase} appearance-none cursor-pointer`}>
            <option className="text-foreground">WhatsApp</option>
            <option className="text-foreground">Phone</option>
            <option className="text-foreground">Email</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelBase} htmlFor="notes">Any specific concerns? (optional)</label>
        <textarea id="notes" name="notes" maxLength={500} rows={3} className={`${inputBase} resize-none`} placeholder="What's on your mind?" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
        <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
          {submitting ? "Opening WhatsApp…" : "Book free 30-min discovery call"}
        </button>
        <p className={`text-sm ${onInk ? "text-ink-muted" : "text-muted-foreground"}`}>
          We respond within 24 hours. Almost always by WhatsApp.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
