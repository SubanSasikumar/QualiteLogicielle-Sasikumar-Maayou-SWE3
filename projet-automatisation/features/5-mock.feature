@mock

Feature: Mock

  Scenario: Mock - Ajout d'un element au panier
    Given je suis sur la page d’accueil Decathlon
    And ajoute via un mock un element au panier
    Then je vois que le panier possede article

  Scenario: Mock - Ajout de plusieurs elements au panier
    Given je suis sur la page d’accueil Decathlon
    And ajoute via un mock deux elements au panier
    Then je vois que le panier possede le bon prix total
