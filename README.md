# Cyprien Brisset — Portfolio

Site vitrine personnel · **Next.js 15 SSG · React 19 · TypeScript · Tailwind 4 · React Three Fiber**

## Stack

- **Framework** — Next.js 15 (App Router, `output: "export"` pour build statique)
- **Style** — Tailwind CSS 4 (`@theme` tokens dans `app/globals.css`)
- **3D** — `@react-three/fiber` + `three` (serpent torus knot animé du hero)
- **Fonts** — `next/font/google` : Fraunces (display), Inter (sans), JetBrains Mono (mono)

## Démarrage local

```bash
pnpm install
pnpm dev
```

Le site est disponible sur `http://localhost:3000`.

## Build de production (statique pour OVH)

```bash
pnpm build
```

Output dans `out/`. Uploadez le contenu de `out/` sur votre hébergement OVH (mutualisé ou
autre, c'est du statique pur).

## Structure

```
app/
├── layout.tsx              ← root layout, fonts, metadata, jungle bg, vines, snake sidebar
├── page.tsx                ← landing (composes Hero/About/Projects/Stack/Contact)
├── globals.css             ← design tokens + utilitaires (1 fichier)
├── legal/page.tsx          ← mentions légales
├── projects/[slug]/page.tsx ← case study dynamique (data-driven)
├── sitemap.ts              ← sitemap.xml auto
├── robots.ts               ← robots.txt auto
└── not-found.tsx           ← 404 custom

components/
├── Header.tsx · Footer.tsx · ScrollSnake.tsx · ScrollScene.tsx
├── JungleBackground.tsx · Vines.tsx
├── three/HeroSnake.tsx · HeroSnakeLazy.tsx
└── sections/ Hero · About · Projects · Stack · Contact

content/
├── projects.ts             ← source unique des projets (slug, screenshots, stack, links)
└── stack.ts                ← honeycomb des écailles techno

public/
├── logo.svg                ← ouroboros low-poly (transparent bg, 16 facettes + tête dragon)
├── favicon.svg
├── jungle-bg.svg           ← couche middle de la parallax jungle
└── logo-officiel.png       ← version photo (backup)
```

## Ajouter un projet

1. Ajouter une entrée dans `content/projects.ts`
2. La page `app/projects/[slug]/page.tsx` génère statiquement la case study via
   `generateStaticParams()`. Aucun fichier supplémentaire à créer.

## Personnaliser le design

Tous les tokens (couleurs, fonts, easings) sont dans `@theme` au début de
`app/globals.css`. Modifier là propage partout.

## Performance

- **Output statique** : zéro serveur, zéro Node en prod, déployable n'importe où
- **Fonts** auto-optimisées par `next/font` (no FOUT, self-hosted)
- **R3F** chargé en `dynamic(ssr: false)` pour ne pas bloquer le critical path
- **Parallax** dans une seule boucle rAF avec dirty-flag (zéro write au repos)
- **No backdrop-filter blur** : compositing GPU bon marché

## SEO

- `metadata` dans `layout.tsx` (Open Graph, Twitter, canonical, theme-color)
- `metadata` dynamique par projet via `generateMetadata`
- `sitemap.ts` + `robots.ts` générés automatiquement au build
