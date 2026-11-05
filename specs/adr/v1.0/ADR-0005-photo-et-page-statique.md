# ADR-0005 : Une seule photo pour toutes les largeurs ; page statique

## Statut
Accepté (2026-11-05)

## Contexte
Le starter fournit une seule photo, `image-omelette.jpeg` (1312 × 600, le double de la taille desktop de 656 × 300). En mobile elle occupe toute la largeur (375 × 171), sans rayon ; en desktop et tablette, 656 × 300 avec un rayon de 12. La page n'a aucun comportement.

## Options
| Option | Pour | Contre |
|---|---|---|
| **Un `img` avec `width`, `height` et `alt` (choisie)** | La place est réservée avant le chargement ; nette sur les écrans à 2 pixels par point ; aucun fichier à fabriquer | Le mobile charge 1312 px pour en afficher 375 |
| `srcset` avec des versions réduites | Moins de données en mobile | Fichiers à produire et à tenir à jour hors du starter |

## Décision
- `img` de `image-omelette.jpeg`, `width="1312" height="600"`, largeur 100 % de son conteneur, hauteur automatique ; texte alternatif de Q-B4 ; chargement normal (la photo est en haut de la page).
- `src/main.js` n'importe que la feuille de style.

## Conséquences
- Aucun décalage de mise en page au chargement ; la photo garde ses proportions à toutes les largeurs.
