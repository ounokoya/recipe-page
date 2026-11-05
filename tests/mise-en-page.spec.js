import { test, expect } from '@playwright/test'
import { open, recipe, photo, section, separators, rows, footer, box, near, textBox, style } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

async function table(page, { x, width, ys, label, value }) {
  near(await box(page.getByRole('table')), { x, width }, 'tableau')
  await expect(rows(page)).toHaveCount(4)
  // lignes 2 à 4 : leur trait du haut est celui de l'image ; la ligne 1, sans trait, fait 47 px
  for (const [i, y] of ys.entries()) near(await box(rows(page).nth(i)), { y }, `ligne ${i + 1}`)
  // position du texte lui-même : ± 2 px (approche des lettres)
  const l = await textBox(page.getByRole('rowheader', { name: 'Calories' }))
  const v = await textBox(page.getByRole('cell', { name: '277kcal' }))
  expect(Math.abs(l.left - label), `nutriment à x ${l.left}`).toBeLessThanOrEqual(2)
  expect(Math.abs(v.left - value), `valeur à x ${v.left}`).toBeLessThanOrEqual(2)
}

async function rules(page, x, width, ys) {
  await expect(separators(page)).toHaveCount(2)
  for (const [i, y] of ys.entries()) near(await box(separators(page).nth(i)), { x, y, width }, `séparateur ${i + 1}`)
}

test('S1 — 1440 × 1955 : carte, photo, encadré, séparateurs et tableau de la maquette', async ({ page }) => {
  await open(page, 1440, 1955)

  near(await box(recipe(page)), { x: 352, y: 123, width: 736, height: 1708 }, 'carte')
  near(await box(photo(page)), { x: 392, y: 163, width: 656, height: 300 }, 'photo')
  near(await box(section(page, 'Preparation time')), { x: 392, y: 647, width: 656, height: 180 }, 'Preparation time')
  await rules(page, 392, 656, [1094, 1490])
  await table(page, { x: 392, width: 656, ys: [1611, 1658, 1706, 1754], label: 424, value: 728 })
})

test('S2 — 375 × 2043 : pas de carte, photo pleine largeur, pied de page sous la maquette', async ({ page }) => {
  await open(page, 375, 2043)

  near(await box(recipe(page)), { x: 0, width: 375 }, 'recette')
  expect(await style(recipe(page), 'borderTopLeftRadius')).toBe('0px')
  near(await box(photo(page)), { x: 0, y: 0, width: 375, height: 171 }, 'photo')
  near(await box(section(page, 'Preparation time')), { x: 32, y: 464, width: 311, height: 191 }, 'Preparation time')
  await rules(page, 32, 311, [946, 1678])
  await table(page, { x: 32, width: 311, ys: [1823, 1870, 1918, 1966], label: 64, value: 196 })
  expect((await box(footer(page))).y).toBeGreaterThanOrEqual(2043)
})

for (const [width, x, y] of [[768, 16, 64], [1024, 144, 123]]) {
  test(`S3 — ${width} px : carte de 736 px en (${x}, ${y})`, async ({ page }) => {
    await open(page, width, 1024)
    near(await box(recipe(page)), { x, y, width: 736, height: 1708 }, 'carte')
  })
}

for (const width of [320, 767, 768, 1023, 1024, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(rows(page)).toHaveCount(4)
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 1955 : pied de page centré sous la carte', async ({ page }) => {
  await open(page, 1440, 1955)
  const card = await box(recipe(page))
  const f = await box(footer(page))
  const t = await textBox(footer(page))

  expect(f.y).toBeGreaterThanOrEqual(card.y + card.height)
  expect(Math.abs((t.left + t.right) / 2 - 720)).toBeLessThanOrEqual(1)
})
