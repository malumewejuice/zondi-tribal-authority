export type Category = "notices" | "events" | "programmes" | "safety" | "opportunities";

export type Announcement = {
  id: string;
  category: Category;
  date: string; // YYYY-MM-DD
  closed?: boolean; // set true once the notice is no longer current
  title: { en: string; zu: string };
  body: { en: string; zu: string };
};

/**
 * HOW TO ADD AN ANNOUNCEMENT
 * Copy the example below into the list, remove the leading "//", and edit it.
 * Newest announcements are shown first. Set `closed: true` once a notice has expired.
 * The latest three open announcements also appear on the homepage.
 *
 *  {
 *    id: "imbizo-2026-q4",
 *    category: "events",
 *    date: "2026-10-20",
 *    title: { en: "Community imbizo", zu: "Imbizo yomphakathi" },
 *    body: { en: "Details here.", zu: "Imininingwane lapha." },
 *  },
 */
export const announcements: Announcement[] = [
  {
    id: "imbizo-2026-q4",
    category: "events",
    date: "2026-12-28",
    title: { en: "Community imbizo", zu: "Imbizo yomphakathi" },
    body: {
      en: "",
      zu: "",
    },
  },
];
