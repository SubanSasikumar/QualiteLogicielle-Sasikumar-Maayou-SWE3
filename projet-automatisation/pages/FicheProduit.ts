import { Page, Locator, expect } from '@playwright/test'

export class ProductPage {
  readonly page: Page
  readonly images: Locator
  readonly panier: Locator
  readonly comboBox: Locator
  readonly listBox: Locator
  readonly XS: Locator
  readonly avis: Locator
  readonly note: Locator
  readonly cartCount: Locator

  constructor(page: Page) {
    this.page = page
    this.images = page.getByRole('button', { name: 'Voir plus' })

    this.panier = page.getByRole('button', {name: 'Ajouter au panier' })

    this.comboBox = page.getByRole('combobox', {name: 'Sélectionnez une taille'})
    this.listBox = page.getByRole('listbox', {name: 'Sélectionnez une taille'})
    this.XS = this.listBox.getByRole('option', {name: /Taille XS.*En stock/i})

    this.avis = page.getByRole('link', { name: 'Voir tous les commentaires' }).first()
    this.note = page.getByRole('heading').filter({ hasText: '/5' })

    this.cartCount = page.getByText('1')
  }

  async showAllImages() {
    await this.images.click()
  }         

  async selectSize(size: 'XS' | 'M') {
    await expect(this.comboBox).toBeVisible()
    await this.comboBox.click()
    await expect(this.listBox).toBeVisible()
    await expect(this.XS).toBeVisible()
    await this.XS.click()
  }

  async openReviews() {
    await this.avis.click()
  }

  async addToCart() {
    await expect(this.panier).toBeEnabled()
    await this.panier.click()
  }

}
