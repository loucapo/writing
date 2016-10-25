@WRITE-183
  @only
Feature: Instructor Can View the Dashboard After LTI Launch

  Scenario: The Instructor Launches the Dashboard from LTI
    Given I visit the Moodle Page
    And I log in to the Moodle Site
    When I launch Writing Tools from an LTI host
    Then I see "Welcome to your writing dashboard. Use the button below to begin creating your writing assignments." on the page

  Scenario: The Instructor Wants to Create an Assignment
    Given I log in to the Moodle Page
    When I launch Writing Tools from an LTI host
    Then I see the "Create an Assignment" button

