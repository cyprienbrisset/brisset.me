import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Ouroboros Cyprien Brisset"
              className="w-full h-full object-contain spin-slow"
            />
          </div>
          <span className="font-display text-lg tracking-tight">Cyprien Brisset</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          <Link href="/#projects"   className="hover:text-ink transition-colors">Projets</Link>
          <Link href="/#about"      className="hover:text-ink transition-colors">Philosophie</Link>
          <Link href="/#stack"      className="hover:text-ink transition-colors">Stack</Link>
          <Link href="/#contact"    className="hover:text-ink transition-colors">Contact</Link>
        </nav>
        <a
          href="https://github.com/Alchim-IA"
          className="btn-primary !py-2 !px-4 !text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>
          GitHub
        </a>
      </div>
    </header>
  );
}
