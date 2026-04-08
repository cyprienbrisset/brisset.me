import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center section-veil pt-32 pb-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-xs font-mono text-accent tracking-widest mb-4">404</div>
          <h1 className="font-display text-6xl md:text-7xl leading-tight mb-6">
            Page <span className="italic text-accent">introuvable.</span>
          </h1>
          <p className="text-ink-muted text-lg mb-10">
            La page que vous cherchez n&apos;existe pas, ou a été déplacée. L&apos;ouroboros
            a peut-être bouclé sur lui-même.
          </p>
          <Link href="/" className="btn-primary !text-base !py-4 !px-8">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
