@FunctionalTest
Feature: Validate registration journey

    Background:
        Given user is on the login page
        When user clicks on login register link to navigate on registration page

    @Scenario_1
    Scenario Outline: Verify registration journey with valid inputs
        Then user enters "<Emailid>", "<FirstName>", "<LastName>", "<YearOfBirth>" and "<Password>"
        Then user clicks you would like to receive offers check box
        Then user open and close opt-out policy
        Then user clicks on create my account button
        Then user is navigated to thank you page

        Examples:
            | Emailid           | FirstName | LastName | YearOfBirth | Password      |
            | welcome@gmail.com | welcome   | testone  | 1975        | Welcome@12345 |

@Scenario_2
Scenario Outline: Verify registration journey with ivalid email
    Then user should enter invalid email "<EmailId>"
    Then user should see "<ErrorMessage>" for invalid "EmailId"

    Examples:
        | EmailId           | ErrorMessage                       |
        | asdf1234gmail.com | Please enter a valid email address |

@Scenario_3
Scenario Outline: Verify registration journey with invalid first and last names
    Then user should enter special characters in "<FirstName>" and "<LastName>"
    Then user should see "<ErrorMessage>" for invalid "FirstName and LastName"

    Examples:
        | FirstName | LastName | ErrorMessage                      |
        | asdf$%^&  | asdf£$%^ | Special characters aren’t allowed |

@Scenario_4
Scenario Outline: Verify registration journey with ivalid password
    Then user enters invalid password "<Password>"
    Then user should see "<ErrorMessage>" for invalid "Password"

    Examples:
        | Password    | ErrorMessage                                                                          |
        | asdfqwerrty | Must be at least 6 characters, include an upper and lower case character and a number |
        | ASDFGHJKL   | Must be at least 6 characters, include an upper and lower case character and a number |
        | 12345678    | Must be at least 6 characters, include an upper and lower case character and a number |
        | Asdf1       | Must be at least 6 characters, include an upper and lower case character and a number |

@Scenario_5
Scenario Outline: Verify registration journey with an existing email
    Then user should enter existing emailid "<ExistingEmailId>"
    Then user should see "<ErrorMessage>" for invalid "ExistingEmailId"
    Examples:
        | ExistingEmailId        | ErrorMessage                                                       |
        | cypress.test@gmail.com | This account already exists. Please enter your password to log in. |