Feature: Instructor Can Add Pre-Defined Comment
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

  @WRITE-1199
  Scenario: The Instructor Selects Needs Work
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "student_submitted_draft_text" text
    And I click "add_comment_button"
    And I click "comment_modal.needs_work_comment_button"
    And the text of "comment_modal.add_comment_tag_text" should be "Needs Work"

  @WRITE-1199
  Scenario: Disabled Submit Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "student_submitted_draft_text" text
    And I click "add_comment_button"
    Then I wait until there is 1 "comment_modal.save_comment_disabled" visible

  @WRITE-1199
  Scenario: The Instructor Selects Good Job
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "student_submitted_draft_text" text
    And I click "add_comment_button"
    And I click "comment_modal.good_job_comment_button"
    And the text of "comment_modal.add_comment_tag_text" should be "Good Job"
    Then I wait until there is 1 "comment_modal.save_comment" visible

  @WRITE-1199
  Scenario: The Instructor Selects Needs Extensive Work
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "student_submitted_draft_text" text
    And I click "add_comment_button"
    And I click "comment_modal.needs_extensive_work_comment_button"
    And the text of "comment_modal.add_comment_tag_text" should be "Needs Extensive Revision"
    Then I wait until there is 1 "comment_modal.save_comment" visible

  @pending
  @WRITE-1212
  Scenario: The Instructor Save Comment Error
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I sleep for 1 seconds
    When I select "Happy"
    And I click "add_comment_button"
    And I click "save_comment"
     # I somehow blow up the save process
    Then I wait until there is 1 "save_comment_error" visible
