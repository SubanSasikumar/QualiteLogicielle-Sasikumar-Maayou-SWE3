import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('ajouter, supprimer et verifier la tache', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();
  
  await todoPage.addTask('Acheter du pain');
  await todoPage.addTask('Aller Courir');
  await page.pause();

  await todoPage.deleteTask('Acheter du pain');
  await page.pause();

  await todoPage.isTaskVisible('Aller Courir')
  await page.pause();

});