@FunctionalTest
Feature: Validate Logout Functionality

    Background:
        Given user is on the login page

    @Scenario_1
    Scenario: Verify logout functionality
        When user enters "<Username>" and "<Password>" and clicks on signin button
        Then user should logged successfully
        Then user should logout successfully

        Examples:
            | Username               | Password    |
            | cypress.test@gmail.com | Qwerty12345 |