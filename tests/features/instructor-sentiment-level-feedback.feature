@WRITE-51

Feature: Instructor Changes Sentiment Level on Comment

  Scenario: The Instructor Sees Sentiment Levels on Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And I see a comment popup appear
    And I see a 'sentiment level selection dropdown'

  Scenario: The Instructor Sees 3 Sentiment Levels in Dropdown
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And on the feedback page I click the 'sentiment level selection dropdown' element
    Then I should see three sentiment levels
@only
  Scenario: The Instructor Uses Great job Sentiment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And on the feedback page I click the 'sentiment_goodJob' element
    And on the feedback page I click the 'submit' element
    Then the selected text highlight should persist
    And I see the 'Other Feedback Flag'

  Scenario: The Instructor Uses Middle Sentiment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And on the feedback page I click the 'sentiment_needsRevision' element
    And on the feedback page I click the 'submit' element
    Then the selected text highlight should persist
    And I see the 'Other Feedback Flag'

  Scenario: The Instructor Uses Lower Sentiment
    Given I visit the activity page
    When I open the feedback tool
    And I select some text in the text body
    And on the feedback page I click the 'other' element
    And on the feedback page I click the 'sentiment_extensiveRevision' element
    And on the feedback page I click the 'submit' element
    Then the selected text highlight should persist
    And I see the 'Other Feedback Flag'