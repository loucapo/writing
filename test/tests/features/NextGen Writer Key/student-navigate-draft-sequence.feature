@WRITE-861
Feature: Student Navigate Draft Screens
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'

  Scenario: Student Clicks View Activity Summary Link
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    Then Student clicks 'view_activity_summary_link'
    Then Student sees 'return_to_draft_button'

  Scenario: Student Leaves Work
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type 'happy'
    Then Student clicks 'view_activity_summary_link'
    Then Student sees 'alert'
    And Student clicks 'yes'
    Then Student sees 'return_to_draft_button'
    And Student sees 'start_draft_1_button'
    And Student clicks 'start_draft_1_button'
    And Student does not see 'happy'

  Scenario: Student Stays On Draft Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type 'happy'
    Then Student clicks 'view_activity_summary_link'
    Then Student sees 'alert'
    And Student clicks 'no'
    Then Student sees 'rte editor'

  Scenario: Student Goes Back a Page from Student Reflection Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type 'happy'
    Then Student clicks 'done,start_reflection_button'
    And Student clicks 'view_draft_1_button'
    Then Student sees 'rte editor'

  Scenario: Student Leaves Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type 'happy'
    Then Student clicks 'done,start_reflection_button'
    And Student types in 'hello world'
    And Student clicks 'view_draft_1_button'
    Then Student sees 'alert'
    And Student clicks 'yes'
    Then Student sees 'rte editor'
    Then Student clicks 'done,start_reflection_button'
    And Student does not see 'hello world'

  Scenario: Student Stays On Reflection Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type 'happy'
    Then Student clicks 'done,start_reflection_button'
    And Student types in 'hello world'
    And Student clicks 'view_draft_1_button'
    Then Student sees 'alert'
    And Student clicks 'no'
    Then Student sees 'submit_button'

  Scenario: Student Starts Reflection, Comes Back to it
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type 'happy'
    Then Student clicks 'done,start_reflection_button'
    And Student types in 'hello world'
    And Student clicks 'view_draft_1_button'
    Then Student sees 'alert'
    And Student clicks 'yes'
    Then Student sees 'return_to_reflection_button'