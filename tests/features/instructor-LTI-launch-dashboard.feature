@WRITE-183
Feature: Instructor Can View the Dashboard After LTI Launch


  Scenario: The Instructor Launches the Dashboard from LTI
    Given I launch Writing Tools from an LTI host
    Then I see "Welcome to your writing dashboard. Use the button below to begin creating your writing assignments."

  Scenario: The Instructor Wants to Creat an Assignment
    Given I launch Writing Tools from an LTI host
    Then I see the "Create an Assignment" button

