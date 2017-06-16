@WRITE-331

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

  Scenario: The Instructor Deletes Started Draft
    Given I launch the activity as a 'instructor'
    And I click 'delete_draft_button'
    And I click 'student_submissions'
    Then Page Element Checker Verifies Text: 'No students have started this assignment' at '[class^='SubmissionStatusTable__table']'