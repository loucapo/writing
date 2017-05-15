@WRITE-750

Feature: Instructor Can Add Student Reflection Questions To Activity

  Scenario: The Instructor Sees Option to select student reflection questions
    Given I launch the activity as a 'instructor'
    Then I see the 'add_student_reflection_questions'

  Scenario: The Instructor can open and close the student reflection question modal selector
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    Then I see question 1 has text 'Question 1'
    Then I see question 1 has text 'utt ben yavin fett naboo calamari. Obi-wan mon coruscant c'
    Then I see question 1 has text 'Type  free'
    Then I see question 2 has text 'Question 2'
    Then I see question 2 has text 'ben boba hutt mandal'
    Then I see question 2 has text 'Type  free'
    Then I see question 3 has text 'Question 3'
    Then I see question 3 has text 'a. Mon jango mace q'
    Then I see question 3 has text 'Type  free'
    Then I see question 4 has text 'Question 4'
    Then I see question 4 has text 'on kit yoda jinn.'
    Then I see question 4 has text 'Type  fixed'
    Then I see question 5 has text 'Question 5'
    Then I see question 5 has text 'ace moff fisto calamari thrawn. Padmé qui-gon kit'
    Then I see question 5 has text 'Type  fixed'

  Scenario: The instructor can close the student reflection question modal selector via icon
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click a 'close_modal'
    Then Page Element Checker Verifies: '0' '[data-id='modal'] [data-id='input-fields']'

  Scenario: The Instructor Selects Question
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 1
    Then Page Element Checker Verifies: '1' '[data-id='input-fields'] :checked'

  Scenario: The Instructor Unselects Question
    Given Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 1
    When I click 'reflection_question_checkbox' 1
    Then Page Element Checker Verifies: '0' '[data-id='input-fields'] :checked'

  Scenario: The Instructor Saves Question
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 1
    And I click a 'reflection_questions_save'
    Then Page Element Checker Verifies: '1' '[data-id='reflections-list'] li'
    Then Reflection Questions cleanup

  Scenario: The Instructor Saves nothing
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    And I click a 'reflection_questions_save'
    Then Page Element Checker Verifies: '0' '[data-id='reflections-list'] li'

  Scenario: The Instructor Cancels Question
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 1
    And I click a 'reflection_questions_cancel'
    Then Page Element Checker Verifies: '0' '[data-id='reflections-list'] li'

  Scenario: The Instructor Saves Question (No Changes)
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 2
    And I click a 'reflection_questions_save'
    When I click a 'edit_student_reflection_questions'
    And I click a 'reflection_questions_save'
    Then Page Element Checker Verifies: '1' '[data-id='reflections-list'] li'
    Then Reflection Questions cleanup

  Scenario: The Instructor Edits Selected Questions
    Given I launch the activity as a 'instructor'
    When I click a 'add_student_reflection_questions'
    When I click 'reflection_question_checkbox' 2
    And I click a 'reflection_questions_save'
    When I click a 'edit_student_reflection_questions'
    When I click 'reflection_question_checkbox' 3
    When I click 'reflection_question_checkbox' 1
    And I click a 'reflection_questions_save'
    Then Page Element Checker Verifies: '3' '[data-id='reflections-list'] li'
    Then Reflection Questions cleanup
