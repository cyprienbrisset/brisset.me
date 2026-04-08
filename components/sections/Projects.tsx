import Link from "next/link";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 section-veil-tint">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono text-accent tracking-widest mb-4">02 — TRAVAUX</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Projets sélectionnés</h2>
          </div>
          <a
            href="https://github.com/Alchim-IA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hidden md:inline-flex"
          >
            Tous sur GitHub →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="feature-card group relative block rounded-2xl border border-line bg-bg-elev p-8 overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono text-accent/70 uppercase">{p.category}</span>
                <span className="w-1 h-1 rounded-full bg-ink-muted" />
                <span className="text-xs font-mono text-ink-muted">v{p.version}</span>
                {p.status === "beta" && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-ink-muted" />
                    <span className="text-xs font-mono text-amber-400">beta</span>
                  </>
                )}
              </div>
              <h3 className="font-display text-3xl mb-3">{p.name}</h3>
              <p className="text-ink-muted leading-relaxed mb-6">{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2 py-1 rounded border border-line text-ink-muted">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
