import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et politique de confidentialité du site cyprienbrisset.fr. Aucune télémétrie cachée, aucun cookie tiers.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <>
      <section className="relative pt-40 pb-12 section-veil">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-muted mb-8">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <span>/</span>
            <span className="text-accent">Mentions légales</span>
          </nav>
          <div className="text-xs font-mono text-accent tracking-widest mb-4">INFORMATIONS OBLIGATOIRES</div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
            Mentions légales &amp;<br />
            <span className="italic text-accent">politique de confidentialité</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl">
            Ce site respecte vos données. Aucune télémétrie cachée, aucun cookie tiers,
            aucun tracking publicitaire. Tout est documenté ci-dessous.
          </p>
          <p className="text-xs font-mono text-ink-muted mt-8">
            Dernière mise à jour : 08 avril 2026
          </p>
        </div>
      </section>

      <section className="section-veil pb-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <aside className="hidden md:block">
            <div className="toc">
              <div className="text-xs font-mono text-accent tracking-widest mb-4">SOMMAIRE</div>
              <nav>
                <a href="#editeur">01. Éditeur</a>
                <a href="#hebergeur">02. Hébergeur</a>
                <a href="#propriete">03. Propriété intellectuelle</a>
                <a href="#donnees">04. Données personnelles</a>
                <a href="#cookies">05. Cookies</a>
                <a href="#rgpd">06. Vos droits RGPD</a>
                <a href="#responsabilite">07. Responsabilité</a>
                <a href="#contact">08. Contact</a>
              </nav>
            </div>
          </aside>

          <article className="legal-content max-w-3xl">
            <h2 id="editeur">01 — Éditeur du site</h2>
            <p>
              Ce site est édité par <strong>Cyprien Brisset</strong>, développeur passionné
              par l&apos;open-source et le web, à titre personnel et non-commercial.
            </p>
            <ul>
              <li><strong>Nom :</strong> Cyprien Brisset</li>
              <li><strong>Statut :</strong> Particulier — aucun statut juridique commercial</li>
              <li><strong>Pays :</strong> France</li>
              <li><strong>Email :</strong> <a href="mailto:contact@cyprienbrisset.fr">contact@cyprienbrisset.fr</a></li>
              <li><strong>Directeur de la publication :</strong> Cyprien Brisset</li>
            </ul>
            <p className="text-sm italic">
              Ce site est un portfolio personnel. Aucune activité commerciale, aucune facturation,
              aucune prestation rémunérée n&apos;est proposée via ce site.
            </p>

            <h2 id="hebergeur">02 — Hébergeur</h2>
            <p>
              Le site est hébergé en France par <strong>OVHcloud</strong>, dans des datacenters
              certifiés et soumis au RGPD.
            </p>
            <ul>
              <li><strong>Hébergeur :</strong> OVH SAS</li>
              <li><strong>Siège social :</strong> 2 rue Kellermann, 59100 Roubaix, France</li>
              <li><strong>RCS :</strong> Lille Métropole 424 761 419 00045</li>
              <li><strong>Téléphone :</strong> +33 9 72 10 10 07</li>
              <li><strong>Site :</strong> <a href="https://www.ovhcloud.com/fr/" rel="noopener">ovhcloud.com</a></li>
            </ul>

            <h2 id="propriete">03 — Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site — textes, images, code, illustrations, logo
              ouroboros, identité visuelle — est la propriété exclusive de Cyprien Brisset, sauf
              mention contraire.
            </p>
            <p>
              Le <strong>code source des projets open-source</strong> présentés est disponible sur
              GitHub sous licence{" "}
              <a href="https://opensource.org/licenses/MIT" rel="noopener">MIT</a> ou équivalente,
              détaillée dans chaque dépôt.
            </p>

            <h2 id="donnees">04 — Données personnelles</h2>
            <p>
              Ce site est un site vitrine statique. Il ne collecte <strong>aucune donnée personnelle</strong>
              automatiquement : pas de formulaire, pas de compte utilisateur, pas de base de données,
              pas de télémétrie.
            </p>
            <h3>Prise de contact</h3>
            <p>
              Si vous cliquez sur le lien « Me contacter », votre client mail s&apos;ouvre avec
              l&apos;adresse <a href="mailto:contact@cyprienbrisset.fr">contact@cyprienbrisset.fr</a>.
              Les données que vous m&apos;envoyez sont traitées uniquement pour vous répondre,
              conservées le temps de l&apos;échange, et ne sont jamais partagées.
            </p>

            <h2 id="cookies">05 — Cookies</h2>
            <p>
              Ce site <strong>n&apos;utilise aucun cookie</strong> de tracking, publicitaire ou
              analytique. Aucun cookie tiers n&apos;est déposé.
            </p>

            <h2 id="rgpd">06 — Vos droits (RGPD)</h2>
            <p>
              Conformément au RGPD (UE 2016/679), vous disposez sur vos données personnelles que
              je pourrais détenir des droits suivants :
            </p>
            <ul>
              <li>Droit d&apos;accès : obtenir une copie des données vous concernant</li>
              <li>Droit de rectification : corriger des informations inexactes</li>
              <li>Droit à l&apos;effacement : demander la suppression de vos données</li>
              <li>Droit à la portabilité : récupérer vos données dans un format lisible</li>
              <li>Droit d&apos;opposition : refuser le traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, écrivez à{" "}
              <a href="mailto:contact@cyprienbrisset.fr">contact@cyprienbrisset.fr</a>. Réponse
              sous 30 jours maximum. Si vous n&apos;êtes pas satisfait, vous pouvez saisir la{" "}
              <a href="https://www.cnil.fr" rel="noopener">CNIL</a>.
            </p>

            <h2 id="responsabilite">07 — Responsabilité</h2>
            <p>
              Je m&apos;efforce de maintenir les informations à jour mais ne peux garantir leur
              exhaustivité. L&apos;utilisation du site se fait sous votre seule responsabilité.
            </p>
            <p>
              Les logiciels open-source présentés sont fournis « tels quels », sans garantie,
              comme décrit dans leurs licences.
            </p>

            <h2 id="contact">08 — Contact</h2>
            <p>Pour toute question relative à ces mentions légales :</p>
            <p>
              <a href="mailto:contact@cyprienbrisset.fr" className="btn-primary !mt-4">
                contact@cyprienbrisset.fr
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
