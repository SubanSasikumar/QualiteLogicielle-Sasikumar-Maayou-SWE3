Feature: Naviguer avec le Menu
    Scenario: Ouvrir le menu Sports
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Sports"
        Then le menu Sports s’affiche
    
    Scenario: Rechercher un sport dans le menu Sports
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Sports"
        And je recherche le sport "Basketball"
        Then le sport "Basketball" apparaît dans les résultats

    Scenario: Accéder à la catégorie Vélo Cyclisme
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Sports"
        And je clique sur "Vélo Cyclisme"
        Then la page "Vélo Cyclisme" est affichée

    Scenario: Accéder au menu Homme
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Homme"
        Then le menu Homme est affiché
    
    Scenario: Accéder aux vêtements homme
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Homme"
        And je clique sur "Vêtements"
        Then la page "Vêtements de sport homme" est affichée