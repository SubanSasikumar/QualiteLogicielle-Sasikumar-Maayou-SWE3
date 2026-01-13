import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageAccueil } from '../../pages/PageAccueil';
import { barreRecherche } from '../../pages/BarreRecherche';
import { ProductPage } from '../../pages/FicheProduit';
import { PanierPage } from '../../pages/EtatPanier';

Given('j’ai ajouté un produit au panier', async function () {
    this.home = new pageAccueil(this.page);
    await this.home.goto();
    this.barre = new barreRecherche(this.page);
    await this.barre.search('t-shirt basketball nba celtics');
    
    await this.page.locator('.vtmn-relative.vtmn-h-0 > .vtmn-absolute').first().click();
    
    this.product = new ProductPage(this.page);
    await this.product.selectSize('XS');
    await this.product.addToCart();
});

/* Scenario 1 */
When('j’ouvre le panier', async function () {
    this.home = new pageAccueil(this.page);
    await this.home.panier.click();
    this.panier = new PanierPage(this.page);
});

Then('le produit affiche le bon nom', async function () {
    await expect(this.panier.nom).toContainText('basketball');
    
});

Then('le produit affiche la bonne taille', async function () {
    await expect(this.panier.taille).toContainText('XS');
});


/* Scenario 2 */
When('je supprime ce produit du panier', async function () {
    await this.panier.removeItem();
});

Then('le panier ne contient plus d’articles', async function () {
    await expect(this.page.getByText('Votre panier est vide')).toBeVisible();
});