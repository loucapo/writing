@WRITE-278
Feature: Instructor Can Review Student Submissions
  
  Scenario: The Instructor navigates to Student Submissions
    Given I visit the activity page
    Then I see the 'drafts div'
    Then I click on the 'student submissions tab'
    Then I see text 'Shakespeare, William' in 'activity div'
    And I see text 'Faulkner, William' in 'activity div'
    And I see text 'Review Complete' in 'activity div'
    And I see text 'Start Review' in 'activity div'
    And I see text 'Send Review' in 'activity div'
    And I see text 'Instructor Review' in 'activity div'
    And I see text 'Submissions Draft 1' in 'draft-picker option 1'

  Scenario: The Instructor initiates feedback on a draft
    Given I visit the activity page
    Then I click on the 'student submissions tab'
    Then I click link 'Start Review' in 'Jane Austen row'
    Then the url includes '/feedbackTool/123'
    Then I navigate back
    Then I click on the 'student submissions tab'
    Then I click link 'Start Review' in 'Alice Walker row'
    Then the url includes '/feedbackTool/123'

  Scenario: The Instructor switches draft views
    Given I visit the activity page
    Then I see the 'drafts div'
    Then I click on the 'student submissions tab'
    Then I see the 'Jane Austen row'
    Then I see text 'Shakespeare, William' in 'activity div'
    Then I click on the 'Drafts tab'
    Then I see text 'Student Reflection Questions' in 'drafts div'
