# Projet – Automatisation E2E avec Playwright, POM et Gherkin

## Membre du Groupe
- SASIKUMAR Suban
- MAAYOU Adil
- SWE3  

## Site
**Décathlon** : https://www.decathlon.fr/

## Scénario Testé
0. Page d'Accueil 
    - Nous avons testé la présence ou non des principales éléments que l'on pouvons retrouver dans la page d'Accueil du site
    - Notamment la présence des logos, boutons essenteil (panier, connexion)

1. La Naviguation via la Barre Recherche
    - Recherche d'un produit dans la barre de recherche puis affichage 
    - Recherche d'un produit dans la barre de recherche puis affichage puis le supprimer de la barre de recherche
    - Recherche d'un produit via sa référence (code)
    - Commencer la recherche d'un produit (ex: mail) puis vérifier les résultats proposé par l'auto complétion et s'assuruer de leur pertinence (doivent contenir les caractèes "mail")
    - Commencer la recherche d'un produit (ex: badmi) puis utiliser l'auto complétion du site pour aller sur les raquettes de badiminton

2. La Naviguation via le Menu
    - Naviguer dans le menu pour aller au menu sport puis chercher le sport Basketball 
    - Naviguer dans le menu pour aller au menu sport puis chercher la catégorie Vélo Cyclisme 

3. La fiche Produit
    - Vérifier l'état du bouton "ajouter au panier"
        - Il doit être désactivité si la taille d'un produit n'est pas séléctionné
        - Il doit être activité si la taille d'un produit est séléctionné
    - Vérifier la présence de la galerie d'image du produit
    - Vérifier la présence des avis produit

4. L'état du Panier
    - Accéder et vérifier le contenu du panier (la taille, le nom ...)
    - Supprimer un élément du panier et vérifier qu'il soit vide

5. Mock
    - Ajout d'un élément au panier et vérifier sa présence
    - Ajout de deux élément au panier et vérifier le prix total

## Installation
Installer les packages : `npm install`

## Démarrage
#### Lancer un feature individuellement
- `npm run` *+ feature*
- Liste de features disponible : 
    - pageAccueil : `npm run pageAccueil`
    - recherche : `npm run recherche`
    - naviguation : `npm run naviguation`
    - ficheProduit : `npm run ficheProduit`
    - etatPanier : `npm run etatPanier`
    - mock : `npm run mock`

#### Lancer tout les features    
- `npx cucumber-js --require-module ts-node/register --require "features/**/*.ts"`

## Difficultés Rencontrées
- Devoir passé la page des cookies apparaissant à chaque lancement de la campagne de test
    - Si la connexion internet n'est pas perofmante ou si les serveurs mettent du temps à charger la page.
    - Cela empêche le passage de la page des cookies et provoque l’arrêt des tests avec une erreur de type *timeout*
- Utilisation d'un Hook Global
    - Au début, chaque feature lancé son propre hook, ce qui déclenché des probèmes vis à vis de plusieurs navigauteur s'ouvrant simultanément créant ainsi des conflit
    - Le hook global à tout nos features à permis de regler ce probème, car il s'occupe de gérer le naviguateur, le contexte et les pages, et de les fermers à la fin de chaque scénario
- Utilisation de tag pour lancer mes tests
    - Lors de la réalisation des tests, afin de voir leur exécution (notttament lors de phase de debug), j'ai été contraint de lancer l'ensemble des tests présent dans mes .features, afin de pouvoir visualiser le test en cours de développement, ce qui rendait la tâche longue
    - En modifiant la configuration du projet, on a pu : 
        - Modifier le fichier package.json, en y ajoutant des raccourcis vers les .features dans la balises "scripts"
        - Créer le fichier cucumber.js, permetttant de centraliser les éléments de configurations (.features, .spec.ts, hook global)

