Feature: Instructor Can Add Pre-Defined Rubric To Activity
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


  @WRITE-1208
  Scenario: The Instructor Can Highlight Text And See Comment Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "div.public-DraftEditor-content" text
    #And I sleep for 1 seconds
    Then I wait until there is 1 "add_comment_button" visible

  @WRITE-1209
  Scenario: The Instructor Opens Modal From Comment Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select "div.public-DraftEditor-content" text
    And I click "add_comment_button"
    Then I wait until there is 1 "comment_modal.good_job_comment_button" visible
    Then I wait until there is 1 "comment_modal.add_comment_textarea" visible

  @WRITE-1212
  Scenario: The Instructor Saves Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I sleep for 1 seconds
    When I select "Happy"
    And I click "add_comment_button"
    Then I wait until there is 1 "add_comment_modal" visible
    And I click "save_comment"
    Then I wait until there is 1 "instructor_draft_comment" visible

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
