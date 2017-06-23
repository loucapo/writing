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
    And I click "rubric_dropdown_option" [1]
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
   # And Student clicks 'activity_draft_panel'
    Then I wait until there is 0 "draft_instructions" visible

  Scenario: Student Sees Assignment Details Panel
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then Student sees 'view_activity_summary_link'
    Then Student sees 'activity_details_panel'
    Then Student sees 'activity_draft_panel'
    Then Student sees 'activity_draft_instructions_panel'
    Then Student sees 'activity_draft_goals_panel'
    Then Student sees 'activity_draft_reflections_panel'
    Then Page Element Checker Verifies: '0' '[data-id='rubric-preview']'
    Then Page Element Checker Verifies: '0' '[data-id='activity-prompt-content-detail-panel']'

  Scenario: Student Expands New Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_final_paper_button'
    And Student clicks 'activity_prompt_panel'
    Then Student sees 'activity_prompt_details_panel'
    And Page Element Checker Verifies Text: 'Chocolate chip cookies are the bomb' at '[data-id='activity-prompt-content-detail-panel']'
    Then Page Element Checker Verifies: '0' '[data-id='draft-instructions']'

  Scenario: Student Scrolls Rubric Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_final_paper_button'
    And Student clicks 'activity_final_rubric_panel'
    Then Student sees 'activity_final_rubric'
    Then Page Element Checker Verifies Text: '4 - Exceeds Expectations' at '[data-id='rubric-column-4']'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Page Element Checker Verifies Text: '1 - Falls Below Expectations' at '[data-id='rubric-column-1']'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Page Element Checker Verifies Text: '2 - Nearly Meets Expectations' at '[data-id='rubric-column-2']'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Page Element Checker Verifies Text: '3 - Meets Expectations' at '[data-id='rubric-column-3']'
    When Student clicks 'activity_summary_rubric_left_arrow'
    Then Page Element Checker Verifies Text: '2 - Nearly Meets Expectations' at '[data-id='rubric-column-2']'

  @db=reset
  Scenario: Student Launch Draft With Only Reflection Questions
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 1
    And I click a 'reflection_questions_save'
    Given I launch the activity as a 'student'
    When Student clicks 'start_final_paper_button'
    Then Page Element Checker Verifies Text: 'free: utt ben yavin fett naboo calamari. Obi-wan mon coruscant c' at '[data-id='reflections-list']'

  @db=reset
  Scenario: Database Reset
    Given I launch the activity as a 'instructor'

