import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { NavigationMenu } from '../../pages/NaviguationMenu'; 

/* Scenario 1 */
When('j’ouvre le menu {string}', async function (nomMenu: string) {
    this.menu = new NavigationMenu(this.page);
    await this.menu.openSportsMenu();
    
});

Then('le menu Sports s’affiche', async function () {
    await expect( this.page.getByRole('tabpanel').getByText('Sports du moment')).toBeVisible();
});

When('je recherche le sport {string}', async function (sport: string) {
    await this.menu.searchInMenu(sport);
});

Then('le sport {string} apparaît dans les résultats', async function (sport: string) {
    await expect(this.page.getByText(sport)).toBeVisible();
});

/* Scenario 2 */
When('je selectionne {string}', async function (categorie: string) {
    await this.menu.clickCategory(categorie);
});

Then('la page {string} est affichée', async function (nomPage: string) {
    if (nomPage === "Vélo Cyclisme") {
        await expect(this.page.getByRole('heading', { name: "Bienvenue dans l'univers du V" })).toBeVisible();
    }
});

