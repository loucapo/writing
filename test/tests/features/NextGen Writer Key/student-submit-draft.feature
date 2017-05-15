@WRITE-823
@pending=monorepo
Feature: Student Views Reflection Questions
  Scenario: Student Moves To Reflection Screen
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click a 'start_reflection_button'
    Then Student sees 'reflection_questions'
    And Student sees 'reflection_prompts'
    And Student sees 'reflection_textfield'
    And Student sees 'reflection_polls'
    But Student sees 'disabled_submit_button'

  Scenario: Student Able to Submit
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click a 'start_reflection_button'
    When I type in 'yay'
    And Student sees 'active_submit_button'

  Scenario: Student Submits Draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click a 'start_reflection_button'
    When I type in 'yay'
    And Student clicks 'active_submit_button'
    And Student sees 'draft_submission_confirmation'
    And Student clicks 'confirm_submission'
    Then Student sees 'draft_submission_confirmation_banner'
    And Student sees 'green_date_check'
    And Student sees 'view_draft_1_button'

  Scenario: Student Does Not Submit Draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click a 'start_reflection_button'
    When I type in 'yay'
    And Student clicks 'active_submit_button'
    And Student clicks 'cancel_submission'
    Then Student sees 'active_submit_button'
    Then Student sees 'reflection_questions'
    And Student sees 'reflection_prompts'
    And Student sees 'reflection_textfield'
    And Student sees 'reflection_polls'

  Scenario: Student Reflection State
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'Happy birthday Writer Key!'
    And I click a 'start_reflection_button'
    And I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    Then Page Element Checker Verifies Text: 'Happy birthday Writer Key!' at '[class^='.public-DraftEditor-content']'
@pending
      # How to cause error? Is this more of an API test with a bad payload?
  Scenario: Student Submits Draft And Receives Error
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click a 'start_reflection_button'
    When I type in 'yay'
    And Student clicks 'active_submit_button'
    #And I crash my computer
    And Student sees 'draft_submission_error'
