"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Mail,
  Mic,
  ScanLine,
  Podcast,
  Globe,
  ChevronDown,
  ExternalLink,
  Cpu,
  Shield,
  Sparkles,
  Eye,
  FileText,
  Lock,
  Brain,
  Wand2,
  Subtitles,
  Command,
  Bookmark,
  Plug,
  Camera,
  Table,
  EyeOff,
  Files,
  Headphones,
  Radio,
  Music,
  BarChart3,
  MapPin,
  Gamepad2,
  Trophy,
  Bell,
  Users,
  Swords,
  CalendarCheck,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════════════════ */

const projects = [
  {
    name: "Phonon",
    tagline: "Dictation vocale intelligente",
    description:
      "Transforme votre voix en texte avec précision grâce à l'IA. Fonctionne en local ou via API cloud — vous choisissez.",
    url: "https://phonon.brisset.me",
    github: "https://github.com/Alchim-IA/phonon",
    color: "#0ea5c9",
    colorClass: "accent-phonon",
    icon: Mic,
    stats: [
      { value: "99", label: "Langues" },
      { value: "3", label: "Moteurs IA" },
      { value: "2", label: "Modes" },
    ],
    tags: ["Whisper", "Vosk", "Parakeet", "Groq", "Tauri", "Rust"],
    features: [
      { icon: Cpu, title: "Transcription temps réel", desc: "Push-to-Talk ou enregistrement continu avec affichage instantané." },
      { icon: Shield, title: "Local ou cloud, au choix", desc: "IA embarquée (Whisper, Vosk, Parakeet) ou API cloud (Groq) — vous gardez le contrôle." },
      { icon: Globe, title: "99 langues", desc: "Détection automatique ou sélection manuelle." },
      { icon: FileText, title: "Transcription de fichiers", desc: "Glissez vos fichiers audio (MP3, WAV, FLAC) pour une transcription en lot." },
      { icon: Sparkles, title: "Amélioration par IA", desc: "Correction auto de grammaire et orthographe via LLM local ou Groq." },
      { icon: Subtitles, title: "Sous-titres en direct", desc: "Fenêtre flottante toujours visible, idéale pour présentations et réunions." },
      { icon: Command, title: "Commandes vocales", desc: "\"point\", \"virgule\", \"à la ligne\" — formatage automatique." },
      { icon: Bookmark, title: "Snippets vocaux", desc: "Raccourcis vocaux personnalisés : un mot-clé insère un bloc de texte." },
      { icon: Plug, title: "Intégrations", desc: "Apple Notes, Obsidian, ou n'importe quelle app." },
    ],
    platforms: ["macOS", "Windows", "Linux"],
  },
  {
    name: "Photon",
    tagline: "Scanner intelligent",
    description:
      "Scanner de documents moderne avec analyse IA, OCR, coffre-fort chiffré et interface glassmorphism. Construit avec Tauri & Rust.",
    url: "https://photon.brisset.me",
    github: "https://github.com/Alchim-IA/photon",
    color: "#1a7a4c",
    colorClass: "accent-photon",
    icon: ScanLine,
    stats: [
      { value: "50+", label: "Langues OCR" },
      { value: "AES-256", label: "Chiffrement" },
      { value: "100%", label: "Open source" },
    ],
    tags: ["Rust", "Tauri v2", "React", "TypeScript", "Tesseract OCR", "Groq AI"],
    features: [
      { icon: Camera, title: "Scan intelligent", desc: "Recadrage auto, redressement, débruitage et blanchiment." },
      { icon: Eye, title: "OCR 50+ langues", desc: "Extraction de texte et recherche par contenu." },
      { icon: Lock, title: "Coffre-fort chiffré", desc: "Documents protégés avec chiffrement AES-256." },
      { icon: Brain, title: "Classification IA", desc: "Détection auto : factures, pièces d'identité, contrats." },
      { icon: FileText, title: "Export PDF avancé", desc: "PDF/A, filigranes, signatures numériques." },
      { icon: Wand2, title: "Automatisation", desc: "Règles SI/ALORS pour renommer et classer." },
      { icon: Table, title: "Détection de tableaux", desc: "Détecte les tableaux et exporte en CSV." },
      { icon: EyeOff, title: "Caviardage", desc: "Masquage irréversible des données sensibles." },
      { icon: Files, title: "Multi-pages", desc: "Combinez plusieurs scans en un seul PDF." },
    ],
    platforms: ["macOS", "Windows", "Linux"],
  },
  {
    name: "Pulsion",
    tagline: "Studio podcast propulsé par l'IA",
    description:
      "Créez, éditez, améliorez et publiez vos podcasts dans une seule application desktop. L'IA vous accompagne à chaque étape.",
    url: "https://pulsion.brisset.me",
    github: "https://github.com/Alchim-IA/pulsion",
    color: "#c2488f",
    colorClass: "accent-pulsion",
    icon: Podcast,
    stats: [
      { value: "IA", label: "Assistée" },
      { value: "DSP", label: "Effets pro" },
      { value: "RSS", label: "Publication" },
    ],
    tags: ["Tauri", "Rust", "React", "Groq AI", "DSP Audio", "Multi-plateforme"],
    features: [
      { icon: Mic, title: "Enregistrement & Édition", desc: "Timeline interactive avec waveform et raccourcis clavier." },
      { icon: Brain, title: "Intelligence Artificielle", desc: "Brainstorming, scripts, transcription et synthèse vocale." },
      { icon: Headphones, title: "Effets DSP Pro", desc: "EQ, compresseur, noise gate, reverb et limiteur." },
      { icon: Radio, title: "Publication multi-plateformes", desc: "Spotify, Apple Podcasts, flux RSS auto." },
      { icon: Music, title: "Soundboard & Jingles", desc: "Importez vos sons, insérez avec crossfade." },
      { icon: BarChart3, title: "Analytiques", desc: "Dashboard, statistiques et gestion par tags." },
    ],
    platforms: ["macOS", "Windows"],
  },
  {
    name: "MGQ",
    tagline: "Jeu de maths façon gacha",
    description:
      "Math Gacha Quest — un jeu éducatif pour enfants qui transforme les mathématiques en aventure gacha. Résous des exercices pour débloquer des personnages.",
    url: "https://mgq.brisset.me",
    github: "https://github.com/Alchim-IA/mgq",
    color: "#7c3aed",
    colorClass: "accent-mgq",
    icon: Gamepad2,
    stats: [
      { value: "100+", label: "Niveaux" },
      { value: "50+", label: "Personnages" },
      { value: "4", label: "Opérations" },
    ],
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    features: [
      { icon: Swords, title: "Système gacha", desc: "Résous des exercices de maths pour gagner des tirages et collectionner des personnages." },
      { icon: Users, title: "Personnages à débloquer", desc: "50+ personnages avec raretés, niveaux et compétences spéciales." },
      { icon: BarChart3, title: "Progression adaptative", desc: "Difficulté qui s'ajuste au niveau de l'enfant pour un apprentissage optimal." },
      { icon: Sparkles, title: "Récompenses & streaks", desc: "Connexions quotidiennes, défis et récompenses pour maintenir la motivation." },
    ],
    platforms: ["Web"],
  },
  {
    name: "Hoofs",
    tagline: "Veille concours équestres",
    description:
      "Surveillez l'ouverture des inscriptions aux concours équestres FFE. Recevez une notification dès qu'un concours ouvre ses engagements.",
    url: "https://hoofs.brisset.me",
    github: "https://github.com/Alchim-IA/hoofs",
    color: "#d97706",
    colorClass: "accent-hoofs",
    icon: Trophy,
    stats: [
      { value: "FFE", label: "Concours" },
      { value: "Push", label: "Alertes" },
      { value: "Live", label: "Suivi" },
    ],
    tags: ["Next.js", "React", "TypeScript", "OneSignal"],
    features: [
      { icon: Bell, title: "Notifications push", desc: "Alerte instantanée dès qu'un concours ouvre ses engagements via OneSignal." },
      { icon: CalendarCheck, title: "Suivi des ouvertures", desc: "Calendrier des concours FFE avec statut d'inscription en temps réel." },
      { icon: Eye, title: "Surveillance automatique", desc: "Scraping régulier du site FFE pour détecter les nouvelles ouvertures." },
      { icon: MapPin, title: "Filtrage géographique", desc: "Filtrez les concours par région, discipline et niveau." },
    ],
    platforms: ["Web"],
  },
];

const techStack = [
  "Rust", "Tauri", "React", "TypeScript", "Next.js", "Node.js",
  "Python", "Whisper AI", "Tesseract OCR", "Groq", "PostgreSQL",
  "Tailwind CSS", "Electron", "Git",
];

/* ════════════════════════════════════════════════════════════
   SERPENTINE SVG DECORATION
   ════════════════════════════════════════════════════════════ */

function SerpentineDeco({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      className={`pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C975,40 1050,50 1200,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.12"
      />
      <path
        d="M0,70 C150,30 300,110 450,70 C600,30 750,110 900,70 C975,50 1050,60 1200,70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.06"
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENTS
   ════════════════════════════════════════════════════════════ */

function Nav() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3"
        >
          <Image src="/logo.png" alt="Cyprien Brisset" width={34} height={34} className="rounded-full" />
          <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Cyprien Brisset
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {["Projets", "Stack", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-muted transition-colors hover:text-emerald-dark"
            >
              {item}
            </button>
          ))}
          <a
            href="https://github.com/Alchim-IA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-emerald-dark"
          >
            <Github size={15} />
            GitHub
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-muted md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden">
          {["Projets", "Stack", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full py-3 text-left text-sm text-muted hover:text-emerald-dark"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function ProjectTile({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;
  const hasFeatures = project.features.length > 0;

  return (
    <div className={`group ${project.colorClass} project-card flex h-full flex-col rounded-2xl border border-border bg-surface`}>
      {/* Main clickable area */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col p-6"
      >
        {/* Icon + Name */}
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: `${project.color}18` }}
          >
            <Icon size={20} style={{ color: project.color }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              {project.name}
            </h3>
            <p className="text-xs text-muted">{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>

        {/* Stats row */}
        <div className="mb-5 flex gap-4">
          {project.stats.map((s) => (
            <div key={s.label}>
              <span className="text-base font-semibold" style={{ color: project.color, fontFamily: "var(--font-heading)" }}>
                {s.value}
              </span>
              <span className="ml-1 text-[11px] text-muted">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </a>

      {/* Features toggle */}
      {hasFeatures && (
        <div className="border-t border-border">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between px-6 py-3 text-xs text-muted transition-colors hover:text-foreground"
          >
            <span className="font-medium uppercase tracking-[0.1em]">Fonctionnalités</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              style={{ color: project.color }}
            />
          </button>

          <div
            className="grid transition-all duration-400 ease-in-out"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="space-y-3 px-6 pb-5">
                {project.features.map((f) => {
                  const FIcon = f.icon;
                  return (
                    <div key={f.title} className="flex gap-3">
                      <FIcon size={14} className="mt-0.5 shrink-0" style={{ color: project.color }} />
                      <div>
                        <p className="text-xs font-medium text-foreground">{f.title}</p>
                        <p className="text-[11px] leading-relaxed text-muted">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-border px-6 py-4">
        <div className="flex items-center gap-2">
          {project.platforms.map((p) => (
            <span key={p} className="text-[10px] text-muted">{p}</span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={14} />
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="serpentine-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16"
      >
        {/* Decorative serpentine curves */}
        <SerpentineDeco className="absolute left-0 right-0 top-24 h-32 w-full text-emerald" />
        <SerpentineDeco className="absolute bottom-20 left-0 right-0 h-32 w-full text-gold" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="animate-fade-in mb-8">
            <Image src="/logo.png" alt="Cyprien Brisset" width={88} height={88} className="mx-auto mb-6 rounded-full drop-shadow-lg" />
          </div>

          <h1
            className="animate-fade-in delay-1 mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Je crée des outils
            <br />
            <span className="gradient-text">intelligents & open source</span>
          </h1>

          <p className="animate-fade-in delay-2 mx-auto mb-10 max-w-lg text-base leading-relaxed text-muted">
            Développeur passionné par l&apos;IA, les apps desktop et le web.
            Je conçois des logiciels flexibles — IA locale ou cloud, vous choisissez.
          </p>

          <div className="animate-fade-in delay-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-dark px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald hover:shadow-[0_8px_30px_rgba(26,122,76,0.2)]"
            >
              Voir mes projets
              <ChevronDown size={15} />
            </a>
            <a
              href="https://github.com/Alchim-IA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-sm text-muted transition-colors hover:border-emerald/30 hover:text-foreground"
            >
              <Github size={15} />
              Alchim-IA
            </a>
          </div>
        </div>

        {/* Project icons */}
        <div className="animate-fade-in delay-4 relative z-10 mt-20 flex items-center gap-8 opacity-30">
          <Mic size={26} className="text-[#0ea5c9]" />
          <ScanLine size={26} className="text-emerald" />
          <Podcast size={26} className="text-[#c2488f]" />
          <Gamepad2 size={26} className="text-[#7c3aed]" />
          <Trophy size={26} className="text-[#d97706]" />
        </div>

        <button
          onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 animate-bounce text-muted/30"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* ── SERPENTINE DIVIDER ── */}
      <div className="overflow-hidden">
        <SerpentineDeco className="h-16 w-full text-emerald" />
      </div>

      {/* ── PROJECTS ── */}
      <section id="projets" className="relative px-6 py-20 md:py-28">
        {/* Vertical serpentine curve flowing through projects */}
        <svg
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
          width="120"
          viewBox="0 0 120 1200"
          preserveAspectRatio="none"
          fill="none"
          style={{ height: "100%" }}
        >
          <path
            d="M60,0 C20,100 100,200 60,300 C20,400 100,500 60,600 C20,700 100,800 60,900 C20,1000 100,1100 60,1200"
            stroke="var(--emerald)"
            strokeWidth="1.5"
            opacity="0.12"
          />
          <path
            d="M60,0 C100,100 20,200 60,300 C100,400 20,500 60,600 C100,700 20,800 60,900 C100,1000 20,1100 60,1200"
            stroke="var(--gold)"
            strokeWidth="1"
            opacity="0.08"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">Projets</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Mes projets
            </h2>
            <p className="mx-auto max-w-md text-sm text-muted">
              Applications desktop IA et web apps — du logiciel natif Tauri & Rust aux applications Next.js, tous open source.
            </p>
          </div>

          {/* Desktop apps */}
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald/60">Applications Desktop</p>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectTile key={project.name} project={project} />
            ))}
          </div>

          {/* Web apps */}
          <p className="mb-4 mt-12 text-[11px] font-medium uppercase tracking-[0.2em] text-gold/60">Applications Web</p>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(3).map((project) => (
              <ProjectTile key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERPENTINE DIVIDER ── */}
      <div className="overflow-hidden">
        <SerpentineDeco className="h-16 w-full text-gold" />
      </div>

      {/* ── STACK ── */}
      <section id="stack" className="bg-surface-warm px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">Stack</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Technologies
            </h2>
          </div>

          <div className="space-y-4 overflow-hidden">
            <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
              {[...techStack, ...techStack, ...techStack].map((t, i) => (
                <span key={i} className="text-lg font-medium uppercase tracking-[0.15em] text-emerald" style={{ fontFamily: "var(--font-heading)" }}>{t}</span>
              ))}
            </div>
            <div className="animate-marquee-reverse flex w-max gap-12 whitespace-nowrap">
              {[...techStack, ...techStack, ...techStack].reverse().map((t, i) => (
                <span key={i} className="text-sm font-medium uppercase tracking-widest text-gold/40">{t}</span>
              ))}
            </div>
            <div className="animate-marquee flex w-max gap-12 whitespace-nowrap opacity-30">
              {[...techStack, ...techStack, ...techStack].map((t, i) => (
                <span key={i} className="text-xs font-medium uppercase tracking-widest text-emerald">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERPENTINE DIVIDER ── */}
      <div className="overflow-hidden">
        <SerpentineDeco className="h-16 w-full text-emerald" />
      </div>

      {/* ── ABOUT ── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">À propos</p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Cyprien Brisset
              </h2>
              <div className="mt-4">
                <Image src="/logo.png" alt="Logo" width={64} height={64} className="rounded-full" />
              </div>
            </div>
            <div className="space-y-5 md:col-span-3">
              <p className="text-sm leading-relaxed text-muted">
                Développeur indépendant basé en France, je crée des applications desktop et web sous le label{" "}
                <a href="https://github.com/Alchim-IA" target="_blank" rel="noopener noreferrer" className="font-medium text-emerald underline decoration-emerald/20 underline-offset-4 transition-colors hover:decoration-emerald">
                  Alchim-IA
                </a>
                . Ma conviction : l&apos;IA doit être accessible et flexible — locale ou cloud, c&apos;est l&apos;utilisateur qui décide.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Passionné par les logiciels libres et les interfaces soignées, j&apos;aime transformer des idées complexes en outils simples et accessibles. Chaque projet est pensé pour durer, construit avec du code natif performant et une UX raffinée.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Stack de prédilection : Rust & Tauri pour le desktop natif, Next.js & React & TypeScript pour le web,
                et l&apos;IA (Whisper, Tesseract, Groq) en local ou via API cloud.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/Alchim-IA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-emerald-dark">
                  <Github size={15} />
                  GitHub
                </a>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={15} />
                  France
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERPENTINE DIVIDER ── */}
      <div className="overflow-hidden">
        <SerpentineDeco className="h-16 w-full text-gold" />
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-surface-warm px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">Contact</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            Un projet en tête ?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm text-muted">
            Envie de collaborer, de contribuer à un projet open source, ou simplement de discuter ?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@cyprienbrisset.fr"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-dark px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald hover:shadow-[0_8px_30px_rgba(26,122,76,0.2)]"
            >
              <Mail size={15} />
              contact@cyprienbrisset.fr
            </a>
            <a
              href="https://github.com/Alchim-IA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-sm text-muted transition-colors hover:border-emerald/30 hover:text-foreground"
            >
              <Github size={15} />
              Alchim-IA
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-background px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="flex items-center gap-2 text-xs text-muted">
            <Image src="/logo.png" alt="CB" width={18} height={18} className="rounded-full" />
            &copy; {new Date().getFullYear()} Cyprien Brisset
          </span>
          <div className="flex items-center gap-6">
            {projects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted transition-colors hover:text-emerald-dark">
                {p.name}
              </a>
            ))}
            <a href="https://github.com/Alchim-IA" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-emerald-dark">
              <Github size={14} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
