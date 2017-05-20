@db=reset
@WRITE-27
# Need to refactor page object with indexes for draft elements
Feature: Add Another Draft To Activity
  Scenario: Adding Another Draft
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    Then I sleep for 2 seconds
    Then A new draft will be added above the '1' existing draft
    And Page Element Checker Verifies: '2' '[data-id='add-instructions']'
    And Page Element Checker Verifies: '2' '[data-id='add-draft-goal']'
    And Page Element Checker Verifies: '2' '[data-id='review-type-dropdown']'
    And Page Element Checker Verifies: '2' '[data-id='add-reflections']'
    And Draft Delete Cleanup '[data-id='draft-delete']'

  @hacky
  @only
  Scenario: Saving Description to the New Draft
    Given I launch the activity as an 'instructor'
    Then the assignment should have 1 "ddraft_card"
    When I click a 'add_draft_button'
    Then I wait until there are 2 "ddraft_card"
    When I click 'add_ddraft_instructions' 2 
    Then I sleep for 2 seconds
    When I type 'hello world' in draft instructions 2
    And I click 'save_ddraft_instructions' 2
    # Then I sleep for 2000 seconds
    Then Text 'hello world' should appear in draft instructions 2
    And Draft Delete Cleanup '[data-id='draft-delete']'

  Scenario: Adding First Draft
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    Then A new draft will be added above the '1' existing draft
    And Page Element Checker Verifies: '2' '[data-id='draft-delete']'
    And The draft tally within header should display correct number of drafts
    And Draft Delete Cleanup '[data-id='draft-delete']'

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

  #@only
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
  #@only
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

  #@only
  Scenario: Navigate Away Description to the New Draft
    Given I launch the activity as a 'instructor'
    When I click a 'add_draft_button'
    Then I sleep for 2 seconds
    When I click a 'add_draft_instructions'
    When I type 'hello world' in draft instructions 1
    And I reload the page
    Then I see the 'add_draft_instructions'
    And Draft Delete Cleanup '[data-id='draft-delete']'

  #@only
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
