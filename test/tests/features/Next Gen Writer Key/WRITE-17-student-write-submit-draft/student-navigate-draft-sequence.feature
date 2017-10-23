@WRITE-861
Feature: Student Navigate Draft Screens
  @dbreset
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(7)"
    When I click "reflection_questions_modal.save"

  Scenario: Student Clicks View Activity Summary Link
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "draft_editor.view_activity_summary_link"
    Then I wait until there is 1 "start_draft" visible

  Scenario: Student Leaves Work
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.view_activity_summary_link"
    Then I wait until there is 1 "draft_editor.leave_draft_page_button" visible
    And I click "draft_editor.leave_draft_page_button"
    Then the text of "start_draft" should be "Start Final Paper"
    When I click "start_draft"
    Then the text of "draft_editor.draft_area" should be ""

  Scenario: Student Stays On Draft Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.view_activity_summary_link"
    And I click "draft_editor.stay_draft_page_button"
    Then I wait until there are 1 "draft_editor.view_activity_summary_link"

  Scenario: Student Goes Back a Page from Student Reflection Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_editor.draft_area"
    And I click "draft_editor.draft_save_button_enabled"
    And I click "draft_editor.start_reflection"
    And I click "student_reflection_questions.view_draft_link"
    Then I wait until there are 1 "draft_editor.view_activity_summary_link"
    Then the text of "draft_editor.draft_area" should be "happy"

  Scenario: Student Leaves Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.view_draft_link"
    And I click "student_reflection_questions.leave_reflection_page_button"
    Then I wait until there are 1 "draft_editor.view_activity_summary_link"
    Then the text of "draft_editor.draft_area" should be "happy"
    And I click "draft_editor.start_reflection"
    Then I wait until there are 1 "student_reflection_questions.reflection_button_submit_disabled"
    And the text of "student_reflection_questions.student_reflection_text" should be ""

  Scenario: Student Stays On Reflection Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.view_draft_link"
    And I click "student_reflection_questions.stay_reflection_page_button"
    Then I wait until there are 1 "student_reflection_questions.reflection_button_submit_enabled"

  Scenario: Student Starts Reflection, Comes Back to it
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.save_button"
    And I click "student_reflection_questions.view_draft_link"
    Then the text of "draft_editor.start_reflection" should be "Done, Return to Reflection"
    And I click "draft_editor.start_reflection"
    Then the text of "student_reflection_questions.student_reflection_text" should be "yay"

