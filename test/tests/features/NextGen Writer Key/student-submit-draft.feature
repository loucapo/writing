@WRITE-823
Feature: Student Views Reflection Questions
  Scenario: Student Moves To Reflection Screen
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click 'start_reflection_button' on student assignment draft page
    Then Student sees 'reflection_questions'
    And Student sees 'reflection_textfields'
    And Student sees 'reflection_polls'
    But Student sees 'reflection_button_submit_disabled'

  Scenario: Student Able to Submit
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click 'start_reflection_button' on student assignment draft page
    And I fill out the reflection questions
    Then Student sees 'reflection_button_submit_enabled'

  Scenario: Student Does Not Submit Draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click 'start_reflection_button' on student assignment draft page
    And I fill out the reflection questions
    And Student clicks 'reflection_button_submit_enabled'
    And Student sees 'draft_submission_confirmation'
    And Student clicks 'draft_submission_cancel'
    Then Student sees 'reflection_button_submit_enabled'
    Then Student sees 'reflection_questions'
    And Student sees 'reflection_textfields'
    And Student sees 'reflection_polls'

@only
  Scenario: Student Submits Draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click 'start_reflection_button' on student assignment draft page
    And I fill out the reflection questions
    And Student clicks 'reflection_button_submit_enabled'
    And Student clicks 'draft_submission_submit'
    Then Student sees 'draft_submission_confirmation_banner'
    And Student sees 'green_date_check'
    And Student sees 'view_draft_1_button'

  Scenario: Student Reflection State
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'Happy birthday Writer Key!'
    And I click 'start_reflection_button' on student assignment draft page
    And I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    Then Page Element Checker Verifies Text: 'Happy birthday Writer Key!' at '[class^='.public-DraftEditor-content']'
@pending
      # How to cause error? Is this more of an API test with a bad payload?
  Scenario: Student Submits Draft And Receives Error
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click 'start_reflection_button' on student assignment draft page
    When I type in 'yay'
    And Student clicks 'active_submit_button'
    #And I crash my computer
    And Student sees 'draft_submission_error'
