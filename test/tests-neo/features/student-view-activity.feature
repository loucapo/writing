@WRITE-96
Feature: Student Views Activity

  @db=reset
  Scenario: Student Launches into Activity with No Rubric Selected
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    Then Page Element Checker Verifies: '0' '[data-id='MLCard-Final-Rubric']'
    #Then Page Element Checker Verifies: '0' '[data-id='student-preview']'

  @db=reset
  Scenario: Student Does Not See Instructer Options
    Given I launch the activity as a "student"
    Then I wait until there are 0 "success_flash"
    Then I wait until there are 0 "activity_prompt_edit"
    Then I wait until there are 0 "activity_prompt_delete"
    Then I wait until there are 0 "add_draft_button"
    Then I wait until there are 0 "add_draft_goals"
    Then I wait until there are 0 "edit_draft_goals"
    Then I wait until there are 0 "add_reflection_questions"
    Then I wait until there are 0 "add_draft_instructions"

  @db=reset
  Scenario: Student Launches into Full Activity with More Than One Draft
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    And I click "activity_prompt_edit"
    And I type "hello world" in "activity_prompt_description"
    And I click "activity_prompt_save"
    When I click a 'rubric_selection'
    When I click a 'rubric_option_2'
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-1']'
    Then Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    #Then Page Element Checker Verifies: '0' '[data-id='student-preview']'
    Then Page Element Checker Verifies: '1' '[data-id='prompt-section']'
    Then Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Rubric']'
    Then Page Element Checker Verifies Text: 'hello world' at '[data-id='prompt-description']'
    Then Page Element Checker Verifies Text: 'You will be able to view and start this draft once you've received feedback on Draft 1' at '[data-id='MLCard-Final-Paper'] > div > section > [class^='Draft__draftDetails']'
