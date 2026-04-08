export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden section-veil-tint">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="" className="w-[600px] h-[600px] object-contain spin-slow" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">05 — CONTACT</div>
        <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
          Un projet <span className="italic">en tête&nbsp;?</span>
        </h2>
        <p className="text-ink-muted text-lg mb-10 max-w-xl mx-auto">
          Toujours partant pour discuter d&apos;un nouveau projet, d&apos;une refonte, ou d&apos;un outil
          à construire ensemble.
        </p>
        <a href="mailto:contact@cyprienbrisset.fr" className="btn-primary !text-base !py-4 !px-8">
          contact@cyprienbrisset.fr
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
