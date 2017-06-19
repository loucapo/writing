@WRITE-750
Feature: Instructor Can Add Student Reflection Questions To Activity
  Scenario: The Instructor Sees Option to select student reflection questions
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_reflection_questions" visible

  @db=reset
  Scenario: The Instructor can open and close the student reflection question modal selector
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    Then the text of "ref_question_title" [1] should be "Question 1"
    Then the text of "ref_question_type" [1] should be "free"
    And the text of "ref_question_desc" [1] should include "utt ben yavin fett naboo calamari. Obi-wan mon coruscant c"
    Then the text of "ref_question_title" [2] should be "Question 2"
    Then the text of "ref_question_type" [2] should be "free"
    And the text of "ref_question_desc" [2] should include "ben boba hutt mandal"
    Then the text of "ref_question_title" [3] should be "Question 3"
    Then the text of "ref_question_type" [3] should be "free"
    And the text of "ref_question_desc" [3] should include "a. Mon jango mace q"
    Then the text of "ref_question_title" [4] should be "Question 4"
    Then the text of "ref_question_type" [4] should be "fixed"
    And the text of "ref_question_desc" [4] should include "on kit yoda jinn."
    Then the text of "ref_question_title" [5] should be "Question 5"
    Then the text of "ref_question_type" [5] should be "fixed"
    And the text of "ref_question_desc" [5] should include "ace moff fisto calamari thrawn. Padmé qui-gon kit"

  @db=reset
  Scenario: The instructor can close the student reflection question modal selector via icon
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_popup_close"
    Then I wait until there are 0 "ref_question_popup" visible

  @db=reset
  Scenario: Instructor can select and unselect reflection questions
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_check" [1]
    Then I wait until there is 1 "ref_question_check__checked" visible
    Then I wait until there is 4 "ref_question_check__unchecked" visible
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [2]
    When I click "ref_question_check" [3]
    When I click "ref_question_check" [4]
    Then I wait until there is 3 "ref_question_check__checked" visible
    Then I wait until there is 2 "ref_question_check__unchecked" visible

  @db=reset
  Scenario: The Instructor saves changes and saves lack-of-changes to questions
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [3]
    And I click "ref_question_save"
    Then I wait until there are 0 "ref_question_popup" visible
    Then I wait until there are 2 "reflection_question" visible
    And I click "edit_reflections" [1]
    Then I wait until there is 1 "ref_question_popup" visible
    And I click "ref_question_save"
    Then I wait until there are 0 "ref_question_popup" visible
    Then I wait until there are 2 "reflection_question" visible
  
  @db=reset
  Scenario: The Instructor saves nothing
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_save"
    Then I wait until there are 0 "reflection_question" visible

  @db=reset
  Scenario: The Instructor Cancels Question
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_cancel"

  @db=reset
  Scenario: The Instructor Edits Selected Questions
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_check" [2]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"
    Then I wait until there are 0 "ref_question_popup" visible
    Then I wait until there are 2 "reflection_question" visible
    Then the text of "reflection_question" [1] should include "ben boba hutt mandal"
    Then the text of "reflection_question" [2] should include "on kit yoda jinn."
    When I click "edit_reflections" [1]
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_check" [4]
    When I click "ref_question_check" [5]
    And I click "ref_question_save"
    Then I wait until there are 0 "ref_question_popup" visible
    Then I wait until there are 2 "reflection_question" visible
    Then the text of "reflection_question" [1] should include "ben boba hutt mandal"
    Then the text of "reflection_question" [2] should include "ace moff fisto calamari thrawn. Padmé qui-gon kit"
