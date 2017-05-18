@WRITE-819
@WRITE-942
Feature: Student Launches Draft
  Scenario: Page Setup for Student Draft With Fleshed Out Activity
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'

  #Test shows user effectively doesn't change page
  Scenario: Student Sees Start Draft Elements
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies: '1' '[data-id='start-Draft 1']'
    Then Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-1'] > [data-id='draft-section'] > [data-id='start-draft']'
    Then Page Element Checker Verifies: '1' '[data-id='start-Final Paper']'
    When Student clicks 'start_final_paper_button'
    Then Page Element Checker Verifies: '0' '[data-id='start-reflection']'

  #Test shows user effectively doesn't change page
  Scenario: Student Launches Draft 1
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    Then I see the rte 'draftEditor'
    Then Page Element Checker Verifies: '1' '[data-id='start-reflection']'
    When Student clicks 'start_reflection_button'
    Then Page Element Checker Verifies: '1' '[data-id='start-reflection']'
    Then I see the rte 'draftEditor'

  Scenario: Student Types in the draft
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    Then Color Checker "#dddddd" for "start_reflection_button"
    When I type in 'happy'
    Then Color Checker "#00758e" for "start_reflection_button"

  Scenario: Student Types in the draft and Deletes
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And I select all content
    And I delete text
    Then Color Checker "#00758e" for "start_reflection_button"

  Scenario: Page Reset
    Given I launch the activity as a 'instructor'
    And Draft Delete Cleanup '[data-id='draft-delete']'
