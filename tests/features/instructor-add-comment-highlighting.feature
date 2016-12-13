@WRITE-355
@WRITE-50

Feature: Instructor Can Add Comments to Highlighting

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And I see a comment popup appear
    And I add 'Other text feedback' to the comment popup
    And on the feedback page I click the 'submit' element
    Then the selected text highlight should persist
    And the comment 'Other text feedback' is inside a feedback flag

  Scenario: The Instructor Cancels An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And I see a comment popup appear
    And I add 'Other text feedback' to the comment popup
    And on the feedback page I click the 'cancel' element
    Then the selected text highlight should not persist
    And the feedback flag should not exist
