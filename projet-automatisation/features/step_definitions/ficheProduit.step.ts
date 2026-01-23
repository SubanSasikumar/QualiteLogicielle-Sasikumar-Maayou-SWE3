import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { barreRecherche } from '../../pages/BarreRecherche';
import { ProductPage } from '../../pages/FicheProduit';


/* Scenario 1*/
When('je recherche le produit {string}', async function (produit: string) {
    this.barre = new barreRecherche(this.page);
    await this.barre.search(produit);
});

When('je sélectionne le premier produit de la liste', async function () {
    await this.page.locator('.vtmn-relative.vtmn-h-0 > .vtmn-absolute').first().click();
    this.product = new ProductPage(this.page);
    
});

Then('le bouton "Ajouter au panier" est désactivé', async function () {
    await expect(this.product.panier).toBeDisabled();
});


When('je sélectionne la taille {string}', async function (taille: string) {
   await this.product.selectSize(taille);
});

When('j’ajoute le produit au panier', async function () {
    await this.product.addToCart();
    await this.page.waitForTimeout(1000);
});

Then('le panier contient {int} article', async function (quantite: number) {
    await expect(this.page.getByRole('alert')).toBeVisible()
});

/* Scenario 2*/
When('j’affiche toutes les images du produit', async function () {
    this.product = new ProductPage(this.page);
    await this.product.showAllImages();
});

Then('plusieurs images du produit sont visibles', async function () {
    await expect(this.page.locator('div').filter({ hasText: 'Voir moins' }).nth(3)).toBeVisible();
});


/* Scenario 3*/
When('je clique sur "Voir les avis"', async function () {
    this.product = new ProductPage(this.page);
    await this.product.openReviews();
});

Then('la liste des avis apparaît', async function () {
    await expect(this.product.note).toBeVisible();
});