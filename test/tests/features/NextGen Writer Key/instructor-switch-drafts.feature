@WRITE-331
@only
Feature: Instructor Views Draft Submissions Switcher

  @db=reset
  Scenario: Setup Student Draft Submission
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    And I click 'reflection_question_checkbox' 1
    And I click 'reflection_question_checkbox' 4
    And I click a 'reflection_questions_save'
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I click 'start_reflection_button' on student assignment draft page
    And I fill out the reflection questions
    And Student clicks 'reflection_button_submit_enabled'
    And Student clicks 'draft_submission_submit'
    Then Student sees 'draft_submission_confirmation_banner'

  Scenario: The Instructor Clicks on Dropdown
    Given I launch the activity as a 'instructor'
    And I click a 'student_submissions'
    Then I see the 'rubric_selection'
    And I click a 'rubric_selection'
    Then Page Element Checker Verifies: '1' '[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li a'
    Then Page Element Checker Verifies: '1' '[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li:nth-child(1) svg'

  Scenario: The Instructor Changes Draft
    Given I launch the activity as a 'instructor'
    And I click a 'student_submissions'
    Then Page Element Checker Verifies: '1' '[data-id='name']'
    Then Page Element Checker Verifies Text: '5ef7fa10-f4a4-4add-9191-882de6b9065b' at '[data-id='name']'
    And I click a 'drafts'
    And I click a 'add_draft_button'
    And I click a 'student_submissions'
    And I click a 'rubric_selection'
    And I click a 'rubric_option_2'
    Then Page Element Checker Verifies: '2' '[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li a'
    Then Page Element Checker Verifies: '1' '[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li:nth-child(2) svg'
    Then Page Element Checker Verifies Text: 'Final Draft' at '[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [class^='MLDropdown__dropdownTitle']'
    Then Page Element Checker Verifies: '1' '[class^='SubmissionStatusTable__notStartedAlert']'
    Then Page Element Checker Verifies Text: 'No students have started this assignment' at '[class^='SubmissionStatusTable__notStartedAlert']'

  Scenario: The Instructor Deletes Started Draft
    Given I launch the activity as a 'instructor'
    And I click a 'draft_delete_button'
    And I click a 'student_submissions'
    Then Page Element Checker Verifies Text: 'No students have started this assignment' at '[class^='SubmissionStatusTable__notStartedAlert']'