@WRITE-29
  @WRITE-94
Feature:Instructor Adds Pre-Defined Draft Goals to Assignment

  Scenario: Instructor sees option to add draft goals
    Given I visit the SLS create activity page
    Then I see the 'add_draft_goals_button'

  Scenario: Instructor sees draft popup to add goals
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    Then I see the 'draft_goal_popup'
    And I see the 'draft_goal_header'
    And I see the 'draft_goal_list'
    And I see the 'draft_goal_save_button'
    And I see the 'draft_goal_cancel_button'

  Scenario: Instructor adds draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    Then The draft goal summary list should have '1' goal
    And 'Thesis' should be selected in draft goal summary list

  Scenario: Instructor removes draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'first_draft_goal_checkbox'
    And 'Thesis' should not be selected in draft goal summary list

  Scenario: Instructor expands draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    Then I see the 'first_draft_goal_description'

  Scenario: Instructor collapses draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    And I click a 'first_draft_goal'
    Then I should not see the 'first_draft_goal_description'

  Scenario: Instructor saves draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'draft_goal_save_button'
    Then Draft Goals on the Activity Summary should have '1' goal
    Then Draft Goals Cleanup '1'

  Scenario: Instructor cancels draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'

  Scenario: Instructor selects more than six draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'second_draft_goal_checkbox'
    And I click a 'third_draft_goal_checkbox'
    And I click a 'fourth_draft_goal_checkbox'
    And I click a 'fifth_draft_goal_checkbox'
    And I click a 'sixth_draft_goal_checkbox'
    And I click a 'seventh_draft_goal_checkbox'
    Then The draft goal summary list should have '6' goal

  Scenario: Instructor unselects sixth draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'second_draft_goal_checkbox'
    And I click a 'third_draft_goal_checkbox'
    And I click a 'fourth_draft_goal_checkbox'
    And I click a 'fifth_draft_goal_checkbox'
    And I click a 'sixth_draft_goal_checkbox'
    And I click a 'sixth_draft_goal_checkbox'
    Then The draft goal summary list should have '5' goal
    And I click a 'seventh_draft_goal_checkbox'
    Then The draft goal summary list should have '6' goal

  Scenario: Instructor edits draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'draft_goal_save_button'
    And I click a 'edit_draft_goals_button'
    Then The draft goal summary list should have '1' goal
    And 'Thesis' should be selected in draft goal summary list
    And I click a 'draft_goal_save_button'
    Then Draft Goals Cleanup '1'

  Scenario: Instructor edits to add draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'draft_goal_save_button'
    And I click a 'edit_draft_goals_button'
    And I click a 'second_draft_goal_checkbox'
    Then 'Thesis' should be selected in draft goal summary list
    Then 'Evidence' should be selected in draft goal summary list
    And I click a 'draft_goal_save_button'
    Then Draft Goals on the Activity Summary should have '2' goal
    Then Draft Goals Cleanup '2'

  Scenario: Instructor edits to cancel draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'draft_goal_save_button'
    And I click a 'edit_draft_goals_button'
    And I click a 'second_draft_goal_checkbox'
    And I click a 'draft_goal_cancel_button'
    Then Draft Goals on the Activity Summary should have '1' goal
    Then The draft goals modal does not appear
    Then Draft Goals Cleanup '1'

  Scenario: Instructor edits to remove draft goal
    Given I visit the SLS create activity page
    When I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And I click a 'fifth_draft_goal_checkbox'
    And I click a 'fourth_draft_goal_checkbox'
    And I click a 'draft_goal_save_button'
    And I click a 'edit_draft_goals_button'
    And I click a 'first_draft_goal_checkbox'
    And 'Thesis' should not be selected in draft goal summary list
    And I click a 'draft_goal_save_button'
    Then Draft Goals on the Activity Summary should have '2' goal
    Then Draft Goals on the Activity Summary should not contain 'Thesis'
    Then Draft Goals Cleanup '2'