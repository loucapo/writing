@WRITE-984
Feature: Student Views Grades

  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
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

  Scenario: Student opens instructor feedback with no rubric grade
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    And the text of "student_read_only_feedback.final_grade_comment" should include "Instructor did not select a final score"

  Scenario: Student opens instructor feedback with no final grade
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    And the text of "student_read_only_feedback.rubric_score_comment" should include "Instructor did not select rubric score"

  Scenario: Student sees instructor feedback with a final grade
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "95" in "final_grade_box"
    And I click "final_grade_box_save_enabled"
    And I click "done_button"
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    And the text of "student_read_only_feedback.final_grade_display" should include "95"

  Scenario: Student sees instructor feedback with a rubric grade
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(5)"
    And I click "rubric_row_2(4)"
    And I click "rubric_row_3(3)"
    And I click "rubric_row_4(3)"
    And I click "rubric_row_5(2)"
    And I click "rubric_save_enabled"
    And I click "rubric_save_confirm"
    And I click "done_button"
    Given I launch the activity as a "student"
    And I click "feedback_message_link"
    Then the color of "student_read_only_feedback.rubric_row_1(5)" should be "#acdba2"
    Then the color of "student_read_only_feedback.rubric_row_2(4)" should be "#faf2a9"
    Then the color of "student_read_only_feedback.rubric_row_3(3)" should be "#ffc196"
    Then the color of "student_read_only_feedback.rubric_row_4(3)" should be "#ffc196"
    Then the color of "student_read_only_feedback.rubric_row_5(2)" should be "#ffafaf"
