import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import contactHero from "@/assets/contact-hero.jpg";
import { useLanguage, useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — iSizwe sakwa Zondi, Nkandla" },
      {
        name: "description",
        content:
          "Contact the office of iNkosi Zondi, iSizwe sakwa Zondi Traditional Council, Ward 2, Nkandla.",
      },
      { property: "og:title", content: "Contact — iSizwe sakwa Zondi, Nkandla" },
      {
        property: "og:description",
        content:
          "Contact the office of iNkosi Zondi, iSizwe sakwa Zondi Traditional Council, Ward 2, Nkandla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const content = {
  en: {
    name: "Her Excellency iNkosi Zondi",
    sub: "iSizwe sakwa Zondi Traditional Council · Ward 2, Nkandla",
    heading: "Contact the office",
    pending:
      "Official office contact details and access days will be published here once they have been approved by the Traditional Council.",
    meanwhileTitle: "In the meantime",
    meanwhile:
      "Please approach your local Induna, who will take your matter to the Traditional Council. Online enquiry and appointment forms are being prepared.",
    emergencyTitle: "Emergencies",
    emergency:
      "The Traditional Council is not an emergency service. In an emergency, call the South African Police Service on 10111, or 112 from a cellphone, or go to your nearest clinic or hospital.",
  },
  zu: {
    name: "Her Excellency iNkosi Zondi",
    sub: "Ibandla Lesizwe sakwaZondi · Iwadi 2, eNkandla",
    heading: "Xhumana nehhovisi",
    pending:
      "Imininingwane esemthethweni yokuxhumana nehhovisi nezinsuku zokuvakashela izoshicilelwa lapha uma isivunyiwe yiBandla Lesizwe.",
    meanwhileTitle: "Okwamanje",
    meanwhile:
      "Sicela uye kuNdunankulu wasendaweni yakho, oyothatha udaba lwakho aluse eBandleni Lesizwe. Amafomu ezimibuzo nawokubhukha isikhathi ayalungiswa.",
    emergencyTitle: "Izimo eziphuthumayo",
    emergency:
      "IBandla Lesizwe aliyona insizakalo yezimo eziphuthumayo. Esimeni esiphuthumayo, shayela amaphoyisa ku-10111, noma ku-112 usebenzisa umakhalekhukhwini, noma uye emtholampilo noma esibhedlela esiseduze.",
  },
} as const;

function ContactPage() {
  const t = useT();
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden">
        <img
          src={contactHero}
          alt="Community members of iSizwe sakwa Zondi in traditional dress"
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
              <h1 className="font-display text-4xl leading-tight md:text-5xl">{c.name}</h1>
              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                {c.sub}
              </p>
            </div>

            <div className="mt-10 border-t pt-8">
              <div className="text-center text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                {c.heading}
              </div>
              <p className="mt-5 rounded-sm border border-[color:var(--gold)] bg-background p-5 text-center text-sm">
                {c.pending}
              </p>

              <h2 className="mt-8 font-display text-xl">{c.meanwhileTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.meanwhile}</p>

              <h2 className="mt-8 font-display text-xl">{c.emergencyTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.emergency}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
