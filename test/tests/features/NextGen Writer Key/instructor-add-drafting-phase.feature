@WRITE-27
@only
@db=reset
Feature: Add Another Draft To Activity
  @only
  @db=reset
  Scenario: Adding a second draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    Then I wait until there is 1 "ddraft_card" visible
    And the text of "ddraft_card_title" [1] should be "Final Paper"
    When I click the "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    And the text of "ddraft_card_title" [2] should be "Final Paper"
    And the text of "ddraft_card_title" [1] should be "Draft 1"
    And I wait until there are 2 "add-instructions" visible
    And I wait until there are 2 "add-draft-goal" visible
    And I wait until there are 2 "review-type-dropdown" visible
    And I wait until there are 2 "add-instructions" visible

  @only
  @db=reset
  Scenario: Saving Description to the New Draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    Then I wait until there is 1 "ddraft_card"
    When I click the "add_draft_button"
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

  @wip
  Scenario: Adding First Draft
    Given I launch the activity as an "instructor"
    Then I should see a fresh assignment
    When I click the "add_draft_button"
    Then I wait until there are 2 "ddraft_card" visible
    Then I wait until there are 2 "ddraft_delete" visible
    And the text of "ddraft_count" should be "Drafts (2)"
    When I click the "add_draft_button"
    Then I wait until there are 3 "ddraft_card" visible
    Then I wait until there are 3 "ddraft_delete" visible
    And the text of "ddraft_count" should be "Drafts (3)"
    When I click the "add_draft_button"
    Then I wait until there are 4 "ddraft_card" visible
    Then I wait until there are 4 "ddraft_delete" visible
    And the text of "ddraft_count" should be "Drafts (4)"

  # Scenario: Adding First Draft
  #   Given I launch the activity as a 'instructor'
  #   When I click a 'add_draft_button'
  #   Then A new draft will be added above the '1' existing draft
  #   And Page Element Checker Verifies: '2' '[data-id='draft-delete']'
  #   And The draft tally within header should display correct number of drafts
  #   And Draft Delete Cleanup '[data-id='draft-delete']'

  Scenario: Adding Multiple Drafts
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-1']'
    When I click a 'add_draft_button'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-2']'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    And Draft Delete Cleanup '[data-id='draft-delete']'

  Scenario: Draft Sequencing
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-1']'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    And Page Element Checker Verifies Text: 'Students can view and start this draft once they've received feedback for Draft 1' at '[data-id='MLCard-Final-Paper'] > div > div > [class^='Draft__draftDetails'] > [class^='Draft__draftDetailsRight'] > [class^='Draft__draftNote']'
    And Draft Delete Cleanup '[data-id='draft-delete']'

  Scenario: Removing Drafts
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    When I click a 'add_draft_button'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-2']'
    And I click a 'draft_delete_button'
    And I see the 'draft_delete_alert'
    And I click a 'draft_alert_delete_button'
    Then I sleep for 2 seconds
    And Page Element Checker Verifies: '0' '[data-id='MLCard-Draft-2']'
    And The draft tally within header should display correct number of drafts
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Draft-1']'
    And Draft Delete Cleanup '[data-id='draft-delete']'

    @pending
      #this test works but in conjunction with the other tests makes others fail at random points, so turning it off for now
   Scenario: Removing Final Paper
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    And I click a 'final_draft_delete_button'
    And I click a 'final_draft_alert_delete_button'
    And Page Element Checker Verifies: '1' '[data-id='MLCard-Final-Paper']'
    And Page Element Checker Verifies: '0' '[data-id='MLCard-Draft-1']'
    And Page Element Checker Verifies: '0' '[data-id='draft-delete']'

   @hacky
  Scenario: Cancel Description to the New Draft
   Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    Then I sleep for 2 seconds
    When I click 'add_ddraft_instructions' 1
    Then I sleep for 2 seconds
    When I type 'hello world' in draft instructions 1
    And I click 'cancel_ddraft_instructions' 1
    Then I see the 'add_draft_instructions'
    And Draft Delete Cleanup '[data-id='draft-delete']'

  Scenario: Navigate Away Description to the New Draft
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    Then I sleep for 2 seconds
    When I click a 'add_draft_instructions'
    When I type 'hello world' in draft instructions 1
    And I reload the page
    Then I see the 'add_draft_instructions'
    And Draft Delete Cleanup '[data-id='draft-delete']'

  Scenario: Draft Renaming
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
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

  Scenario: Page Reset
    Given I launch the activity as a 'instructor'
    And Draft Delete Cleanup '[data-id='draft-delete']'
    When I click a 'draft_instructions_edit'
    And I clear the draft instructions
    And I click a 'save_draft_instructions'
