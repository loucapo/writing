@WRITE-331
Feature: Instructor Views Draft Submissions Switcher

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

  Scenario: The Instructor Clicks on Dropdown
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "draft_select_dropdown_submission_grid"
    Then I wait until there is 1 "dropdown_drafts_submission_grid" visible
    Then I wait until there is 1 "dropdown_drafts_submission_grid_selected" visible

  Scenario: The Instructor Changes Draft
    Given I launch the activity as an "instructor"
    When I maximize the browser
    And I click "add_draft_button"
    And I click "student_submissions"
    Then I wait until there is 1 "no_submissions_alert" visible
    Then the text of "no_submissions_alert" should be "No students have started this assignment"
    And I click "draft_select_dropdown_submission_grid"
    Then I wait until there is 2 "dropdown_drafts_submission_grid" visible
    Then I wait until there is 1 "dropdown_drafts_submission_grid_selected" visible
    And I click "dropdown_drafts_submission_grid" [2]
    Then the text of "dropdown_drafts_submission_grid_title" should be "Final Paper"
    Then I wait until there is 1 "submission_row_name" visible
    And the text of "submission_row_name" [1] should be "5ef7fa10-f4a4-4add-9191-882de6b9065b"

    @db=reset
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
      And I click "add_draft_button"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "start_reflection"
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"


  Scenario: The Instructor Deletes Started Draft
    Given I launch the activity as an "instructor"
    When I maximize the browser
    And I click "student_submissions"
    Then the text of "dropdown_drafts_submission_grid_title" should be "Draft 1"
    Then I wait until there is 1 "submission_row_name" visible
    And the text of "submission_row_name" [1] should be "5ef7fa10-f4a4-4add-9191-882de6b9065b"
    And I click "draft_count"
    And I click "draft_delete_button"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_alert_delete_button" visible
    And I click "draft_alert_delete_button"
    And I click "student_submissions"
    Then the text of "dropdown_drafts_submission_grid_title" should be "Final Paper"
    Then I wait until there is 1 "no_submissions_alert" visible
    Then the text of "no_submissions_alert" should be "No students have started this assignment"