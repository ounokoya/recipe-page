# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [1.0.0] — 2026-11-05

Première version (SDL-FM 1.5.0, remise à niveau du profil, lot 1).

### Added
- Recette : photo avec texte alternatif (Q-B4), titre et présentation, « Preparation time », ingrédients, 6 étapes numérotées au début en gras (Q-B5), tableau des valeurs nutritionnelles avec en-têtes de ligne (Q-B2).
- Page mobile (< 768 px) et carte de 736 px dès 768 px (tablette : proposition Q-B3) ; puces sur la 1re ligne (Q-B1).
- Young Serif et Outfit servies avec le site depuis les fichiers du starter (ADR-0004).
- Liens de l'attribution soulignés sauf au survol, contour de focus (G3-1).
- Tests : 20 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (0,40 % ; 4,41 % pour un seuil de 6,8 %, G3-3).

### Fixed
- Fond de page blanc déclaré en mobile (E1, Phase 8).
