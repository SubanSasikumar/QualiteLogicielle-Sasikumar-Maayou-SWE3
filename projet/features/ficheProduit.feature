Feature: Fiche Produit
    Scenario: Vérifier la galerie d’images
        Given je suis sur la fiche d’un produit
        Then plusieurs images du produit sont visibles
    
    Scenario: Vérifier que le bouton Ajouter au panier est désactivé sans taille
        Given je suis sur la fiche d’un produit
        Then le bouton "Ajouter au panier" est désactivé
    
    Scenario: Sélectionner une taille
        Given je suis sur la fiche d’un produit
        When je sélectionne la taille "XS"
        Then la taille "XS" est sélectionnée
    
    Scenario: Accéder aux avis du produit
        Given je suis sur la fiche d’un produit
        When je clique sur "Voir les avis"
        Then la liste des avis apparaît
    
    Scenario: Ajouter un produit au panier après sélection d’une taille
        Given je suis sur la fiche d’un produit
        When je sélectionne la taille "M"
        And j’ajoute le produit au panier
        Then le panier contient 1 article