import { Page, Locator } from '@playwright/test'

export class pageAccueil {
  readonly page: Page
  readonly refuseCookiesButton: Locator
  readonly logo: Locator
  readonly searchBar: Locator
  readonly panier : Locator
  readonly connect : Locator
  readonly question : Locator
  
  constructor(page: Page) {
    this.page = page
    this.refuseCookiesButton = page.getByRole('button', { name: 'Tout refuser et fermer' })

    this.logo = page.locator('.vtmn-navbar_logo')
    
    this.searchBar = page.getByRole('searchbox', {name:'Rechercher un produit, un' })

    const navbar = page.getByLabel('navbar')
    this.question = navbar.getByRole('link', {name: 'Une question ?'})
    this.connect = navbar.getByRole('link', {name: 'Se connecter'})
    this.panier = navbar.getByRole('link', {name: 'Mon panier'})
  }

  async goto() {
    await this.page.goto('https://www.decathlon.fr', { waitUntil: 'domcontentloaded'})
    await this.refuseCookiesIfPresent()
  }

  async refuseCookiesIfPresent() {
    try {
      await this.refuseCookiesButton.waitFor({ timeout: 10000 })
      await this.refuseCookiesButton.click()       
    } catch {
      console.log('   Impoosible de refuser les Cookies Page')
    }
  }

}