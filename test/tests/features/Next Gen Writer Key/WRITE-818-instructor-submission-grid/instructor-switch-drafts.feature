@WRITE-331
Feature: Instructor Views Draft Submissions Switcher

  @db=reset
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(4)"
    When I click "reflection_questions_modal.save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: The Instructor Clicks on Dropdown
    Given I launch the activity as an "instructor"
    When I maximize the browser
    And I click "student_submissions"
    And I click "submissions.draft_select_dropdown"
    Then I wait until there is 1 "submissions.dropdown_drafts" visible
    Then I wait until there is 1 "submissions.dropdown_drafts_selected" visible

  Scenario: The Instructor Changes Draft
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I click "student_submissions"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible
    Then the text of "submissions.no_submissions_alert" should be "No students have started this assignment"
    And I click "submissions.draft_select_dropdown"
    Then I wait until there is 2 "submissions.dropdown_drafts" visible
    Then I wait until there is 1 "submissions.dropdown_drafts_selected" visible
    And I click "submissions.dropdown_drafts(2)"
    Then the text of "submissions.dropdown_drafts_title" should be "Final Paper"
    Then I wait until there is 1 "submissions.row_name" visible
    And the text of "submissions.row_name(1)" should be "5ef7fa10-f4a4-4add-9191-882de6b9065b"

  @db=reset
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: The Instructor Deletes Started Draft
    Given I launch the activity as an "instructor"
    When I maximize the browser
    And I click "student_submissions"
    Then the text of "submissions.dropdown_drafts_title" should be "Draft 1"
    Then I wait until there is 1 "submissions.row_name" visible
    And the text of "submissions.row_name(1)" should be "5ef7fa10-f4a4-4add-9191-882de6b9065b"
    And I click "draft_count"
    And I click "draft.delete_button"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft.alert_delete_button" visible
    And I click "draft.alert_delete_button"
    And I click "student_submissions"
    Then the text of "submissions.dropdown_drafts_title" should be "Final Paper"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible
    Then the text of "submissions.no_submissions_alert" should be "No students have started this assignment"
