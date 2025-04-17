Feature: Login

  Scenario: Login - successful login 
    Given visited questions
    When I click on "Log in" button
    And I enter "basicUser" user username
    And I enter "basicUser" user password 
    When I click submit button on login screen
    And I am logged in