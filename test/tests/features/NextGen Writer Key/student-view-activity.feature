@WRITE-96
Feature: Student Views Activity

  Scenario: Student Launches into Activity with No Rubric Selected
    Given I launch the activity as a 'instructor'
    And Draft Delete Cleanup '[data-id='draft-delete']'
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    Then Page Element Checker Verifies: '0' '[data-id='MLCard-Final-Rubric']'
    #Then Page Element Checker Verifies: '0' '[data-id='student-preview']'

  Scenario: Student Does Not See Instructer Options
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies: '0' '[data-id='created-activity-alert'] div'
    Then Page Element Checker Verifies: '0' '[data-id='prompt-edit']'
    Then Page Element Checker Verifies: '0' '[data-id='prompt-delete']'
    Then Page Element Checker Verifies: '0' '[data-id='add-draft']'
    Then Page Element Checker Verifies: '0' '[data-id='draft-goal-edit']'
    Then Page Element Checker Verifies: '0' '[data-id='add-instructions']'
    Then Page Element Checker Verifies: '0' '[data-id='add-reflections']'

  Scenario: Student Launches into Full Activity with More Than One Draft
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    And I click a 'activity_prompt_edit'
    And I type in 'hello world'
    And I click a 'activity_prompt_save'
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

@cleanup
  Scenario: Page Teardown for Student View
  Given I launch the activity as a 'instructor'
    And I click a 'activity_prompt_edit'
    And I focus the content editor
    And I select all content
    And I delete text
    And I click a 'activity_prompt_save'
    When I click a 'rubric_selection'
    When I click a 'no_rubric_option'
    And Draft Delete Cleanup '[data-id='draft-delete']'
