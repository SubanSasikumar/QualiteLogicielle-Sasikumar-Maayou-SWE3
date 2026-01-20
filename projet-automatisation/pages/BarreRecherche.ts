import { Page, Locator } from '@playwright/test'

export class barreRecherche {
  readonly page: Page
  readonly input: Locator
  readonly clearButton: Locator

  constructor(page: Page) {
    this.page = page
    this.input = page.getByRole('searchbox', { name: 'Rechercher un produit, un' })
    this.clearButton = page.getByRole('button', { name: '' })
  }

  async search(text: string) {
    await this.input.click()
    await this.input.fill(text)
    await this.input.press('Enter')
  }

  async clear() {
    await this.clearButton.click()
  }

  async startSearch(text: string) {
      await this.input.click()
      await this.input.fill(text)
  }

  async clickSugestion(texte: string) {
    await this.page.getByRole('link', { name: texte }).click()
  }

}