Feature: Login

  Scenario: Login - successful login 
    Given I visit page
    When I log in with the user's credentials
    Then I should see the contact list page