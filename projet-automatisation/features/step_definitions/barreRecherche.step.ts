import { When, Then  } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { barreRecherche } from '../../pages/BarreRecherche'

/* Scenario 1 */
When('je recherche {string} dans la barre de recherche',  async function(texte: string) {
    this.barre = new barreRecherche(this.page)
    await this.barre.search(texte)
  }
)

Then('des résultats pour {string} sont affichés',  async function(_texte: string) {
    await expect(
        this.page.getByText('Vous avez cherché', { exact: false })
    ).toBeVisible()
  }
)

When('je clique sur la croix pour effacer la recherche',  async function() {
    await this.barre.clear()
  }
)

Then('aucun produit n’est affiché', async function() {
    await expect(
        this.page.getByText('Désolé, nous n’avons rien trouvé pour : aqwxszedc N’abandonnez pas, on va vous', { exact: false })
    ).toBeVisible()
  }
)

Then('la barre de recherche est vide',async function()  {
    await expect(this.barre.input).toHaveValue('')
  }
)

/* Scenario 2 */
Then('je vois article {string} associe a cette reference',  async function(texte: string) {
    await expect(
        this.page.getByRole('heading', { name: texte })
    ).toBeVisible()
  }
)

/* Scenario 3 */
When('je commence la recherche {string} dans la barre de recherche',  async function(texte: string) {
    this.barre = new barreRecherche(this.page)
    await this.barre.startSearch(texte)
  }
)

Then('des suggestions de recherches sont affichées', async function() {
    await expect(
        this.page.getByText('Suggestions de recherche Raquettes | Badminton Volants | Badminton Chaussures')
    ).toBeVisible()
  }
)

When('je clique sur la suggestion {string}',  async function(texte: string) {
    await this.barre.clickSugestion(texte)
  }
)

Then('des résultats pour la sugestion {string} sont affichés',  async function(texte: string) {
    await expect(
        this.page.getByRole('heading', { name: texte, exact: true })
    ).toBeVisible()
  }
)

/* Scenario 4 */
Then('les Suggestions de recherche sont visible',  async function() {
    await this.page.waitForTimeout(3000);
    await expect(
        this.page.getByText('Suggestions de recherche')
    ).toBeVisible()
  }
)

Then('les Suggestions contiennent les caracteres {string}',  async function(texte: string) {
    const html = this.page.locator('ul.vtmn-list li.search-suggestion-category');
    const html_contents = await html.allTextContents();
    for (const content of html_contents) {
      const pertinence = content.toLowerCase().includes(texte.toLowerCase())
      await expect(
        pertinence, `La suggestion "${content}" ne contient pas "${texte} ---> Pas Pertinent"`
      ).toBeTruthy();
    }
  }
)

Then('la section Meilleures ventes est visible',  async function() {
    await expect(
        this.page.getByText('Meilleures ventes')
    ).toBeVisible()
  }
)