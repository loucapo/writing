@WRITE-46
@pending=monorepo
Feature: Student Views Details Panel
  Scenario: Student Sees Assignment Details Panel
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    Then Student sees 'view_activity_summary_panel'
    Then Student sees 'draft_1_details_section'
    Then Student sees 'draft_1_draft_instructions'
    Then Student sees 'draft_1_draft_goals'
    Then Student sees 'draft_1_reflection_questions'
    Then Student sees 'collapsed_activity_prompt'
    Then Student sees 'collapsed_rubric'

  Scenario: Student Expands New Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    And Student clicks 'activity_summary_rubric'
    Then Student sees 'activity_summary_rubric_details'
    Then Student does not see 'activity_summary_draft_details'

  Scenario: Student Collapses Current Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    And Student clicks 'activity_summary_draft_details'
    Then Student does not see 'activity_summary_draft_details'

  Scenario: Student Scrolls Rubric Section
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    And Student clicks 'activity_summary_rubric'
    Then Student sees 'activity_summary_rubric_level_4_details'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Student sees 'activity_summary_rubric_level_3_details'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Student sees 'activity_summary_rubric_level_2_details'
    When Student clicks 'activity_summary_rubric_right_arrow'
    Then Student sees 'activity_summary_rubric_level_1_details'
