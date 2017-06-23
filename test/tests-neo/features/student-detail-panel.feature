@WRITE-46
@WRITE-1061
Feature: Student Views Details Panel
  @db=reset
  Scenario: Page Setup for Student Detail Panel View
    Given I launch the activity as an "instructor"
    And I click "activity_prompt_edit"
    And I type "Cookies ftw" in "draft_area"
    And I click "activity_prompt_save"
    And I click "rubric_dropdown"
    And I click "rubric_dropdown_option" [2]
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    And I click "draft_goal_checkbox" [1]
    And I click "draft_goal_save"
    And I click "add_draft_instructions" [1]
    And I type "hello world" in "draft_instructions_textarea" [1]
    And I click "save_draft_instructions" [1]
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"

  Scenario: Student Collapses Current Section
    Given I launch the activity as an "student"
    When I click "start_draft"
    When I click "activity_draft_panel"
    Then I wait until there is 0 "draft_instructions" visible

  Scenario: Student Sees Assignment Details Panel
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "activity_draft_panel" visible
    Then I wait until there is 1 "activity_prompt_panel" visible
    Then I wait until there is 1 "activity_final_rubric_panel" visible
    Then I wait until there is 1 "view_activity_summary_link" visible
    Then I wait until there is 1 "activity_reflection_questions_panel" visible
    Then I wait until there is 1 "activity_draft_goals_panel" visible
    Then I wait until there is 1 "draft_instructions" visible
    Then I wait until there is 0 "activity_prompt_description_panel" visible
    Then I wait until there is 0 "rubric_preview" visible

  Scenario: Student Expands New Section
    Given I launch the activity as an "student"
    When I click "start_draft"
    When I click "activity_prompt_panel"
    Then I wait until there is 1 "activity_prompt_description_panel" visible
    Then the text of "activity_prompt_description_panel" should be "Cookies ftw"
    Then I wait until there is 0 "draft_instructions" visible

  Scenario: Student Scrolls Rubric Section
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I click "activity_final_rubric_panel"
    Then I wait until there is 1 "rubric_preview" visible
    Then the text of "final_rubric_panel_column_4" should include "4 - Exceeds Expectations"
    When Student clicks 'final_rubric_panel_right_arrow'
    Then the text of "final_rubric_panel_column_1" should include "1 - Falls Below Expectations"
    When Student clicks 'final_rubric_panel_right_arrow'
    Then the text of "final_rubric_panel_column_2" should include "2 - Nearly Meets Expectations"
    When Student clicks 'final_rubric_panel_right_arrow'
    Then the text of "final_rubric_panel_column_3" should include "3 - Meets Expectations"
    When Student clicks 'final_rubric_panel_left_arrow'
    Then the text of "final_rubric_panel_column_2" should include "2 - Nearly Meets Expectations"

  @db=reset
  Scenario: Student Launch Draft With Only Reflection Questions
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    And I click "ref_question_save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then the text of "reflection_question" should be "free: utt ben yavin fett naboo calamari. Obi-wan mon coruscant c"

