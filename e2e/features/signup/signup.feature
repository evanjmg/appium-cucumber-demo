Feature: Sign up form
  As a user, I'd like to sign up to an app
  Scenario: Fill in sign up form
    Given Wait for element: "first name input"
    And Type "Evan" into "first name input"
    And Type "Gillogley" into "last name input"
    And Type "mycoolemail@gmail.com" into "email input"
    When Click element: "submit button"
    Then Wait for element: "completed screen"


