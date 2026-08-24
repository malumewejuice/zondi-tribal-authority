import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/programs/social-development")({
  head: () => ({
    meta: [
      { title: "Social Development — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Social development support in Ward 2, Nkandla, including help with gender-based violence and substance abuse.",
      },
    ],
  }),
  component: SocialDevelopmentPage,
});

const content = {
  en: {
    eyebrow: "Programs",
    title: "Social Development",
    intro:
      "The Traditional Council works alongside social workers, the Department of Social Development, and community structures to support households facing hardship. If you or someone you know needs help, the resources below are free and confidential.",
    objectiveLabel: "Objective:",
    objective: "To improve access to information, modern knowledge, and community cohesion.",
    libraryTitle: "Community Library & Info Hub",
    libraryPoints: [
      "Establish a multi-purpose community library. Beyond books, design it to include a digital corner with internet access.",
      "Utilize the space for homework support clubs and adult basic education training.",
    ],
    moralTitle: "Moral Regeneration",
    moralBody:
      "Community-driven initiatives to restore shared values, discipline and social cohesion across households and generations.",
    gbvTitle: "Gender-based violence (GBV)",
    gbvIntro:
      "Abuse — physical, sexual, verbal or financial — is never acceptable. Support is available every day of the week, and it is confidential.",
    gbvCards: [
      {
        title: "GBV Command Centre",
        body: "24-hour counselling and referral to a social worker, police station or shelter.",
        phoneDisplay: "0800 428 428",
        tel: "tel:0800428428",
        footnote: 'Free "Please Call Me": *120*7867#',
      },
      {
        title: "SAPS Emergency",
        body: "If you are in immediate danger, contact the police right away.",
        phoneDisplay: "10111",
        tel: "tel:10111",
      },
      {
        title: "Childline South Africa",
        body: "Free, confidential support for children and anyone concerned about a child's safety.",
        phoneDisplay: "0800 055 555",
        tel: "tel:0800055555",
      },
    ],
    councilCardTitle: "Zondi Traditional Council",
    councilCardBody:
      "You can also approach izinduna or the Traditional Council directly, in confidence, for support and referral.",
    councilCta: "Contact the Council →",
    substanceTitle: "Substance abuse",
    substanceIntro:
      "Substance dependency affects the whole household, not just the individual. Reaching out for help is a strong first step, for yourself or a loved one.",
    substanceCards: [
      {
        title: "Substance Abuse Line",
        body: "24-hour, free and confidential helpline run by the Department of Social Development.",
        phoneDisplay: "0800 12 13 14",
        tel: "tel:0800121314",
        footnote: "SMS: 32312",
      },
      {
        title: "SANCA",
        body: "The South African National Council on Alcoholism and Drug Dependence — prevention, counselling and treatment referrals.",
        phoneDisplay: "011 892 3829",
        tel: "tel:0118923829",
      },
    ],
    faqsCta: "Read the FAQs",
    contactCta: "Contact us",
    disclaimer:
      "This page is a signposting resource, not a substitute for professional medical, legal or counselling advice. In an emergency, always call 10111 or your nearest clinic.",
  },
  zu: {
    eyebrow: "Izinhlelo",
    title: "Ukuthuthukiswa Komphakathi",
    intro:
      "Isigungu Sendabuko sisebenza kanye nabasebenzi bezenhlalakahle, uMnyango Wezokuthuthukiswa Komphakathi, nezinye izakhiwo zomphakathi ukuze kusekelwe imizi ebhekene nobunzima. Uma wena noma umuntu omaziyo edinga usizo, izinsiza ezingezansi zimahhala futhi ziyimfihlo.",
    objectiveLabel: "Inhloso:",
    objective: "Ukuthuthukisa ukufinyelela olwazini, ulwazi olusha, kanye nobunye bomphakathi.",
    libraryTitle: "Ilayibrari Yomphakathi Nesikhungo Solwazi",
    libraryPoints: [
      "Sungula ilayibrari yomphakathi enezinhloso eziningi. Ngaphandle kwezincwadi, yakhelwe ukuba nekona yedijithali enokuxhumana ne-inthanethi.",
      "Sebenzisa lesi sikhala ukusiza ngomsebenzi wesikole kanye noqeqesho lwemfundo eyisisekelo yabantu abadala.",
    ],
    moralTitle: "Ukuvuselelwa Kwokuziphatha",
    moralBody:
      "Izinhlelo eziqhutshwa umphakathi zokuvuselela amagugu ahlanganyelwe, ukuzithiba nobunye bomphakathi kuyo yonke imizi kanye nezizukulwane.",
    gbvTitle: "Udlame Olususelwa Ebulilini (GBV)",
    gbvIntro:
      "Udlame — olomzimba, olocansi, olwamazwi noma olwezimali — alwamukelekile ngasosonke isikhathi. Usizo luyatholakala nsuku zonke zeviki, futhi luyimfihlo.",
    gbvCards: [
      {
        title: "GBV Command Centre",
        body: "Ukwelulekwa kwamahora angama-24 nokudluliselwa kumsebenzi wezenhlalakahle, isiteshi samaphoyisa noma indawo yokuphephela.",
        phoneDisplay: "0800 428 428",
        tel: "tel:0800428428",
        footnote: 'Mahhala "Ngicelele Ushayo": *120*7867#',
      },
      {
        title: "Isimo Esiphuthumayo SamaPhoyisa",
        body: "Uma usengozini esheshayo, xhumana namaphoyisa ngokushesha.",
        phoneDisplay: "10111",
        tel: "tel:10111",
      },
      {
        title: "Childline South Africa",
        body: "Usizo olumahhala, oluyimfihlo lwezingane naomunye ekhathazekile ngokuphepha kwengane.",
        phoneDisplay: "0800 055 555",
        tel: "tel:0800055555",
      },
    ],
    councilCardTitle: "Isigungu Sendabuko SakwaZondi",
    councilCardBody:
      "Ungasondela nasezinduneni noma kuSigungu Sendabuko ngokuqondile, ngokuyimfihlo, ukuze uthole usizo nokudluliselwa.",
    councilCta: "Xhumana Nesigungu →",
    substanceTitle: "Ukusetshenziswa Kwezidakamizwa",
    substanceIntro:
      "Ukuncika ezidakamizweni kuthinta wonke umuzi, hhayi umuntu ngamunye kuphela. Ukucela usizo kuyisinyathelo esiqinile sokuqala, kokubili wena noma othandekayo wakho.",
    substanceCards: [
      {
        title: "Substance Abuse Line",
        body: "Uhlelo lokweluleka lwamahora angama-24, olumahhala futhi oluyimfihlo oluqhutshwa uMnyango Wezokuthuthukiswa Komphakathi.",
        phoneDisplay: "0800 12 13 14",
        tel: "tel:0800121314",
        footnote: "SMS: 32312",
      },
      {
        title: "SANCA",
        body: "I-South African National Council on Alcoholism and Drug Dependence — ukuvimbela, ukwelulekwa nokudluliselwa kokwelashwa.",
        phoneDisplay: "011 892 3829",
        tel: "tel:0118923829",
      },
    ],
    faqsCta: "Funda Imibuzo Ejwayelekile",
    contactCta: "Xhumana nathi",
    disclaimer:
      "Leli khasi liwuhlelo lokutshengisa indlela, hhayi isikhundla socwepheshe bezokwelapha, bomthetho noma bokweluleka. Esimweni esiphuthumayo, hlala ushayela u-10111 noma umtholampilo osondele kuwe.",
  },
} as const;

function SocialDevelopmentPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      {/* Community Library & Info Hub */}
      <section className="mt-14 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">{c.objectiveLabel}</strong> {c.objective}
        </p>

        <div className="mt-6 rounded-sm bg-background p-6">
          <h3 className="font-display text-lg">{c.libraryTitle}</h3>
          <ul className="mt-3 space-y-3">
            {c.libraryPoints.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1 text-[color:var(--gold)]">●</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-sm bg-background p-6">
          <h3 className="font-display text-lg">{c.moralTitle}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{c.moralBody}</p>
        </div>
      </section>

      {/* GBV */}
      <section className="mt-8 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl">{c.gbvTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{c.gbvIntro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {c.gbvCards.map((card) => (
            <div key={card.title} className="rounded-sm bg-background p-5">
              <span className="font-display text-lg">{card.title}</span>
              <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
              <a href={card.tel} className="mt-3 block font-display text-xl text-[color:var(--royal)]">
                {card.phoneDisplay}
              </a>
              {"footnote" in card && card.footnote && (
                <p className="text-xs text-muted-foreground">{card.footnote}</p>
              )}
            </div>
          ))}
          <div className="rounded-sm bg-background p-5">
            <span className="font-display text-lg">{c.councilCardTitle}</span>
            <p className="mt-1 text-sm text-muted-foreground">{c.councilCardBody}</p>
            <Link to="/contact" className="mt-3 inline-block text-sm font-semibold text-[color:var(--royal)]">
              {c.councilCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Substance abuse */}
      <section className="mt-8 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl">{c.substanceTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{c.substanceIntro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {c.substanceCards.map((card) => (
            <div key={card.title} className="rounded-sm bg-background p-5">
              <span className="font-display text-lg">{card.title}</span>
              <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
              <a href={card.tel} className="mt-3 block font-display text-xl text-[color:var(--royal)]">
                {card.phoneDisplay}
              </a>
              {"footnote" in card && card.footnote && (
                <p className="text-xs text-muted-foreground">{card.footnote}</p>
              )}
            </div>
          ))}
        </div>
      </section>

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

      <p className="mt-10 max-w-3xl text-xs text-muted-foreground">{c.disclaimer}</p>
    </main>
  );
}
