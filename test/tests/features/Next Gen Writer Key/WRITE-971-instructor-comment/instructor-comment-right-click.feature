@WRITE-1210
Feature: Instructor Can Right Click To Add Comment
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

  @WRITE-1210
  Scenario: The Instructor Can Highlight Text And Right Click See Comment Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Happy" to "Key!" in "student_submitted_draft_text"
    When I right click "student_submitted_draft_text"
    Then I wait until there is 1 "right_click_add_comment_button" visible
    Then I wait until there is 1 "right_click_cancel_comment_button" visible

  @WRITE-1210
  Scenario: The Instructor Opens Modal From Comment Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I sleep for 2 seconds
    When I select text from "Happy" to "Key!" in "student_submitted_draft_text"
    When I right click "student_submitted_draft_text"
    And I click "right_click_add_comment_button"
    Then I wait until there is 1 "comment_modal.good_job_comment_button" visible

  @WRITE-1210
  Scenario: The Instructor Can Cancel Right Click Menu
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Happy" to "Key!" in "student_submitted_draft_text"
    When I right click "student_submitted_draft_text"
    And I click "right_click_cancel_comment_button"
    Then I wait until there is 0 "comment_modal.good_job_comment_button" visible
    Then I wait until there is 0 "right_click_add_comment_button" visible
    Then I wait until there is 0 "add_comment_button" visible

  @WRITE-1210
  Scenario: Right Click With No Text Highlighted Should Not Bring Up Menu
    Given I launch the activity as an "instructor"
    Then I sleep for 2 seconds
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I right click "student_submitted_draft_text"
    Then I wait until there is 0 "comment_modal.good_job_comment_button" visible
    Then I wait until there is 0 "right_click_add_comment_button" visible

