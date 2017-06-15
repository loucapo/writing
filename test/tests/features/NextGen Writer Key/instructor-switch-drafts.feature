@WRITE-331

Feature: Instructor Views Draft Submissions Switcher

  Scenario: The Instructor Clicks on Dropdown
    Given I launch the activity as a 'instructor'
    And I click 'add_draft_button'
    And I click 'student_submissions'
    Then I see 'rubric_selection'
    And I click 'rubric_selection'
    Then Page Element Checker Verifies: '2' '[data-id='rubric-selection-content'] li a'
    Then Page Element Checker Verifies: '1' '[data-id='rubric-selection-content'] li svg'
    # preferably draft 1 svg

  Scenario: The Instructor Changes Draft
    Given I launch the activity as a 'instructor'
    And I click 'student_submissions'
    Then Page Element Checker Verifies: '1' '[class^='SubmissionStatusItem__row']'
    Then Page Element Checker Verifies Text: 'No students have started this assignment' at '[cla
    And I click 'rubric_selection'
    And I click 'rubric_option_2'
    Then Page Element Checker Verifies Text: 'Final Draft' at '[data-id='rubric-selection-content'] li a'
    Then Page Element Checker Verifies: '1' '[class^='SubmissionStatusTable__table']'
    Then Page Element Checker Verifies Text: 'No students have started this assignment' at '[class^='SubmissionStatusTable__table']'