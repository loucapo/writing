@WRITE-69
Feature: Student Views Instructor Feedback
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft"
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(4)"
    When I click "reflection_questions_modal.save"
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
    And I click "submissions.row_status(1)"
    And Changing to using page "instructor_feedback"
    And I click "instructor_feedback.done_with_review"
    And Changing to using page "instructor_summary"
    And I click "submissions.row_sent(1)"
    Given I launch the activity as a "student"
    Then I wait until there is 1 "feedback_waiting_message" visible
    Then I wait until there is 1 "start_final_paper" visible

  Scenario: Student opens instructor feedback with no end comment
    Given I launch the activity as a "student"
    Then I click "feedback_message_link"
    And Changing to using page "instructor_summary"
    And Changing to using page "instructor_feedback"
    And the text of "feedback.end_comment" should include "No end comment added"

  Scenario: Student opens instructor feedback with end comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_status(1)"
    And Changing to using page "instructor_feedback"
    And I type "Good job" in "instructor_feedback.end_comment"
    And I click "instructor_feedback.add_end_comment"
    Given I launch the activity as a "student"
    Then I click "feedback_message_link"
    And Changing to using page "instructor_feedback"
    And the text of "instructor_feedback.end_comment" should include "Good job"