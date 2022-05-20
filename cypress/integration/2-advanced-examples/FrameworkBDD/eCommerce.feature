Feature: End to End eCommerce Validation

    Application Regression 

    Scenario: E-Commerce Productrs delivery
    Given I open E-commerce Page
    When I add items to cart 
    And Validate the total price 
    Then select the country and submit verify Success message

    Scenario: Filling the form to shop
    Given I open E-commerce Page
    When I will fill the form details
    |name  | gender |
    |Popsie| Male   |
    Then Validate the forms behaviour 
    And Select the Shop Page

