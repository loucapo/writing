@WRITE-56
Feature: Instructor Can Open the Rubric in Feedback Tool

  Scenario: The Instructor Can Open the Rubric
    Given I open the feedback tool
    When I click the 'header button'
    Then I should see the score rubric

  Scenario: The Instructor Can Close the Rubric
    Given I open the feedback tool
    When I click the 'X button'
    Then the rubric should disappear
