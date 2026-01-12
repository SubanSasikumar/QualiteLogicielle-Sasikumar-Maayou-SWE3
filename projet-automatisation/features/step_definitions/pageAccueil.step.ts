import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageAccueil } from '../../pages/PageAccueil'

Given('je suis sur la page d’accueil Decathlon', async function () {
  this.home = new pageAccueil(this.page)
  await this.home.goto()
})

Then('le logo Decathlon est affiché', async function () {
  await expect(this.home.logo).toBeVisible()
})

Then('la barre de recherche est affichée', async function () {
  await expect(this.home.searchBar).toBeVisible()
})

Then('l’icône panier est affichée', async function () {
  await expect(this.home.panier).toBeVisible()
})

Then('l’icône connecter est affichée', async function () {
  await expect(this.home.connect).toBeVisible()
})

Then('l’icône question est affichée', async function () {
  await expect(this.home.question).toBeVisible()
})