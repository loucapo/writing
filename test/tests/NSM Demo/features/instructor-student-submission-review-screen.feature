@WRITE-278
@NSM
Feature: Instructor Can Review Student Submissions
  Scenario: The Instructor navigates to Student Submissions
    Given I visit the activity page
    Then I see thee 'Drafts tab'
    Then I click on the 'student submissions tab'
    Then I see some text 'Shakespeare, William' in 'activity div'
    And I see some text 'Faulkner, William' in 'activity div'
    And I see some text 'Review sent' in 'activity div'
    And I see a svg in 'activity div'
    And I see some text 'Start Review' in 'activity div'
    And I see some text 'Send Review' in 'activity div'
    #And I see some text 'Instructor Review' in 'activity div'
    And I see some text 'Final Draft - Due: Sep 24, 2016' in 'draft-picker option 1'

  Scenario: The Instructor initiates feedback on a draft
    Given I visit the activity page
    Then I click on the 'student submissions tab'
    Then I click link 'Start Review' in 'Jane Austen row'
    Then the extended url is 'feedbackTool/123'
    Then I navigate back
    Then I click on the 'student submissions tab'
    Then I click link 'Start Review' in 'Alice Walker row'
    Then the extended url is 'feedbackTool/123'

  Scenario: The Instructor switches draft views
    Given I visit the activity page
    Then I see thee 'Drafts tab'
    Then I click on the 'student submissions tab'
    Then I see thee 'Jane Austen row'
    Then I see some text 'Shakespeare, William' in 'activity div'
    Then I click on the 'Drafts tab'
    Then I see some text 'Student Reflection' in 'drafts div'