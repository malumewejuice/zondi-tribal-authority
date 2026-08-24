import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import contactHero from "@/assets/contact-hero.jpg";
import { useT } from "@/lib/i18n";

const PHONE = "076 191 2947";
const EMAIL = "phillyzondi@icloud.com";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(1000),
});


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

function ContactPage() {
  const t = useT();
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setError(t("contact.form.error"));
      setSent(false);
      return;
    }
    setError(null);
    setSent(true);
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--gold)]";
  const label = "text-xs font-semibold uppercase tracking-widest text-muted-foreground";

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
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
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
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
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

            <form onSubmit={onSubmit} className="mt-10 border-t pt-8">
              <div className="text-center text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                {t("contact.form.title")}
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="cf-name">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="cf-name"
                    className={field}
                    maxLength={100}
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="cf-email">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    className={field}
                    maxLength={255}
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="cf-subject">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    id="cf-subject"
                    className={field}
                    maxLength={150}
                    value={values.subject}
                    onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="cf-message">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="cf-message"
                    rows={5}
                    className={field}
                    maxLength={1000}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  />
                </div>
              </div>

              {error && (
                <p className="mt-4 text-center text-sm text-[color:var(--royal)]">{error}</p>
              )}
              {sent && (
                <p className="mt-4 rounded-sm border border-[color:var(--gold)] bg-background p-4 text-center text-sm text-foreground">
                  {t("contact.form.success")}
                </p>
              )}

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  {t("contact.form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

}
