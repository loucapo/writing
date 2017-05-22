@WRITE-39
Feature: Student Saves Work
  Scenario: Student Has Disabled Save Button
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
   Then Student sees 'disabled_save_button'

  Scenario: Student Has Enabled Save Button
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student sees 'enabled_save_button'

  Scenario: Student Clicks Save Button (Successful Save)
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student clicks 'save_button'
    Then Student sees 'save_confirmation'
    When I reload the page
    Then Student sees happy

    #Dunno how to blow this up yet
  Scenario: Student Clicks Save Button (Unsuccessful Save)
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student clicks 'save_button'
    Then Student sees 'save_error'

  Scenario: Student Sees Return To Draft Button
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student clicks 'save_button'
    Given I launch the activity as a 'student'
    Then Student sees 'return_to_draft_1_button'

  Scenario: Student Sees Saved Work
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    Then Student clicks 'save_button'
    Given I launch the activity as a 'student'
    Then Student clicks 'return_to_draft_1_button'
    Then Student sees 'happy'

  Scenario: Student Has Enabled Save Button in Reflection Page
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And Student clicks 'start_reflection_button'
    Then Student sees 'enabled_save_button'

  Scenario: Student Saves in Reflection Page
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And Student clicks 'start_reflection_button'
    When I type in 'yay' in reflection question
    Then Student clicks 'save_button'
    Then Student sees 'save_confirmation'
    When I reload the page
    Then Student sees 'yay' in reflection question

  Scenario: Student Returns to Reflection Page
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And Student clicks 'start_reflection_button'
    When I type in 'yay' in reflection question
    Then Student clicks 'save_button'
    Then Student sees 'save_confirmation'
    Given I launch the activity as a 'student'
    Then Student clicks 'return_to_draft_1_button'
    Then Student sees 'happy'
    And Student sees 'done_return_to_reflection'
    Then Student clicks 'done_return_to_reflection'
    Then Student sees 'yay' in reflection question
    Then Student sees 'submit_button'