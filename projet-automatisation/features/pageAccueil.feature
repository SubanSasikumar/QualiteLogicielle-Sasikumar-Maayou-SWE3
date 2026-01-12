Feature: Page d’accueil Decathlon
    Scenario: Ouvrir la page d’accueil
        Given je suis sur la page d’accueil Decathlon
        Then le logo Decathlon est affiché
        And la barre de recherche est affichée
        And l’icône panier est affichée
        And l’icône connecter est affichée
        And l’icône question est affichée
    
    