@WRITE-858
Feature: Instructor can view status of student drafts
  @db=reset
  Scenario: Instructor's draft submission list is empty when no students have opened a draft for the activity
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible
    Given I launch the activity as an "student"
    Then I wait until there are 3 "start_draft" visible
    Then I wait until there is 2 "start_draft_enabled" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible

  @db=reset
  Scenario: Instructor's draft submission list contains students that have opened a draft for the activity
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible
    Given I launch the activity as an "student"
    Then I wait until there are 3 "start_draft" visible
    Then I wait until there is 2 "start_draft_enabled" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    When I click "start_draft_enabled"
    Then I wait until there is 1 "draft_editor.draft_area" visible
    And I type "Lorum Ipsumissimus" in "draft_editor.draft_area"
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.row_name" visible
    Then I wait until there are 0 "submissions.no_submissions_alert"
    # TODO: And the text of "submission_row_name" is a GUID / student name
    And the text of "submissions.row_date(1)" should be "—"
    And the text of "submissions.row_status(1)" should be "—"
    And the text of "submissions.row_sent(1)" should be "—"

  @db=reset
  Scenario: Instructor's draft submission list contains students that have saved a version of their draft
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible
    Given I launch the activity as an "student"
    Then I wait until there are 3 "start_draft" visible
    Then I wait until there is 2 "start_draft_enabled" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    When I click "start_draft_enabled"
    Then I wait until there is 1 "draft_editor.draft_area" visible
    And I type "Lorum Ipsumissimus" in "draft_editor.draft_area"
    When I click "draft_editor.draft_save_button_enabled"
    Then I wait until there is 1 "success_flash" visible
    And the text of "success_flash" should include "This draft was successfully saved on"
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.row_name" visible
    Then I wait until there are 0 "submissions.no_submissions_alert"
      # TODO: And the text of "submission_row_name" is a GUID / student name
    And the text of "submissions.row_date(1)" should be "—"
    And the text of "submissions.row_status(1)" should be "—"
    And the text of "submissions.row_sent(1)" should be "—"

  @db=reset
  Scenario: Instructor's draft submission list contains students that have submitted their draft
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.no_submissions_alert" visible
    Given I launch the activity as an "student"
    Then I wait until there are 3 "start_draft" visible
    Then I wait until there is 2 "start_draft_enabled" visible
    Then I wait until there is 1 "start_draft_disabled" visible
    When I click "start_draft_enabled"
    Then I wait until there is 1 "draft_editor.draft_area" visible
    And I type "Lorum Ipsumissimus" in "draft_editor.draft_area"
    When I click "draft_editor.start_reflection_button_enabled"
    Then I wait until there is 1 "student_reflection_questions.student_reflection_answer"
    And I type "sooooo reflective" in "student_reflection_questions.student_reflection_text"
    When I click "student_reflection_questions.draft_submit"
    When I click "student_reflection_questions.draft_submit_confirm"
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "student_submissions" visible
    When I click "student_submissions"
    Then I wait until there is 1 "submissions.row_name" visible
    Then I wait until there are 0 "submissions.no_submissions_alert"
    # TODO: And the text of "submission_row_name" is a GUID / student name
    # TODO: And the text of "submission_row_date" [1] should be a date / today
    And the text of "submissions.row_status(1)" should be "Start Review"
    And the text of "submissions.row_sent(1)" should be "—"
    

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
