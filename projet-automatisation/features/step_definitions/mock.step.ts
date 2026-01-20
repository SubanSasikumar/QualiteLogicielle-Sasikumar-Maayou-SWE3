import { Given, Then } from '@cucumber/cucumber';
import { expect, Route, Request } from '@playwright/test';

/*Mock 1*/
Given('ajoute via un mock un element au panier', async function () {
    /*
    this.page.on('request', (request: Request) => {
        if (request.url().includes('Cart') || request.url().includes('Basket')) {
            console.log('🔍 URL détectée :', request.url());
        }
    });
    */

    await this.page.route('**/ajax/loadData/content/Shared/Cart/Cart%20Content/Cart*', async (route: Route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                "responseTO": {
                    "data": {
                        "numberItems": 1,
                        "totalAmount": 21.99,
                        "commerceItems": [{
                            "displayName": "Sous-maillot NBA Mocké",
                            "quantity": 1,
                            "rawTotalPrice": { "amount": 21.99, "currency": "EUR" },
                            "unitPrice": { "amount": 21.99, "currency": "EUR" },
                            "totalPrice": { "amount": 21.99, "currency": "EUR" },
                            "productTo": {
                                "brandName": "TARMAK",
                                "category": "Sous-vêtements thermiques pour tous les sports",
                                "color": "blanc ultra",
                                "correspondingSkuId": "5404884",
                                "department": "BASKETBALL / NETBALL",
                                "family": "NBA SS-VETEMENTS & PROTECTIONS HOMME",
                                "hasMoreThanOneSku": true,
                                "image": "https://contents.mediadecathlon.com/p2938869/k$0fc7b6eeaa04985b3831b70591e593e0/sq/Sous+maillot+de+basket+NBA+seamless+manches+longues+homme+femme+900+blanc.jpg",
                                "modelId": "8916581",
                                "name": "Sous-maillot de basket NBA seamless manches longues homme femme, 900 blanc - Mocke",
                                "nature": "Sous vêtement haut",
                                "productIcon": "PRODUCT_ICON",
                                "productId": "354087",
                                "size": "2XL.",
                                "skuHeight": null,
                                "skuLength": null,
                                "skuWeight": null,
                                "skuWidth": null,
                                "sportIcon": null,
                                "subDepartment": "BASKETBALL HOMME",
                                "universe": "UNIVERS SPORTS COLLECTIFS"
                            },
                        }]
                    }
                }
            })
        });
    });

    await this.page.goto('https://www.decathlon.fr/checkout/cart');    
});

Then('je vois que le panier possede article', async function () {
    const productMocke = this.page.getByRole('link', { name: 'TARMAK Sous-maillot de basket'})
    await expect(productMocke).toBeVisible({ timeout: 10000 });
});


/*Mock 2*/
Given('ajoute via un mock deux elements au panier', async function () {
    await this.page.route('**/ajax/loadData/content/Shared/Cart/Cart%20Content/Cart*', async (route: Route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                "responseTO": {
                    "data": {
                        "numberItems": 2,
                        "totalAmount": 50.00, 
                        "subTotal": { "amount": 50.00 }, 
                        "total": { "amount": 50.00, "currency": "EUR" },
                        "commerceItems": [
                            {
                                "quantity": 1,
                                "productTo": {
                                    "brandName": "QUECHUA",
                                    "category": "Vestes",
                                    "color": "noir",
                                    "correspondingSkuId": "4264194",
                                    "department": " RANDONNEES, TREKKING ET ALPINISME",
                                    "family": "VESTES CHAUDES RANDO TPS/FROID & NEIGE F",
                                    "hasMoreThanOneSku": true,
                                    "image": "https://contents.mediadecathlon.com/p2718258/k$ede246bac1ccb69ac57c197a134fe619/sq/Veste+de+randonn+e+10+C+imperm+able+femme+NH500+noir.jpg",
                                    "modelId": "8640297",
                                    "name": "Veste de randonnée -10°C imperméable femme, NH500 noir - Mocke",
                                    "nature": "Veste",
                                    "productIcon": "PRODUCT_ICON",
                                    "productId": "331299",
                                    "size": "XS",
                                    "skuHeight": null,
                                    "skuLength": null,
                                    "skuWeight": null,
                                    "skuWidth": null,
                                    "sportIcon": null,
                                    "subDepartment": "COUCHE 3 FEMME RANDONNEE TREKKING ALPI",
                                    "universe": "RANDONNEE CAMPING ESCALADE"
                                },
                                "unitPrice": { "amount": 30.00, "currency": "EUR" },
                                "totalPrice": { "amount": 30.00, "currency": "EUR" }
                            },
                            {
                                "quantity": 1,
                                "productTo": {
                                    "brandName": "DOMYOS",
                                    "category": "Shorts",
                                    "color": "noir",
                                    "correspondingSkuId": "4404556",
                                    "department": "PANOPLIES TRAINING ADULTES",
                                    "family": "PERFORMANCE HOMME",
                                    "hasMoreThanOneSku": true,
                                    "image": "https://contents.mediadecathlon.com/p2509355/k$b93ec8f187cd29a951506e5f402f3e54/sq/Short+de+fitness+2+en+1+collection+respirant+poche+zipp+e+homme+noir.jpg",
                                    "modelId": "8670052",
                                    "name": "Short de fitness 2 en 1 collection respirant poche zippée homme - noir - Mocke",
                                    "nature": "Short",
                                    "productIcon": "PRODUCT_ICON",
                                    "productId": "327510",
                                    "size": "S",
                                    "skuHeight": null,
                                    "skuLength": null,
                                    "skuWeight": null,
                                    "skuWidth": null,
                                    "sportIcon": null,
                                    "subDepartment": "TEXTILE TRAINING HOMME",
                                    "universe": "UNIVERS FITNESS / TRAINING / KID"
                                },
                                "unitPrice": { "amount": 20.00, "currency": "EUR" },
                                "totalPrice": { "amount": 20.00, "currency": "EUR" }
                            }
                        ]
                    }
                }
            })
        });
    });

    await this.page.goto('https://www.decathlon.fr/checkout/cart');    
});

Then('je vois que le panier possede le bon prix total', async function () {
    const total = this.page.locator('div').filter({ hasText: 'Sous-total (2 articles) 50€' }).nth(3)
    await expect(total).toContainText("50");
});
