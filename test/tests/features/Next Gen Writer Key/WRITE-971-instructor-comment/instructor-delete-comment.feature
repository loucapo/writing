@WRITE-976
Feature: Instructor Delete Comment
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
    Then I wait until there is 1 "student_submitted_draft_text" visible
    When I select text from "Happy" to "Key!" in "student_submitted_draft_text"
    And I click "add_open_comments_button"
    Then I wait until there is 1 "comment_modal.add_comment_textarea" visible
    And I type "Good Job Bro" in "comment_modal.add_comment_textarea"
    And I click "comment_modal.nice_job_comment_button"
    And I click "comment_modal.save_comment"
    And I sleep for 1 seconds

  @WRITE-976
  Scenario: The Instructor Does Not Sees Dot Menu
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 0 "feedback_flag_more_button" visible

  @WRITE-976
  Scenario: The Instructor Sees Dot Menu
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "feedback_flag"
    Then I wait until there is 1 "feedback_flag_more_button" visible

  @WRITE-976
  Scenario: The Instructor Clicks 3 Dot Menu
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "feedback_flag"
    And I click "feedback_flag_more_button"
    Then I wait until there is 1 "comment_delete_option" visible

  @WRITE-976
  Scenario: The Instructor Deletes Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "feedback_flag"
    And I click "feedback_flag_more_button"
    And I click "comment_delete_option"
    Then I wait until there is 0 "feedback_flag"
