@WRITE-30
  @only
Feature: Instructor Can Add Pre-Defined Rubric To Activity

  Scenario: The Instructor Sees Select Rubric Dropdown
    Given I visit the SLS create activity page
    Then I see the 'rubric_selection'
@pending
    #bug on the last step
  Scenario: The Instructor Opens the Rubric Selector
    Given I visit the SLS create activity page
    When I click a 'rubric_selection'
    And I see 'No Rubric' is the '0' element
    And I see the 'rubric_selection'
    And I click on the page
    Then The 'rubric_selection_content' does not exist

  Scenario: The Instructor Selects Rubric
    Given I visit the SLS create activity page
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    Then I see the 'rubric_preview'
    When I click a 'rubric_selection'
    Then I see 'Analysis' is selected

  Scenario: The Instructor Changes Rubric
    Given I visit the SLS create activity page
    When I click a 'rubric_selection'
    When I click a 'no_rubric_option'
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    Then I see the 'rubric_preview'
    Then I see 'Analysis' is selected

  Scenario: The Instructor Selects Same Rubric
    Given I visit the SLS create activity page
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    Then I see 'Analysis' is selected
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    Then I see 'Analysis' is selected
@only
  Scenario: The Instructor Unselects Rubric
    Given I visit the SLS create activity page
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    When I click a 'rubric_selection'
    When I click a 'no_rubric_option'
    Then There is no rubric to preview
    And I see 'No Rubric' is selected