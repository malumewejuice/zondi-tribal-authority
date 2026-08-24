import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter & Updates — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Sign up for updates from the Zondi Tribal Authority and read recent announcements about programmes, projects and community events.",
      },
    ],
  }),
  component: NewsletterPage,
});

const content = {
  en: {
    eyebrow: "Resources",
    title: "Newsletter & Updates",
    intro:
      "Stay informed on programmes, infrastructure projects, and news from the Zondi Traditional Council.",
    signupTitle: "Get updates by email",
    signupBody:
      "Sign up to hear about new programmes, project milestones, and community meetings as soon as they're announced. We'll never share your email address.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    emailError: "Please enter a valid email address.",
    subscribe: "Subscribe",
    thanks: "Thank you — you're on the list. Watch your inbox for the next update.",
    updatesTitle: "Recent updates",
    updates: [
      {
        date: "August 2026",
        title: "Programs pages now live",
        body: "Youth Development, Social Development, Safety and Security, Agriculture, and Electricity and Water each now have a dedicated page with the latest programme information and how to get involved.",
      },
      {
        date: "August 2026",
        title: "Community Court & Laws page published",
        body: "A new page explains how disputes are heard, what the community court can and can't handle, and the legal framework traditional councils operate within.",
      },
      {
        date: "July 2026",
        title: "Electrification and water projects continue",
        body: "Work continues on the Nkandla–Vutshini Regional Water Project, the Middledrift upgrade, and the Ward 9 water scheme, alongside ongoing household electrification connections.",
      },
    ],
    faqsCta: "Read the FAQs",
    contactCta: "Contact us",
  },
  zu: {
    eyebrow: "Izinsiza",
    title: "Incwadi Yezindaba Nezibuyekezo",
    intro:
      "Hlala wazi ngezinhlelo, amaphrojekthi engqalasizinda, kanye nezindaba eziphuma Esigungwini Sendabuko SakwaZondi.",
    signupTitle: "Thola Izibuyekezo Nge-imeyili",
    signupBody:
      "Bhalisa ukuze uzwe ngezinhlelo ezintsha, izigaba zamaphrojekthi, nemihlangano yomphakathi ngokushesha lapho zimenyezelwa. Asisoze sabelana ngekheli lakho le-imeyili.",
    emailLabel: "Ikheli le-imeyili",
    emailPlaceholder: "wena@isibonelo.com",
    emailError: "Sicela ufake ikheli le-imeyili elisebenzayo.",
    subscribe: "Bhalisa",
    thanks: "Siyabonga — usohlwini. Bheka ibhokisi lakho le-imeyili ngesibuyekezo esilandelayo.",
    updatesTitle: "Izibuyekezo Zakamuva",
    updates: [
      {
        date: "Agasti 2026",
        title: "Amakhasi Ezinhlelo Manje Asebenza",
        body: "Ukuthuthukiswa Kwentsha, Ukuthuthukiswa Komphakathi, Ukuphepha Nezokuvikela, Ezolimo, kanye Nogesi Namanzi manje kunekhasi eliqondene nalo linolwazi lohlelo lwakamuva nendlela yokubamba iqhaza.",
      },
      {
        date: "Agasti 2026",
        title: "Ikhasi Lenkantolo Yomphakathi Nemithetho Selishicilelwe",
        body: "Ikhasi elisha lichaza indlela izingxabano ezilalelwa ngayo, lokho inkantolo yomphakathi engakwenza nengeke ikwenze, kanye nohlaka lomthetho izigungu zendabuko ezisebenza ngaphansi kwalo.",
      },
      {
        date: "Julayi 2026",
        title: "Amaphrojekthi Kagesi Namanzi Ayaqhubeka",
        body: "Umsebenzi uyaqhubeka kuIphrojekthi Yamanzi Yesifunda i-Nkandla–Vutshini, uphuculo lwe-Middledrift, kanye nohlelo lwamanzi lweWadi 9, ngokuhambisana nokuqhutshwa kokuxhunywa kukagesi emizini.",
      },
    ],
    faqsCta: "Funda Imibuzo Ejwayelekile",
    contactCta: "Xhumana nathi",
  },
} as const;

function NewsletterSignup({ c }: { c: (typeof content)["en"] }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError(c.emailError);
      return;
    }
    setError("");
    setSent(true);
    setEmail("");
  }

  return (
    <div className="rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
      <h2 className="font-display text-2xl md:text-3xl">{c.signupTitle}</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{c.signupBody}</p>
      {sent ? (
        <p className="mt-6 max-w-md rounded-sm border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/10 p-4 text-sm text-foreground">
          {c.thanks}
        </p>
      ) : (
        <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={submit} noValidate>
          <div className="flex-1">
            <label className="sr-only" htmlFor="newsletter-email">
              {c.emailLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              maxLength={255}
              placeholder={c.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none"
            />
            {error && <p className="mt-1 text-xs text-[color:var(--gold)]">{error}</p>}
          </div>
          <button
            type="submit"
            className="shrink-0 rounded-sm bg-[color:var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--forest)] transition hover:brightness-110"
          >
            {c.subscribe}
          </button>
        </form>
      )}
    </div>
  );
}

function NewsletterPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div className="mt-12">
        <NewsletterSignup c={c} />
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.updatesTitle}</h2>
        <div className="mt-6 space-y-4">
          {c.updates.map((u) => (
            <div key={u.title} className="rounded-sm border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
                {u.date}
              </div>
              <h3 className="mt-2 font-display text-lg">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/faqs"
          className="inline-block rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs uppercase tracking-widest text-foreground transition hover:bg-[color:var(--royal)] hover:text-background"
        >
          {c.faqsCta}
        </Link>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
        >
          {c.contactCta}
        </Link>
      </div>
    </main>
  );
}
