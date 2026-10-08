import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Mail, MessageSquare, MessageCircle } from "lucide-react";
import { useState } from "react";

import contactHero from "@/assets/contact-hero.jpg";
import { useLanguage, useT } from "@/lib/i18n";

const PHONE = "076 191 2947";
const EMAIL = "phillyzondi@icloud.com";
const PHONE_DIGITS = PHONE.replace(/\s/g, ""); // 0761912947
const PHONE_INTL = "27" + PHONE_DIGITS.slice(1); // 27761912947

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Chief Zondi — Zondi Tribal Authority" },
      {
        name: "description",
        content:
          "Contact Honourable Chief Zondi, Leader of the Zondi Tribal Authority in Ward 2, Nkandla.",
      },
      { property: "og:title", content: "Contact Chief Zondi — Zondi Tribal Authority" },
      {
        property: "og:description",
        content:
          "Reach the office of Honourable Chief Zondi, Zondi Tribal Authority, Ward 2 Nkandla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const content = {
  en: {
    textTitle: "Text the Council",
    textIntro:
      "Write your message below, then choose how to send it. This opens your own SMS, WhatsApp or email app with the message ready to send.",
    name: "Your name",
    area: "Village / area (optional)",
    message: "Your message",
    needMessage: "Please write your message first.",
    sms: "Send SMS",
    whatsapp: "WhatsApp",
    mail: "Email",
    greeting: "Hello, I am",
    from: "from",
    note: "Your message is sent from your own phone or email. It is not stored on this website.",
    emergency:
      "In an emergency, call the police on 10111 (or 112 from a cellphone) or go to your nearest clinic or hospital.",
    subject: "Message to the Zondi Tribal Council",
  },
  zu: {
    textTitle: "Thumelela iBandla umbhalo",
    textIntro:
      "Bhala umyalezo wakho ngezansi, bese ukhetha ukuthi uzowuthumela kanjani. Lokhu kuvula uhlelo lwakho lwe-SMS, i-WhatsApp noma i-imeyili nomyalezo usulungile ukuthunyelwa.",
    name: "Igama lakho",
    area: "Idolobhana / indawo (akuphoqelekile)",
    message: "Umyalezo wakho",
    needMessage: "Sicela uqale ubhale umyalezo wakho.",
    sms: "Thumela i-SMS",
    whatsapp: "WhatsApp",
    mail: "Imeyili",
    greeting: "Sawubona, ngingu",
    from: "ovela e",
    note: "Umyalezo wakho uthunyelwa kusuka kufoni noma kuhlelo lwakho lwe-imeyili. Awugcinwa kuleli webhusayithi.",
    emergency:
      "Esimeni esiphuthumayo, shayela amaphoyisa ku-10111 (noma ku-112 ngomakhalekhukhwini) noma uye emtholampilo noma esibhedlela esiseduze.",
    subject: "Umyalezo oya eSigungwini Sendabuko SakwaZondi",
  },
} as const;

function ContactPage() {
  const t = useT();
  const { lang } = useLanguage();
  const c = content[lang];

  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const field =
    "mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--gold)]";
  const label = "text-xs font-semibold uppercase tracking-widest text-muted-foreground";
  const sendBtn =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-widest transition hover:brightness-110";

  function buildText() {
    const intro = name.trim()
      ? `${c.greeting} ${name.trim()}${area.trim() ? ` ${c.from} ${area.trim()}` : ""}.`
      : "";
    return [intro, message.trim()].filter(Boolean).join("\n\n");
  }

  function send(kind: "sms" | "whatsapp" | "mail") {
    if (!message.trim()) {
      setError(true);
      return;
    }
    setError(false);
    const text = encodeURIComponent(buildText());
    let url: string;
    if (kind === "sms") url = `sms:${PHONE_DIGITS}?&body=${text}`;
    else if (kind === "whatsapp") url = `https://wa.me/${PHONE_INTL}?text=${text}`;
    else url = `mailto:${EMAIL}?subject=${encodeURIComponent(c.subject)}&body=${text}`;
    window.location.href = url;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden">
        <img
          src={contactHero}
          alt="Zondi Tribal Authority community members in traditional Zulu attire"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/75 to-forest/95" />
        <div className="container-page relative z-10 flex min-h-[60vh] flex-col justify-center py-24">
          <Link
            to="/"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-background/80 transition hover:text-background"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="uppercase tracking-widest">{t("brand.sub")}</span>
          </Link>

          <div className="mx-auto w-full max-w-2xl rounded-sm border-2 border-[color:var(--gold)] bg-card p-8 text-foreground shadow-lg md:p-12">
            <div className="flex flex-col items-center text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[color:var(--gold)] text-4xl">
                👑
              </span>
              <h1 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                Honourable Chief Zondi
              </h1>
              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                Leader, Zondi Tribal Authority · Ward 2, Nkandla
              </p>
            </div>

            <div className="mt-10 border-t pt-8">
              <div className="text-center text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                Contact the Chief
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <a
                  href={`tel:${PHONE_DIGITS}`}
                  className="group flex flex-col items-center rounded-sm border border-border bg-background p-6 transition hover:border-[color:var(--gold)]"
                >
                  <span className="text-2xl">📞</span>
                  <span className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                  </span>
                  <span className="mt-2 font-display text-xl text-foreground transition group-hover:text-[color:var(--royal)]">
                    {PHONE}
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex flex-col items-center rounded-sm border border-border bg-background p-6 transition hover:border-[color:var(--gold)]"
                >
                  <span className="text-2xl">✉️</span>
                  <span className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span className="mt-2 break-all text-center font-display text-lg text-foreground transition group-hover:text-[color:var(--royal)]">
                    {EMAIL}
                  </span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${PHONE_DIGITS}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition hover:border-[color:var(--gold)]"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>

            <div className="mt-10 border-t pt-8">
              <div className="text-center text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                {c.textTitle}
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">{c.textIntro}</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="tc-name">
                    {c.name}
                  </label>
                  <input
                    id="tc-name"
                    className={field}
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="tc-area">
                    {c.area}
                  </label>
                  <input
                    id="tc-area"
                    className={field}
                    maxLength={100}
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="tc-message">
                    {c.message}
                  </label>
                  <textarea
                    id="tc-message"
                    rows={5}
                    className={field}
                    maxLength={600}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (error) setError(false);
                    }}
                  />
                </div>
              </div>

              {error && (
                <p role="alert" className="mt-4 text-center text-sm text-[color:var(--royal)]">
                  {c.needMessage}
                </p>
              )}

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => send("sms")}
                  className={`${sendBtn} bg-[color:var(--royal)] text-background`}
                >
                  <MessageSquare className="h-4 w-4" />
                  {c.sms}
                </button>
                <button
                  type="button"
                  onClick={() => send("whatsapp")}
                  className={`${sendBtn} bg-[color:var(--forest)] text-background`}
                >
                  <MessageCircle className="h-4 w-4" />
                  {c.whatsapp}
                </button>
                <button
                  type="button"
                  onClick={() => send("mail")}
                  className={`${sendBtn} border border-foreground/20 text-foreground hover:border-[color:var(--gold)]`}
                >
                  <Mail className="h-4 w-4" />
                  {c.mail}
                </button>
              </div>

              <p className="mt-5 text-center text-xs text-muted-foreground">{c.note}</p>
              <p className="mt-3 text-center text-xs text-muted-foreground">{c.emergency}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
