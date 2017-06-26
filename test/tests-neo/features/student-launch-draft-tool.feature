@WRITE-819
@WRITE-942

Feature: Student Launches Draft
  @db=reset
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"

  #Test shows user effectively doesn't change page
  Scenario: Student Sees Start Draft Elements
    Given I launch the activity as an "student"
    Then I wait until there is 2 "start_draft" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    And the text of "start_draft_disabled" should be "Start Final Paper"

  #Test shows user effectively doesn't change page
  Scenario: Student Launches Draft 1
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "start_reflection_button_disabled" visible
    And the text of "start_reflection_button_disabled" should be "Done, Start Reflection"

  Scenario: Student Types in the draft
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "start_reflection_button_disabled" visible
    And I type "happy" in "draft_area"
    Then I wait until there is 1 "start_reflection_button_enabled" visible
@only
  Scenario: Student Types in the draft and Deletes
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I select all content on the draft editor
    And I press the delete key in the draft editor
    Then I wait until there is 1 "start_reflection_button_disabled" visible
