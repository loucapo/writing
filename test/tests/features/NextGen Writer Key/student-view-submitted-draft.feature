@WRITE-41
Feature: Student Views Submitted Draft
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    And I click 'reflection_question_checkbox' 1
    And I click 'reflection_question_checkbox' 4
    And I click a 'reflection_questions_save'
    Then Page Element Checker Verifies: '2' '[data-id='reflections-list'] li'

  Scenario: Student Views Read Only Draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is.'
    And I click 'start_reflection_button' on student assignment draft page
    And I fill out the reflection questions
    And Student clicks 'reflection_button_submit_enabled'
    And Student clicks 'draft_submission_submit'
    And Student clicks 'view_final_draft_button'
    And Student sees 'draft_submission_confirmation'
    And Student sees 'draft_submission_confirmation_success_icon'
    And Page Element Checker Verifies Text: 'Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is.' at '.DraftEditor-editorContainer'
    And Page Element Checker Verifies Text: 'yay' at '[data-id='MLCard-Reflection']'

  Scenario: Student Views Read Only Draft Alt Route
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student sees 'draft_submission_confirmation'
    And Student sees 'draft_submission_confirmation_success_icon'
    And Page Element Checker Verifies Text: 'Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is.' at '.DraftEditor-editorContainer'
    And Page Element Checker Verifies Text: 'yay' at '[data-id='MLCard-Reflection']'

  Scenario: Student Can Navigate Back to Activity Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student clicks 'return_to_activity_page_button'
    And Student sees 'view_final_draft_button'