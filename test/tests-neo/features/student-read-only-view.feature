@WRITE-69
Feature: Student Views Instructor Feedback
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    When I click "add_draft"
    When I click "add_reflection_questions" [1]
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_area"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"

  Scenario: Student sees notification of feedback and draft details card
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submission_row_status" [1]
    And I click "done_with_review"
    And I click "submission_row_sent" [1]
    Given I launch the activity as a "student"
    Then I wait until there is 1 "feedback_waiting_message" visible
    Then I wait until there is 1 "start_final_draft_active" visible

  Scenario: Student opens instructor feedback with no end comment
    Given I launch the activity as a "student"
    Then I click "view_feedback"
    And the text of "end_comment" should include "No end comment added"

  Scenario: Student opens instructor feedback with end comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submission_row_status" [1]
    And I type "Good job" in "end_comment"
    And I click "add_end_comment"
    Given I launch the activity as a "student"
    Then I click "view_feedback"
    And the text of "end_comment" should include "Good job"