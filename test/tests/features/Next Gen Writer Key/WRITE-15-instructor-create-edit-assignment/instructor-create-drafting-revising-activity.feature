@WRITE-438
Feature: Instructor Creates Drafting Revising Activity
  @db=reset
  Scenario: The Instructor Creates Drafting Revising Activity
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible

  Scenario: Green Confirmation Message Exists After Creating Assignment
    Given I create a new activity as an "instructor"
    Then I wait until there are 1 "created_activity_alert" visible
    And the color of "confirmation_message" should be "#daf4d4"

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
    Then I wait until there are 1 "activity_prompt.description" visible
    And the text of "activity_prompt.description" should include "Click to add prompt"
    Then I wait until there are 1 "rubric.dropdown" visible
    And the text of "rubric.dropdown" should include "No Rubric"
    Then I wait until there are 1 "draft_card"
