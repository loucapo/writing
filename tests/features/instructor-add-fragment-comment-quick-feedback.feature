@WRITE-52
  @only
Feature: Instructor Can Add Fragment Comment
  Scenario: The Instructor Adds Fragment Comment From Quick Feedback Library
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And I click on the Quick Feedback Library
    And on the feedback page I click the 'fragment' element
    Then the selected text highlight should persist
    And the highlighting style should be 'background-color: orange;'
    And the comment 'Fragment' is inside a feedback flag

    @pending
  Scenario: The Instructor Cannot Click on Fragment Resource Link
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And I click on the Quick Feedback Library
    And on the feedback page I click the 'fragment' element
    And I click a 'feedbackflags'
    Then The Resource Links should be empty
      #need to check for no href