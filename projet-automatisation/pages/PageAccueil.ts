import { Page, Locator } from '@playwright/test'

export class pageAccueil {
  readonly page: Page
  readonly acceptCookiesButton: Locator
  readonly logo: Locator
  readonly searchBar: Locator
  readonly panier : Locator
  readonly connect : Locator
  readonly question : Locator
  
  constructor(page: Page) {
    this.page = page
    this.acceptCookiesButton = page.locator('button:has-text("Tout accepter")')

    this.logo = page.locator('.vtmn-navbar_logo')
    
    this.searchBar = page.getByRole('searchbox', {name:'Rechercher un produit, un' })

    const navbar = page.getByLabel('navbar')
    this.question = navbar.getByRole('link', {name: 'Une question ?'})
    this.connect = navbar.getByRole('link', {name: 'Se connecter'})
    this.panier = navbar.getByRole('link', {name: 'Mon panier'})
  }

  async goto() {
    await this.page.goto('https://www.decathlon.fr')
    await this.acceptCookiesIfPresent()
  }

  async acceptCookiesIfPresent() {
    if (await this.acceptCookiesButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await this.acceptCookiesButton.click()
      console.log('   Cookie Page Accepté')
    }
  }

}