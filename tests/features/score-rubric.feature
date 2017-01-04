@WRITE-56
Feature: Instructor Can Open the Rubric in Feedback Tool

  Scenario: The Instructor Can Open the Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'score_rubric_button'
    Then I should see the score rubric

  Scenario: The Instructor Can Close the Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'score_rubric_button'
    And I click the 'X button'
    Then The rubric should disappear
