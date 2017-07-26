@WRITE-861
@TOREFACTOR
Feature: Student Navigate Draft Screens
  @db=reset
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"

  Scenario: Student Clicks View Activity Summary Link
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "view_activity_summary_link"
    Then I wait until there is 1 "start_draft" visible

  Scenario: Student Leaves Work
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "view_activity_summary_link"
    Then I wait until there is 1 "leave_draft_page_button" visible
    And I click "leave_draft_page_button"
    Then I wait until there are 1 "draft_card_title"
    Then the text of "start_draft" should be "Start Final Paper"
    When I click "start_draft"
    Then the text of "draft_area" should be ""

  Scenario: Student Stays On Draft Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "view_activity_summary_link"
    And I click "stay_draft_page_button"
    Then I wait until there are 1 "view_activity_summary_link"

  Scenario: Student Goes Back a Page from Student Reflection Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "start_reflection"
    And I click "view_draft_link"
    Then I wait until there are 1 "view_activity_summary_link"
    Then the text of "draft_area" should be "happy"

  Scenario: Student Leaves Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "view_draft_link"
    Then I wait until there are 1 "leave_page_alert"
    And I click "leave_reflection_page_button"
    Then I wait until there are 1 "view_activity_summary_link"
    Then the text of "draft_area" should be "happy"
    And I click "start_reflection"
    Then I wait until there are 1 "reflection_button_submit_disabled"
    And the text of "student_reflection_text" should be ""

  Scenario: Student Stays On Reflection Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "view_draft_link"
    Then I wait until there are 1 "leave_page_alert"
    And I click "stay_reflection_page_button"
    Then I wait until there are 1 "reflection_button_submit_enabled"

  Scenario: Student Starts Reflection, Comes Back to it
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "draft_save_button_enabled"
    And I click "view_draft_link"
    Then the text of "start_reflection" should be "Done, Return to Reflection"
    And I click "start_reflection"
    Then the text of "student_reflection_text" should be "yay"

