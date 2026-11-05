# 2026-11-05 — Rapport FM : Recipe page

> SDL-FM 1.5.0 Phase 13. Solution : https://www.frontendmentor.io/solutions/recipe-page-with-native-lists-a-data-table-tailwind-v4-and-playwright-NFulTTqYoZ (v1.0.0). Pas de rapport IA (aucun crédit ce mois-ci) ; vérifications automatiques gratuites : **2 remarques** (Accessibility 0, HTML 0, CSS 2, JavaScript 0), toutes deux « INFO · Best Practice » sur `src/style.css`.

| # | Remarque FM | Verdict | Correctif |
|---|---|---|---|
| R1 | CSS (10 occurrences) : « Use logical properties (e.g., inline-start instead of left) to support different reading directions » — premier exemple `padding-left: 1.5625rem` (`src/style.css:75`) | ✅ Juste : propriétés physiques dans les utilitaires `recipe-list` et `nutrition-table` | `padding-inline-start`, `margin-block-start`, `padding-block`, `inline-size`, `border-block-start`, `text-align: start` |
| R2 | CSS (9 occurrences) : « Consider using CSS functions like calc(), min(), and clamp() » — mêmes déclarations | ✅ À suivre (règle de Koya) : les 9 longueurs écrites à la main | Longueurs sur l'échelle d'espacement de Tailwind : `calc(var(--spacing) * n)` |

Les deux remarques sont reproduites en local par le test « Règles FM — CSS : propriétés logiques et longueurs en fonctions » (même compte : 9 longueurs fixes), rouge avant le correctif.

## Suite donnée : v1.0.1 (2026-11-05)

- Test : commit `test` (rouge sur la v1.0.0) ; correctif : commit `fix(css)` ; rendu identique, 33 / 33 en local.
- Aucun changement visuel : pas de « Regenerate screenshot ».

## Regénération du rapport

| Date | Version relue par FM | Résultat |
|---|---|---|
| 2026-11-05 | v1.0.0 (soumission) | 2 remarques (R1, R2) |
| à faire | v1.0.1 | « Regenerate report » (gratuit, sans rapport IA), après publication avec l'accord de Koya |
