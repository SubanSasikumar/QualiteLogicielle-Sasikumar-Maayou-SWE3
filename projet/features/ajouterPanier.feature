Feature: Ajouter à un Panier
    Scenario: Ajouter un produit au panier
        Given je suis sur la fiche d’un produit
        When je selectionne la taille d'un produit
        And j’ajoute le produit au panier
        Then le panier contient 1 article
    
    Scenario: Verifier l'ajout au panier
        Given je suis sur la fiche d’un produit
        When j’ajoute le produit au panier
        Then un message de confirmation apparaît

    Scenario: Accéder au panier
        Given j’ai ajouté un produit au panier
        When j’ouvre le panier
        Then le panier affiche les articles ajoutés
    
    Scenario: Vérifier les informations du produit dans le panier
        Given j’ai ajouté un produit au panier
        When j’ouvre le panier
        Then le produit affiche le bon nom
        And le produit affiche la bonne taille
    
    Scenario: Supprimer un produit du panier
        Given j’ai ajouté un produit au panier
        When je supprime ce produit du panier
        Then le panier ne contient plus d’articles