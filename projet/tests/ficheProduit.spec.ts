import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'
import { SearchBar } from './pages/BarreRecherche'
import { ProductPage } from './pages/FicheProduit'

test.describe('Fiche produit', () => {

  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    const searchBar = new SearchBar(page)
    await home.goto()
    await searchBar.search('T-shirt de basketball nba celtics homme/femme - ts 900 ad green')
    await page.locator('.vtmn-relative.vtmn-h-0 > .vtmn-absolute').first().click()
    console.log('  ✅ Produit Trouvé')
  })
  
  test('Afficher la galerie d’images', async ({ page }) => {
    const product = new ProductPage(page)
    await product.showAllImage()
    await expect(page.locator('div').filter({ hasText: 'Voir moins' }).nth(3)).toBeVisible()
    console.log('  ✅ Test Affichage Galerie Image')
  })
    
  test('Bouton ajouter au panier désactivé sans taille', async ({ page }) => {
    const product = new ProductPage(page)
    await expect(product.panier).toBeDisabled()
    console.log('  ✅ Test Ajout Au Panier Impossible sans taille')
  })
    

  test('Sélectionner la taille XS', async ({ page }) => {
    const product = new ProductPage(page)
    await product.selectXS()
    await expect(product.panier).toBeEnabled()
    console.log('  ✅ Test Sélection une taille')
  })
    
  
  test('Afficher les avis du produit', async ({ page }) => {
    const product = new ProductPage(page)
    await product.openReviews()
    await expect(product.note).toBeVisible()
    console.log('  ✅ Test Affichage Avis')
  })
  
  test('Ajouter un produit au panier', async ({ page }) => {
    const product = new ProductPage(page)
    await product.selectXS()
    await product.addToCart()
    await page.waitForTimeout(1000)
    await expect(page.locator('header').filter({ hasText: 'Ajouté au panier !' })).toBeVisible()
    console.log('  ✅ Test Ajout Panier')
  })
    
    

})
