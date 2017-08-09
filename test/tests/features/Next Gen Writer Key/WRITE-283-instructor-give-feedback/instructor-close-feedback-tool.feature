@WRITE-1137
Feature: Instructor Close Feedback Tool
  @db=reset
  Scenario: Setup Student Draft Submission
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

  Scenario: The Instructor Clicks on Back Button
    Given I launch the activity as an "instructor"
    And I maximize the browser
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "back_button"
    And Changing to using page "instructor_summary"
    And the text of "submissions.row_status(1)" should be "Return to Review"

  Scenario: The Instructor Clicks on Done
    Given I launch the activity as an "instructor"
    And I maximize the browser
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And the text of "submissions.row_status(1)" should be "Return to Review"