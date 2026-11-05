# Maquette Penpot — Recipe page

> SDL-FM 1.5.0 Phase 3 (remise à niveau, lot 1). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « Recipe page ». **Validée (G3, 2026-11-05)** avec les propositions : tablette (carte desktop à 64 px du haut, Q-B3), attribution FM en pied de page, seuils 5 % (desktop) et 6,8 % (mobile).
> Décisions G2 appliquées : puces sur la première ligne (Q-B1), tableau `th scope="row"` + `td` (Q-B2, noms des calques), tablette proposée (Q-B3), texte alternatif de la photo (Q-B4), début des étapes en `strong`, « : » hors du gras (Q-B5).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, la photo (adresse interne de Penpot) est remplacée par `image-omelette.jpeg` du starter (`media.json`), puis il est rendu dans Chromium avec **Young Serif** et **Outfit** (fichiers du starter).

Penpot compte l'espace de fin de ligne pour couper : l'introduction et les étapes, que FM coupe en pleine largeur, ont 5 px de plus dans Penpot pour retrouver les retours à la ligne de l'image.

## Bibliothèque

### Couleurs (groupe « Recipe page »)

| Nom FM | Rôle | Valeur |
|---|---|---|
| White | Carte (desktop), page (mobile) | `#FFFFFF` |
| Stone 100 | Fond de page (desktop, tablette) | `#F3E6D8` |
| Stone 150 | Séparateurs | `#E4DED8` |
| Stone 600 | Texte courant | `#5F574E` |
| Stone 900 | Titre | `#302D2C` |
| Brown 800 | Titres de section, puces, numéros, valeurs nutritionnelles | `#854632` |
| Rose 800 | « Preparation time » et ses puces | `#7B284F` |
| Rose 50 | Fond de « Preparation time » | `#FFF5FA` |

Aucune couleur dérivée : tous les contrastes de FM passent AA (tableau de `tokens.md`).

### Typographie

| Usage | Police | Desktop et tablette | Mobile |
|---|---|---|---|
| Titre (h1) | Young Serif 400 | 40 px | 36 px, interligne 1, 2 lignes |
| Titres de section (h2) | Young Serif 400 | 28 px | 28 px |
| « Preparation time » (h2) | Outfit 600 | 20 px | 20 px |
| Texte, éléments, étapes, tableau | Outfit 400, interligne 1,5 | 16 px | 16 px |
| Débuts en gras, numéros, valeurs | Outfit 700 | 16 px | 16 px |
| Attribution | Outfit 400 | 11 px | 11 px |

### Mesures (px)

| Élément | Desktop 1440 × 1955 | Mobile 375 × 2043 |
|---|---|---|
| Carte | 736 × 1708 à (352, 123), rayon 24, marge interne 40 | pas de carte : page blanche, marges 32 |
| Photo | 656 × 300 à (392, 163), rayon 12 | 375 × 171 à (0, 0), sans rayon |
| Titre, introduction | capitales 505 et 573 | capitales 212 et 313 |
| « Preparation time » | encadré 656 × 180 à (392, 647), rayon 12 ; marge 28 ; éléments tous les 32 ; puces 4 px à x 428, texte à x 460 | 311 × 191 à (32, 464) ; marge 24 ; puces à x 64, texte à x 96 |
| Ingredients | titre capitales 861 ; éléments tous les 32 à partir de 917 ; puces 4 px à x 400, texte à x 432 | titre 689 ; éléments à partir de 745 ; puces à x 40, texte à x 72 |
| Instructions | titre 1130 ; numéros à x 400, texte à x 432 ; une ligne = 24, entre deux étapes 32 | titre 982 ; numéros à x 40, texte à x 72 |
| Séparateurs | 1 px Stone 150, y 1094 et 1490 | y 946 et 1678 |
| Nutrition | titre 1526, phrase 1581 ; lignes de 48 aux capitales 1629, 1677, 1725, 1773 ; libellé à x 424, valeur à x 728 ; séparateurs y 1658, 1706, 1754 | titre 1714, phrase 1769 ; lignes à 1841, 1889, 1937, 1985 ; libellé à x 64, valeur à x 196 ; séparateurs y 1870, 1918, 1966 |

Puces : centrées sur les capitales de la première ligne (Q-B1).

Tablette 768 × 1836 (proposition Q-B3) : la carte desktop de 736 px à (16, 64) sur Stone 100.

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Attribution (pied de page, absente des images FM) | Normal (11 px, liens `#3E52A3` soulignés) · Survol (soulignement retiré) · Focus clavier (contour 2 px `#3E52A3` décalé de 2 px) |

Liens : 5,8:1 sur Stone 100 (desktop), 7,1:1 sur blanc (mobile) ; texte Stone 600, 5,8:1 sur Stone 100. Rien d'autre n'est interactif.

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · Recipe page | `desktop.jpg` | 1,72 % | 5,0 % |
| Mobile · Recipe page | `mobile.jpg` | 5,78 % | 6,8 % |

Notes :
- Toutes les lignes de texte sont à ± 1 px de l'image, avec les mêmes retours à la ligne (mesuré ligne par ligne) ; la photo ne diffère pas.
- L'écart du mobile vient du texte : la colonne de 311 px est presque entièrement remplie de lettres fines (10 à 11 % sur les zones d'étapes, contre 6 % pour les mêmes lignes en desktop).
- Écart voulu : puces sur la première ligne des éléments de deux lignes (Q-B1).
- Écran sans image FM : **Tablette · Recipe page (proposition Q-B3)**.

## Prototype

Pas de parcours : la page n'a aucun élément interactif en dehors de l'attribution, dont les états sont montrés par le composant.

## Fichiers

- `desktop.png`, `mobile.png`, `tablette.png` : rendus des 3 écrans.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille), pour les 2 écrans calibrés.
- `composants.png` : les composants et leurs états (échelle 2).
