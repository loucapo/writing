@WRITE-819
@WRITE-942
Feature: Student Launches Draft
  @dbreset
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"

  #Test shows user effectively doesn't change page
  @WRITE-1451
  Scenario: Student Sees Start Draft Elements
    Given I launch the activity as an "student"
    Then I wait until there is 3 "start_draft" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    And the text of "start_draft_disabled" should be "Start Final Paper"
    And the text of "student_draft_note" should be "You will be able to view and start this draft once you've received and viewed feedback on Draft 1"

  #Test shows user effectively doesn't change page
  Scenario: Student Launches Draft 1
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_editor.start_reflection_button_disabled" visible
    And the text of "draft_editor.start_reflection_button_disabled" should be "Done, Start Reflection"

  Scenario: Student Types in the draft
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_editor.start_reflection_button_disabled" visible
    And I type "happy" in "draft_editor.draft_area"
    Then I wait until there is 1 "draft_editor.start_reflection_button_enabled" visible

  @pending
  # webdriver is not seeing the correct state in automation but in manual testing works
  Scenario: Student Types in the draft and Deletes
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I delete all text in "draft_editor.draft_area"
    Then I wait until there is 1 "draft_editor.start_reflection_button_disabled" visible
