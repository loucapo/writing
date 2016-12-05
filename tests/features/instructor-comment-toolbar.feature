@WRITE-354
// XXX maybe unnecessary
Feature: Instructor Can View Commenting Tool Bar

  Scenario: The Instructor Views Commenting Tool Bar
    Given I visit the activity page
    When I open the feedback tool
    Then I see a menu of commenting options

  Scenario: Header and Toolbar Do Not Move
    Given I visit the activity page
    When I open the feedback tool
    And I scroll down the screen
    Then The header and toolbar remain fixed
