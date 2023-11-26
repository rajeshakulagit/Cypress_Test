@FunctionalTest
Feature: Validate Login Functionality
  Background:
    Given user is on the login page

  @Scenario_1
  Scenario: Verify login functionality with valid credentials
    When user enters "<Username>" and "<Password>" and clicks on signin button
    Then user should logged successfully
    Then user should checks loggedin cookie set to true

    Examples:
      | Username               | Password    |
      | cypress.test@gmail.com | Qwerty12345 |

Scenario Outline: Verify login functionality with invalid credentials
  When user enters "<Username>" and "<Password>" and clicks on signin button
  Then user should see a "<ErrorMessage>"

  Examples:
    | Username               | Password    | ErrorMessage                   |
    | cypress.test@gmail.com | asdfghjk    | Email and password don't match |
    | test@gmail.com         | Qwerty12345 | Email and password don't match |