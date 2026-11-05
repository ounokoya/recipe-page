# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 8 couleurs FM (aucune dérivée : tous les contrastes passent AA), la couleur des liens de l'attribution (G3-1), les deux polices, les tailles de texte et les rayons. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-white`, `--color-stone-100`, `--color-stone-150`, `--color-stone-600`, `--color-stone-900`, `--color-brown-800`, `--color-rose-800`, `--color-rose-50` (valeurs `hsl()` du style-guide) |
| Attribution (G3-1) | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| Young Serif, Outfit | `--font-serif`, `--font-sans` (chargement : ADR-0004) |
| Tailles de texte | `--text-title` (40 px), `--text-title-mobile` (36 px, interligne 1), `--text-section` (28 px), `--text-box-title` (20 px) ; texte 16 px, interligne 1,5 |
| Rayons | `--radius-card` (24), `--radius-box` (12, encadré et photo desktop) |

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
