Feature: Registration

  Scenario: Successful user registration
    Given I open the registration page
    When I register a new user
    Then I should be redirected to the contact list page