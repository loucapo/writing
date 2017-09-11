@WRITE-68
Feature: Student Navigate Draft Screens
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    And I click "rubric.dropdown"
    And I click "rubric.dropdown_option(2)"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: Student Sees View Previous Draft Link
    Given I launch the activity as a "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_editor.view_previous_draft_link" visible

  Scenario: Student Leaves Work Without Saving
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.view_previous_draft_link"
    Then I wait until there is 1 "draft_editor.leave_draft_page_button" visible
    And I click "draft_editor.leave_draft_page_button"
    Then I wait until there are 1 "comment"

  Scenario: Student Stays On Draft Page Without Saving
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.view_previous_draft_link"
    And I click "draft_editor.stay_draft_page_button"
    Then I wait until there are 1 "draft_editor.view_previous_draft_link"

  Scenario: Student Saves Work And Navigates To Precious Draft
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.draft_save_button_enabled"
    And I click "draft_editor.view_previous_draft_link"
    Then I wait until there are 1 "comment"
    Then the text of "draft_editor.start_draft" should be "Return to Final Draft"
    