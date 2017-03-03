@WRITE-52
@Firefox
Feature: Instructor Can Add Fragment Comment
  Scenario: The Instructor Adds Fragment Comment From Quick Feedback Library
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And I click on the Quick Feedback Library
    And on the quick feedback tools I click the 'fragment' element
    Then the selected text highlight should persist
    # this should be background-color: orange; - waiting for CDL fix
    # this should be fixed in 284
    #And the highlighting style should be 'background-color: green;'
    And the comment 'Fragment' is inside a feedback flag
