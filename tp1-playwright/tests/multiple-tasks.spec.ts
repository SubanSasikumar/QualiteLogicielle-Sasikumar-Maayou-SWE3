import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Acheter du pain');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Aller Courir');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.pause();
  await page.getByText('Acheter du pain').hover();
  await page.pause();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.pause();
  await expect(page.getByText('Aller Courir')).toBeVisible();
  await page.pause();
  await expect(page.getByText('Acheter du pain')).not.toBeVisible();
});