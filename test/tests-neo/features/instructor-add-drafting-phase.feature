@WRITE-27
Feature: Add Another Draft To Activity

  @db=reset
  Scenario: Adding a second draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft_card_title" [1] should be "Final Paper"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft_card_title" [2] should be "Final Paper"
    And the text of "draft_card_title" [1] should be "Draft 1"
    And I wait until there are 2 "draft_add_instructions" visible
    And I wait until there are 2 "draft_add_goal" visible
    And I wait until there are 2 "draft_review_dropdown" visible

  @db=reset
  Scenario: Saving descriptions to drafts
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    Then I wait until there is 1 "draft_card"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card"
    And  I wait until there are 0 "draft_instructions"
    And I click "add_draft_instructions" [2] 
    And I type "hello world" in "draft_instructions_textarea" [2]
    And I click "save_draft_instructions" [2] 
    Then I wait until there is 1 "draft_instructions"
    And I click "add_draft_instructions" [1]
    And I type "more hello world" in "draft_instructions_textarea" [1]
    And I click "save_draft_instructions" [1]
    Then I wait until there are 2 "draft_instructions"
    Then the text of "draft_instructions" [2] should be "hello world"
    And  the text of "draft_instructions" [1] should be "more hello world"

  @db=reset
  Scenario: Adding drafts
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    Then I wait until there are 2 "draft_delete" visible
    And the text of "draft_count" should be "DRAFTS (2)"
    When I click "add_draft_button"
    Then I wait until there are 3 "draft_card" visible
    Then I wait until there are 3 "draft_delete" visible
    And the text of "draft_count" should be "DRAFTS (3)"
    When I click "add_draft_button"
    Then I wait until there are 4 "draft_card" visible
    Then I wait until there are 4 "draft_delete" visible
    And the text of "draft_count" should be "DRAFTS (4)"

  @db=reset
  Scenario: Draft Sequencing
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft_note" [1] should be ""
    And the text of "draft_note" [2] should be "Students can view and start this draft once they've received feedback for Draft 1"

  @hacky
  @db=reset
  Scenario: Removing drafts
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And  I click "draft_delete_button"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_alert_delete_button" visible
    And  I click "draft_alert_delete_button"
    # undiagnosed Stale Element ref here w/o sleep
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft_count" should be "DRAFTS (1)"

  @hacky
  @db=reset
  Scenario: Removing 'Final Paper' converts remaining draft into a 'Final Paper'
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft_card_title" [1] should be "Draft 1"
    And the text of "draft_card_title" [2] should be "Final Paper"
    And I click "draft_delete_button" [2]
    Then I wait until there is 2 "draft_alert_delete_button"
    Then I wait until there is 1 "draft_alert_delete_button" visible
    When I click "draft_alert_delete_button" [2]
    # undiagnosed Stale Element ref here w/o sleep    
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft_card_title" [1] should be "Final Paper"

  @db=reset
  Scenario: Cancel changing draft description
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "add_draft_instructions" [1]
    And I type "hello world" in "draft_instructions_textarea" [1]
    And I click "cancel_draft_instructions" [1]
    Then I wait until there are 0 "draft_instructions_textarea" visible
    Then I wait until there are 0 "draft_instructions" visible

  @db=reset
  Scenario: Saving updated description for draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "add_draft_instructions" [1]
    And I type "zingbat doowop blatz" in "draft_instructions_textarea" [1]
    And I click "save_draft_instructions" [1]
    Then I wait until there are 0 "draft_instructions_textarea" visible
    Then I wait until there is 1 "draft_instructions" visible
    And the text of "draft_instructions" [1] should be "zingbat doowop blatz"

  @db=reset
  Scenario: Navigating away with unsaved draft description discards changes
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "add_draft_instructions" [1]
    And I type "JIGGY ZIGGY" in "draft_instructions_textarea" [1]
    And I reload the page
    Then I wait until there are 0 "draft_instructions_textarea" visible
    Then I wait until there are 0 "draft_instructions" visible

  @db=reset
  Scenario: Draft Renaming
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    When I click "add_draft_instructions" [1]
    Then I wait until there is 1 "draft_instructions_textarea" visible
    And I type "just some basic instructions" in "draft_instructions_textarea" [1]
    And I click "save_draft_instructions"
    And I wait until there is 1 "draft_instructions" visible
    And I click "draft_delete" [2]
    And I wait until there is 1 "draft_alert_delete_button" visible
    And I click "draft_alert_delete_button" [2]
    # undiagnosed Stale Element ref here w/o sleep    
    Then I sleep for 1 seconds
    And I wait until there is 1 "draft_card" visible
    Then the text of "draft_instructions" [1] should be "just some basic instructions"
