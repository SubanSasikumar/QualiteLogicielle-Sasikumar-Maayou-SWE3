Feature: Recherche globale
    Scenario: Rechercher un produit dans la barre de recherche
        Given je suis sur la page d’accueil Decathlon
        When je recherche "maillot" dans la barre de recherche
        Then des résultats pour "maillot" sont affichés
    
    Scenario: Rechercher un sport dans la barre de recherche
        Given je suis sur la page d’accueil Decathlon
        When je recherche "football" dans la barre de recherche
        Then des résultats pour "football" sont affichés

    Scenario: Rechercher un produit inexistant
        Given je suis sur la page d’accueil Decathlon
        When je recherche "aqwxszedc" dans la barre de recherche
        Then aucun produit n’est affiché
        And des susgestions pour trouver d'autres articles sont proposés 
    
    Scenario: Effacer la recherche avec la croix de la barre de recherche
        Given je suis sur la page d’accueil Decathlon
        When je recherche "doudoune" dans la barre de recherche
        And je clique sur la croix pour effacer la recherche
        Then la barre de recherche est vide