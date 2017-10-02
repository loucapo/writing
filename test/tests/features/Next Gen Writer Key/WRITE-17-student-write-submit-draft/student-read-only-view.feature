@WRITE-69
Feature: Student Views Instructor Feedback

  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(7)"
    When I click "reflection_questions_modal.save"
    When I click "draft(2).draft_add_instructions"
    And I type "Write about cookies" in "draft(2).draft_instructions_textarea"
    And I click "draft(2).save_draft_instructions"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: Student sees notification of feedback and draft details card
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.send_review_link(1)"
    Given I launch the activity as a "student"
    Then I wait until there is 1 "feedback_waiting_message" visible
    Then I wait until there is 1 "start_final_paper" visible
    #And Changing to using page "instructor_summary"
    #And the text of "draft(2).draft_instructions" should include "Write about cookies"

  Scenario: Student opens instructor feedback with no end comment
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    And the text of "student_read_only_feedback.instructor_end_comment" should include "No end comment added"

  Scenario: Student opens instructor feedback with end comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "Good job" in "end_comment_textarea"
    And I click "add_end_comment"
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    And the text of "student_read_only_feedback.instructor_end_comment" should include "Good job"
