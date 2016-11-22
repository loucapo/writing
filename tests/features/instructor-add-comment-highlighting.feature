@only
@pending
@WRITE-355
Feature: Instructor Can Add Comments to Highlighting

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I click on the "Other" feedback
    And I see a comment popup appear
    And I add "Other text feedback" to the comment popup
    And I click "submit" on the comment popup
    Then The "Other text feedback" should persist on the page

  Scenario: The Instructor Does not Saves An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I click on the "Other" feedback
    And I see a comment popup appear
    And I add "Other text feedback" to the comment popup
    And I click "cancel" on the comment popup
    Then The "Other text feedback" should not persist on the page