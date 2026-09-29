import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

import heritageImg from "@/assets/heritage-site.jpg";
import hillsImg from "@/assets/nkandla-hills.jpg";
import danceImg from "@/assets/zulu-dance.jpg";
import leadershipImg from "@/assets/zulu-leadership.png";
import contactImg from "@/assets/contact-hero.jpg";
import waterImg from "@/assets/water-project.jpg";
import waterTankImg from "@/assets/zulu-water-project.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Photos of Zondi heritage, culture, community life and development projects in Nkandla.",
      },
      { property: "og:title", content: "Gallery — Zondi Tribal Authority, Nkandla" },
      {
        property: "og:description",
        content:
          "Photos of Zondi heritage, culture, community life and development projects in Nkandla.",
      },
    ],
  }),
  component: GalleryPage,
});

type Category = "heritage" | "culture" | "community" | "development";

/**
 * To add a photo: drop the file in src/assets, import it above and add an entry here.
 * `w`/`h` are the image's pixel size (stops the page jumping while images load).
 */
const photos: {
  id: string;
  src: string;
  category: Category;
  w: number;
  h: number;
  alt: { en: string; zu: string };
  caption: { en: string; zu: string };
}[] = [
  {
    id: "heritage-site",
    src: heritageImg,
    category: "heritage",
    w: 1600,
    h: 1008,
    alt: {
      en: "Men in traditional Zulu regalia holding shields and spears beside the King Cetshwayo memorial",
      zu: "Amadoda agqoke izingubo zendabuko zamaZulu ephethe izihlangu nemikhonto eduze kwesikhumbuzo seNkosi uCetshwayo",
    },
    caption: {
      en: "At the King Cetshwayo memorial",
      zu: "Esikhumbuzweni seNkosi uCetshwayo",
    },
  },
  {
    id: "nkandla-hills",
    src: hillsImg,
    category: "heritage",
    w: 1600,
    h: 1008,
    alt: {
      en: "Warriors with shields and spears looking over the misty Nkandla hills at sunrise",
      zu: "Amabutho aphethe izihlangu nemikhonto ebuka amaqhawe kaNkandla ekuseni",
    },
    caption: {
      en: "The hills of Nkandla at first light",
      zu: "Amagquma aseNkandla ekuseni",
    },
  },
  {
    id: "zulu-dance",
    src: danceImg,
    category: "culture",
    w: 1024,
    h: 1280,
    alt: {
      en: "Dancers in beadwork and animal-skin regalia dancing on a dusty field at sunset",
      zu: "Abadlali bagqoke izinkotha nezikhumba bedansa endaweni enothuli ekushoneni kwelanga",
    },
    caption: {
      en: "Traditional dance at sunset",
      zu: "Umdanso wendabuko ekushoneni kwelanga",
    },
  },
  {
    id: "zulu-leadership",
    src: leadershipImg,
    category: "culture",
    w: 2048,
    h: 1152,
    alt: {
      en: "Community members singing and dancing together under trees",
      zu: "Abantu bomphakathi bacula futhi badansa ndawonye ngaphansi kwezihlahla",
    },
    caption: {
      en: "Song and dance as a community",
      zu: "Ingoma nomdanso womphakathi",
    },
  },
  {
    id: "contact-hero",
    src: contactImg,
    category: "community",
    w: 1920,
    h: 1080,
    alt: {
      en: "Community elders in traditional dress standing outside a homestead",
      zu: "Abadala bomphakathi begqoke izingubo zendabuko bemi phandle kwekhaya",
    },
    caption: {
      en: "Community elders at the homestead",
      zu: "Abadala bomphakathi ekhaya",
    },
  },
  {
    id: "water-project",
    src: waterImg,
    category: "development",
    w: 1024,
    h: 1024,
    alt: {
      en: "A man drawing clean water from a hand pump while neighbours look on",
      zu: "Indoda ikha amanzi ahlanzekile empompini ngenkathi omakhelwane bebuka",
    },
    caption: {
      en: "Clean water at the community pump",
      zu: "Amanzi ahlanzekile empompini yomphakathi",
    },
  },
  {
    id: "zulu-water-project",
    src: waterTankImg,
    category: "development",
    w: 1600,
    h: 1008,
    alt: {
      en: "Residents in traditional dress collecting water at a new storage tank and tap stand",
      zu: "Izakhamuzi zigqoke izingubo zendabuko zikha amanzi ethangini elisha nasemsakazweni wamanzi",
    },
    caption: {
      en: "A new water tank and tap stand",
      zu: "Ithangi lamanzi elisha nesikhala samanzi",
    },
  },
];

const content = {
  en: {
    eyebrow: "Resources",
    title: "Gallery",
    intro:
      "A look at Zondi heritage, culture, community life and the development projects shaping Nkandla.",
    filters: {
      all: "All",
      heritage: "Heritage",
      culture: "Culture",
      community: "Community",
      development: "Development",
    },
    filterLabel: "Filter photos by category",
    empty: "No photos in this category yet.",
    open: "View larger:",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    dialogLabel: "Photo viewer",
    counter: (i: number, n: number) => `${i} of ${n}`,
    contactPrompt: "Have photos from a community event you would like to share?",
    contactCta: "Contact us",
  },
  zu: {
    eyebrow: "Izinsiza",
    title: "Izithombe",
    intro:
      "Ukubuka amagugu, amasiko, impilo yomphakathi namaphrojekthi entuthuko akha iNkandla.",
    filters: {
      all: "Konke",
      heritage: "Amagugu",
      culture: "Amasiko",
      community: "Umphakathi",
      development: "Intuthuko",
    },
    filterLabel: "Hlunga izithombe ngesigaba",
    empty: "Azikho izithombe kulesi sigaba okwamanje.",
    open: "Buka ngobukhulu:",
    close: "Vala",
    prev: "Isithombe esedlule",
    next: "Isithombe esilandelayo",
    dialogLabel: "Isibuki sezithombe",
    counter: (i: number, n: number) => `${i} kwabangu-${n}`,
    contactPrompt: "Unezithombe zomcimbi womphakathi ongathanda ukuzabelana ngazo?",
    contactCta: "Xhumana nathi",
  },
} as const;

function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: typeof photos;
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const { lang } = useLanguage();
  const c = content[lang];
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = items[index];
  const n = items.length;

  const go = useCallback((d: number) => onIndex((index + d + n) % n), [index, n, onIndex]);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const btn =
    "grid h-11 w-11 place-items-center rounded-full border border-background/40 bg-forest/70 text-background transition hover:bg-background hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={c.dialogLabel}
      className="fixed inset-0 z-[100] flex flex-col bg-black/90"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 text-background sm:px-6">
        <span className="text-xs uppercase tracking-widest text-background/70">
          {c.counter(index + 1, n)}
        </span>
        <button
          ref={closeRef}
          type="button"
          aria-label={c.close}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className={btn}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
        {n > 1 && (
          <button
            type="button"
            aria-label={c.prev}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className={`${btn} absolute left-2 z-10 sm:left-4`}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt[lang]}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full rounded-sm object-contain"
        />
        {n > 1 && (
          <button
            type="button"
            aria-label={c.next}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className={`${btn} absolute right-2 z-10 sm:right-4`}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="px-4 py-4 text-center font-display text-lg text-background sm:text-xl">
        {photo.caption[lang]}
      </p>
    </div>
  );
}

function GalleryPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === "all" ? photos : photos.filter((p) => p.category === filter);
  const filterKeys = ["all", "heritage", "culture", "community", "development"] as const;

  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div role="group" aria-label={c.filterLabel} className="mt-10 flex flex-wrap gap-2">
        {filterKeys.map((k) => {
          const active = filter === k;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(k)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition ${
                active
                  ? "border-[color:var(--forest)] bg-[color:var(--forest)] text-background"
                  : "border-[color:var(--royal)] text-foreground hover:bg-[color:var(--royal)] hover:text-background"
              }`}
            >
              {c.filters[k]}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">{c.empty}</p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`${c.open} ${p.caption[lang]}`}
                className="group block w-full overflow-hidden rounded-sm border bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.src}
                    alt={p.alt[lang]}
                    width={p.w}
                    height={p.h}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <span className="font-display text-lg leading-snug">{p.caption[lang]}</span>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--royal)]">
                    {c.filters[p.category]}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-14 flex flex-wrap items-center gap-4 rounded-sm border bg-card p-6">
        <p className="text-sm text-muted-foreground">{c.contactPrompt}</p>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
        >
          {c.contactCta}
        </Link>
      </div>

      {openIndex !== null && visible[openIndex] && (
        <Lightbox
          items={visible}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndex={setOpenIndex}
        />
      )}
    </main>
  );
}
