@only
@WRITE-278
Feature: Instructor Can Review Student Submissions
  @only
  Scenario: The Instructor Navigates to Student Submissions
    Given I visit the activity page
    Then I see the 'draft 1 header'
    Then I click on the 'student submissions tab'
    Then I see text 'Shakespeare, William' in 'activity div'
    And I see text 'Faulkner, William' in 'activity div'
    And I see text 'Review Complete' in 'activity div'
    And I see text 'Start Review' in 'activity div'
    And I see text 'Send Review' in 'activity div'
    And I see text 'Instructor Review' in 'activity div'
    And I see text 'Submissions Draft 1' in 'draft-picker option 1'
    # Then I see the 'student roster'

    And I see student submission information for Draft 1
    And I see submission status
    And I see the draft due date
    And The review type is Instructor Review

  Scenario: The Instructor Sends All Completed Reviews
    Given I visit the activity page
    When I click on the student submissions tab
    Then I can send all completed reviews

  Scenario: The Instructor Switches Draft Views
    Given I visit the activity page
    When I click on the student submissions tab
    Then I switch drafts to Final Draft

# Given that an instructor is on the "Draft List View" of the activity summary page, when s/he clicks on the "Student Submission" tab,
# Then the instructor should be taken to the "Student Submission Grid View" of the activity summary page, where the instructor sees:
# That they are viewing student submission information for Draft 1 (Note: enabling the dropdown will be implemented in another ticket  WRITE-331 TO DO  )
# List of students roster
# A mixture of submission status
# That the review type is "Instructor Review"
# Implementation Detail: Link to the feedback route to "Start Review" provided by   WRITE-281 READY FOR TEST
