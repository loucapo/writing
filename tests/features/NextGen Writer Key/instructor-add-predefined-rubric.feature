@WRITE-30
Feature: Instructor Can Add Pre-Defined Rubric To Activity
  Scenario: The Instructor Sees Select Rubric Dropdown
    Given I visit the SLS create activity page
    Then I see the 'final_rubric'

  Scenario: The Instructor Opens the Rubric Selector
    Given I visit the SLS create activity page
    When I click a 'final_rubric'
    And I see 'No Rubric' is the top element
    And I see the 'rubric_selection'
    And I click on the page
    Then The dropdown is closed

  Scenario: The Instructor Selects Rubric
    Given I visit the SLS create activity page
    When I click a 'final_rubric'
    When I click a 'rubric_option_1'
    Then I see the 'rubric_preview_1'
    And I see the 'rubric_option_1' (is visible?)

  Scenario: The Instructor Changes Rubric
    Given I visit the SLS create activity page
    When I click a 'final_rubric'
    When I click a 'rubric_option_1'
    When I click a 'final_rubric'
    When I click a 'rubric_option_2'
    Then I see the 'rubric_preview_2'
    And I see the 'rubric_option_2' (is visible?)

  Scenario: The Instructor Selects Same Rubric
    Given I visit the SLS create activity page
    When I click a 'final_rubric'
    When I click a 'rubric_option_1'
    When I click a 'final_rubric'
    When I click a 'rubric_option_1'
    Then I see the 'rubric_preview_1'
    And I see the 'rubric_option_1' (is visible?)

  Scenario: The Instructor Unselects Rubric
    Given I visit the SLS create activity page
    When I click a 'final_rubric'
    When I click a 'rubric_option_1'
    When I click a 'final_rubric'
    When I click a 'no_rubric'
    Then I do not see the 'rubric_preview_1'
    And I see the 'no_rubric' (is visible?)