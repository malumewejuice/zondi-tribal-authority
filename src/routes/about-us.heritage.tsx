import { createFileRoute } from "@tanstack/react-router";
import heritageImg from "@/assets/heritage-site.jpg";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/about-us/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "The heritage of the Zondi people of Ward 2, Nkandla: royal history, sacred sites and the living customs carried by each generation.",
      },
      { property: "og:title", content: "Heritage — Zondi Tribal Authority, Nkandla" },
      {
        property: "og:description",
        content:
          "Royal history, sacred sites and the living customs of the Zondi people of Nkandla.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HeritagePage,
});

const content = {
  en: {
    eyebrow: "About us",
    title: "Heritage",
    imgAlt: "Zulu elders and warriors in traditional regalia at a heritage memorial site near Nkandla",
    p1: "Nkandla is remembered as a cradle of Zulu history — its forests, ridges and river valleys hold the memory of kings, regiments and families who shaped the nation.",
    p2: "For the Zondi people of Ward 2, heritage is not only what lies in the ground. It is the language spoken at home, the respect shown at the gate of an umuzi, the songs and iNdlamu danced at weddings, and the rites that mark birth, marriage and mourning.",
    p3: "The Tribal Authority safeguards sacred sites, graves and gathering places, and works with families, schools and the municipality so that young people can learn this story from those who carry it.",
    protectTitle: "What we protect",
    protect: [
      "Sacred sites, burial grounds and memorials",
      "Oral history, praise poetry and clan names",
      "Customary ceremonies and seasonal rites",
      "Traditional craft, dress and dance",
    ],
  },
  zu: {
    eyebrow: "Mayelana nathi",
    title: "Amagugu",
    imgAlt: "Amaqhawe nabadala bamaZulu begqoke izidwaba zendabuko endaweni yesikhumbuzo yamagugu eduze kweNkandla",
    p1: "INkandla ikhunjulwa njengesibongozi somlando wamaZulu — amahlathi, izintaba nezigodi zayo zigcina inkumbulo yamakhosi, amabutho nemindeni eyakha isizwe.",
    p2: "Kubantu bakwaZondi baseWadi 2, amagugu awasho okusesihlabathini kuphela. Ulimi olukhulunywa ekhaya, inhlonipho eboniswa esangweni lomuzi, izingoma nomdanso we-iNdlamu emishadweni, kanye nemikhosi ephawula ukuzalwa, umshado nokulahlekelwa.",
    p3: "Isigungu Sendabuko sigcina izindawo ezingcwele, amathuna nezindawo zokuhlangana, futhi sisebenzisana nemindeni, izikole nomasipala ukuze intsha ifunde lo mlando kulabo abawuphethe.",
    protectTitle: "Esikuvikelayo",
    protect: [
      "Izindawo ezingcwele, amathuna nezikhumbuzo",
      "Umlando ophethwe ngomlomo, izibongo namagama emindeni",
      "Imikhosi yendabuko nemicimbi yenkathi",
      "Ubuciko bendabuko, izingubo nomdanso",
    ],
  },
} as const;

function HeritagePage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main>
      <section className="relative">
        <img
          src={heritageImg}
          alt={c.imgAlt}
          className="h-[42vh] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[color:var(--forest)]/60" />
        <div className="container-page absolute inset-0 flex items-end pb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl text-background md:text-5xl">{c.title}</h1>
          </div>
        </div>
      </section>
      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 text-muted-foreground">
            <p className="text-lg text-foreground">{c.p1}</p>
            <p>{c.p2}</p>
            <p>{c.p3}</p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-sm border bg-card p-6">
              <h2 className="font-display text-xl">{c.protectTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {c.protect.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
