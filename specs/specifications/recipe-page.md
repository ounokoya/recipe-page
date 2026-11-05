# Spec — Recipe page

> SDL-FM 1.5.0 Phase 4 (remise à niveau, lot 1). Sources : analyse validée (G2) `specs/visuel/recipe-page-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-recipe-page.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Une page de recette : la photo du plat, son titre et sa présentation, le temps de préparation, les ingrédients, les étapes numérotées et un tableau des valeurs nutritionnelles. La page est statique : seuls les liens du pied de page sont interactifs.

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Recette | tout ce qui suit, sauf le pied de page | `article` dans `main` |
| Photo | `image-omelette.jpeg` (1312 × 600) ; texte alternatif « Omelette folded over spinach and vegetables, served on a plate » (Q-B4) | `img` |
| Titre | « Simple Omelette Recipe » | `h1` |
| Présentation | « An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats. » | `p` |
| Preparation time | titre ; 3 éléments : **Total**: Approximately 10 minutes · **Preparation**: 5 minutes · **Cooking**: 5 minutes | `section` + `h2` ; `ul` ; libellé en `strong`, « : » hors du gras |
| Ingredients | 2-3 large eggs · Salt, to taste · Pepper, to taste · 1 tablespoon of butter or oil · Optional fillings: cheese, diced vegetables, cooked meats, herbs | `section` + `h2` ; `ul` |
| Séparateurs | entre Ingredients et Instructions, entre Instructions et Nutrition | `hr` |
| Instructions | 6 étapes (texte du starter), chacune commençant par son libellé en gras : Beat the eggs, Heat the pan, Cook the omelette, Add fillings (optional), Fold and serve, Enjoy | `section` + `h2` ; `ol` ; libellé en `strong`, « : » hors du gras (Q-B5) |
| Nutrition | « The table below shows nutritional values per serving without the additional fillings. » ; tableau Calories 277kcal, Carbs 0g, Protein 20g, Fat 22g | `section` + `h2` ; `p` ; `table` : `th scope="row"` pour le nutriment, `td` pour la valeur (Q-B2) |
| Pied de page (G3-1) | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | Recipe page » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`). Aucune couleur dérivée : tous les contrastes de FM passent AA. Lien de l'attribution : `hsl(228, 45%, 44%)` (`#3E52A3`, couleur du starter, G3-1).

| Rôle | Couleur |
|---|---|
| Titre | Stone 900 |
| Titres de section, puces et numéros des listes, valeurs nutritionnelles (gras) | Brown 800 |
| « Preparation time », ses puces | Rose 800 ; fond de l'encadré Rose 50 |
| Texte | Stone 600 |
| Séparateurs | Stone 150 |
| Fond de page (dès 768 px) | Stone 100 |

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 768 px (mobile) | Pas de carte, page blanche. Photo pleine largeur en haut, sans rayon ; contenu à 32 px des bords. |
| 768 – 1023 px (tablette, Q-B3, G3-2) | Carte blanche de 736 px centrée, à 64 px du haut, sur Stone 100 ; même contenu qu'en desktop. |
| ≥ 1024 px (desktop) | Carte blanche de 736 px centrée, à 123 px du haut, rayon 24, marge interne 40, sur Stone 100. |

Positions de la maquette, à 1 px près :

| Élément | 1440 × 1955 | 375 × 2043 | 768 |
|---|---|---|---|
| Recette (carte) | (352, 123) 736 × 1708 | x 0, largeur 375 | (16, 64) 736 × 1708 |
| Photo | (392, 163) 656 × 300, rayon 12 | (0, 0) 375 × 171 | — |
| Preparation time (encadré) | (392, 647) 656 × 180 | (32, 464) 311 × 191 | — |
| Séparateurs | y 1094 et 1490, x 392, largeur 656 | y 946 et 1678, x 32, largeur 311 | — |
| Tableau | x 392, largeur 656 ; lignes de 48 px à y 1610, 1658, 1706, 1754 | x 32, largeur 311 ; lignes à y 1822, 1870, 1918, 1966 | — |
| Nutriment, valeur (texte) | x 424 et 728 | x 64 et 196 | — |

Les puces des éléments de deux lignes sont alignées sur la première ligne (Q-B1) : vérifié par la comparaison visuelle et le parcours réel (Phase 8).

Le pied de page ne déplace aucun de ces éléments : centré sous la carte (desktop, tablette), sous le tableau en mobile (sous y = 2043).

La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol | Focus clavier |
|---|---|---|---|
| Liens du pied de page | soulignés, `#3E52A3` | soulignement retiré | contour 2 px `#3E52A3`, décalé de 2 px |

Rien d'autre n'est interactif ; la page n'a aucune animation.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Titres dans l'ordre : `h1` « Simple Omelette Recipe », puis un `h2` par section. |
| A2 | La photo a un texte alternatif qui décrit le plat (Q-B4). |
| A3 | Les étapes sont une liste ordonnée : leur numéro est annoncé. |
| A4 | Le tableau a des en-têtes de ligne : chaque valeur est annoncée avec son nutriment (Q-B2). |
| A5 | Contraste AA (4,5:1) pour tous les textes. |
| A6 | Focus visible sur les liens : contour de 2 px au moins. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Recette | article | — (en desktop et tablette, il a la taille et la place de la carte : S1, S3) |
| Photo | img | « Omelette folded over spinach and vegetables, served on a plate » |
| Titre | heading (niveau 1) | « Simple Omelette Recipe » |
| Sections | region | « Preparation time », « Ingredients », « Instructions », « Nutrition » (nommées par leur titre `h2`) ; listes : `listitem` |
| Séparateurs | separator | — |
| Tableau | table | lignes : `row` ; nutriment : `rowheader` ; valeur : `cell` |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 1955  Then carte (352, 123) 736 × 1708 ; photo (392, 163) 656 × 300 ; encadré (392, 647) 656 × 180 ;
                       séparateurs à y 1094 et 1490 ; tableau à x 392, largeur 656, lignes à y 1610, 1658, 1706, 1754 ;
                       textes du tableau à x 424 et 728
S2  Given 375 × 2043   Then pas de carte ; photo (0, 0) 375 × 171 ; encadré (32, 464) 311 × 191 ; séparateurs à y 946 et 1678 ;
                       tableau à x 32, largeur 311, lignes à y 1822, 1870, 1918, 1966 ; textes du tableau à x 64 et 196 ;
                       le pied de page commence sous y = 2043
S3  Given 768 px       Then carte (16, 64) 736 × 1708 ; given 1024 px  Then carte (144, 123) 736 × 1708
S4  Given 320, 767, 768, 1023, 1024, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 1955  Then le pied de page est centré sous la carte

Contenu
S6  Given la page  Then la photo est chargée et a son texte alternatif (Q-B4) ; h1 « Simple Omelette Recipe » ; la présentation
S7  Given Preparation time  Then 3 éléments ; libellés Total, Preparation, Cooking en gras, sans le « : »
S8  Given Ingredients  Then les 5 éléments dans l'ordre de §2
S9  Given Instructions  Then une liste ordonnée de 6 étapes ; chacune commence par son libellé en gras, sans le « : » (Q-B5)
S10 Given Nutrition  Then la phrase, puis 4 lignes : en-tête de ligne Calories, Carbs, Protein, Fat ; valeurs 277kcal, 0g, 20g, 22g (Q-B2)
S11 Given la page  Then 2 séparateurs, entre Ingredients et Instructions puis entre Instructions et Nutrition
S12 Given la page  Then titres de section en Brown 800 ; « Preparation time » en Rose 800 ; valeurs nutritionnelles en Brown 800, en gras

Interactions
S13 Given la page  When j'appuie sur Tab deux fois  Then « Frontend Mentor » puis « Koya Esdras » reçoivent le focus,
                   chacun avec un contour de 2 px au moins
S14 Given un lien du pied de page  When je le survole  Then son soulignement disparaît

Accessibilité et règles FM
S15 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S16 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S17 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S18 Given le JavaScript du dépôt (code, tests, configuration)  Then eslint au réglage de FM : aucune erreur

Visuel (seuils calibrés en Phase 3, G3-3)
S19 1440 × 1955 vs desktop.jpg ≤ 5,0 %
S20 375 × 2043 vs mobile.jpg ≤ 6,8 %
```
