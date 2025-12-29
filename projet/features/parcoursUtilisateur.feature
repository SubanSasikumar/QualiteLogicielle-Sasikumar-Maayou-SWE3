Feature: Parcours Utilisatieur
    Scenario: Parcours Utilisateur de page d'accueil à l'ajout au panier
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Homme"
        Then la page "Vêtements homme" est affichée

        When je clique sur "Polaires"
        Then la liste des produits "Polaires homme" est affichée

        When je clique sur le premier produit affiché
        Then la fiche du produit est affichée

        When je sélectionne la taille "M"
        And j’ajoute le produit au panier
        Then le panier contient 1 article

        When j’ouvre le panier
        Then le produit est affiché dans le panier
        And la bonne taille est affichée
    
    