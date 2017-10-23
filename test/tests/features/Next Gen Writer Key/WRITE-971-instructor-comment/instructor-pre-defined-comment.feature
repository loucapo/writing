Feature: Instructor Can Add Pre-Defined Comment
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

  @WRITE-1199
  Scenario: The Instructor Selects Needs Work
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "student_submitted_draft_text" text
    And I click "add_open_comments_button"
    And I click "comment_modal.needs_work_comment_button"
    Then the text of "comment_modal.feedback_preset_text_preview" should be "Needs work"
    Then the color of "comment_modal.needs_work_comment_button" should be "#00758e"

  @WRITE-1199
  Scenario: Disabled Submit Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I sleep for 2 seconds
    When I select "student_submitted_draft_text" text
    And I click "add_open_comments_button"
    Then I wait until there is 1 "comment_modal.save_comment_disabled" visible

  @WRITE-1199
  Scenario: The Instructor Selects Nice Job
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "student_submitted_draft_text" text
    And I click "add_open_comments_button"
    And I click "comment_modal.nice_job_comment_button"
    Then the text of "comment_modal.feedback_preset_text_preview" should be "Nice job!"
    And the color of "comment_modal.nice_job_comment_button" should be "#00758e"
    Then I wait until there is 1 "comment_modal.save_comment" visible

  @WRITE-1199
  Scenario: The Instructor Selects Needs Extensive Work
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I sleep for 2 seconds    
    When I select "student_submitted_draft_text" text
    And I click "add_open_comments_button"
    And I click "comment_modal.needs_extensive_work_comment_button"
    Then the text of "comment_modal.feedback_preset_text_preview" should be "Needs extensive revision"
    And the color of "comment_modal.needs_extensive_work_comment_button" should be "#00758e"
    And I wait until there is 1 "comment_modal.save_comment" visible
    And I click "comment_modal.save_comment"
    And I wait until there is 1 "feedback_flag" visible
    And I click "feedback_flag"
    Then the text of "feedback_flag_content" should be "Needs extensive revision"

  @pending
  @WRITE-1212
  Scenario: The Instructor Save Comment Error
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I sleep for 1 seconds
    When I select "Happy"
    And I click "add_open_comments_button"
    And I click "save_comment"
     # I somehow blow up the save process
    Then I wait until there is 1 "save_comment_error" visible
