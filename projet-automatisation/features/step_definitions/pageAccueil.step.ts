import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { pageAccueil } from '../../pages/PageAccueil'

let browser: Browser;
let page: Page;
let home: pageAccueil


// Hook exécuté avant chaque scénario
Before(async () => {
browser = await chromium.launch({
    headless: false, // ← Mode headed
    //slowMo: 5000 // Optionnel : ralentit les actions pour mieux voir
});
const context = await browser.newContext();
    page = await context.newPage();
});

After(async () => {
  await browser.close()
})

Given('je suis sur la page d’accueil Decathlon', async () => {
  home = new pageAccueil(page)
  await home.goto()
})

Then('le logo Decathlon est affiché', async () => {
  await expect(home.logo).toBeVisible()
})

Then('la barre de recherche est affichée', async () => {
  await expect(home.searchBar).toBeVisible()
})

Then('l’icône panier est affichée', async () => {
  await expect(home.panier).toBeVisible()
})

Then('l’icône connecter est affichée', async () => {
  await expect(home.connect).toBeVisible()
})

Then('l’icône question est affichée', async () => {
  await expect(home.question).toBeVisible()
})