@WRITE-750
Feature: Instructor Can Add Student Reflection Questions To Activity
  Scenario: The Instructor Sees Option to select student reflection questions
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft.add_reflection_questions"

  @db=reset
  Scenario: The Instructor can open and close the student reflection question modal selector
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    Then the text of "reflection_questions_modal.question_title(1)" should be "Question 1"
    Then the text of "reflection_questions_modal.question_type(1)" should be "free"
    And the text of "reflection_questions_modal.desc(1)" should include "The most challenging part of this assignment was"
    Then the text of "reflection_questions_modal.question_title(2)" should be "Question 2"
    Then the text of "reflection_questions_modal.question_type(2)" should be "free"
    And the text of "reflection_questions_modal.desc(2)" should include "One thing I want my reader to understand is"
    Then the text of "reflection_questions_modal.question_title(3)" should be "Question 3"
    Then the text of "reflection_questions_modal.question_type(3)" should be "free"
    And the text of "reflection_questions_modal.desc(3)" should include "I want you to know that"
    Then the text of "reflection_questions_modal.question_title(4)" should be "Question 4"
    Then the text of "reflection_questions_modal.question_type(4)" should be "free"
    And the text of "reflection_questions_modal.desc(4)" should include "The primary argument I'm making is"
    Then the text of "reflection_questions_modal.question_title(7)" should be "Question 7"
    Then the text of "reflection_questions_modal.question_type(7)" should be "fixed"
    And the text of "reflection_questions_modal.desc(7)" should include "I know the criteria that will be used for giving me feedback."

  @db=reset
  Scenario: The instructor can close the student reflection question modal selector via icon
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    When I click "reflection_questions_modal.close"
    Then I wait until there are 0 "reflection_questions_modal.ref_question_modal" visible

  @db=reset
  Scenario: Instructor can select and unselect reflection questions
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    When I click "reflection_questions_modal.check(1)"
    Then I wait until there is 1 "reflection_questions_modal.check__checked" visible
    Then I wait until there is 8 "reflection_questions_modal.check__unchecked" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(2)"
    When I click "reflection_questions_modal.check(3)"
    When I click "reflection_questions_modal.check(4)"
    Then I wait until there is 3 "reflection_questions_modal.check__checked" visible
    Then I wait until there is 6 "reflection_questions_modal.check__unchecked" visible

  @db=reset
  Scenario: The Instructor saves changes and saves lack-of-changes to questions
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(3)"
    And I click "reflection_questions_modal.save"
    Then I wait until there are 0 "reflection_questions_modal.ref_question_modal" visible
    Then I wait until there are 2 "draft.reflection_question" visible
    And I click "draft.edit_reflections(1)"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    And I click "reflection_questions_modal.save"
    Then I wait until there are 0 "reflection_questions_modal.ref_question_modal" visible
    Then I wait until there are 2 "draft.reflection_question" visible
  
  @db=reset
  Scenario: The Instructor saves nothing
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    And I click "reflection_questions_modal.save"
    Then I wait until there are 0 "draft.reflection_question" visible

  @db=reset
  Scenario: The Instructor Cancels Question
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    When I click "reflection_questions_modal.cancel"
    Then I wait until there is 0 "reflection_questions_modal.ref_question_modal" visible
    Then I wait until there are 0 "draft.reflection_question" visible

  @db=reset
  Scenario: The Instructor Edits Selected Questions
    Given I launch the activity as an "instructor"
    When I click "draft.add_reflection_questions"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    When I click "reflection_questions_modal.check(2)"
    When I click "reflection_questions_modal.check(7)"
    And I click "reflection_questions_modal.save"
    Then I wait until there is 0 "reflection_questions_modal.ref_question_modal" visible
    Then I wait until there are 2 "draft.reflection_question" visible
    Then the text of "draft.reflection_question(1)" should include "free: One thing I want my reader to understand is"
    Then the text of "draft.reflection_question(2)" should include "fixed: I know the criteria that will be used for giving me feedback."
    When I click "draft.edit_reflections(1)"
    #Then I wait until there is 1 "reflection_questions_modal.ref_question_modal" visible
    When I click "reflection_questions_modal.check(2)"
    When I click "reflection_questions_modal.check(3)"
    And I click "reflection_questions_modal.save"
    Then I wait until there is 0 "reflection_questions_modal.ref_question_modal" visible
    Then I wait until there are 2 "draft.reflection_question" visible
    Then the text of "draft.reflection_question(1)" should include "fixed: I know the criteria that will be used for giving me feedback."
    Then the text of "draft.reflection_question(2)" should include "free: I want you to know that"
