@WRITE-29
@WRITE-94

Feature:Instructor Adds Pre-Defined Draft Goals to Assignment

  Scenario: Instructor sees option to add draft goals
    Given I launch the activity as a 'instructor'
    Then I see the 'add_draft_goals_button'

  Scenario: Instructor sees draft popup to add goals
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_goals_button'
    Then I see the 'draft_goal_popup'
    And I see the 'draft_goal_header'
    And I see the 'draft_goal_list'
    And I see the 'draft_goal_save_button'
    And I see the 'draft_goal_cancel_button'

  Scenario: Instructor adds draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    Then The draft goal summary list should have '1' goal
    And 'Thesis' should be selected in draft goal summary list

  Scenario: Instructor removes draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click 'draft_goal_checkbox' 1    
    And 'Thesis' should not be selected in draft goal summary list

  Scenario: Instructor expands draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_goals_button'
    And I click 'draft_goal_goal' 1
    Then I see the 'first_draft_goal_description'

  Scenario: Instructor collapses draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_goals_button'
    And I click 'draft_goal_goal' 1
    And I click 'draft_goal_goal' 1
    Then I should not see the 'first_draft_goal_description'

  Scenario: Instructor saves draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_goals_button'
    And I click 'draft_goal_checkbox' 1    
    And I click a 'draft_goal_save_button'
    Then Draft Goals on the Activity Summary should have '1' goal
    Then Draft Goals cleanup

  Scenario: Instructor cancels draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click a 'draft_goal_cancel_button'
    Then The draft goals modal does not appear

  Scenario: Instructor selects more than six draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click 'draft_goal_checkbox' 2
    And I click 'draft_goal_checkbox' 3
    And I click 'draft_goal_checkbox' 4
    And I click 'draft_goal_checkbox' 5
    And I click 'draft_goal_checkbox' 6
    And I click 'draft_goal_checkbox' 7
    Then The draft goal summary list should have '6' goal

  Scenario: Instructor unselects sixth draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click 'draft_goal_checkbox' 2
    And I click 'draft_goal_checkbox' 3
    And I click 'draft_goal_checkbox' 4
    And I click 'draft_goal_checkbox' 5
    And I click 'draft_goal_checkbox' 6
    And I click 'draft_goal_checkbox' 6
    Then The draft goal summary list should have '5' goal
    And I click 'draft_goal_checkbox' 7
    Then The draft goal summary list should have '6' goal

  # these sleeps are hacky, but essentially necessary for this phase of product
  @hacky 
  Scenario: Instructor edits draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click a 'draft_goal_save_button'
    Then I sleep for 2 seconds
    And I click a 'edit_draft_goals_button'
    Then The draft goal summary list should have '1' goal
    And 'Thesis' should be selected in draft goal summary list
    And I click a 'draft_goal_save_button'
    Then Draft Goals cleanup

  # these sleeps are hacky, but essentially necessary for this phase of product
  @hacky   
  Scenario: Instructor edits to add draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click a 'draft_goal_save_button'
    Then I sleep for 2 seconds
    And I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 2
    Then 'Thesis' should be selected in draft goal summary list
    Then 'Evidence' should be selected in draft goal summary list
    And I click a 'draft_goal_save_button'
    Then I sleep for 2 seconds
    Then Draft Goals on the Activity Summary should have '2' goal
    Then Draft Goals cleanup

  Scenario: Instructor edits to cancel draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click a 'draft_goal_save_button'
    And I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 2
    And I click a 'draft_goal_cancel_button'
    Then Draft Goals on the Activity Summary should have '1' goal
    Then The draft goals modal does not appear
    Then Draft Goals cleanup

  # these sleeps are hacky, but essentially necessary for this phase of product
  @hacky
  Scenario: Instructor edits to remove draft goal
    Given I launch the activity as a 'instructor'
    When I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And I click 'draft_goal_checkbox' 5
    And I click 'draft_goal_checkbox' 4
    And I click a 'draft_goal_save_button'
    Then I sleep for 2 seconds
    And I click a 'edit_draft_goals_button'
    And I click 'draft_goal_checkbox' 1
    And 'Thesis' should not be selected in draft goal summary list
    And I click a 'draft_goal_save_button'
    Then I sleep for 2 seconds    
    Then Draft Goals on the Activity Summary should have '2' goal
    Then Draft Goals on the Activity Summary should not contain 'Thesis'
    Then Draft Goals cleanup
