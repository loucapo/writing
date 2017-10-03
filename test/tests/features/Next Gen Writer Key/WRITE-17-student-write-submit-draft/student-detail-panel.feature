@WRITE-46
@WRITE-1061
Feature: Student Views Details Panel
  @db=reset
  Scenario: Page Setup for Student Detail Panel View
    Given I launch the activity as an "instructor"
    And I click "activity_prompt.edit"
    And I type "Cookies ftw" in "activity_prompt.edit_area"
    And I click "activity_prompt.save"
    And I click "rubric.dropdown"
    And I click "rubric.dropdown_option(2)"
    And I click "draft.add_draft_goals"
    And I click "draft_goals_modal.goal_checkbox(1)"
    And I click "draft_goals_modal.goal_save"
    And I click "draft.add_draft_instructions(1)"
    And I type "hello world" in "draft.draft_instructions_textarea(1)"
    And I click "draft.save_draft_instructions(1)"
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(7)"
    When I click "reflection_questions_modal.save"

  Scenario: Student Collapses Current Section
    Given I launch the activity as an "student"
    When I click "start_draft"
    When I click "draft_editor.activity_draft_panel"
    And Changing to using page "instructor_summary"
    Then I wait until there is 0 "draft.draft_instructions" visible

  Scenario: Student Sees Assignment Details Panel
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_editor.activity_draft_panel" visible
    Then I wait until there is 1 "draft_editor.activity_prompt_panel" visible
    Then I wait until there is 1 "draft_editor.activity_final_rubric_panel" visible
    Then I wait until there is 1 "draft_editor.view_activity_summary_link" visible
    Then I wait until there is 1 "draft_editor.activity_reflection_questions_panel" visible
    Then I wait until there is 1 "draft_editor.activity_draft_goals_panel" visible
    Then I wait until there is 1 "draft_editor.activity_draft_instructions_panel" visible
    Then I wait until there is 0 "draft_editor.activity_prompt_description_panel" visible
    Then I wait until there is 0 "draft_editor.activity_rubric_panel_preview" visible

  Scenario: Student Expands New Section
    Given I launch the activity as an "student"
    When I click "start_draft"
    When I click "draft_editor.activity_prompt_panel"
    Then I wait until there is 1 "draft_editor.activity_prompt_description_panel" visible
    Then the text of "draft_editor.activity_prompt_description_panel" should be "Cookies ftw"
    Then I wait until there is 0 "draft_editor.activity_draft_instructions_panel" visible

  Scenario: Student Scrolls Rubric Section
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I click "draft_editor.activity_final_rubric_panel"
    Then the text of "draft_editor.final_rubric_panel_column_4" should include "4 - Exceeds Expectations"
    When I click "draft_editor.final_rubric_panel_right_arrow"
    Then the text of "draft_editor.final_rubric_panel_column_1" should include "1 - Falls Below Expectations"
    When I click "draft_editor.final_rubric_panel_right_arrow"
    Then the text of "draft_editor.final_rubric_panel_column_2" should include "2 - Nearly Meets Expectations"
    When I click "draft_editor.final_rubric_panel_right_arrow"
    Then the text of "draft_editor.final_rubric_panel_column_3" should include "3 - Meets Expectations"
    When I click "draft_editor.final_rubric_panel_left_arrow"
    Then the text of "draft_editor.final_rubric_panel_column_2" should include "2 - Nearly Meets Expectations"

  @db=reset
  Scenario: Student Launch Draft With Only Reflection Questions
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then the text of "draft_editor.activity_reflection_questions_panel" should be "free: The most challenging part of this assignment was:"

  @WRITE-1062
  @db=reset
  Scenario: Hidden Detail Panel For Non-Selected Options
    Given I launch the activity as an "instructor"
    And I click "draft.add_draft_goals"
    And I click "draft_goals_modal.goal_checkbox(1)"
    And I click "draft_goals_modal.goal_save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_editor.activity_draft_panel" visible
    Then I wait until there is 0 "draft_editor.activity_prompt_panel" visible
    Then I wait until there is 0 "draft_editor.activity_final_rubric_panel" visible
    Then I wait until there is 1 "draft_editor.view_activity_summary_link" visible
    Then I wait until there is 0 "draft_editor.activity_reflection_questions_panel" visible
    Then I wait until there is 1 "draft_editor.activity_draft_goals_panel" visible
    Then I wait until there is 0 "draft_editor.activity_draft_instructions_panel" visible
    Then I wait until there is 0 "draft_editor.activity_prompt_description_panel" visible
    Then I wait until there is 0 "draft_editor.activity_rubric_panel_preview" visible
