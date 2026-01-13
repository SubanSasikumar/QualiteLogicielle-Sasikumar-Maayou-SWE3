import { Before, After, setDefaultTimeout  } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(30_000)

let browser: Browser;

// Hook exécuté avant chaque scénario
Before(async function (scenario) {
    console.log("\n---------------------------------------------------------------------------------");
    console.log("▶️  TEST : " + scenario.pickle.name);
    console.log("---------------------------------------------------------------------------------");
    browser = await chromium.launch({
        headless: false, // ← Mode headed
        //slowMo: 5000 // Optionnel : ralentit les actions pour mieux voir
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    this.page = page;
});

After(async function () {
    await browser.close()
})