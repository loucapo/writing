@WRITE-355
@WRITE-50
@WRITE-553
@WRITE-560
@NSM
Feature: Instructor Can Add Comments to Highlighting

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the quick feedback tools I click the '[Feedback Type]' element
    And I see a comment popup appear
    And I add 'textual feedback' to the comment popup
    And on the feedback page I click the 'submit' element
    Then the selected text highlight should persist
    And the comment 'textual feedback' is inside a feedback flag

  Where:
    ---
    Feedback Type
    other
    reason_support

  Scenario: The Instructor Cancels An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the quick feedback tools I click the '[Feedback Type]' element
    And I see a comment popup appear
    And I add 'me gonna cancel this feedback' to the comment popup
    And on the feedback page I click the 'cancel' element
    Then the selected text highlight should not persist
    And the feedback flag should not exist
  
  Where:
    ---
    Feedback Type
    other
    reason_support

  Scenario: The Modal Stays Above the Fold
    Given I visit the activity page
    When I open the feedback tool
    And I select a lower span of the essay
    And on the quick feedback tools I click the 'other' element
    And I see a comment popup appear
    Then the modal completely appears above the fold
