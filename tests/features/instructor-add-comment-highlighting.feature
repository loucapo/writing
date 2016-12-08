@WRITE-355
@WRITE-50
Feature: Instructor Can Add Comments to Highlighting

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And I click on the 'other' feedback
    And I see a comment popup appear
    And I add 'Other text feedback' to the comment popup
    And I click 'submit' on the comment popup
    Then the selected text highlight should persist

  Scenario: The Instructor Does not Saves An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And I click on the 'other' feedback
    And I see a comment popup appear
    And I add 'Other text feedback' to the comment popup
    And I click 'cancel' on the comment popup
    Then the selected text highlight should not persist
