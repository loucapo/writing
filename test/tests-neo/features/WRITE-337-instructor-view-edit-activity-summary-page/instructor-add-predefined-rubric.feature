@WRITE-30
Feature: Instructor Can Add Pre-Defined Rubric To Activity

  @pending=WRITE-871
  Scenario: The Instructor Opens the Rubric Selector
    Given I launch the activity as an "instructor"
    When I click "rubric_dropdown"
    And the text of "rubric_dropdown" [1] should be "No Rubric"
    Then I wait until there is 1 "rubric_dropdown_option" visible
    And I click on the page
    Then I wait until there is 0 "rubric_dropdown_option" visible

  Scenario: The Instructor Selects Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [2]
    Then I wait until there is 1 "rubric_preview" visible
    And the text of "rubric_dropdown" should be "Analysis"

  @db=reset
  Scenario: The Instructor Changes Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [1]
    And the text of "rubric_dropdown" should be "No Rubric"
    Then I wait until there is 0 "rubric_preview" visible
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [3]
    And the text of "rubric_dropdown" should be "Argument"
    Then I wait until there is 1 "rubric_preview" visible

  Scenario: The Instructor Selects Same Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [2]
    And the text of "rubric_dropdown" should be "Analysis"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [2]
    And the text of "rubric_dropdown" should be "Analysis"

  Scenario: The Instructor Unselects Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [2]
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [1]
    Then I wait until there is 0 "rubric_preview" visible
    And the text of "rubric_dropdown" should be "No Rubric"