@intermittent-fail
Feature: Instructor Creates Drafting Revising Activity
  @db=reset
  @WRITE-438
  Scenario: The Instructor Creates Drafting Revising Activity
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible

  @WRITE-438
  Scenario: Green Confirmation Message Exists After Creating Assignment
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And the color of "confirmation_message" should be "#daf4d4"

  @WRITE-438
  Scenario: Green Confirmation Message Exists After Creating Assignment Persists
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And I reload the page
    Then I wait until there are 1 "created_activity_alert" visible

  @pending
  @WRITE-438
  Scenario: Green Confirmation Message Exists After Creating Assignment Until Closed
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And "created_activity_alert" should be "#daf4d4"
    And I close the green confirmation message
    And I reload the page
    Then I wait until there are 0 "created_activity_alert" visible

  @WRITE-438
  Scenario: Activity Fields Created
    Given I create a new activity as an "instructor"
    And I maximize the browser
    Then I wait until there are 1 "created_activity_alert" visible
    Then I wait until there are 1 "activity_title" visible
    And the text of "activity_title" should include "Untitled Writing Activity"
    Then I wait until there are 1 "activity_prompt.description" visible
    And the text of "activity_prompt.description" should include "Click to add prompt"
    Then I wait until there are 1 "rubric.dropdown" visible
    And the text of "rubric.dropdown" should include "No Rubric"
    Then I wait until there are 1 "draft_card"

  @WRITE-545
  @db=reset
  @pending
  Scenario: Instructor Collapses ML Cards
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    And I click "activity_prompt.edit"
    And I type "hello world" in "activity_prompt.edit_area"
    And I click "activity_prompt.save"
    And I click "Draft 1 card"
    And I click "Final Draft Card"
    And I click "Rubric card"
    And I click "Assignment Prompt card"
    Then I wait until there are 0 "draft_instructions"
    Then I wait until there are 0 "final_draft_message"
    Then I wait until there are 0 "assignment_prompt_text"
    Then I wait until there are 0 "rubric_preview"
