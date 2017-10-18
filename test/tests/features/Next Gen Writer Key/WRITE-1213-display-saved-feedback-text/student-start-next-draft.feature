@WRITE-71
Feature: Student Starts Next Draft
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
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.send_review_link(1)"

  Scenario: Student Cannot Start Final Draft without viewing feedback?
    Given I launch the activity as a "student"
    Then I wait until there is 1 "start_draft_disabled"
    Then I wait until there is 1 "start_final_paper_disabled"

  Scenario: Student Sees Start Draft Buttons
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    Then I wait until there is 1 "start_final_paper_disabled" visible
    Given I launch the activity as a "student"
    Then I wait until there is 2 "view_draft_button"
    Then I wait until there is 2 "start_final_paper_enabled" visible

  Scenario: Student Starts Next Draft
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    And I click "start_final_paper"
    Then I wait until there is 1 "draft_editor.draft_area" visible
    And the text of "draft_editor.draft_area" should include "Happy birthday Writer Key!"

  @db=reset
  Scenario: Student Can Start Draft 2 But Not Final Draft
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
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
    And I maximize the browser
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.send_review_link(1)"
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    Then I wait until there is 1 "start_final_paper_disabled" visible
    Then I wait until there is 1 "student_read_only_feedback.start_next_draft" visible

  @db=reset
  Scenario: Student can only view feedback on final draft
    Given I launch the activity as an "instructor"
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
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    Then I wait until there is 0 "next_draft_button" visible
