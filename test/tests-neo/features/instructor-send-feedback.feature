@WRITE-968
Feature: Instructor Sends Student Feedback
  @db=reset
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"

  Scenario: The Instructor Sends Feedback
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submission_row_status" [1]
    And I click "done_with_review"
    Then I wait until there is 1 "submission_row_sent" visible
    And I click "submission_row_sent" [1]
    And the text of "submission_row_sent" [1] should include "Review sent "