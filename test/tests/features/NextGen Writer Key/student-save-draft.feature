@WRITE-39
@db=reset
Feature: Student Saves Work
  Scenario: Student Can Not Save Empty Draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    Then Student sees 'draft_save_button_disabled'

  Scenario: Student Has Enabled Save Button
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student sees 'draft_save_button_enabled'

  Scenario: Student Clicks Save Button (Successful Save)
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And Student clicks 'draft_save_button_enabled'
    And Student sees 'draft_save_confirmation'
    And I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    Then I should see "happy" in the content editor

    #Dunno how to blow this up yet
@pending
  Scenario: Student Clicks Save Button (Error State Returned)
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student clicks 'save_button'
    Then Student sees 'save_error'

  Scenario: Student Sees Return To Draft Button
    Given I launch the activity as a 'student'
    Then Student sees 'return_to_final_draft_button'

  Scenario: Student Sees Saved Work
    Given I launch the activity as a 'student'
    And Student clicks 'return_to_final_draft_button'
    Then I should see "happy" in the content editor

  Scenario: Instructor Sets Up Reflection Questions
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    And I click 'reflection_question_checkbox' 1
    And I click 'reflection_question_checkbox' 4
    And I click a 'reflection_questions_save'

@pending=WRITE-1102
  Scenario: Student Has Enabled Save Button in Reflection Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student clicks 'start_reflection_button'
    Then Student sees 'draft_save_button_disabled'

  Scenario: Student Saves in Reflection Page
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    And Student clicks 'start_reflection_button'
    And I fill out the reflection questions
    And Student clicks 'draft_save_button_enabled'
    Then Student sees 'draft_save_confirmation'

  Scenario: Student Returns to Reflection Page and Sees Saved Work
    Given I launch the activity as a 'student'
    And Student clicks 'return_to_final_draft_button'
    And Student clicks 'start_reflection_button'
    Then Student sees reflection questions are filled out
