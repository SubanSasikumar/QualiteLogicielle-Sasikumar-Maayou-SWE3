@naviguation

Feature: Naviguer avec le Menu
    Scenario: Rechercher un sport depuis le menu Sports
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Sports"
        Then le menu Sports s’affiche
	    When je recherche le sport "Basketball"
        Then le sport "Basketball" apparaît dans les résultats
        
    Scenario: Accéder à la catégorie Vélo Cyclisme
        Given je suis sur la page d’accueil Decathlon
        When j’ouvre le menu "Sports"
        And je selectionne "Vélo Cyclisme"
        Then la page "Vélo Cyclisme" est affichée
