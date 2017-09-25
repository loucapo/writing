Feature: Student Can View Instructor Comments
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    And I click "rubric.dropdown"
    And I click "rubric.dropdown_option(2)"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor neque eget sapien fringilla cursus. Nunc molestie lectus sit amet blandit tempus. Sed et magna fermentum, posuere purus sed, volutpat erat. In hac habitasse platea dictumst. Etiam vitae pharetra lacus. Proin lacinia ex vitae libero pretium commodo. Quisque euismod ultrices mollis. Mauris sit amet turpis arcu. Aliquam erat volutpat. Phasellus ullamcorper tincidunt rhoncus. Nullam pharetra nisl a turpis eleifend, vel ullamcorper magna suscipit. Nulla eleifend mollis dolor, sit amet efficitur lorem dapibus et." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "platea dictumst" in "student_submitted_draft_text"
    And I click "add_open_comments_button"
    And I type "Good Job Bro" in "comment_modal.add_comment_textarea"
    And I click "comment_modal.good_job_comment_button"
    And I click "comment_modal.save_comment"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.send_review_link(1)"

  Scenario: Student Sees Instructor Highlights and Comments
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    Then I wait until there is 1 "student_read_only_feedback.instructor_draft_highlight" visible
    Then I wait until there is 1 "student_read_only_feedback.comment_flag_title" visible

  Scenario: Student Sees Expanded Comments
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    And I click "student_read_only_feedback.instructor_draft_comment"
    Then I wait until there is 1 "student_read_only_feedback.comment_flag_title" visible
    Then I wait until there is 1 "student_read_only_feedback.comment_flag_feedback" visible

  Scenario: Student Collapses Comment
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    And I click "student_read_only_feedback.instructor_draft_comment"
    And I sleep for 1 seconds
    And I click "student_read_only_feedback.instructor_draft_comment"
    Then I wait until there is 1 "student_read_only_feedback.comment_flag_title" visible
    Then I wait until there is 0 "student_read_only_feedback.comment_flag_feedback" visible

  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    And I click "rubric.dropdown"
    And I click "rubric.dropdown_option(2)"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra odio lacus, vitae tincidunt elit semper id. Aenean pretium ut nulla vitae dictum. In id lorem feugiat, varius turpis sed, elementum lorem. Curabitur quis justo euismod dolor pharetra maximus. Cras congue eget diam sed laoreet. Suspendisse et mauris mauris. Nunc a nibh malesuada, egestas mi a, porta erat. Mauris in orci ac justo dictum tincidunt. Praesent sit amet bibendum nunc, vel ultricies orci. Pellentesque porta, sapien at semper sodales, tortor sem vulputate libero, ut viverra nulla nulla vel lacus. In efficitur eu felis non condimentum. Integer in mi at est volutpat rutrum a non mi. Donec vel est sagittis, convallis neque et, maximus est. Quisque elementum neque enim, tempor convallis tellus congue quis. Etiam ligula ligula, dignissim ac orci eu, pellentesque lacinia justo. Vestibulum vitae accumsan nisi, eu convallis nisl. Ut quis tellus vestibulum, efficitur elit vitae, dapibus mauris. Morbi quam purus, consequat eu laoreet in, eleifend at purus. Nullam facilisis mattis arcu nec interdum. Quisque massa ex, dictum ac est vitae, tristique ullamcorper dolor." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "consectetur adipiscing elit" in "student_submitted_draft_text"
    And I click "add_open_comments_button"
    And I type "Good Job Bro" in "comment_modal.add_comment_textarea"
    And I click "comment_modal.good_job_comment_button"
    And I click "comment_modal.save_comment"
    And I sleep for 1 seconds
    When I select text from "Nullam facilisis mattis" to "tristique ullamcorper dolor" in "student_submitted_draft_text"
    And I click "add_open_comments_button"
    And I type "This is no bueno" in "comment_modal.add_comment_textarea"
    And I click "comment_modal.needs_extensive_work_comment_button"
    And I click "comment_modal.save_comment"
    And I click "done_button"
    And Changing to using page "instructor_summary"
    And I click "submissions.send_review_link(1)"

  @intermittent-fail
  Scenario: Expanding One Comment Closes Another
  # And I click "student_read_only_feedback.instructor_draft_comment"
  # Error: Can't find any such component to mount as:  [class^='FeedbackDisplay__page']
  #     at StudentReviewFeedback.instructor_draft_comment (node_modules/marvin-js/lib/page-object/component.js:23:27)  
    Given I launch the activity as a "student"
    And I click "view_feedback_button"
    And I click "student_read_only_feedback.instructor_draft_comment"
      And I sleep for 1 seconds
    And I click "student_read_only_feedback.instructor_draft_comment(2)"
    Then I wait until there is 2 "student_read_only_feedback.comment_flag_title" visible
    Then I wait until there is 1 "student_read_only_feedback.comment_flag_feedback" visible
    And Then the text of "student_read_only_feedback.comment_flag_feedback_typed(2)" should be "This is no bueno"
