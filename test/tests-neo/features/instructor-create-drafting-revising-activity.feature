@WRITE-438
Feature: Instructor Creates Drafting Revising Activity
  Scenario: The Instructor Creates Drafting Revising Activity
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible

  Scenario: Green Confirmation Message Exists After Creating Assignment
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And "confirmation_message" color should be "#daf4d4"

  Scenario: Green Confirmation Message Exists After Creating Assignment Persists
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And I reload the page
    Then I wait until there are 1 "created_activity_alert" visible

@pending
  Scenario: Green Confirmation Message Exists After Creating Assignment Until Closed
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And "created_activity_alert" should be "#daf4d4"
    And I close the green confirmation message
    And I reload the page
    Then I wait until there are 0 "created_activity_alert" visible

  Scenario: Activity Fields Created
    Given I create a new activity as an "instructor"
    And I maximize the browser
    Then I wait until there are 1 "created_activity_alert" visible
    Then I wait until there are 1 "activity_title" visible
    And the text of "activity_title" should include "Untitled Writing Activity"
    Then I wait until there are 1 "activity_prompt_description" visible
    And the text of "activity_prompt_description" should include "Click to add prompt"
    Then I wait until there are 1 "rubric_dropdown" visible
    And the text of "rubric_dropdown" should include "No Rubric"
    Then I wait until there are 0 "draft_card" visible
