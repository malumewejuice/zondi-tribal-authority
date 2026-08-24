import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/programs/youth-development")({
  head: () => ({
    meta: [
      { title: "Youth Development — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Youth development programmes in Ward 2, Nkandla: skills training, mentorship, learnerships and job application support.",
      },
    ],
  }),
  component: YouthDevelopmentPage,
});

const content = {
  en: {
    eyebrow: "Programs",
    title: "Youth Development",
    objectiveLabel: "Objective:",
    objective:
      "Equip the next generation with practical, high-demand skills to combat unemployment and encourage local entrepreneurship.",
    focusAreas: [
      { title: "Skills training & learnerships", body: "Access to accredited short courses, artisan training and learnerships in partnership with SETAs and the Nkandla Local Municipality." },
      { title: "Mentorship & career guidance", body: "Young people are paired with mentors from the community and connected with career guidance ahead of tertiary applications and job searches." },
      { title: "Entrepreneurship support", body: "Guidance on registering a small business, accessing SMME funding, and cooperative development for youth-led ventures." },
      { title: "Sports & recreation", body: "Support for local youth sports structures and recreational programmes that keep young people active and engaged." },
    ],
    skillDbTitle: "Skill development database",
    skillDatabase: ["TVET colleges", "Nail and make-up artists", "Artisanal training"],
    subPillarLabel: "Sub-Pillar",
    skillPillars: [
      { title: "Technical Skill Development", body: "Mobile Hardware Training: Launch a dedicated program to train youth in cellphone and small electronics repair, turning them into local technicians." },
      { title: "Digital Literacy", body: "Offer foundational digital skills training (basic computer usage, navigating internet services, and introduction to coding or online work platforms)." },
    ],
    growthTitle: "Access to growth opportunities",
    growthLede: "How to access these opportunities:",
    growthOpportunities: [
      { name: "Register on the NYDA Database", body: "Unemployed youth can connect with employment and training pipelines via the NYDA Jobs Programme.", url: "https://nyda.org.za/about-2/" },
      { name: "Explore Corporate Placements", body: "Check out available 12-month work opportunities on the YES4Youth Platform.", url: "https://www.yes4youth.co.za/" },
      { name: "Find Business Grants", body: "Learn about funding criteria for 100% youth-owned businesses through the DSBD Youth Challenge Fund.", url: "https://www.dsbd.gov.za/" },
    ],
    jobsTitle: "Apply for a job today",
    jobsLede: "These are trusted, official portals for youth employment and public sector vacancies. Applications through these platforms are always free.",
    jobLinks: [
      { name: "YES4Youth", url: "https://www.yes4youth.co.za/", body: "Paid work experience placements for unemployed youth, run through the Youth Employment Service." },
      { name: "KZN Provincial Opportunities", url: "https://www.kznonline.gov.za/index.php?option=com_content&view=article&id=290&Itemid=709", body: "Vacancies and opportunities published by the KwaZulu-Natal provincial government." },
      { name: "DPSA Public Service Vacancies", url: "https://www.dpsa.gov.za/newsroom/psvc/", body: "The national circular listing all public service vacancies across government departments." },
    ],
    applyToday: "Apply today →",
    faqsCta: "Read the FAQs",
    contactCta: "Contact us",
  },
  zu: {
    eyebrow: "Izinhlelo",
    title: "Ukuthuthukiswa Kwentsha",
    objectiveLabel: "Inhloso:",
    objective:
      "Ukuhlomisa isizukulwane esilandelayo ngamakhono asebenzayo, adingekayo kakhulu ukulwa nendlala yemisebenzi nokukhuthaza ukuzimela kwezomnotho endaweni.",
    focusAreas: [
      { title: "Ukuqeqeshwa ngamakhono nezifundo", body: "Ukufinyelela ezifundweni ezifushane ezamukelwe, ukuqeqeshwa kobuciko kanye nezifundo ngokusebenzisana namaSETA noMasipala Wasekhaya waseNkandla." },
      { title: "Ukwelulekwa nokucija ngomsebenzi", body: "Intsha ihlanganiswa nabaluleki abavela emphakathini futhi ixhunywa nokwelulekwa ngomsebenzi ngaphambi kwezicelo zemfundo ephakeme nokufuna umsebenzi." },
      { title: "Ukusekelwa kwamabhizinisi", body: "Ukwelulekwa ngokubhalisa ibhizinisi elincane, ukufinyelela kuxhaso lwama-SMME, nokuthuthukiswa kwezinhlangano zokubambisana ngentsha." },
      { title: "Ezemidlalo nezokungcebeleka", body: "Ukusekelwa kwezakhiwo zemidlalo yentsha yendawo nezinhlelo zokungcebeleka ezigcina intsha ikhuthele futhi izibandakanya." },
    ],
    skillDbTitle: "Uhlu lokuthuthukiswa kwamakhono",
    skillDatabase: ["Amakolishi e-TVET", "Ochwepheshe bezinzipho nomakhehla", "Ukuqeqeshwa kobuciko"],
    subPillarLabel: "Isinsika Esincane",
    skillPillars: [
      { title: "Ukuthuthukiswa Kwamakhono Obuchwepheshe", body: "Ukuqeqeshwa Kokulungisa Amaselula: Qalisa uhlelo oluqondene nokuqeqesha intsha ekulungiseni amaselula nezinto ezincane zezimboni-ze-elektroniki, ibenze babe ongoti bendawo." },
      { title: "Ukwazi Ubuchwepheshe Bedijithali", body: "Nikeza uqeqesho lwamakhono edijithali ayisisekelo (ukusetshenziswa okuyisisekelo kwekhompyutha, ukufinyelela kwezinsizakalo ze-inthanethi, kanye nesingeniso sokubhala amakhodi noma amaqoqo emisebenzi ku-inthanethi)." },
    ],
    growthTitle: "Ukufinyelela emathubeni okukhula",
    growthLede: "Indlela yokufinyelela kula mathuba:",
    growthOpportunities: [
      { name: "Bhalisa ohlwini lwe-NYDA", body: "Intsha engaqashiwe ingaxhumana nezindlela zomsebenzi noqeqesho nge-NYDA Jobs Programme.", url: "https://nyda.org.za/about-2/" },
      { name: "Hlola Amathuba Ezinkampani", body: "Bheka amathuba omsebenzi wezinyanga eziyi-12 akhona ku-YES4Youth Platform.", url: "https://www.yes4youth.co.za/" },
      { name: "Thola Uxhaso Lwamabhizinisi", body: "Funda ngezimfanelo zoxhaso lwamabhizinisi angamaphesenti ayikhulu ephethwe yintsha nge-DSBD Youth Challenge Fund.", url: "https://www.dsbd.gov.za/" },
    ],
    jobsTitle: "Faka isicelo somsebenzi namuhla",
    jobsLede: "Lezi izindawo ezethembekile, ezisemthethweni zomsebenzi wentsha nezikhala zomsebenzi wakahulumeni. Izicelo ngalezi zinkundla azikhokhelwa.",
    jobLinks: [
      { name: "YES4Youth", url: "https://www.yes4youth.co.za/", body: "Amathuba okuqeqeshwa emsebenzini akhokhelwayo entsheni engaqashiwe, aqhutshwa ngeYouth Employment Service." },
      { name: "Amathuba Esifundazwe iKZN", url: "https://www.kznonline.gov.za/index.php?option=com_content&view=article&id=290&Itemid=709", body: "Izikhala nemathuba ashicilelwa uhulumeni wesifundazwe saKwaZulu-Natali." },
      { name: "Izikhala Zomsebenzi Kahulumeni ze-DPSA", url: "https://www.dpsa.gov.za/newsroom/psvc/", body: "Isaziso sikazwelonke esibhala zonke izikhala zomsebenzi kuwo wonke amanyuvezi kahulumeni." },
    ],
    applyToday: "Faka isicelo namuhla →",
    faqsCta: "Funda Imibuzo Ejwayelekile",
    contactCta: "Xhumana nathi",
  },
} as const;

function YouthDevelopmentPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        <strong className="text-foreground">{c.objectiveLabel}</strong> {c.objective}
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {c.focusAreas.map((f) => (
          <div key={f.title} className="rounded-sm border bg-card p-6">
            <h3 className="font-display text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.skillDbTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {c.skillDatabase.map((s) => (
            <div key={s} className="rounded-sm border bg-card p-6 text-center">
              <span className="font-display text-lg">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {c.skillPillars.map((p) => (
          <div key={p.title} className="rounded-sm border bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
              {c.subPillarLabel}
            </div>
            <h3 className="mt-2 font-display text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl">{c.growthTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{c.growthLede}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {c.growthOpportunities.map((g) => (
            <a
              key={g.name}
              href={g.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-sm bg-background p-5 text-foreground transition hover:brightness-110"
            >
              <div>
                <span className="font-display text-lg">{g.name}</span>
                <p className="mt-2 text-xs text-muted-foreground">{g.body}</p>
              </div>
              <span className="mt-4 break-all text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
                {g.url} →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl">{c.jobsTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{c.jobsLede}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {c.jobLinks.map((j) => (
            <a
              key={j.name}
              href={j.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-sm bg-background p-5 text-foreground transition hover:brightness-110"
            >
              <div>
                <span className="font-display text-lg">{j.name}</span>
                <p className="mt-2 text-xs text-muted-foreground">{j.body}</p>
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
                {c.applyToday}
              </span>
            </a>
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
