@WRITE-27
@only
Feature: Add Another Draft To Activity

  #@only
  @db=reset
  Scenario: Adding a second draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    Then I wait until there is 1 "ddraft_card" visible
    And the text of "ddraft_card_title" [1] should be "Final Paper"
    When I click "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    And the text of "ddraft_card_title" [2] should be "Final Paper"
    And the text of "ddraft_card_title" [1] should be "Draft 1"
    And I wait until there are 2 "draft_add_instructions" visible
    And I wait until there are 2 "draft_add_goal" visible
    And I wait until there are 2 "draft_review_dropdown" visible

  #@pending
  @db=reset
  Scenario: Saving descriptions to drafts
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    Then I wait until there is 1 "ddraft_card"
    When I click "add_draft_button"
    Then I wait until there are 2 "ddraft_card"
    And  I wait until there are 0 "ddraft_instructions"
    And I click "add_ddraft_instructions" [2] 
    And I type "hello world" in "textarea_ddraft_instructions" [2]
    And I click "save_ddraft_instructions" [2] 
    Then I wait until there is 1 "ddraft_instructions"
    And I click "add_ddraft_instructions" [1]
    And I type "more hello world" in "textarea_ddraft_instructions" [1]
    And I click "save_ddraft_instructions" [1]
    Then I wait until there are 2 "ddraft_instructions"
    Then the text of "ddraft_instructions" [2] should be "hello world"
    And  the text of "ddraft_instructions" [1] should be "more hello world"

  #@pending
  @db=reset
  #@only
  Scenario: Adding drafts
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    Then I wait until there are 2 "draft_delete" visible
    And the text of "draft_count" should be "DRAFTS (2)"
    When I click "add_draft_button"
    Then I wait until there are 3 "ddraft_card" visible
    Then I wait until there are 3 "draft_delete" visible
    And the text of "draft_count" should be "DRAFTS (3)"
    When I click "add_draft_button"
    Then I wait until there are 4 "ddraft_card" visible
    Then I wait until there are 4 "draft_delete" visible
    And the text of "draft_count" should be "DRAFTS (4)"

  #@only
  @db=reset
  Scenario: Draft Sequencing
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    And the text of "draft_note" [1] should be ""
    And the text of "draft_note" [2] should be "Students can view and start this draft once they've received feedback for Draft 1"


  #@only
  @hacky
  @db=reset
  Scenario: Removing drafts
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    When I click "draft_delete_button"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_alert_delete_button" visible
    When I click "draft_alert_delete_button"
    # undiagnosed Stale Element ref here w/o sleep
    Then I sleep for 1 seconds
    Then I wait until there is 1 "ddraft_card" visible
    And the text of "draft_count" should be "DRAFTS (1)"
    # And I see the 'draft_delete_alert'
    # And I click a 'draft_alert_delete_button'
    # Then I sleep for 2 seconds
    # And Page Element Checker Verifies: '0' '[data-id='MLCard-Draft-2']'
    # And The draft tally within header should display correct number of drafts
    # And Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-1']'
    # And Draft Delete Cleanup '[data-id='draft-delete']'

    #@pending
    #this test works but in conjunction with the other tests makes others fail at random points, so turning it off for now
  #@only
  @db=reset
  Scenario: Removing final paper converts other draft into a final paper
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    #
    When I click a 'add_draft_button'
    And I click a 'final_draft_delete_button'
    And I click a 'final_draft_alert_delete_button'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    And Page Element Checker Verifies: '0' '[data-id='MLCard-Draft-1']'
    And Page Element Checker Verifies: '0' '[data-id='draft-delete']'

   @hacky
  @db=reset
  Scenario: Cancel Description to the New Draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    #
    When I click 'add_ddraft_instructions' 1
    Then I sleep for 2 seconds
    When I type 'hello world' in draft instructions 1
    And I click 'cancel_ddraft_instructions' 1
    Then I see the 'add_draft_instructions'
    #And Draft Delete Cleanup '[data-id='draft-delete']'

  @db=reset
  Scenario: Navigate Away Description to the New Draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"
    #
    Then I sleep for 2 seconds
    When I click a 'add_draft_instructions'
    When I type 'hello world' in draft instructions 1
    And I reload the page
    Then I see the 'add_draft_instructions'
    #And Draft Delete Cleanup '[data-id='draft-delete']'

  @db=reset
  Scenario: Draft Renaming
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click "add_draft_button"    
    #
    Then I sleep for 2 seconds
    When I click 'add_ddraft_instructions' 1
    Then I sleep for 2 seconds
    When I type 'hello world' in draft instructions 1
    And I click 'save_ddraft_instructions' 1
    # Then I sleep for 2 seconds
    And I click 'ddraft_delete' 2
    #And I click a 'final_draft_delete_button'
    And I click a 'final_draft_alert_delete_button'
    And Page Element Checker Verifies Text: 'hello world' at '[data-id='MLCard-Final-Paper'] div > div > [class^='Draft__draftDetails'] > [class^='Draft__draftDetailsRight'] > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2)'
