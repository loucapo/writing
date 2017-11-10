@WRITE-228
Feature: Instructor can add end comment to completed draft
  @dbreset
  Scenario: Setup A Student Draft Submission
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

  Scenario: The Instructor Does Not Add End Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I wait until there is 1 "end_comment_textarea" visible
    And I type "Good job" in "end_comment_textarea"
    Given I launch the activity as an "instructor"
    Then I sleep for 1 seconds
    And I click "student_submissions"
    Then I sleep for 1 seconds
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I wait until there is 1 "end_comment_textarea" visible
    Then the text of "end_comment_textarea" should be ""

  @WRITE-1165
  Scenario: Instructor Leaves Page Without Saving End Comment and Stays
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    Then I sleep for 1 seconds
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "Good Job" in "end_comment_textarea"
    And I click "done_button"
    And I click "stay_draft_page_button"
    Then the text of "end_comment_textarea" should be "Good Job"

  @WRITE-1165
  Scenario: Instructor Leaves Page Without Saving End Comment and Leaves
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    Then I sleep for 1 seconds
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "Good job" in "end_comment_textarea"
    And I click "done_button"
    And I click "leave_draft_page_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then the text of "end_comment_textarea" should be ""

  Scenario: The Instructor Adds an End Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "Good job" in "end_comment_textarea"
    And I click "add_end_comment"
    Then I sleep for 1 seconds
    And I wait until there is 1 "end_comment" visible
    Then the text of "end_comment" should be "Good job"
    Given I launch the activity as an "instructor"
    Then I sleep for 1 seconds
    And I click "student_submissions"
    Then I sleep for 1 seconds
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I wait until there is 1 "end_comment" visible
    Then the text of "end_comment" should be "Good job"

  Scenario: The Instructor Cannot Edit End Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I wait until there is 1 "end_comment" visible
    And I wait until there are 0 "end_comment_textarea" visible
    Then the text of "end_comment" should be "Good job"
    Then I wait until there is 0 "add_end_comment" visible



