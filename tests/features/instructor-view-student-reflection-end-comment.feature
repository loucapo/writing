@only
@WRITE-305
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


  Scenario: The Instructor Can View A Field to Enter End Comments
    Given I visit the activity page
    When I open the feedback tool
    Then I see the 'End Comment Section'
    Then I see text 'End Comment (Optional)' in 'End Comment Section'
    Then I see the 'End Comment textarea' is empty
Then I see the 'End Comment textarea' has placeholder text 'Write any concluding remarks you want to tell the student...'

  # should actually be used for WRITe-286, if this doesn't get covered there
  # Scenario: Instructor can open and close the quick feedback tool
  #   Given I visit the activity page
  #   When I open the feedback tool
  #   Then I see the quick feedback tool is closed
  #   Then I click the quick feedback tool
  #   Then I see the quick feedback tool is open
  #   Then I see the quick feedback tool contains only 8 options
  #   Then I see the quick feedback tool contains an option for 'Citation'
  #   Then I see the quick feedback tool contains an option for 'Comma Splice'
  #   Then I see the quick feedback tool contains an option for 'Comma Error'
  #   Then I see the quick feedback tool contains an option for 'Fragment'
  #   Then I see the quick feedback tool contains an option for 'Pronoun Agreement'
  #   Then I see the quick feedback tool contains an option for 'Spelling'
  #   Then I see the quick feedback tool contains an option for 'Subject Verb Agreement'
  #   Then I see the quick feedback tool contains an option for 'Wrong Word'
  #   Then I see the quick feedback tool contains an option for 'Usage'
  #   Then I click the quick feedback tool
  #   Then I see the quick feedback tool is closed
