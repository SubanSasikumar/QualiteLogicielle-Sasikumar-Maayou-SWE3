@ficheProduit

Feature: Fiche Produit   
    Scenario: Vérifier l'etat du bouton Ajouter au panier 
        Given je suis sur la page d’accueil Decathlon
        When je recherche le produit "t-shirt basketball nba celtics"
        And je sélectionne le premier produit de la liste
        Then le bouton "Ajouter au panier" est désactivé
        When je sélectionne la taille "XS"
        And j’ajoute le produit au panier
        Then le panier contient 1 article

    
    Scenario: Vérifier la galerie d’images
        Given je suis sur la page d’accueil Decathlon
        When je recherche le produit "t-shirt basketball nba celtics"
        And je sélectionne le premier produit de la liste
        When j’affiche toutes les images du produit
        Then plusieurs images du produit sont visibles

    Scenario: Accéder aux avis du produit
        Given je suis sur la page d’accueil Decathlon
        When je recherche le produit "t-shirt basketball nba celtics"
        And je sélectionne le premier produit de la liste
        When je clique sur "Voir les avis"
        Then la liste des avis apparaît
    
    
    
    
