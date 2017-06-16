@WRITE-858
@only
Feature: Instructor can view status of student drafts

  @db=reset
  Scenario: Instructor's draft submission list is empty when no students have opened a draft for the activity
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there is 2 "draft_card" visible
    When I click "add_reflection_questions" [1]
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_check" [1]
    When I click "ref_question_save"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submission_alert" visible
    Given I launch the activity as an "student"
    Then I wait until there are 2 "start_draft" visible
    Then I wait until there is 1 "start_draft_enabled" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submission_alert" visible

  @db=reset
  @only
  Scenario: Instructor's draft submission list contains students that have opened a draft for the activity
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there is 2 "draft_card" visible
    When I click "add_reflection_questions" [1]
    Then I wait until there is 1 "ref_question_popup" visible
    When I click "ref_question_check" [1]
    When I click "ref_question_save"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submission_alert" visible
    Given I launch the activity as an "student"
    Then I wait until there are 2 "start_draft" visible
    Then I wait until there is 1 "start_draft_enabled" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    When I click "start_draft_enabled"
    Then I wait until there is 1 "draft_area" visible
    And I type "Lorum Ipsumissimus"
    When I click "start_reflection"
    Then I sleep for 99 seconds
#
    # Click start-draft-1
    # type "lorum ipsum"
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there are 0 "submission_alert" visible
    Then I wait until there is 1 "submission_row_name" visible


  @db=reset
  Scenario: Instructor's draft submission list contains students that have submitted their draft
    Given I create a new activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    # instructor should see students that have submitted the assignment
    # new activity
    # add reflection question
    # login as student
    # yes i can see it
    # student opens it, saves it, submits it
    # login as instructor
    # table contains that one student - submitted

  @pending
  Scenario: Instructor's draft submission list reflects instructor's feedback for completed drafts
    Given I create a new activity as an "instructor"
    Then I wait until there is 1 "activity_title" visible
    # @pending
    # mix of students in various states

    # @pending
    # checking instructor's feedback status changes properly during lifecycle

    # @pending
    # multiple drafts at different levels of feedback

    # @pending
    # mix of students, feedback cycles, and draft #s
