# ADR-0004 : Young Serif et Outfit, fichiers du starter

## Statut
Accepté (2026-11-05) — application de l'ADR-0002 commun (« polices : fichiers fournis par FM, hébergés localement »).

## Contexte
Le starter fournit `YoungSerif-Regular.ttf` (103 Ko) et Outfit en fichier variable (`Outfit-VariableFont_wght.ttf`, 108 Ko) ainsi qu'en statiques. La maquette a été calée avec ces deux fichiers (Phase 3) ; les tests visuels comparent des pixels (S19, S20).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Young Serif + Outfit variable du starter (choisie)** | Les fichiers exacts du calage de la maquette ; 2 fichiers pour toutes les graisses ; aucun appel à un tiers ; ADR-0002 | TTF plus lourds qu'un woff2 |
| Statiques d'Outfit (400, 600, 700) | Même dessin | 3 téléchargements au lieu d'un |
| Fontsource ou Google Fonts | woff2 découpés | Autre version du dessin que celle du calage ; dépendance ou appel à un tiers |

## Décision
- Un `@font-face` « Young Serif » (400) et un « Outfit » sur le fichier variable (100 à 900), `font-display: swap`.
- Graisses utilisées : Young Serif 400 (titres) ; Outfit 400 (texte), 600 (« Preparation time »), 700 (débuts en gras, numéros, valeurs).

## Conséquences
- Rendu identique entre la maquette, les tests et le site en ligne.
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; Young Serif 400 et Outfit 400, 600, 700 se chargent.
