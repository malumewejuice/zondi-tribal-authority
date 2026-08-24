import { createFileRoute, Link } from "@tanstack/react-router";
import hillsImg from "@/assets/nkandla-hills.jpg";
import danceImg from "@/assets/zulu-dance.jpg";
import heritageImg from "@/assets/heritage-site.jpg";
import leadershipImg from "@/assets/zulu-leadership.png";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

const navKeys = [
  { href: "#heritage", key: "nav.heritage" },
  { href: "#culture", key: "nav.culture" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Heritage />
      
      <Zondi />
      <Culture />
      <Footer />
    </div>
  );
}


function Hero() {
  const t = useT();
  const stats: Array<[string, string]> = [
    [t("hero.stat.1.n"), t("hero.stat.1.l")],
    [t("hero.stat.2.n"), t("hero.stat.2.l")],
    [t("hero.stat.3.n"), t("hero.stat.3.l")],
  ];
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden">
      <img
        src={hillsImg}
        alt="Rolling green hills of Nkandla at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="container-page relative z-10 flex min-h-[100vh] flex-col justify-end pb-24 pt-40">
        <span className="eyebrow eyebrow-line text-[color:var(--gold)]">
          {t("hero.eyebrow")}
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-background sm:text-6xl md:text-7xl lg:text-8xl">
          {t("hero.title.1")}{" "}
          <em className="text-[color:var(--gold)]">{t("hero.title.2")}</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-background/85">{t("hero.lede")}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#heritage"
            className="rounded-full bg-[color:var(--gold)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:brightness-110"
          >
            {t("hero.cta.primary")}
          </a>
          <Link
            to="/programs/electricity-water"
            className="rounded-full border border-background/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-background transition hover:bg-background hover:text-foreground"
          >
            {t("hero.cta.secondary")}
          </Link>
        </div>

        <dl className="mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-background/20 pt-8 text-background">
          {stats.map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-3xl text-[color:var(--gold)] md:text-4xl">
                {n}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-background/70">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Heritage() {
  const t = useT();
  const timeline = [1, 2, 3].map((i) => ({
    year: t(`her.tl.${i}.year`),
    title: t(`her.tl.${i}.title`),
    body: t(`her.tl.${i}.body`),
  }));
  return (
    <section id="heritage" className="relative bg-[color:var(--gold)]/8 py-28 md:py-36">
      <div className="container-page grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="eyebrow eyebrow-line">{t("her.eyebrow")}</span>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            {t("her.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {t("her.p1.a")}
            <em>Nkandla</em>
            {t("her.p1.b")}
            <em>Nkandla</em>
            {t("her.p1.c")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("her.p2.a")}
            <strong className="text-foreground">King Malandela</strong>
            {t("her.p2.b")}
            <strong className="text-foreground">King Cetshwayo</strong>
            {t("her.p2.c")}
            <strong className="text-foreground">iNkosi Sgananda</strong>
            {t("her.p2.d")}
          </p>
          <Link
            to="/about-us/heritage"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[color:var(--royal)] transition hover:text-foreground"
          >
            Read the full heritage story →
          </Link>
        </div>

        <div className="md:col-span-7">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={heritageImg}
              alt="Memorial stone in the Nkandla forest honouring Zulu kings"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <p className="font-display text-2xl text-background">{t("her.pull")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-20 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
        {timeline.map((tl) => (
          <div key={tl.title} className="bg-card p-8">
            <div className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">
              {tl.year}
            </div>
            <h3 className="mt-3 font-display text-2xl">{tl.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tl.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function Zondi() {
  const t = useT();
  const functions = [1, 2, 3, 4].map((i) => ({
    icon: ["⚖️", "🌾", "👑", "🤝"][i - 1],
    title: t(`zon.func.${i}.title`),
    body: t(`zon.func.${i}.body`),
  }));
  const hierarchy = [
    { tag: t("zon.hier.national.tag"), body: t("zon.hier.national"), level: 3 },
    { tag: t("zon.hier.provincial.tag"), body: t("zon.hier.provincial"), level: 2 },
    { tag: t("zon.hier.local.tag"), body: t("zon.hier.local"), level: 1 },
  ];
  return (
    <section id="zondi" className="relative bg-[color:var(--royal)]/6 py-28 md:py-36">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-sm">
              <img
                src={leadershipImg}
                alt="Chief Zondi leading amabutho and women in traditional dress in celebratory song and dance"
                width={2048}
                height={1152}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <h2 className="mt-8 font-display text-4xl leading-tight md:text-6xl">
              {t("zon.title")}
            </h2>
            <p className="mt-6 max-w-2xl font-display text-xl italic text-[color:var(--royal)] md:text-2xl">
              {t("zon.sub")}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t("zon.body")}
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-sm border-2 border-[color:var(--gold)] bg-card p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--gold)] text-2xl">
                  👑
                </span>
                <div>
                  <div className="font-display text-2xl leading-tight">{t("zon.chief")}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {t("zon.chief.role")}
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                  {t("zon.contact.title")}
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">📞 {t("zon.contact.phone")}</dt>
                    <dd>
                      <a
                        href="tel:+27761912947"
                        className="font-display text-lg text-foreground transition hover:text-[color:var(--royal)]"
                      >
                        076 191 2947
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">✉️ {t("zon.contact.email")}</dt>
                    <dd>
                      <a
                        href="mailto:phillyzondi@icloud.com"
                        className="text-foreground transition hover:text-[color:var(--royal)]"
                      >
                        phillyzondi@icloud.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl md:text-3xl">{t("zon.func.title")}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {functions.map((f) => (
              <div
                key={f.title}
                className="rounded-sm border bg-card p-6 transition hover:border-[color:var(--gold)]"
              >
                <div className="text-3xl">{f.icon}</div>
                <h4 className="mt-4 font-display text-xl">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl md:text-3xl">{t("zon.hier.title")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("zon.legal")}</p>
          </div>
          <div className="md:col-span-7">
            <ol className="space-y-4">
              {hierarchy.map((h, idx) => (
                <li
                  key={h.tag}
                  className="relative rounded-sm border-l-4 border-[color:var(--gold)] bg-card p-6 shadow-sm"
                  style={{ marginLeft: `${(idx) * 1.5}rem` }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-[color:var(--gold)]">
                      {"👑".repeat(h.level)}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
                      {h.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{h.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="tel:+27761912947"
            className="rounded-full bg-[color:var(--royal)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
          >
            {t("zon.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}



function Culture() {
  const t = useT();
  return (
    <section id="culture" className="relative overflow-hidden bg-[color:var(--forest)]/6 py-28 md:py-36">
      <div className="container-page grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6 md:order-2">
          <span className="eyebrow eyebrow-line">{t("cul.eyebrow")}</span>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            {t("cul.title")}
          </h2>
          <div className="mt-8 space-y-8">
            {(["a", "b", "c"] as const).map((k) => (
              <div key={k}>
                <h3 className="font-display text-2xl text-[color:var(--royal)]">
                  {t(`cul.${k}.title`)}
                </h3>
                <p className="mt-3 text-muted-foreground">{t(`cul.${k}.body`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 md:order-1">
          <img
            src={danceImg}
            alt="Zulu iNdlamu dancers performing at sunset"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}


function Footer() {
  const t = useT();
  return (
    <footer className="border-t bg-card py-16">
      <div className="container-page grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-foreground/30 font-display">
              N
            </span>
            <span className="font-display text-lg leading-tight">
              {t("foot.addr.1")}
              <span className="block text-[10px] font-sans tracking-[0.25em] text-muted-foreground uppercase">
                Isizwe SamaZulu
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">{t("foot.tag")}</p>
        </div>
        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
            {t("foot.explore")}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {navKeys.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {t(n.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
            {t("foot.visit")}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("foot.addr.1")}
            <br />
            {t("foot.addr.2")}
            <br />
            {t("foot.addr.3")}
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
            {t("foot.contact")}
          </div>
          <div className="mt-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
              {t("foot.chief")}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Ward 2, Nkandla
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition hover:bg-[color:var(--royal)] hover:text-background"
            >
              {t("foot.chief.cta")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container-page mt-12 border-t pt-6 text-xs text-muted-foreground">
        {t("foot.copy").replace("{year}", String(new Date().getFullYear()))}
      </div>
    </footer>
  );
}
