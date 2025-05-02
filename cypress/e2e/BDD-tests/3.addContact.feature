Feature: Add new contact

  Scenario: Add a new contact and verify data
    Given I am on the contact list page
    When I add a new contact
    Then I should see the new contact in the table