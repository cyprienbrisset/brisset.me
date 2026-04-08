import { stackRows } from "@/content/stack";

const HEX_POINTS = "50,4 94,29 94,86 50,111 6,86 6,29";

export function Stack() {
  return (
    <section id="stack" className="py-24 section-veil">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">04 — BOÎTE À OUTILS</div>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
          Chaque techno, <span className="italic text-accent">une écaille.</span>
        </h2>
        <p className="text-ink-muted text-lg max-w-2xl mb-16">
          Comme les écailles d&apos;un serpent qui protègent son corps, chaque outil joue son rôle —
          choisi pour sa fiabilité, sa performance, et sa durabilité.
        </p>

        <div className="scale-grid">
          {stackRows.map((row, rowIdx) => (
            <div key={rowIdx} className={`scale-row scale-row-${rowIdx + 1}`}>
              {row.map((tech) => (
                <div
                  key={tech.name}
                  className={`scale ${tech.highlight ? "scale-highlight" : ""}`}
                  data-category={tech.category}
                >
                  <svg viewBox="0 0 100 115">
                    <polygon points={HEX_POINTS} />
                  </svg>
                  <div className="scale-content">
                    <div className="scale-name">{tech.name}</div>
                    <div className="scale-tag">{tech.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
