import { test, expect } from '@playwright/test';
test('mock de la liste des utilisateurs', async ({ page }) => {
    await page.route('**/api/users?page=2', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                data: [
                    { id: 1, first_name: 'Jean', last_name: 'Dupont', email: 'jean.dupont@example.com' },
                    { id: 2, first_name: 'Claire', last_name: 'Martin', email: 'claire.martin@example.com' }
                ]
            })
        });
    });

    // Mock POST CREATE
    await page.route('**/api/users', async route => {
        await route.fulfill({
            status: 201,
            contentType: 'application/json',
            body: JSON.stringify({
                name: "Suban",
                job: "Alternant"
            })
        });
    });

    // Mock POST UPDATE
    await page.route('**/api/users/2', async route => {
        await route.fulfill({
            status: 201,
            contentType: 'application/json',
            body: JSON.stringify({
                name: "Suban",
                job: "Alternant - Etudiant"
            })
        });
    });

    await page.goto('https://reqres.in/');
    await page.click('text=List Users');
    await expect(page.getByText('Jean')).toBeVisible();
    await expect(page.getByText('Claire')).toBeVisible();
    await page.pause();
    await page.unroute('**/api/users?page=2');
    await page.unroute('**/api/users');
    await page.unroute('**/api/users/2');
    await page.pause();
});