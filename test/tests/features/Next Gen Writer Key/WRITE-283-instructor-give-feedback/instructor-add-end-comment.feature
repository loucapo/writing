@WRITE-228
@pending
Feature: Instructor can add end comment to completed draft

  @db=reset
  Scenario: Setup A Student Draft Submission
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

  Scenario: The Instructor Does Not Add End Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submission_row_start" [1]
    And I wait until there is 1 "end_comment_textarea" visible
    And I type "Good job" in "end_comment_textarea"
    And I reload the page
    And I wait until there is 1 "end_comment_textarea" visible
    Then the text of "end_comment_textarea" should be ""

  Scenario: The Instructor Adds an End Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submission_row_start" [1]
    And I wait until there is 1 "end_comment_textarea" visible
    And I type "Good job" in "end_comment_textarea"
    And I click "add_end_comment"
    Then I sleep for 1 seconds
    And I wait until there is 1 "end_comment" visible
    Then the text of "end_comment" should be "Good job"
    And I reload the page
    And I wait until there is 1 "end_comment" visible
    Then the text of "end_comment" should be "Good job"

  Scenario: The Instructor Cannot Edit End Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submission_row_start" [1]
    And I wait until there is 1 "end_comment" visible
    And I wait until there are 0 "end_comment_textarea" visible
    Then the text of "end_comment" should be "Good job"
    Then I wait until there is 0 "add_end_comment" visible



