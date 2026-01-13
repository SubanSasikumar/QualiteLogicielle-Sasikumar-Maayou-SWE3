Feature: Recherche globale
    Scenario: Rechercher un produit dans la barre de recherche et l'effacer 
        Given je suis sur la page d’accueil Decathlon
        When je recherche "aqwxszedc" dans la barre de recherche
        Then aucun produit n’est affiché
        When je clique sur la croix pour effacer la recherche
        Then la barre de recherche est vide
        When je recherche "maillot" dans la barre de recherche
        Then des résultats pour "maillot" sont affichés
    