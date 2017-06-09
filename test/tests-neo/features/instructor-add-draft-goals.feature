@WRITE-29
@WRITE-94
Feature:Instructor Adds Pre-Defined Draft Goals to Assignment

  @db=reset
  Scenario: Instructor sees option to add draft goals
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible

  @db=reset
  Scenario: Instructor sees draft popup to add goals
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible    
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    Then I wait until there is 1 "draft_goal_save" visible
    Then I wait until there is 1 "draft_goal_cancel" visible

  @db=reset
  Scenario: Instructor adds and removes draft goals
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible    
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    Then the draft goal summary list should have 0 goals
    And I click "draft_goal_checkbox" [1]
    Then the draft goal summary list should have 1 goal
    And I click "draft_goal_checkbox" [2]
    Then the draft goal summary list should have 2 goals
    And I click "draft_goal_checkbox" [3]
    Then the draft goal summary list should have 3 goals
    And I click "draft_goal_checkbox" [4]
    Then the draft goal summary list should have 4 goals
    And I click "draft_goal_checkbox" [5]
    Then the draft goal summary list should have 5 goals
    And I click "draft_goal_checkbox" [6]
    Then the draft goal summary list should have 6 goals
    And I click "draft_goal_checkbox" [7]
    Then the draft goal summary list should have 6 goals
    And I click "draft_goal_checkbox" [1]
    And I click "draft_goal_checkbox" [2]
    And I click "draft_goal_checkbox" [3]
    And I click "draft_goal_checkbox" [4]
    And I click "draft_goal_checkbox" [5]
    And I click "draft_goal_checkbox" [6]
    Then the draft goal summary list should have 0 goals
    And the text of "draft_goal_summary_list" should be ""
    And I click "draft_goal_checkbox" [1]
    And I click "draft_goal_checkbox" [2]
    And the text of "draft_goal_summary_list" should be "Selected Draft Goals: Thesis, Evidence"

  @db=reset
  Scenario: Instructor expands and collapses draft goals
    Given I launch the activity as an "instructor"
    And I click "add_draft_goals"
    Then I wait until there are 20 "draft_goal_goal_description"
    Then I wait until there are 0 "draft_goal_goal_description" visible    
    And I click "draft_goal_goal" [1]
    And I click "draft_goal_goal" [2]
    And I click "draft_goal_goal" [16]
    Then I wait until there are 3 "draft_goal_goal_description" visible
    Then I wait until there are 20 "draft_goal_goal_description"

  @db=reset
  Scenario: Instructor saves draft goal
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible    
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    And I click "draft_goal_checkbox" [1]
    And I click "draft_goal_save"
    # stale element refs on closing modals?
    Then I sleep for 1 seconds
    Then I wait until there is 1 "saved_draft_goal" visible
    And the text of "saved_draft_goal" [1] should include "Thesis"
    And I click "edit_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    And I click "draft_goal_checkbox" [2]
    And I click "draft_goal_checkbox" [3]
    And I click "draft_goal_save"
    Then I wait until there are 3 "saved_draft_goal" visible
    And the text of "saved_draft_goal" [1] should include "Thesis"
    And the text of "saved_draft_goal" [2] should include "Evidence"
    And the text of "saved_draft_goal" [3] should include "Badditude"

  @db=reset
  Scenario: Instructor cancels adding  and removing draft goals
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible
    And I wait until there are 0 "saved_draft_goal" visible
    And I wait until there is 1 "edit_draft_goals" visible
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    And I click "draft_goal_cancel"
    And I wait until there are 0 "saved_draft_goal" visible
    And I wait until there is 1 "edit_draft_goals" visible
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    And I click "draft_goal_checkbox" [2]
    And I click "draft_goal_checkbox" [3]
    And I click "draft_goal_checkbox" [4]
    And I click "draft_goal_save"
    And I wait until there are 3 "saved_draft_goal" visible
    And I wait until there are 0 "add_draft_goals" visible
    And I click "edit_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible
    And I click "draft_goal_checkbox" [2]
    And I click "draft_goal_checkbox" [3]
    And I click "draft_goal_checkbox" [4]
    Then the draft goal summary list should have 0 goals
    And I click "draft_goal_cancel"
    And I wait until there are 3 "saved_draft_goal" visible
    And I wait until there is 0 "add_draft_goals" visible

  @db=reset
  Scenario: Instructor unselects sixth draft goal
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible
    And I wait until there are 0 "saved_draft_goal" visible
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible    
    And I click "draft_goal_checkbox" [1]
    And I click "draft_goal_checkbox" [2]
    And I click "draft_goal_checkbox" [3]
    And I click "draft_goal_checkbox" [4]
    And I click "draft_goal_checkbox" [5]
    And I click "draft_goal_checkbox" [6]
    And I click "draft_goal_checkbox" [6]
    Then the draft goal summary list should have 5 goals
    And I click "draft_goal_checkbox" [7]
    Then the draft goal summary list should have 6 goals
    And I click "draft_goal_checkbox" [8]
    Then the draft goal summary list should have 6 goals

  # these sleeps are hacky, but essentially necessary for this phase of product
  @db=reset
  Scenario: Instructor edits draft goal
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible
    And I wait until there are 0 "saved_draft_goal" visible
    And I click "add_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible    
    And I click "draft_goal_checkbox" [1]
    And I click "draft_goal_save"
    Then I sleep for 1 seconds
    And I click "edit_draft_goals"
    Then I wait until there is 1 "draft_goal_popup" visible    
    Then the draft goal summary list should have 1 goal
    And the text of "draft_goal_summary_list" should be "Selected Draft Goals: Thesis"
    # And "draft_goal_checkbox" [1] should be checked
