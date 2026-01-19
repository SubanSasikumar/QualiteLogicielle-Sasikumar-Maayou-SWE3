@recherche
 
Feature: Recherche globale
    Scenario: Rechercher un produit dans la barre de recherche et l'effacer 
        Given je suis sur la page d’accueil Decathlon
        When je recherche "aqwxszedc" dans la barre de recherche
        Then aucun produit n’est affiché
        When je clique sur la croix pour effacer la recherche
        Then la barre de recherche est vide
        When je recherche "maillot" dans la barre de recherche
        Then des résultats pour "maillot" sont affichés

    Scenario: Rechercher un produit via une suggestion
        Given je suis sur la page d’accueil Decathlon
        When je commence la recherche "badmi" dans la barre de recherche
        Then des suggestions de recherches sont affichées
        When je clique sur la suggestion "Raquettes | Badminton"
        Then des résultats pour "Raquettes de Badminton" sont affichés

