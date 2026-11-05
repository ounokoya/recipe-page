import { test, expect } from '@playwright/test'
import { open, photo, title, section, items, separators, rows, style, cssColor } from './helpers.js'

// Spec §2 et §3 — S6 à S12

const PREP = [['Total', 'Approximately 10 minutes'], ['Preparation', '5 minutes'], ['Cooking', '5 minutes']]
const INGREDIENTS = ['2-3 large eggs', 'Salt, to taste', 'Pepper, to taste', '1 tablespoon of butter or oil', 'Optional fillings: cheese, diced vegetables, cooked meats, herbs']
const STEPS = [
  ['Beat the eggs', 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'],
  ['Heat the pan', 'Place a non-stick frying pan over medium heat and add butter or oil.'],
  ['Cook the omelette', 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'],
  ['Add fillings (optional)', 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'],
  ['Fold and serve', 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'],
  ['Enjoy', 'Serve hot, with additional salt and pepper if needed.'],
]
const NUTRITION = [['Calories', '277kcal'], ['Carbs', '0g'], ['Protein', '20g'], ['Fat', '22g']]
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const labelled = (label, rest) => new RegExp(`^\\s*${escape(label)}:\\s*${escape(rest)}\\s*$`)

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 1955)
})

test('S6 — photo chargée avec son texte alternatif, titre et présentation', async ({ page }) => {
  await expect(photo(page)).toBeVisible()
  // l'effet, pas l'attribut : la photo est réellement chargée
  expect(await photo(page).evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true)
  await expect(title(page)).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(page.getByText('An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.', { exact: true })).toBeVisible()
})

test('S7 — Preparation time : 3 éléments, libellé en gras sans le « : »', async ({ page }) => {
  await expect(section(page, 'Preparation time').getByRole('heading', { level: 2 })).toHaveText('Preparation time')
  await expect(items(page, 'Preparation time')).toHaveText(PREP.map(([l, r]) => labelled(l, r)))
  for (const [i, [label]] of PREP.entries()) await expect(items(page, 'Preparation time').nth(i).locator('strong')).toHaveText(label)
})

test('S8 — Ingredients : les 5 éléments dans l\'ordre', async ({ page }) => {
  await expect(items(page, 'Ingredients')).toHaveText(INGREDIENTS)
})

test('S9 — Instructions : liste ordonnée de 6 étapes, libellé en gras sans le « : » (Q-B5)', async ({ page }) => {
  const list = section(page, 'Instructions').getByRole('list')
  expect(await list.evaluate((el) => el.tagName)).toBe('OL')
  await expect(items(page, 'Instructions')).toHaveText(STEPS.map(([l, r]) => labelled(l, r)))
  for (const [i, [label]] of STEPS.entries()) await expect(items(page, 'Instructions').nth(i).locator('strong')).toHaveText(label)
})

test('S10 — Nutrition : phrase, puis un en-tête de ligne par nutriment et sa valeur (Q-B2)', async ({ page }) => {
  await expect(section(page, 'Nutrition').getByText('The table below shows nutritional values per serving without the additional fillings.', { exact: true })).toBeVisible()
  await expect(rows(page)).toHaveCount(4)
  for (const [i, [name, value]] of NUTRITION.entries()) {
    await expect(rows(page).nth(i).getByRole('rowheader')).toHaveText(name)
    await expect(rows(page).nth(i).getByRole('cell')).toHaveText(value)
  }
})

test('S11 — 2 séparateurs, entre Ingredients et Instructions, puis entre Instructions et Nutrition', async ({ page }) => {
  await expect(separators(page)).toHaveCount(2)
  const y = async (l) => (await l.boundingBox()).y
  const [s1, s2] = [await y(separators(page).nth(0)), await y(separators(page).nth(1))]
  expect(await y(section(page, 'Ingredients'))).toBeLessThan(s1)
  expect(s1).toBeLessThan(await y(section(page, 'Instructions')))
  expect(await y(section(page, 'Instructions'))).toBeLessThan(s2)
  expect(s2).toBeLessThan(await y(section(page, 'Nutrition')))
})

test('S12 — couleurs : titres de section, « Preparation time », valeurs nutritionnelles', async ({ page }) => {
  const BROWN = await cssColor(page, 'hsl(14, 45%, 36%)')
  for (const name of ['Ingredients', 'Instructions', 'Nutrition']) {
    expect(await style(section(page, name).getByRole('heading', { level: 2 }), 'color'), name).toBe(BROWN)
  }
  expect(await style(section(page, 'Preparation time').getByRole('heading', { level: 2 }), 'color')).toBe(await cssColor(page, 'hsl(332, 51%, 32%)'))
  await expect(rows(page)).toHaveCount(4)
  for (let i = 0; i < 4; i++) {
    const cell = rows(page).nth(i).getByRole('cell')
    expect(await style(cell, 'color')).toBe(BROWN)
    expect(Number(await style(cell, 'fontWeight'))).toBeGreaterThanOrEqual(700)
  }
})
