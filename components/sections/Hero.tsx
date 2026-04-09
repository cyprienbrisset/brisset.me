import { HeroSnakeLazy } from "../three/HeroSnakeLazy";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-28 sm:pt-16 sm:pb-0">
      <div className="hero-bg" aria-hidden="true">
        <HeroSnakeLazy />
      </div>

      <div className="hero-text-veil relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-bg-alt/60 text-xs text-ink-muted font-mono mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Disponible pour de nouveaux projets
        </div>
        <h1 className="font-display text-[clamp(2.2rem,8vw,6rem)] leading-[1.08] tracking-tight">
          <span className="word">Je</span>{" "}
          <span className="word">conçois</span>{" "}
          <span className="word">des</span>{" "}
          <span className="word">logiciels</span>{" "}
          <span className="word italic text-accent">qu&apos;on&nbsp;oublie.</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-ink-muted leading-relaxed">
          Tant ils sont rapides, fiables et bien pensés. Développeur indépendant, je
          conçois et j&apos;accompagne vos projets — de l&apos;idée au déploiement —
          avec une seule obsession : faire simple, utile, et durable.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#projects" className="btn-primary">
            Voir les projets
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="mailto:contact@cyprienbrisset.fr" className="btn-ghost">Me contacter</a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-ink-muted text-xs font-mono tracking-widest z-10">
        <div className="flex flex-col items-center gap-2">
          <span>SCROLL</span>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
