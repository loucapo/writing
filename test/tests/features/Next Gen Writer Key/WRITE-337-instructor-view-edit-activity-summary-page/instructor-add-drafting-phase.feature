@TOREFACTOR
Feature: Add Another Draft To Activity
  @db=reset
  @WRITE-27
  Scenario: Adding a second draft
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft_title" should be "Final Paper"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft_title(2)" should be "Final Paper"
    And the text of "draft_title(1)" should be "Draft 1"
    And I wait until there are 2 "draft.draft_add_instructions" visible
    And I wait until there are 2 "draft.draft_add_goal" visible
    And I wait until there are 2 "draft.draft_review_dropdown" visible

  @db=reset
  @WRITE-27
  Scenario: Saving descriptions to drafts
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card"
    And  I wait until there are 0 "draft.draft_instructions"
    And I click "draft.add_draft_instructions(2)"
    And I type "hello world" in "draft.draft_instructions_textarea(2)"
    And I click "draft.save_draft_instructions(2)"
    Then I wait until there is 1 "draft.draft_instructions"
    And I click "draft.add_draft_instructions(1)"
    And I type "more hello world" in "draft.draft_instructions_textarea(1)"
    And I click "draft.save_draft_instructions(1)"
    Then I wait until there are 2 "draft.draft_instructions"
    Then the text of "draft.draft_instructions(2)" should be "hello world"
    And  the text of "draft.draft_instructions(1)" should be "more hello world"

  @db=reset
  @WRITE-27
  Scenario: Adding drafts
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    Then I wait until there are 2 "draft.delete_button" visible
    And the text of "draft_count" should be "DRAFTS (2)"
    When I click "add_draft_button"
    Then I wait until there are 3 "draft_card" visible
    Then I wait until there are 3 "draft.delete_button" visible
    And the text of "draft_count" should be "DRAFTS (3)"
    When I click "add_draft_button"
    Then I wait until there are 4 "draft_card" visible
    Then I wait until there are 4 "draft.delete_button" visible
    And the text of "draft_count" should be "DRAFTS (4)"

  @db=reset
  @WRITE-27
  Scenario: Draft Sequencing
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft.draft_note(1)" should be ""
    And the text of "draft.draft_note(2)" should be "Students can view and start this draft once they've received feedback for Draft 1"

  @WRITE-27
  @db=reset
  Scenario: Removing drafts
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And  I click "draft.delete_button"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft.alert_delete_button" visible
    And  I click "draft.alert_delete_button"
    # undiagnosed Stale Element ref here w/o sleep
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft_count" should be "DRAFTS (1)"

  @WRITE-27
  @db=reset
  Scenario: Removing 'Final Paper' converts remaining draft into a 'Final Paper'
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft.draft_title(1)" should be "Draft 1"
    And the text of "draft.draft_title(2)" should be "Final Paper"
    And I click "draft.delete_button(2)"
    Then I wait until there is 2 "draft.alert_delete_button"
    Then I wait until there is 1 "draft.alert_delete_button" visible
    When I click "draft.alert_delete_button(2)"
    # undiagnosed Stale Element ref here w/o sleep    
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft.draft_title(1)" should be "Final Paper"

  @WRITE-27
  @db=reset
  Scenario: Cancel changing draft description
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "draft.add_draft_instructions(1)"
    And I type "Hello world" in "draft.draft_instructions_textarea(1)"
    And I click "draft.cancel_draft_instructions(1)"
    Then I wait until there are 0 "draft.draft_instructions_textarea" visible
    Then I wait until there are 0 "draft.draft_instructions" visible

  @WRITE-27
  @db=reset
  Scenario: Saving updated description for draft
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "draft.add_draft_instructions(1)"
    And I type "zingbat doowop blatz" in "draft.draft_instructions_textarea(1)"
    And I click "draft.save_draft_instructions(1)"
    And I reload the page
    Then I wait until there are 0 "draft.draft_instructions_textarea" visible
    Then I wait until there is 1 "draft.draft_instructions" visible
    And the text of "draft.draft_instructions(1)" should be "zingbat doowop blatz"

  @WRITE-27
  @db=reset
  Scenario: Navigating away with unsaved draft description discards changes
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "draft.add_draft_instructions(1)"
    And I type "JIGGY ZIGGY" in "draft.draft_instructions_textarea(1)"
    And I reload the page
    Then I wait until there are 0 "draft.draft_instructions_textarea" visible
    Then I wait until there are 0 "draft.draft_instructions" visible

  @WRITE-27
  @db=reset
  Scenario: Draft Renaming
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I click "draft.add_draft_instructions(1)"
    Then I wait until there is 1 "draft.draft_instructions_textarea" visible
    And I type "just some basic instructions" in "draft.draft_instructions_textarea(1)"
    And I click "draft.save_draft_instructions"
    And I reload the page
    And I wait until there is 1 "draft.draft_instructions" visible
    And I click "draft.delete_button(2)"
    And I wait until there is 1 "draft.alert_delete_button" visible
    And I click "draft.alert_delete_button(2)"
    # undiagnosed Stale Element ref here w/o sleep    
    Then I sleep for 1 seconds
    And I wait until there is 1 "draft_card" visible
    Then the text of "draft.draft_instructions(1)" should be "just some basic instructions"

  @db=reset
  @WRITE-1036
  Scenario: New drafts are always inserted directly before the final draft
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card" visible
    When I click "draft.add_draft_instructions(1)"
    And I type "A1" in "draft.draft_instructions_textarea(1)"
    When I click "draft.save_draft_instructions(1)"
    # 
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I reload the page
    Then I wait until there is 1 "draft.draft_instructions" visible
    Then the text of "draft.draft_instructions(1)" should be "A1"
    #
    When I click "draft.add_draft_instructions(1)"
    And I type "B2" in "draft.draft_instructions_textarea(1)"
    When I click "draft.save_draft_instructions(1)"
    Then I wait until there are 2 "draft.draft_instructions" visible
    Then the text of "draft.draft_instructions(1)" should be "B2"
    Then the text of "draft.draft_instructions(2)" should be "A1"
    #
    When I click "add_draft_button"
    Then I wait until there are 3 "draft_card" visible
    Then I wait until there are 2 "draft.draft_instructions" visible
    Then the text of "draft.draft_instructions(1)" should be "B2"
    # if the count seems off here, recall "draft_instructions" does not exist
    # on a "draft_card" until it is first edited.  the 2nd on the page now is for the 3rd draft on the page.
    Then the text of "draft.draft_instructions(2)" should be "A1"
    #
    When I click "draft.add_draft_instructions(1)"
    And I type "C3" in "draft.draft_instructions_textarea(2)
    When I click "draft.save_draft_instructions(2)"
    Then I wait until there are 3 "draft.draft_instructions" visible
    Then the text of "draft.draft_instructions(1)" should be "B2"
    Then the text of "draft.draft_instructions(2)" should be "C3"
    Then the text of "draft.draft_instructions(3)" should be "A1"
    #
    When I click "add_draft_button"
    Then I wait until there are 4 "draft_card" visible
    Then I wait until there are 3 "draft.draft_instructions" visible
    Then the text of "draft.draft_instructions(1)" should be "B2"
    Then the text of "draft.draft_instructions(2)" should be "C3"
    Then the text of "draft.draft_instructions(3)" should be "A1"
    #
    When I click "draft.add_draft_instructions(1)"
    And I type "D4" in "draft.draft_instructions_textarea(3)"
    When I click "draft.save_draft_instructions(3)"
    Then I wait until there are 4 "draft.draft_instructions" visible
    Then the text of "draft.draft_instructions(1)" should be "B2"
    Then the text of "draft.draft_instructions(2)" should be "C3"
    Then the text of "draft.draft_instructions(3)" should be "D4"
    Then the text of "draft.draft_instructions(4)" should be "A1"

  @db=reset
  @WRITE-1036
  Scenario: Final and sole drafts are always named "Final Paper"
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card" visible
    When I click "add_draft_button"
    Then I wait until there is 2 "draft_card" visible
    When I click "add_draft_button"
    Then I wait until there is 3 "draft_card" visible
    When I click "add_draft_button"
    Then I wait until there is 4 "draft_card" visible
    When I click "draft.add_draft_instructions(1)"
    When I click "draft.add_draft_instructions(2)"
    When I click "draft.add_draft_instructions(3)"
    When I click "draft.add_draft_instructions(4)"
    And I type "Ax1" in "draft.draft_instructions_textarea(1)"
    And I type "Bx2" in "draft.draft_instructions_textarea(2)"
    And I type "Cx3" in "draft.draft_instructions_textarea(3)"
    And I type "Dx4" in "draft.draft_instructions_textarea(4)"
    When I click "draft.save_draft_instructions(1)"
    When I click "draft.save_draft_instructions(2)"
    When I click "draft.save_draft_instructions(3)"
    When I click "draft.save_draft_instructions(4)"
    # 
    When I click "draft.delete_button(2)"
    Then I wait until there is 1 "draft.alert_delete_button" visible
    And I click "draft.alert_delete_button(2)"
    Then I sleep for 1 seconds
    Then I wait until there are 3 "draft_card" visible
    Then the text of "draft.draft_instructions(1)" should be "Ax1"
    Then the text of "draft.draft_instructions(2)" should be "Cx3"
    Then the text of "draft.draft_instructions(3)" should be "Dx4"
    Then the text of "draft.draft_title(1)" should be "Draft 1"
    Then the text of "draft.draft_title(2)" should be "Draft 2"
    Then the text of "draft.draft_title(3)" should be "Final Paper"
    #
    When I click "draft.delete_button(3)"
    Then I wait until there is 1 "draft.alert_delete_button" visible
    And I click "draft.alert_delete_button(3)"
    Then I sleep for 1 seconds
    Then I wait until there are 2 "draft_card" visible
    Then the text of "draft.draft_instructions(1)" should be "Ax1"
    Then the text of "draft.draft_instructions(2)" should be "Cx3"
    Then the text of "draft.draft_title(1)" should be "Draft 1"
    Then the text of "draft.draft_title(2)" should be "Final Paper"
    #
    When I click "draft.delete_button(2)"
    Then I wait until there is 1 "draft.alert_delete_button" visible
    And I click "draft.alert_delete_button(2)"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    Then the text of "draft.draft_instructions(1)" should be "Ax1"
    Then the text of "draft.draft_title(1)" should be "Final Paper"
    Then I wait until there are 0 "draft.delete_button" visible
