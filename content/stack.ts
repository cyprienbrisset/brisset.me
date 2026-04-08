/**
 * Tech stack displayed in the snake-scale honeycomb on the landing.
 * Categorized for visual tinting (see .scale[data-category] in globals.css).
 */

export type StackCategory = "lang" | "framework" | "data" | "ai" | "ops";

export type Tech = {
  name: string;
  tag: string;
  category: StackCategory;
  highlight?: boolean;
};

export const stackRows: Tech[][] = [
  // Row 1 — 5 hexes
  [
    { name: "Rust",       tag: "natif",   category: "lang" },
    { name: "Tauri",      tag: "desktop", category: "framework" },
    { name: "Next.js",    tag: "web",     category: "framework", highlight: true },
    { name: "TypeScript", tag: "strict",  category: "lang" },
    { name: "Tailwind",   tag: "css",     category: "framework" },
  ],
  // Row 2 — 4 hexes (interlocked in valleys of row 1)
  [
    { name: "Node.js",    tag: "backend",  category: "data" },
    { name: "PostgreSQL", tag: "données",  category: "data" },
    { name: "SQLite",     tag: "embarqué", category: "data" },
    { name: "Python",     tag: "scripts",  category: "lang" },
  ],
  // Row 3 — 3 hexes (aligned with row 1)
  [
    { name: "NestJS", tag: "backend",    category: "framework" },
    { name: "Groq",   tag: "ia cloud",   category: "ai" },
    { name: "Git",    tag: "versioning", category: "ops" },
  ],
];
