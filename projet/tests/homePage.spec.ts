import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'

test('Page d’accueil – affichage des elements classiques (logo, searchbar, question, connection, panier)', async ({ page }) => {
  const home = new HomePage(page)

  await home.goto()
  //await page.pause()
  await expect(home.logo).toBeVisible()
  console.log('  ✅ Test Logo Décathlon visible')
  
  await expect(home.searchBar).toBeVisible()
  console.log('  ✅ Test Barre de recherche visible')
  
  await expect(home.question).toBeVisible()
  console.log('  ✅ Test Icône Question visible')
  await expect(home.connect).toBeVisible()
  console.log('  ✅ Test Icône Connexion visible')
  await expect(home.panier).toBeVisible()
  console.log('  ✅ Test Icône Panier visible')

  console.log('✅✅✅ Test Page Accueil 100%')
})
