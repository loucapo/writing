@WRITE-29
Feature:Instructor Adds Pre-Defined Draft Goals to Assignment
  Scenario: Instructor sees option to add draft goals
    Given I visit the SLS create activity page
    Then I see the 'add_draft_goals_button'

  Scenario: Instructor sees draft popup to add goals
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    Then I see the 'draft_goal_popup'
    And I see the 'draft_goal_header'
    And I see the 'draft_goal_header_language'
    And I see the 'draft_goal_selection_language'
    And I see the 'draft_goal_list'
    And I see the 'draft_goal_summary_list'
    And I see the 'draft_goal_save_button'
    And I see the 'draft_goal_cancel_button'

  Scenario: Instructor adds draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    Then 'draft_goal_summary_list' should have 'one' goal
    And 'first_draft_goal' should be selected in 'draft_goal_list'

  Scenario: Instructor removes draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    And I click a 'first_draft_goal'
    Then 'draft_goal_summary_list' should have 'zero' goal
    And 'first_draft_goal' should not be selected in 'draft_goal_list'

  Scenario: Instructor expands draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    And I click a 'first_draft_goal_expand'
    Then I see the 'first_draft_goal_description'

  Scenario: Instructor collapses draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    And I click a 'first_draft_goal_expand'
    And I click a 'first_draft_goal_expand'
    Then I should not see the 'first_draft_goal_description'

  Scenario: Instructor saves draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    Then I click a 'draft_goal_save'
    Then 'draft_goal_summary list' should have 'one' goal

  Scenario: Instructor cancels draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    Then I click a 'draft_goal_cancel'
    Then 'draft_goal_summary list' should have 'zero' goal

  Scenario: Instructor selects more than six draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    And I click a 'second_draft_goal'
    And I click a 'third_draft_goal'
    And I click a 'fourth_draft_goal'
    And I click a 'fifth_draft_goal'
    And I click a 'sixth_draft_goal'
    And I click a 'seventh_draft_goal'
    Then 'draft_goal_summary list' should have 'six' goal

  Scenario: Instructor unselects sixth draft goal
    Given I visit the SLS create activity page
    When I click a 'add_draft_goals_button'
    And I click a 'first_draft_goal'
    And I click a 'second_draft_goal'
    And I click a 'third_draft_goal'
    And I click a 'fourth_draft_goal'
    And I click a 'fifth_draft_goal'
    And I click a 'sixth_draft_goal'
    And I click a 'sixth_draft_goal'
    Then 'draft_goal_summary list' should have 'five' goal
    And I click a 'seventh_draft_goal'
    Then 'draft_goal_summary list' should have 'six' goal

  _