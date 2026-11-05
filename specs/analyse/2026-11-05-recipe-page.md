# 2026-11-05 — Rapport d'exécution : Recipe page

> SDL-FM 1.5.0, Phases 7 et 8. Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `rp-preview`, `http://localhost:4198/recipe-page/`), page affichée (`document.visibilityState` = `visible`).

## 1. Tests automatiques (Phase 7)

`npm test` : **31 réussis sur 31** (24 s).

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768, 1024 ; 320 à 1440 sans défilement horizontal ; pied de page) ; E1 (fond déclaré) | ✅ 12 / 12 |
| Contenu | S6 à S12 (photo chargée et texte alternatif, Preparation time, Ingredients, étapes, tableau, séparateurs, couleurs) | ✅ 7 / 7 |
| Interactions | S13, S14 (clavier, liens) | ✅ 2 / 2 |
| Accessibilité | S15 : axe-core à 375 et 1440 px, aucune violation sérieuse ou critique | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S16 (W3C Nu), S17 (html-validate au réglage de FM), S18 (eslint), longueurs en rem ; fitness ADR-0003 et ADR-0004 | ✅ 6 / 6 |
| Visuel | S19, S20 | ✅ 2 / 2 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 1955 | `desktop.jpg` | 0,40 % | 5,0 % | 1,72 % |
| Mobile 375 × 2043 | `mobile.jpg` | 4,41 % | 6,8 % (G3-3) | 5,78 % |

Contrôle rouge fait avant le code (Phase 4) : 25 échecs pour la bonne raison sur le starter, 2 tests de garde (W3C, eslint) ; fitness functions : 2 échecs attendus.

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 375 px | 768 px | 1440 px |
|---|---|---|---|---|
| Disposition | ✅ pas de défilement horizontal ; tableau de 256 px | ✅ photo pleine largeur (1312 px affichée sur 171), contenu à 32 px des bords | ✅ carte de 736 px centrée à 64 px du haut | ✅ carte (352, 123) 736 × 1708 (tests) |
| Polices, photo | — | ✅ Young Serif et Outfit chargées ; photo chargée au premier affichage | — | ✅ |
| Puces (Q-B1) | — | ✅ « Total: Approximately 10 / minutes » et « Optional fillings… » : puce sur la 1re ligne | — | — |

Pas de prototype à comparer : la page n'a aucun élément interactif en dehors de l'attribution (maquette).

## 3. Écarts relevés et suites

| # | Écart | Suite |
|---|---|---|
| E1 | Même cause que pour le Results summary : sans fond déclaré, un navigateur en thème sombre peut montrer son propre fond sous la page mobile | Corrigé : fond blanc déclaré (Stone 100 dès 768 px) ; test E1 (thème sombre émulé), rouge avant le correctif |
| — | À 768 px dans le navigateur intégré, la carte est en x 9 et non 16 : la barre de défilement visible (15 px) réduit la largeur utile | Sans effet : la carte reste centrée dans la largeur disponible ; S3 (barres de défilement superposées) la trouve en x 16 |

Constats de la construction (Phase 6), sans écart restant :
- Chromium sous Linux arrondit au pixel la largeur des lettres des TTF du starter (hinting) : la 2e ligne de la présentation mobile passait de 310,9 à 317 px et se coupait plus tôt. `text-rendering: geometricPrecision` rend les largeurs fractionnaires : les lignes se coupent comme sur l'image FM, sans toucher à la largeur des blocs.
- Puces et numéros : placés contre le bord de l'élément de liste ; le retrait de l'élément les éloigne du texte (32 px).
- Tableau : la 1re ligne n'a pas de trait au-dessus (47 px) ; la spec et S1 / S2 ont été corrigés (1611 et 1823). En desktop, le texte de l'image FM est 2 px plus bas dans sa ligne qu'en mobile.
- Comparaisons visuelles avec `--disable-lcd-text` (texte lissé en gris, comme les images FM).

## 4. En ligne (Phase 12)

`BASE_URL=https://ounokoya.github.io/recipe-page/ npx playwright test --workers=2` : **31 réussis sur 31**, sur la v1.0.0 déployée depuis la branche `gh-pages` (dépôt public créé avec l'accord de Koya).

## 5. Verdict

Conforme à la spec et à la maquette validée (G3). Prêt pour la Phase 9 (README).
