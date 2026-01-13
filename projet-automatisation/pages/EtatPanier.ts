import { Page, Locator } from '@playwright/test';

export class PanierPage {
    readonly page: Page;
    readonly nom : Locator;
    readonly taille: Locator;
    readonly supprimer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nom = page.getByRole('link', { name: 'TARMAK T-shirt de basketball' })
        this.taille = page.getByText('taille : XS.');
        this.supprimer = page.getByRole('button', { name: 'Supprimer' });
    }

    async removeItem() {
        await this.supprimer.first().click();
    }
}