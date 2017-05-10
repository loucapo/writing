@WRITE-305
@NSM
Feature: Instructor Can Open Quick Feedback Section
  Scenario: The Instructor Views Responses From The Student To The Reflection Questions
    Given I visit the activity page
    When I open the feedback tool
    Then I see the 'Student Reflection Section'
    Then I see text 'most challenging part' in 'Student Reflection Section'
    Then I see text 'more in the direction of argument than summary' in 'Student Reflection Section'
    Then I see text 'I want my reader to...' in 'Student Reflection Section'
    Then I see text 'I tried hard on this part, and I' in 'Student Reflection Section'
    Then I see text 'Finally, I want you' in 'Student Reflection Section'
    Then I see text 'ever had to write!' in 'Student Reflection Section'

    @Firefox
  Scenario: The Instructor Can View A Field to Enter End Comments
    Given I visit the activity page
    When I open the feedback tool
    Then I see the 'End Comment Section'
    Then I see text 'End Comment(optional)' in 'End Comment Section'
    Then I see the 'End Comment textarea' is empty
    Then I see the 'End Comment textarea' has placeholder text 'Add comment'