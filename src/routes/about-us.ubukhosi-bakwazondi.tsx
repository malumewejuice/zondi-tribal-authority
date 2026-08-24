import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/about-us/ubukhosi-bakwazondi")({
  head: () => ({
    meta: [
      { title: "Ubukhosi bakwaZondi — Traditional Leadership, Ward 2 Nkandla" },
      {
        name: "description",
        content:
          "Ubukhosi bakwaZondi: the traditional leadership of the Zondi people under Honourable Chief Zondi, serving Ward 2, Nkandla.",
      },
      {
        property: "og:title",
        content: "Ubukhosi bakwaZondi — Traditional Leadership, Ward 2 Nkandla",
      },
      {
        property: "og:description",
        content:
          "The traditional leadership of the Zondi people under Honourable Chief Zondi, serving Ward 2, Nkandla.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UbukhosiPage,
});

const content = {
  en: {
    eyebrow: "About us",
    title: "Ubukhosi bakwaZondi",
    bannerTitle: "Guided by Tradition — The Zondi Tribal Authority",
    bannerQuote:
      "Honouring our ancestors by building our future. The Zondi Tribal Authority is the voice of customary law and community in Ward 2.",
    bannerBody:
      "As a legally recognised Traditional Council under the Department of Traditional Affairs, the Zondi Tribal Authority administers communal land, preserves our Zulu customs, and resolves community disputes using the wisdom of customary law. Under the leadership of Honourable Chief Zondi, the Authority acts as a vital bridge between the people and the state — working hand-in-hand with Nkandla Local Municipality to deliver progress that respects our heritage.",
    p1: "Ubukhosi bakwaZondi is the institution of traditional leadership of the Zondi people, led by Honourable Chief Zondi and serving the communities of Ward 2, Nkandla.",
    p2: "The Inkosi is the custodian of custom, land and community wellbeing. Working with izinduna and the Traditional Council, ubukhosi resolves disputes through customary law, administers communal land in trust for families, presides over ceremonies, and speaks for the community in dealings with government.",
    p3: "Traditional leadership is recognised in South African law and operates alongside — not in place of — elected municipal government. The two work together on services, development and the wellbeing of residents.",
    leadershipTitle: "Leadership",
    chiefName: "👑 Honourable Chief Zondi",
    chiefRole: "Leader, Zondi Tribal Authority · Ward 2, Nkandla",
    contactCta: "Contact the Chief",
    rolesTitle: "Roles of ubukhosi",
    roles: [
      "Customary law and dispute resolution",
      "Communal land administration",
      "Heritage and cultural preservation",
      "Cooperation with the municipality",
    ],
  },
  zu: {
    eyebrow: "Mayelana nathi",
    title: "Ubukhosi bakwaZondi",
    bannerTitle: "Siholwa Yisiko — Isigungu Sendabuko SakwaZondi",
    bannerQuote:
      "Sihlonipha okhokho bethu ngokwakha ikusasa lethu. Isigungu Sendabuko SakwaZondi liwumsindo womthetho wesiko nomphakathi eWadini 2.",
    bannerBody:
      "Njengesigungu Sendabuko esamukelwe ngokomthetho ngaphansi koMnyango Wezindaba Zendabuko, Isigungu Sendabuko SakwaZondi siphatha umhlaba womphakathi, sigcina amasiko ethu amaZulu, futhi sixazulula izingxabano zomphakathi ngokusebenzisa ukuhlakanipha komthetho wesiko. Ngaphansi kobuholi beNkosi Ehloniphekile uZondi, Isigungu sisebenza njengebhuloho elibalulekile phakathi kwabantu nombuso — sisebenzisana noMasipala Wasekhaya waseNkandla ukuze kulethwe intuthuko ehlonipha amagugu ethu.",
    p1: "Ubukhosi bakwaZondi kuyisikhungo sobuholi bendabuko babantu bakwaZondi, obuholwa yiNkosi Ehloniphekile uZondi futhi busebenzela imiphakathi yeWadi 2, eNkandla.",
    p2: "INkosi ingumgcini wesiko, umhlaba nempilo yomphakathi. Isebenza kanye nezinduna ne Sigungu Sendabuko, ubukhosi buxazulula izingxabano ngomthetho wesiko, buphathe umhlaba womphakathi ngokuwuthembela emindenini, buphathe imikhosi, futhi bukhulumele umphakathi ekusebenzelaneni nohulumeni.",
    p3: "Ubuholi bendabuko buyavunywa emthethweni waseNingizimu Afrika futhi busebenza kanye — hhayi esikhundleni — nomasipala okhethiwe. Bobabili basebenzisana ekulethweni kwezinsizakalo, intuthuko nempilo yezakhamizi.",
    leadershipTitle: "Ubuholi",
    chiefName: "👑 INkosi Ehloniphekile uZondi",
    chiefRole: "Umholi, Isigungu Sendabuko SakwaZondi · Iwadi 2, eNkandla",
    contactCta: "Xhumana neNkosi",
    rolesTitle: "Izindima zobukhosi",
    roles: [
      "Umthetho wesiko nokuxazululwa kwezingxabano",
      "Ukuphathwa komhlaba womphakathi",
      "Ukugcinwa kwamagugu nesiko",
      "Ukusebenzisana nomasipala",
    ],
  },
} as const;

function UbukhosiPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>

      <section className="mt-10 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl">{c.bannerTitle}</h2>
        <p className="mt-3 max-w-3xl font-display text-lg italic text-[color:var(--royal)]">
          {c.bannerQuote}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {c.bannerBody}
        </p>
      </section>

      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 space-y-5 text-muted-foreground">
          <p className="text-lg text-foreground">{c.p1}</p>
          <p>{c.p2}</p>
          <p>{c.p3}</p>
        </div>
        <aside className="md:col-span-5 space-y-4">
          <div className="rounded-sm border bg-card p-6">
            <h2 className="font-display text-xl">{c.leadershipTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {c.chiefName}
              <span className="block">{c.chiefRole}</span>
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
            >
              {c.contactCta}
            </Link>
          </div>
          <div className="rounded-sm border bg-card p-6">
            <h2 className="font-display text-xl">{c.rolesTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {c.roles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
