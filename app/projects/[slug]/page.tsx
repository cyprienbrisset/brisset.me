import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/content/projects";
import { Footer } from "@/components/Footer";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} · Cyprien Brisset`,
      description: project.tagline,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 section-veil">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-muted mb-8">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-ink">Projets</Link>
            <span>/</span>
            <span className="text-accent">{project.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              {project.category === "desktop" ? "Application desktop" : project.category === "web" ? "Application web" : "Application mobile"}
            </span>
            <span className="w-1 h-1 rounded-full bg-ink-muted" />
            <span className="text-xs font-mono text-ink-muted">v{project.version}</span>
            <span className="w-1 h-1 rounded-full bg-ink-muted" />
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {project.status === "active" ? "Actif" : project.status === "beta" ? "Beta" : "Archivé"}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight mb-6">
            {project.name}
          </h1>
          <p className="font-display text-2xl md:text-3xl text-ink-muted leading-snug italic max-w-3xl mb-10">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-12">
            {project.links.download && (
              <a href={project.links.download} className="btn-primary">
                Télécharger
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" />
                </svg>
              </a>
            )}
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" /></svg>
              Code source
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-full border border-line text-ink-muted">
                {s}
              </span>
            ))}
            <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-accent/40 text-accent">open-source</span>
          </div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section className="relative -mt-8 section-veil pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <figure className="screen-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={`${project.name} — aperçu`} className="block w-full h-auto" />
          </figure>
        </div>
      </section>

      {/* GALLERY */}
      {project.screenshots.length > 1 && (
        <section className="py-24 section-veil-tint">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-mono text-accent tracking-widest mb-4">GALERIE</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12">
              Aperçu de <span className="italic text-accent">l&apos;interface.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.slice(1).map((shot) => (
                <figure key={shot.url} className="screen-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.url} alt={shot.alt} className="block w-full h-auto" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 section-veil">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
            Envie de <span className="italic text-accent">l&apos;essayer&nbsp;?</span>
          </h2>
          <p className="text-ink-muted text-lg mb-10">
            {project.name} est open-source et disponible sur GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-primary !text-base !py-4 !px-8">
              Voir sur GitHub
            </a>
            <Link href="/#contact" className="btn-ghost">Me contacter →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
