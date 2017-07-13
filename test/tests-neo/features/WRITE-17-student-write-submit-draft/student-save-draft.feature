@WRITE-39
@db=reset
Feature: Student Saves Work
  Scenario: Student Can Not Save Empty Draft
    Given I launch the activity as a "student"
    When I click "start_draft"
    Then I wait until there is 1 "draft_save_button_disabled" visible

  Scenario: Student Has Enabled Save Button
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    Then I wait until there is 1 "draft_save_button_enabled" visible

  Scenario: Student Clicks Save Button (Successful Save)
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "draft_save_button_enabled"
    #Then I wait until there is 1 "draft_save_confirmation" visible
    Then I wait until there is 1 "success_flash" visible
    Given I launch the activity as a "student"
    When I click "start_draft"
    Then the text of "draft_area" should be "happy"

  #Dunno how to blow this up yet
  @pending
  Scenario: Student Clicks Save Button (Error State Returned)
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "happy" in "draft_area"
    And I click "draft_save_button_enabled"
    Then Student sees 'save_error'

  Scenario: Student Sees Return To Draft Button
    Given I launch the activity as a "student"
    Then I sleep for 1 seconds
    Then the text of "start_draft" should be "Return to Final Paper"

  Scenario: Instructor Sets Up Reflection Questions
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"

  @pending=WRITE-1102
  Scenario: Student Has Enabled Save Button in Reflection Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "start_reflection"
    Then I wait until there is 1 "reflection_button_submit_disabled" visible

  Scenario: Student Saves in Reflection Page
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"
    Given I launch the activity as a "student"
    Then I wait until there is 1 "draft_submission_date" visible

  Scenario: Student Returns to Reflection Page and Sees Saved Work
    Given I launch the activity as a "student"
    When I click "view_final_draft_button"
    Then the text of "draft_area" should be "happy"
    Then the text of "reflection_question_submission_textarea" [1] should include "yay"
