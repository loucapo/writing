@WRITE-855
Feature: Activities have editable titles
  
  @db=reset
  Scenario: Default title and type
    Given I create a new activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    And the text of "activity_title" should include "Untitled Writing Activity"
    Then I wait until there is 1 "activity_type" visible
    And the text of "activity_type" should be "Writing Activity"

  @db=reset
  Scenario: Edit title
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    When I click "edit_title"
    Then I wait until there is 1 "edit_title_save"
    Then I wait until there is 1 "edit_title_cancel"
    Then I wait until there is 1 "edit_title_textarea"

  @db=reset
  Scenario: Character counter appears
    Given I create a new activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    When I click "edit_title"
    Then I wait until there is 1 "title_char_counter"
    And the text of "title_char_counter" should be "115 characters left"

  @db=reset
  Scenario: Save edited title
    Given I create a new activity as an "instructor"    
    Then I wait until there is 1 "activity_title" visible
    When I click "edit_title"
    Then I delete all text in "edit_title_textarea"
    And the text of "edit_title_textarea" should be ""
    And I type "Cookies Are Awesome!" in "edit_title_textarea"
    And I click "edit_title_save"
    And I wait until there is 1 "activity_title" visible
    And the text of "activity_title" should include "Cookies Are Awesome!"

  @db=reset
  Scenario: Cancel saving an edited title
    Given I create a new activity as an "instructor"    
    Then I wait until there is 1 "activity_title" visible
    And the text of "activity_title" should include "Untitled Writing Activity"    
    When I click "edit_title"
    Then I delete all text in "edit_title_textarea"
    And the text of "edit_title_textarea" should be ""
    And I type "Cookies Are Awesome!" in "edit_title_textarea"
    And I click "edit_title_cancel"
    And I wait until there is 1 "activity_title" visible
    And the text of "activity_title" should include "Untitled Writing Activity"

  @db=reset
  Scenario: Student can see edited title
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    When I click "edit_title"
    Then I delete all text in "edit_title_textarea"
    And the text of "edit_title_textarea" should be ""
    And I type "Cookies Are Awesome!" in "edit_title_textarea"
    And I click "edit_title_save"
    And I wait until there is 1 "activity_title" visible
    And the text of "activity_title" should include "Cookies Are Awesome!"
    Given I launch the activity as a "student"
    And Changing to using page "instructor_summary"
    And I wait until there is 1 "activity_title" visible
    # TODO: Verify we're actually on the student page
    And the text of "activity_title" should be "Cookies Are Awesome!"

  @db=reset
  Scenario: 140 Character Limit
    Given I create a new activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    When I click "edit_title"
    Then I delete all text in "edit_title_textarea"
    And the text of "edit_title_textarea" should be ""
    And I type "This should be somewhere close to 140 characters of various sorts. I don't know why any instructor would want an assignment title this long. This is really absurd." in "edit_title_textarea"
    Then I wait until there is 1 "title_char_counter"
    And the text of "title_char_counter" should be "0 characters left"
    And I click "edit_title_save"
    And I wait until there is 1 "activity_title" visible
    And the text of "activity_title" should include "This should be somewhere close to 140 characters of various sorts. I don't know why any instructor would want an assignment title this long."
