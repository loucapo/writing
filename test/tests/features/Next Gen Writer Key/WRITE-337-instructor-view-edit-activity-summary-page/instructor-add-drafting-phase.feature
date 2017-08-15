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
    And I wait until there are 1 "draft(1).draft_add_instructions" visible
    And I wait until there are 1 "draft(2).draft_add_instructions" visible
    And I wait until there are 1 "draft(1).draft_add_goal" visible
    And I wait until there are 1 "draft(2).draft_add_goal" visible
    And I wait until there are 1 "draft(1).draft_review_dropdown" visible
    And I wait until there are 1 "draft(2).draft_review_dropdown" visible

  @db=reset
  @WRITE-27
  Scenario: Saving descriptions to drafts
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card"
    And I click "draft(1).add_draft_instructions"
    And I type "more hello world" in "draft(1).draft_instructions_textarea"
    And I click "draft(1).save_draft_instructions"
    And I click "draft(2).add_draft_instructions"
    And I type "hello world" in "draft(2).draft_instructions_textarea"
    And I click "draft(2).save_draft_instructions"
    Then the text of "draft(2).draft_instructions" should be "hello world"
    And  the text of "draft.draft_instructions(1)" should be "more hello world"

  @db=reset
  @WRITE-27
  Scenario: Adding drafts
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And I wait until there are 1 "draft(1).delete_button" visible
    And I wait until there are 1 "draft(2).delete_button" visible
    And the text of "draft_count" should be "DRAFTS (2)"
    When I click "add_draft_button"
    Then I wait until there are 3 "draft_card" visible
    And I wait until there are 1 "draft(3).delete_button" visible
    And the text of "draft_count" should be "DRAFTS (3)"
    When I click "add_draft_button"
    Then I wait until there are 4 "draft_card" visible
    And I wait until there are 1 "draft(4).delete_button" visible
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
  @TOREFACTOR
  @WRITE-27
  @db=reset
  Scenario: Removing 'Final Paper' converts remaining draft into a 'Final Paper'
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    And the text of "draft(1).title" should be "Draft 1"
    And the text of "draft(2).title" should be "Final Paper"
    And I click "draft(2).delete_button"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft.alert_delete_button" visible
    When I click "draft(2).alert_delete_button"
    # undiagnosed Stale Element ref here w/o sleep    
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    And the text of "draft(1).title" should be "Final Paper"

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
    Then I wait until there is 1 "draft(1).draft_instructions" visible
    And the text of "draft(1).draft_instructions" should be "zingbat doowop blatz"

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
  @TOREFACTOR
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
    #And I wait until there is 1 "draft.draft_instructions" visible
    And I click "draft(2).delete_button"
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
    Then the text of "draft(2).draft_instructions" should be "A1"
    #
    When I click "draft.add_draft_instructions(1)"
    And I type "B2" in "draft.draft_instructions_textarea(1)"
    When I click "draft.save_draft_instructions(1)"
    Then the text of "draft(1).draft_instructions" should be "B2"
    Then the text of "draft(2).draft_instructions" should be "A1"
    #
    When I click "add_draft_button"
    Then I wait until there are 3 "draft_card" visible
    Then the text of "draft(1).draft_instructions" should be "B2"
    # if the count seems off here, recall "draft_instructions" does not exist
    # on a "draft_card" until it is first edited.  the 2nd on the page now is for the 3rd draft on the page.
    Then the text of "draft(3).draft_instructions(1)" should be "A1"
    #
    When I click "draft(2).add_draft_instructions"
    And I type "C3" in "draft(2).draft_instructions_textarea"
    When I click "draft(2).save_draft_instructions"
    Then the text of "draft(1).draft_instructions" should be "B2"
    Then the text of "draft(2).draft_instructions" should be "C3"
    Then the text of "draft(3).draft_instructions" should be "A1"
    #
    When I click "add_draft_button"
    Then I wait until there are 4 "draft_card" visible
    Then the text of "draft(1).draft_instructions" should be "B2"
    Then the text of "draft(2).draft_instructions" should be "C3"
    Then the text of "draft(4).draft_instructions" should be "A1"
    #
    When I click "draft(3).add_draft_instructions"
    And I type "D4" in "draft(3).draft_instructions_textarea"
    When I click "draft(3).save_draft_instructions"
    Then the text of "draft(1).draft_instructions" should be "B2"
    Then the text of "draft(2).draft_instructions" should be "C3"
    Then the text of "draft(3).draft_instructions" should be "D4"
    Then the text of "draft(4).draft_instructions" should be "A1"
  @only
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
    When I click "draft(1).add_draft_instructions"
    And I type "Ax1" in "draft(1).draft_instructions_textarea"
    When I click "draft(2).add_draft_instructions"
    And I type "Bx2" in "draft(2).draft_instructions_textarea"
    When I click "draft(3).add_draft_instructions"
    And I type "Cx3" in "draft(3).draft_instructions_textarea"
    When I click "draft(4).add_draft_instructions"
    And I type "Dx4" in "draft(4).draft_instructions_textarea"
    When I click "draft(1).save_draft_instructions"
    When I click "draft(2).save_draft_instructions"
    When I click "draft(3).save_draft_instructions"
    When I click "draft(4).save_draft_instructions"
    # 
    When I click "draft(2).delete_button"
    And I click "draft(2).alert_delete_button"
    Then I sleep for 1 seconds
    Then I wait until there are 3 "draft_card" visible
    Then the text of "draft(1).draft_instructions" should be "Ax1"
    Then the text of "draft(2).draft_instructions" should be "Cx3"
    Then the text of "draft(3).draft_instructions" should be "Dx4"
    Then the text of "draft(1).title" should be "Draft 1"
    Then the text of "draft(2).title" should be "Draft 2"
    Then the text of "draft(3).title" should be "Final Paper"
    #
    When I click "draft(3).delete_button"
    And I click "draft(3).alert_delete_button"
    Then I sleep for 1 seconds
    Then I wait until there are 2 "draft_card" visible
    Then the text of "draft(1).draft_instructions" should be "Ax1"
    Then the text of "draft(2).draft_instructions" should be "Cx3"
    Then the text of "draft(1).title" should be "Draft 1"
    Then the text of "draft(2).title" should be "Final Paper"
    #
    And I reload the page
    When I click "draft(2).delete_button"
    Then I sleep for 3 seconds
    And I click "draft.final_draft_delete_button_alert"
    Then I sleep for 1 seconds
    Then I wait until there is 1 "draft_card" visible
    Then the text of "draft.draft_instructions" should be "Ax1"
    Then the text of "draft.title" should be "Final Paper"
    Then I wait until there are 0 "draft.delete_button" visible
