import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'
import { NavigationMenu } from './pages/NavigtionMenus'

test.describe('Navigation via le menu', () => {

    test.beforeEach(async ({ page }) => {
        const home = new HomePage(page)
        await home.goto()
    })

    test('Ouvrir le menu Sports', async ({ page }) => {
        const menu = new NavigationMenu(page)
        await menu.openSportsMenu()
        await expect(page.getByRole('tabpanel').getByText('Sports du moment')).toBeVisible()
        console.log('  ✅ Test Ouverture Menu Sport')
    })

    test('Rechercher un sport dans le menu Sports', async ({ page }) => {
        const menu = new NavigationMenu(page)
        await menu.openSportsMenu()
        await menu.searchInMenu('Basketball')
        await expect(page.getByText('Basketball')).toBeVisible()
        console.log('  ✅ Test Recherche Menu Sport')
    })


    test('Accéder à la catégorie Vélo Cyclisme', async ({ page }) => {
        const menu = new NavigationMenu(page)
        await menu.openSportsMenu()
        await menu.clickCategory('Vélo Cyclisme')
        await expect(page.getByRole('heading', { name: 'Bienvenue dans l\'univers du V' })).toBeVisible()
        console.log('  ✅ Test Ouverture Catégorie Vélo')
    })

    test('Ouvrir le menu Homme', async ({ page }) => {
        const menu = new NavigationMenu(page)
        await menu.openHommeMenu()
        await expect(page.getByText('Homme Voir tout Fermer')).toBeVisible()
        console.log('  ✅ Test Ouverture Menu Homme')
    })
    

})
