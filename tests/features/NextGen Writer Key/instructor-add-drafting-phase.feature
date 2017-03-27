@WRITE-27
@only
Feature: Add Another Draft To Activity

  Scenario: Adding Another Draft
    Given I visit the activity page
    When I click the 'add_draft_button'
    Then A new draft will be added above the existing draft
    And I see the 'Add draft description'
    And I see the 'Add draft goals'
    And I see the 'Add Student Reflection Questions'
    And I see the 'instructor review type'

  Scenario: Adding First Draft
    Given I visit the activity page
    When I click the 'add_draft_button'
    Then A new draft will be added above the existing draft
    And The 'delete_button' should be active
    And the draft tally within header should be increased by one

  Scenario: Adding Multiple Drafts
    Given I visit the activity page
    When I click the 'add_draft_button'
    Then I see the "Draft 1"
    When I click the 'add_draft_button'
    Then I see the "Draft 2"
    And the last draft should be "Final Paper"

  Scenario: Draft Sequencing
    Given I visit the activity page
    When I click the 'add_draft_button'
    When I click the 'add_draft_button'
    Then I see the "Draft 2"
    And I see the "student sequencing message"

  Scenario: Removing Drafts
    Given I visit the activity page
    When I click the 'add_draft_button'
    When I click the 'add_draft_button'
    And I see the "Draft 2"
    And I delete "Draft 1"
    And I see the "confirmation_message"
    And I click the "Yes_button"
    Then "Draft 1" should be removed
    And the draft tally within header should decrease by one
    And I see the "Draft 1"

  Scenario: Removing Final Paper
    Given I visit the activity page
    When I click the 'add_draft_button'
    And I delete "Draft 1"
    And I see the "confirmation_message"
    And I click the "Yes_button"
    Then the second to last draft should be renamed "Final Paper"
    And I cannot delete "Final Draft"

  Scenario: Adding Description to the New Draft
    Given I visit the activity page
    When I click the 'add_draft_button'
    When I click a "add_activity_prompt_link"
    Then I see the "activity_prompt_editor"

  Scenario: Saving Description to the New Draft
    Given I visit the activity page
    When I click the 'add_draft_button'
    When I click a "add_activity_prompt_link"
    Then I type 'hello world' in the description
    And I click a 'save button'
    Then Text 'hello world' should appear

  Scenario: Cancel Description to the New Draft
    Given I visit the activity page
    When I click the 'add_draft_button'
    When I click a "add_activity_prompt_link"
    Then I type 'hello world' in the description
    And I click a 'cancel button'
    Then Text 'hello world' should not appear

  Scenario: Navigate Away Description to the New Draft
    Given I visit the activity page
    When I click the 'add_draft_button'
    When I click a "add_activity_prompt_link"
    Then I type 'hello world' in the description
    And I refresh the page
    Then Text 'hello world' should not appear