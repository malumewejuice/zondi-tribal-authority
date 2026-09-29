import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider, LanguageSwitch, useT } from "@/lib/i18n";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("notfound.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("notfound.body")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("notfound.cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nkandla Local Municipality — Cradle of Zulu History" },
      {
        name: "description",
        content:
          "Official home of Nkandla: cradle of Zulu history, home to King Cetshwayo, and a community building a brighter future through water, roads and skills.",
      },
      { name: "author", content: "Nkandla Local Municipality" },
      { property: "og:title", content: "Nkandla Local Municipality — Cradle of Zulu History" },
      {
        property: "og:description",
        content:
          "Official home of Nkandla: cradle of Zulu history, home to King Cetshwayo, and a community building a brighter future through water, roads and skills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nkandla Local Municipality — Cradle of Zulu History" },
      { name: "twitter:description", content: "Official home of Nkandla: cradle of Zulu history, home to King Cetshwayo, and a community building a brighter future through water, roads and skills." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/22b3240d-000d-4e19-a629-bf9174162a4d/id-preview-008ef2f2--acbba08c-78fc-4d58-b1c0-2bd783867c10.lovable.app-1785226407718.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/22b3240d-000d-4e19-a629-bf9174162a4d/id-preview-008ef2f2--acbba08c-78fc-4d58-b1c0-2bd783867c10.lovable.app-1785226407718.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Header />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

const navKeys = [
  { to: "/", hash: "culture", key: "nav.culture" },
];

const aboutLinks = [
  { to: "/about-us/heritage", labelKey: "nav.heritage" },
  { to: "/about-us/ubukhosi-bakwazondi", labelKey: "nav.ubukhosi" },
  { to: "/about-us/support-structure", labelKey: "nav.supportStructure" },
] as const;

const programLinks = [
  { to: "/programs/youth-development", labelKey: "nav.youthDevelopment" },
  { to: "/programs/social-development", labelKey: "nav.socialDevelopment" },
  { to: "/programs/safety-security", labelKey: "nav.safetySecurity" },
  { to: "/programs/agriculture", labelKey: "nav.agriculture" },
  { to: "/programs/electricity-water", labelKey: "nav.electricityWater" },
] as const;

const resourceLinks = [
  { to: "/faqs", labelKey: "nav.faqs" },
  { to: "/community-court-and-laws", labelKey: "nav.communityCourt" },
  { to: "/newsletter", labelKey: "nav.newsletter" },
  { to: "/gallery", labelKey: "nav.gallery" },
] as const;

/** Generic reusable dropdown for header nav menus (About Us, Programs, Resources). */
function NavDropdown({
  label,
  id,
  links,
}: {
  label: string;
  id: string;
  links: readonly { to: string; labelKey: string }[];
}) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm text-background/80 transition hover:text-background aria-expanded:text-background"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={id}
        role="menu"
        aria-label={label}
        className={`absolute left-0 top-full z-50 min-w-56 origin-top rounded-sm border border-background/15 bg-forest py-2 shadow-lg transition duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-background/80 transition hover:bg-background/10 hover:text-background focus:bg-background/10 focus:text-background focus:outline-none"
            activeProps={{ className: "block px-4 py-2 text-sm text-background" }}
          >
            {t(l.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}

function AboutMenu() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="about-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm text-background/80 transition hover:text-background aria-expanded:text-background"
      >
        {t("nav.aboutUs")}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id="about-menu"
        role="menu"
        aria-label={t("nav.aboutUs")}
        className={`absolute left-0 top-full z-50 min-w-56 origin-top rounded-sm border border-background/15 bg-forest py-2 shadow-lg transition duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {aboutLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-background/80 transition hover:bg-background/10 hover:text-background focus:bg-background/10 focus:text-background focus:outline-none"
            activeProps={{ className: "block px-4 py-2 text-sm text-background" }}
          >
            {t(l.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** A single expandable section (About Us / Programs / Resources) inside the mobile menu. */
function MobileSection({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: readonly { to: string; labelKey: string }[];
  onNavigate: () => void;
}) {
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-background/10 py-1">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-widest text-background/90"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-3 pl-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onNavigate}
              className="rounded-sm py-2 text-sm text-background/75 transition hover:text-background"
              activeProps={{ className: "rounded-sm py-2 text-sm text-background" }}
            >
              {t(l.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/** Full-width slide-down panel used on small/medium screens in place of the desktop nav. */
function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const t = useT();
  return (
    <div id="mobile-menu" className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-background/10 bg-forest lg:hidden">
      <div className="container-page flex flex-col py-2">
        <MobileSection title={t("nav.aboutUs")} links={aboutLinks} onNavigate={onNavigate} />
        {navKeys.map((n) => (
          <Link
            key={n.key}
            to={n.to}
            hash={n.hash}
            onClick={onNavigate}
            className="border-b border-background/10 py-3 text-sm font-semibold uppercase tracking-widest text-background/90 transition hover:text-background"
          >
            {t(n.key)}
          </Link>
        ))}
        <MobileSection title={t("nav.development")} links={programLinks} onNavigate={onNavigate} />
        <MobileSection title={t("nav.resources")} links={resourceLinks} onNavigate={onNavigate} />
        <Link
          to="/contact"
          onClick={onNavigate}
          className="mt-4 mb-2 inline-block rounded-full border border-background/40 px-5 py-2 text-center text-xs uppercase tracking-widest text-background transition hover:bg-background hover:text-foreground"
        >
          {t("nav.contact")}
        </Link>
      </div>
    </div>
  );
}

function Header() {
  const t = useT();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-forest text-background shadow-sm">
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex min-w-0 shrink items-center gap-2 text-background sm:gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-background/40 font-display text-lg sm:h-10 sm:w-10">
            Z
          </span>
          <span className="min-w-0 truncate font-display text-base leading-tight sm:text-lg">
            Zondi
            <span className="block truncate text-[9px] font-sans tracking-[0.2em] text-background/70 uppercase sm:text-[10px] sm:tracking-[0.25em]">
              {t("brand.sub")}
            </span>
          </span>
        </Link>

        {/* Desktop nav (lg and up — md/tablet uses the mobile menu to avoid crowding) */}
        <nav aria-label={t("nav.mainLabel")} className="hidden items-center gap-4 lg:flex xl:gap-7">
          <AboutMenu />
          {navKeys.map((n) => (
            <Link
              key={n.key}
              to={n.to}
              hash={n.hash}
              className="whitespace-nowrap text-sm text-background/80 transition hover:text-background"
            >
              {t(n.key)}
            </Link>
          ))}
          <NavDropdown label={t("nav.development")} id="programs-menu" links={programLinks} />
          <NavDropdown label={t("nav.resources")} id="resources-menu" links={resourceLinks} />
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitch />
          <Link
            to="/contact"
            className="hidden whitespace-nowrap rounded-full border border-background/40 px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:bg-background hover:text-foreground lg:inline-block"
          >
            {t("nav.contact")}
          </Link>

          {/* Mobile/tablet menu toggle (below lg) */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-background/40 text-background transition hover:bg-background/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}
