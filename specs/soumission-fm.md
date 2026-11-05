# Soumission Frontend Mentor

> SDL-FM 1.5.0 Phase 13. Textes préparés pour le formulaire « Submit solution » du challenge. La soumission est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi.
>
> **Envoyée le 2026-11-05** avec l'accord de Koya, textes ci-dessous inchangés (les 4 tags existent sur FM) : https://www.frontendmentor.io/solutions/recipe-page-with-native-lists-a-data-table-tailwind-v4-and-playwright-NFulTTqYoZ

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | Recipe page with native lists, a data table, Tailwind v4 & Playwright (69) |
| Repository URL | https://github.com/ounokoya/recipe-page |
| Live site URL | https://ounokoya.github.io/recipe-page/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |

Challenge Newbie : +10 points. Pas de crédit de rapport IA ce mois-ci : les vérifications automatiques gratuites suffisent pour viser 0 remarque.

## What are you most proud of, and what would you do differently next time?

I'm most proud of the markup: an `article` with sections named by their headings, native lists whose bullets and step numbers are styled with `::marker` (so screen readers still announce them), each step starting with a `strong` label, and a nutrition table with row headers so "Calories, 277kcal" is read together. Screenshots differ from the design JPGs by 0.4 % (desktop) and 4.4 % (mobile) of pixels, and the 31 Playwright tests pass on the live site.

Next time, I'd check font rendering before tuning margins: on Linux, Chromium rounded each glyph of the starter's TTF fonts to whole pixels, so a line grew from 310.9 to 317 px and wrapped one word early.

## What challenges did you encounter, and how did you overcome them?

- **Line breaks**: `text-rendering: geometricPrecision` keeps the fractional glyph widths, and every line now breaks where the design breaks it, without changing any width.
- **Bullet spacing**: an outside marker sits against the edge of its list item, so the item's left padding sets the 32 px gap between the bullet and the text; two-line items keep their bullet on the first line.
- **Table rows**: the first row has no line above it, so it is 1 px shorter than the others; I measured the design's lines to place the rows and the separators.

## What specific areas of your project would you like help with?

1. Is a `table` with `th scope="row"` the right choice for the nutrition values, or would you use a description list?
2. The photo is a single 1312 × 600 JPEG for every width. Would you add smaller versions with `srcset` for mobile?
3. Would you expect the step numbers to be part of the text (for copying the recipe), or are list numbers enough?
