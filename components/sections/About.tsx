export function About() {
  return (
    <section id="about" className="py-24 section-veil">
      <div className="max-w-5xl mx-auto px-6 space-y-24">

        {/* 01 PHILOSOPHIE */}
        <div>
          <div className="text-xs font-mono text-accent tracking-widest mb-4">01 — PHILOSOPHIE</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Les meilleurs logiciels sont ceux<br />
            <span className="italic text-accent">qu&apos;on oublie.</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed max-w-3xl mb-6">
            Ils font ce qu&apos;ils promettent — rapidement, sans bruit, sans friction — et vous
            laissent vous concentrer sur votre métier. Je conçois et j&apos;accompagne vos projets
            avec une seule obsession : faire simple, utile, et durable.
          </p>
          <ul className="grid md:grid-cols-3 gap-6 text-sm text-ink-muted">
            <li className="border-l border-accent/40 pl-4">
              <div className="text-ink font-medium mb-1">Rapide &amp; fiable</div>
              Des interfaces qui répondent instantanément, un code qui tient dans le temps.
            </li>
            <li className="border-l border-accent/40 pl-4">
              <div className="text-ink font-medium mb-1">Pensé pour vos utilisateurs</div>
              Chaque décision part de leur besoin réel, pas d&apos;une mode ou d&apos;un buzzword.
            </li>
            <li className="border-l border-accent/40 pl-4">
              <div className="text-ink font-medium mb-1">Respect &amp; maîtrise</div>
              Vos données, votre infrastructure, votre code — vous en gardez le contrôle.
            </li>
          </ul>
          <p className="mt-8 text-sm text-ink-muted italic max-w-2xl">
            Chaque projet est pensé comme une boucle d&apos;amélioration continue,
            inspirée de l&apos;ouroboros : écouter, concevoir, livrer, affiner, recommencer.
          </p>
        </div>

        {/* 02 APPROCHE */}
        <div>
          <div className="text-xs font-mono text-accent tracking-widest mb-4">02 — APPROCHE</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Simple, mais <span className="italic text-accent">exigeant.</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed max-w-3xl mb-8">
            Faire une seule chose, mais la faire parfaitement — pour vous. Chaque projet commence
            par comprendre votre besoin réel, pas par empiler des fonctionnalités.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-line bg-bg-elev/50 p-6">
              <div className="font-display text-2xl mb-2">Des interfaces claires</div>
              <p className="text-sm text-ink-muted leading-relaxed">
                Sans bruit, sans friction. L&apos;utilisateur trouve ce qu&apos;il cherche en moins de 3 secondes.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-bg-elev/50 p-6">
              <div className="font-display text-2xl mb-2">Des performances mesurées</div>
              <p className="text-sm text-ink-muted leading-relaxed">
                Pas estimées. Profiling, benchmarks, budgets Lighthouse : chaque ms compte.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-bg-elev/50 p-6">
              <div className="font-display text-2xl mb-2">Du code maintenable</div>
              <p className="text-sm text-ink-muted leading-relaxed">
                Testé, documenté, facile à faire évoluer. Vous ne repartez pas de zéro dans 2 ans.
              </p>
            </div>
          </div>
        </div>

        {/* 03 STACK & EXPERTISE */}
        <div>
          <div className="text-xs font-mono text-accent tracking-widest mb-4">03 — STACK &amp; EXPERTISE</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Les bons outils<br />
            pour <span className="italic text-accent">votre projet.</span>
          </h2>
          <div className="space-y-4 text-base max-w-3xl">
            <Row tech="Web moderne"      desc="Next.js, TypeScript, Tailwind — sites et apps rapides, SEO excellent, accessibles." />
            <Row tech="Desktop natif"    desc="Rust + Tauri pour des apps légères et performantes, une fraction du poids d'Electron." />
            <Row tech="Backend & données" desc="Node, NestJS, TypeScript, PostgreSQL, SQLite — architectures simples, robustes, maintenables." />
            <Row tech="Accompagnement"   desc="De l'idée au déploiement : cadrage, architecture, dev, livraison, évolution." last />
          </div>
        </div>

      </div>
    </section>
  );
}

function Row({ tech, desc, last = false }: { tech: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-4 items-baseline ${last ? "" : "border-b border-line pb-3"}`}>
      <span className="font-mono text-accent text-sm shrink-0 w-40">{tech}</span>
      <span className="text-ink-muted">{desc}</span>
    </div>
  );
}
