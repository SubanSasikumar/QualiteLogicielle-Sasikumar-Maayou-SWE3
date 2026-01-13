import { Page, Locator } from '@playwright/test'

export class NavigationMenu {
  readonly page: Page
  readonly sportsMenu: Locator
  readonly homeMenu: Locator

  constructor(page: Page) {
    this.page = page

    const navbar = page.getByRole('navigation').filter({ hasText: 'Sports Femme Homme Enfant & b' })

    this.sportsMenu = navbar.getByRole('menuitem', { name: 'Sports' })
    this.homeMenu = navbar.getByRole('menuitem', { name: 'Homme' })
  }

  async openSportsMenu() {
    await this.sportsMenu.click()
  }

  async openHommeMenu() {
    await this.homeMenu.click()
  }

  async clickCategory(categoryName: string) {
    await this.page.getByRole('link', { name: categoryName }).click()
  }

  async searchInMenu(sport: string) {
    await this.page.getByRole('searchbox', { name: 'Rechercher un sport' })
  }
}
