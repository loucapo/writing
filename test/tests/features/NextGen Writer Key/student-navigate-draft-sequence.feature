@WRITE-861
Feature: Student Navigate Draft Screens
  @db=reset
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    And I click 'reflection_question_checkbox' 1
    And I click 'reflection_question_checkbox' 4
    And I click a 'reflection_questions_save'
    Then Page Element Checker Verifies: '2' '[data-id='reflections-list'] li'

  Scenario: Student Clicks View Activity Summary Link
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student clicks 'view_activity_summary_link'
    Then Page Element Checker Verifies Text: 'Start Final Paper' at '[data-id='start-draft']'

  Scenario: Student Leaves Work
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type in 'happy'
    And Student clicks 'view_activity_summary_link'
    And Student sees 'leave_draft_page_button'
    And Student clicks 'leave_draft_page_button'
    Then Page Element Checker Verifies Text: 'Start Final Paper' at '[data-id='start-draft']'
    And Student clicks 'start_draft_1_button'
    And Text "happy" should not appear

  Scenario: Student Stays On Draft Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type in 'happy'
    And Student clicks 'view_activity_summary_link'
    And Student clicks 'stay_draft_page_button'
    Then Student sees 'view_activity_summary_link'

  Scenario: Student Goes Back a Page from Student Reflection Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And I type in 'happy'
    And Student clicks 'start_reflection_button'
    And Student clicks 'view_draft_link'
    Then Student sees 'view_activity_summary_link'
    Then Page Element Checker Verifies Text: 'happy' at '[class^='public-DraftEditor-content']'

  Scenario: Student Leaves Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student clicks 'start_reflection_button'
    And I fill out the reflection questions
    And Student clicks 'view_draft_link'
    Then Student sees 'leave_page_alert'
    And Student clicks 'leave_reflection_page_button'
    Then Student sees 'view_activity_summary_link'
    Then Page Element Checker Verifies Text: 'happy' at '[class^='public-DraftEditor-content']'
    And Student clicks 'start_reflection_button'
    Then Student sees 'reflection_button_submit_disabled'
    # And Page Element Checker Verifies Text: '' at '[class^='ReflectionQuestionsForm__reflection'] textarea'
    # Ideally would verify blank text question but marvin throws error saying can't interpret scenario with '' - will wait for neo

  Scenario: Student Stays On Reflection Page
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student clicks 'start_reflection_button'
    And I fill out the reflection questions
    And Student clicks 'view_draft_link'
    And Student clicks 'stay_reflection_page_button'
    Then Student sees 'reflection_button_submit_enabled'

  Scenario: Student Starts Reflection, Comes Back to it
    Given I launch the activity as a 'student'
    And Student clicks 'start_draft_1_button'
    And Student clicks 'start_reflection_button'
    And I fill out the reflection questions
    And Student clicks 'draft_save_button_enabled'
    And Student clicks 'view_draft_link'
    Then Page Element Checker Verifies Text: 'Done, Return to Reflection' at '[data-id='start-reflection']'
    And Student clicks 'start_reflection_button'
    And Page Element Checker Verifies Text: 'yay' at '[class^='ReflectionQuestionsForm__reflection'] textarea'

    @db=reset
  Scenario: Student Leaves Page
    Given I launch the activity as a 'student'