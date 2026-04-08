/**
 * Single source of truth for all projects displayed on the landing and case study pages.
 * Adding a new project = one entry here + one app/projects/[slug]/page.tsx file.
 */

export type ProjectCategory = "desktop" | "web" | "mobile" | "game";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  version: string;
  status: "active" | "beta" | "archived";
  stack: string[];
  links: {
    github: string;
    demo?: string;
    download?: string;
  };
  /** Cover screenshot URL (used on landing card) */
  cover: string;
  /** Featured screenshots used in the case study gallery */
  screenshots: { url: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "phonon",
    name: "Phonon",
    tagline: "Votre voix, transcrite en temps réel — en local, en privé, dans 99 langues.",
    category: "desktop",
    version: "1.2.0",
    status: "active",
    stack: ["rust", "tauri", "react", "whisper.cpp"],
    links: {
      github: "https://github.com/Alchim-IA/phonon",
    },
    cover: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/main-screen.png",
    screenshots: [
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/main-screen.png",       alt: "Phonon — écran principal" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/files-screen.png",      alt: "Phonon — gestion des fichiers" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/snippets-section.png",  alt: "Phonon — snippets" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/dictation-commands.png", alt: "Phonon — commandes vocales" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/history-screen.png",    alt: "Phonon — historique" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/settings-panel.png",    alt: "Phonon — réglages" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/phonon/master/docs/screenshots/integrations-section.png", alt: "Phonon — intégrations" },
    ],
  },
  {
    slug: "photon",
    name: "Photon",
    tagline: "Scanner de documents intelligent — OCR 50+ langues, chiffrement AES-256 côté client.",
    category: "desktop",
    version: "2.0.0",
    status: "active",
    stack: ["tauri", "rust", "tesseract", "react"],
    links: {
      github: "https://github.com/Alchim-IA/photon",
    },
    cover: "https://raw.githubusercontent.com/Alchim-IA/photon/main/screenshots/dark-mode.png",
    screenshots: [
      { url: "https://raw.githubusercontent.com/Alchim-IA/photon/main/screenshots/dark-mode.png", alt: "Photon — mode sombre" },
    ],
  },
  {
    slug: "pulsion",
    name: "Pulsion",
    tagline: "Studio podcast assisté par IA — DSP, multi-pistes, publication multi-plateformes.",
    category: "desktop",
    version: "0.9.0",
    status: "beta",
    stack: ["typescript", "electron", "webaudio", "groq"],
    links: {
      github: "https://github.com/Alchim-IA/pulsion",
    },
    cover: "https://raw.githubusercontent.com/Alchim-IA/pulsion/master/public/screenshots/dashboard.png",
    screenshots: [
      { url: "https://raw.githubusercontent.com/Alchim-IA/pulsion/master/public/screenshots/dashboard.png",    alt: "Pulsion — tableau de bord" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/pulsion/master/public/screenshots/ai-assistant.png", alt: "Pulsion — assistant IA" },
      { url: "https://raw.githubusercontent.com/Alchim-IA/pulsion/master/public/screenshots/settings.png",     alt: "Pulsion — réglages" },
    ],
  },
  {
    slug: "math-gatcha-quest",
    name: "Math Gatcha Quest",
    tagline:
      "Jeu éducatif de mathématiques avec mécaniques gacha — révise tes maths, débloque des personnages, deviens le maître des chiffres.",
    category: "game",
    version: "1.0.0",
    status: "active",
    stack: ["next.js", "typescript", "prisma", "tailwind", "electron"],
    links: {
      github: "https://github.com/cyprienbrisset/math-gatcha-quest",
    },
    cover: "https://raw.githubusercontent.com/cyprienbrisset/math-gatcha-quest/main/public/logo.png",
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/cyprienbrisset/math-gatcha-quest/main/public/logo.png",
        alt: "Math Gatcha Quest — logo",
      },
    ],
  },
  {
    slug: "hoofs",
    name: "Hoofs",
    tagline:
      "Surveillance d'ouverture des concours équestres FFE — alertes Telegram instantanées dès qu'une course ouvre ses engagements.",
    category: "web",
    version: "1.0.0",
    status: "active",
    stack: ["python", "playwright", "telegram", "chrome-extension"],
    links: {
      github: "https://github.com/cyprienbrisset/FFEMonitor",
    },
    cover: "https://raw.githubusercontent.com/cyprienbrisset/FFEMonitor/main/frontend/logo.svg",
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/cyprienbrisset/FFEMonitor/main/frontend/logo.svg",
        alt: "Hoofs — FFEMonitor logo",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
