@WRITE-46
@only
Feature: Student Views Details Panel
  @db=reset
  @only
  Scenario: Page Setup for Student Detail Panel View
    Given I launch the activity as a 'instructor'
    And I click a 'activity_prompt_edit'
    And I type in 'Chocolate chip cookies are the bomb'
    And I click on the page
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    When I click a 'add_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click a 'draft_goal_save_button'
    When I click 'add_ddraft_instructions' 1
    Then I sleep for 2 seconds
    When I type 'hello world' in draft instructions 1
    And I click 'save_ddraft_instructions' 1
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 1
    And I click a 'reflection_questions_save'

  Scenario: Student Sees Assignment Details Panel
    Given I launch the activity as a 'student'
    When Student clicks 'start_final_paper_button'
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

  Scenario: Student Collapses Current Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_final_paper_button'
    And Student clicks 'activity_draft_panel'
    Then Page Element Checker Verifies: '0' '[data-id='draft-instructions']'

  Scenario: Student Scrolls Rubric Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_final_paper_button'
    And Student clicks 'activity_final_rubric_panel'
    Then Student sees 'activity_final_rubric'
    Then Page Element Checker Verifies Text: '4 - Exceeds Expectations' at '[data-id='rubric-column-4']'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Page Element Checker Verifies Text: '1 - Falls Below Expectations' at '[data-id='rubric-preview'] div div:nth-child(2) span'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Page Element Checker Verifies Text: '2 - Nearly Meets Expectations' at '[data-id='rubric-preview'] div div:nth-child(2) span'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Page Element Checker Verifies Text: '3 - Meets Expectations' at '[data-id='rubric-preview'] div div:nth-child(2) span'
    When Student clicks 'activity_summary_rubric_left_arrow'
    Then Page Element Checker Verifies Text: '2 - Meets Expectations' at '[data-id='rubric-preview'] div div:nth-child(2) span'

  @db=reset
  Scenario: Database Reset
    Given I launch the activity as a 'instructor'