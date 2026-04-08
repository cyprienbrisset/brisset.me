import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 mt-16 section-veil">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-ink-muted">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Ouroboros" className="w-10 h-10 object-contain" />
          <span className="font-display">Cyprien Brisset</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/Alchim-IA"
            className="hover:text-ink transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/legal" className="hover:text-ink transition-colors">Mentions légales</Link>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
