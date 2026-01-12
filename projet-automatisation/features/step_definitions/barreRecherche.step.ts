import { When, Then  } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { barreRecherche } from '../../pages/BarreRecherche'

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
