Feature: Verifier le contenu d'uun Panier

    Scenario: Accéder et vérifier le panier
        Given j’ai ajouté un produit au panier
        When j’ouvre le panier
	    Then le produit affiche le bon nom
        And le produit affiche la bonne taille        
    
    Scenario: Supprimer un produit du panier
        Given j’ai ajouté un produit au panier
        When j’ouvre le panier
        When je supprime ce produit du panier
        Then le panier ne contient plus d’articles