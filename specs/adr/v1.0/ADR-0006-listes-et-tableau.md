# ADR-0006 : Puces, numéros et tableau dessinés en CSS sur le HTML natif

## Statut
Accepté (2026-11-05) — application des décisions G2 (Q-B1, Q-B2, Q-B5).

## Contexte
Les listes ont des puces de 4 px (Rose 800 dans l'encadré, Brown 800 ailleurs), les étapes des numéros « 1. » en gras Brown 800 ; le texte commence 32 px après la puce ou le numéro. Les puces des éléments de deux lignes sont alignées sur la première ligne (Q-B1). Le tableau a des lignes de 48 px séparées par un trait Stone 150, nutriment à gauche et valeur à mi-largeur (Q-B2).

## Options
| Option | Pour | Contre |
|---|---|---|
| **`ul`, `ol` et `table` natifs, marqueurs stylés par `::marker` (choisie)** | Puces et numéros annoncés par les lecteurs d'écran ; `::marker` reste sur la première ligne ; aucun balisage en plus | `::marker` n'accepte que la couleur et la police : la taille de la puce passe par la taille de police du marqueur |
| Puces et numéros en `::before` | Taille et position libres | Le numéro des étapes n'est plus celui de la liste ; plus de CSS |

## Décision
- Listes : `list-style` natif, `::marker` coloré (Rose 800 ou Brown 800) ; numéros en gras par `::marker` ; retrait de 32 px entre le marqueur et le texte.
- Tableau : `th scope="row"` à gauche, `td` à mi-largeur, en gras Brown 800 ; un trait Stone 150 entre les lignes.
- Séparateurs entre les sections : `hr` stylé (1 px Stone 150).

## Conséquences
- Q-B1, Q-B2 et Q-B5 tenus par le HTML lui-même ; la taille exacte des puces est vérifiée par la comparaison visuelle (S19, S20) et le parcours réel (Phase 8).
