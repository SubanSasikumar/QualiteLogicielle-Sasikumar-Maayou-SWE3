import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'
import { SearchBar } from './pages/BarreRecherche'

test.describe('Barre de recherche', () => {

  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
  })
  
  test('Rechercher un produit existant (maillot)', async ({ page }) => {
    const searchBar = new SearchBar(page)
    await searchBar.search('maillot')
    await expect(page.getByText('Vous avez cherché : maillot')).toBeVisible()
    console.log('  ✅ Test Recherche Produit Existant')
  })

  test('Rechercher un sport (football)', async ({ page }) => {
    const searchBar = new SearchBar(page)
    await searchBar.search('foot')
    await expect(page.getByText('Vous avez cherché : foot')).toBeVisible()
    console.log('  ✅ Test Recherche Sport')
  })

  test('Rechercher un produit inexistant', async ({ page }) => {
    const searchBar = new SearchBar(page)
    await searchBar.search('qwxszedc')
    await expect(page.getByText('N’abandonnez pas, on va vous')).toBeVisible()
    await expect(page.getByText('Avez-vous pensé à : Vérifier')).toBeVisible()
    console.log('  ✅ Test Recherche Produit Inexistant')
  })
    
  
  test('Effacer la recherche avec la croix', async ({ page }) => {
    const searchBar = new SearchBar(page)
    await searchBar.search('doudoune')
    await page.waitForTimeout(1000)
    await searchBar.clear()
    await expect(searchBar.input).toHaveValue('')
    console.log('  ✅ Test Suppresion Recherche')
  })

})
