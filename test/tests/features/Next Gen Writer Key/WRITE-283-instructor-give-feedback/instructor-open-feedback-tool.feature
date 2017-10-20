Feature: Instructor Can Open Feedback Tool From Submission Grid
  @dbreset
  @WRITE-826
  Scenario: Setup submission grid
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  @WRITE-545
  Scenario: Instructor Collapses ML Feedback Cards
    Given I launch the activity as an "instructor"
    And I maximize the browser
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "reflection_section"
    And I click "draft_section"
    And I click "final_grade_section"
    And I click "end_comment_section"
    Then I wait until there are 0 "student_submitted_draft_text"
    Then I wait until there are 0 "student_reflection_answer"
    Then I wait until there are 0 "final_grade_box"
    Then I wait until there are 0 "end_comment_textarea"

  @WRITE-826
  Scenario: Start Review
    Given I launch the activity as an "instructor"
    And I maximize the browser
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then the text of "student_submitted_draft_text" should be "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is."
    Then the text of "student_reflection_answer(1)" should include "yay"
    Then I wait until there is 1 "end_comment_textarea" visible

  @WRITE-826
  Scenario: Navigate Back to Instructor Summary Page From Feedback Tool
    Given I launch the activity as an "instructor"
    And I maximize the browser
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "back_button"
    And Changing to using page "instructor_summary"
    Then I wait until there is 1 "submissions.row_name" visible
    Then I wait until there is 1 "submissions.row_date" visible
    Then I wait until there is 1 "submissions.row_status" visible
    Then I wait until there is 1 "submissions.row_sent" visible