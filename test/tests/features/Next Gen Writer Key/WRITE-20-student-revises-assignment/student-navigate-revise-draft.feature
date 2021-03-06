@WRITE-68
@WRITE-1451
Feature: Student Navigate Draft Screens
  @dbreset
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
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.send_review_link(1)"

  Scenario: Student Sees View Previous Draft Link
    Given I launch the activity as a "student"
    And the text of "student_draft_note" should be "You will be able to view and start this draft once you've received and viewed feedback on Draft 1"
    And I click "view_feedback_button"
    Then I wait until there is 1 "start_final_paper" visible
    Then I sleep for 2 seconds
    And I click "start_final_paper"
    Then I wait until there is 1 "draft_editor.view_previous_draft_link" visible

  Scenario: Student Sees Correct UX for Starting Next Draft After Viewing Feedback
    Given I launch the activity as a "student"
    Then I wait until there are 0 "student_draft_note"
    Then I wait until there is 2 "start_final_paper" visible

  Scenario: Student Leaves Work Without Saving
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    When I click "start_final_paper"
    And I type "this is draft 2" in "draft_editor.draft_area"
    And I click "draft_editor.view_previous_draft_link"
    Then I wait until there is 1 "draft_editor.leave_draft_page_button" visible
    And I click "draft_editor.leave_draft_page_button"
    Then I wait until there are 1 "student_read_only_feedback.instructor_end_comment"

  Scenario: Student Stays On Draft Page Without Saving
    Given I launch the activity as a "student"
    When I click "start_final_paper"
    And I type "this is draft 2" in "draft_editor.draft_area"
    And I click "draft_editor.view_previous_draft_link"
    And I click "draft_editor.stay_draft_page_button"
    Then I wait until there are 1 "draft_editor.view_previous_draft_link"

  Scenario: Student Saves Work And Navigates To Previous Draft
    Given I launch the activity as a "student"
    When I click "start_final_paper"
    And I type "this is draft 2" in "draft_editor.draft_area"
    And I click "draft_editor.draft_save_button_enabled"
    And I click "draft_editor.view_previous_draft_link"
    Then I wait until there are 1 "student_read_only_feedback.instructor_end_comment"
    Then the text of "student_read_only_feedback.start_next_draft" should be "Return to Final Paper"
    And the text of "student_read_only_feedback.submitted_draft_paper" should be "Happy birthday Writer Key!"


