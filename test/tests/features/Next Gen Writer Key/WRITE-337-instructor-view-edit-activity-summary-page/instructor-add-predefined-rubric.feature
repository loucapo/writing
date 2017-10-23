@WRITE-30
Feature: Instructor Can Add Pre-Defined Rubric To Activity
  @dbreset
  Scenario: The Instructor Opens the Rubric Selector
    Given I launch the activity as an "instructor"
    And the text of "rubric.dropdown(1)" should be "No Rubric"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown"
    Then I wait until there is 0 "rubric.dropdown_option" visible

  Scenario: The Instructor Selects Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    Then I wait until there is 1 "rubric.preview" visible
    And the text of "rubric.dropdown" should be "Analysis"

  @dbreset
  Scenario: The Instructor Changes Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(1)"
    And the text of "rubric.dropdown" should be "No Rubric"
    Then I wait until there is 0 "rubric.preview" visible
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(3)"
    And the text of "rubric.dropdown" should be "Argument"
    Then I wait until there is 1 "rubric.preview" visible

  Scenario: The Instructor Selects Same Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    And the text of "rubric.dropdown" should be "Analysis"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    And the text of "rubric.dropdown" should be "Analysis"

  Scenario: The Instructor Unselects Rubric
    Given I launch the activity as an "instructor"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(1)"
    Then I wait until there is 0 "rubric.preview" visible
    And the text of "rubric.dropdown" should be "No Rubric"