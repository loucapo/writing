@WRITE-39
@db=reset
Feature: Student Saves Work
  Scenario: Student Can Not Save Empty Draft
    Given I launch the activity as a "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_editor.draft_save_button_disabled" visible

  Scenario: Student Has Enabled Save Button
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    Then I wait until there is 1 "draft_editor.draft_save_button_enabled" visible

  Scenario: Student Clicks Save Button (Successful Save)
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.draft_save_button_enabled"
    #Then I wait until there is 1 "draft_save_confirmation" visible
    Then I wait until there is 1 "draft_editor.saved_draft_alert" visible
    Given I launch the activity as a "student"
    When I click "return_to_final_draft"
    Then the text of "draft_editor.draft_area" should be "happy"

  #Dunno how to blow this up yet
  @pending
  Scenario: Student Clicks Save Button (Error State Returned)
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "draft_save_button_enabled"
    Then Student sees 'save_error'

  Scenario: Student Sees Return To Draft Button
    Given I launch the activity as a "student"
    Then I sleep for 1 seconds
    Then the text of "return_to_final_draft" should be "Return to Final Paper"

  Scenario: Instructor Sets Up Reflection Questions
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(7)"
    When I click "reflection_questions_modal.save"

  Scenario: Student Has Enabled Save Button in Reflection Page
    Given I launch the activity as a "student"
    When I click "return_to_final_draft"
    And I type "very " in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    Then I wait until there is 1 "student_reflection_questions.reflection_button_submit_disabled" visible

  Scenario: Student Saves in Reflection Page
    Given I launch the activity as a "student"
    When I click "return_to_final_draft"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.reflection_button_submit_enabled(1)"
    And I click "student_reflection_questions.draft_submit_confirm"
    Given I launch the activity as a "student"
    Then I wait until there is 1 "draft_submitted_date" visible

  Scenario: Student Returns to Reflection Page and Sees Saved Work
    Given I launch the activity as a "student"
    When I click "view_final_draft_button"
    Then the text of "student_read_only.submitted_draft_text" should be "very happy"
    Then the text of "student_read_only.submitted_reflection_question_textarea(1)" should include "yay"
