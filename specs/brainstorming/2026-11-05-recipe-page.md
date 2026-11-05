# 2026-11-05 — Brainstorming : Recipe page

> SDL-FM 1.5.0, Pré-dev 1 et 2. Challenge Newbie gratuit, **commencé sur FM et pas encore soumis** (+10 points à la soumission). Il fait partie du lot 1 de la remise à niveau du profil.

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape C).
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la soumission.
- **Méthode :** SDL-FM 1.5.0 complète.
- **Prérequis :** fichier Penpot « FM Newbie », une page par challenge (choix de Koya).

## Import (Phase 0)

- Starter gratuit : archive GitHub publique `frontendmentorio/recipe-page (main)`, celle que télécharge le bouton « Download starter » de FM. Le fichier Figma n'a pas été pris.
- Le starter est copié tel quel ; `AGENTS.md` et `CLAUDE.md` sont rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 1. Analyse : `specs/visuel/recipe-page-analyse.png`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-B1 | Puces centrées sur les éléments de deux lignes (mobile) | Puces alignées sur la première ligne |
| Q-B2 | Tableau nutritionnel sans en-tête | th scope="row" pour les nutriments, td pour les valeurs |
| Q-B3 | Tablette seulement dans le fichier Figma (Pro) | Carte de 736 px centrée dès 768 px ; disposition mobile en dessous |
| Q-B4 | Texte alternatif de la photo | « Omelette folded over spinach and vegetables, served on a plate » |
| Q-B5 | Début des étapes en gras | strong, « : » hors du gras comme sur l'image |

## Maquette validée (G3, 2026-11-05)

Koya : « Je valide (G3) » pour le lot 1. Maquette : `specs/visuel/penpot/maquette.md`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| G3-1 | Attribution FM (absente des images) | Gardée en pied de page : 11 px, liens `#3E52A3` soulignés ; survol : soulignement retiré ; focus : contour 2 px `#3E52A3` décalé de 2 px |
| G3-2 | Tablette (Q-B3) | Carte desktop de 736 px centrée, à 64 px du haut, sur Stone 100 |
| G3-3 | Seuils visuels | Desktop 5 % ; mobile 6,8 % (écart de 5,78 % dû au texte) |

## Spec, ADR et verrou code (2026-11-05)

- Spec : `specs/specifications/recipe-page.md` ; tests écrits avant le code, contrôle rouge fait (voir les commits `test:`).
- ADR : `specs/adr/v1.0/` (ADR-0003 à ADR-0006).
- **Verrou code** : Koya confirme « Claude écrit le code ».

