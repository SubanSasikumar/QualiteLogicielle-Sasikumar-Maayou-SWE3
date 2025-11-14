import { test, expect } from '@playwright/test';

test('mock localStorage avec tâches existantes', async ({ page }) => {
    // Injecter un jeu de données avant que la page ne se charge
    await page.addInitScript(() => {
        const mockedTodos = [
            { title: 'Acheter du pain', completed: false },
            { title: 'Préparer le repas', completed: false },
            { title: 'Lire la documentation Playwright', completed:true }, 
            { title: 'Rentrer a la maison', completed: false }
        ];
        localStorage.setItem('react-todos', JSON.stringify(mockedTodos));
        
    });
    await page.goto('https://demo.playwright.dev/todomvc');

    // Vérification des tâches visibles dans l’interface
    await expect(page.getByText('Acheter du pain')).toBeVisible();
    await expect(page.getByText('Préparer le repas')).toBeVisible();
    await expect(page.getByText('Lire la documentation Playwright')).toBeVisible();
    await expect(page.getByText('Rentrer a la maison')).toBeVisible();
    await page.pause();
    

    // Verification du statut completed de la 3e tache
    const completed = page.locator(`xpath=//label[text()="Lire la documentation Playwright"]/../..`);
    await expect(completed).toHaveClass(/completed/);
    await page.pause();

    // Suppresion de la 1ere tache
    const todelete = page.locator(`xpath=//label[text()="Acheter du pain"]/..`);
    await todelete.hover();
    await todelete.locator('.destroy').click();
    await expect(page.getByText("Acheter du pain")).not.toBeVisible();
    await page.pause();


});