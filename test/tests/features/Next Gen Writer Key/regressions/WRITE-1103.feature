@dbreset
@WRITE-1103
@regression
Feature: Regression for: Initial save of student draft gives "Invalid date" success message
   Scenario: Created date for new activity should be a real date
     Given I launch the activity as an "instructor"
     Then I wait until there is 1 "created_activity_alert" visible
     Then the text of "created_activity_alert" should include "Activity created on" 
     Then the text of "created_activity_alert" should include ". This is in draft mode and will not be visible to students until you assign it."
     Then the text of "created_activity_alert" should include "visible to students until you assign it."
     Then the text of "created_activity_alert" should not include "Invalid date"

     @only
   @dbload=studentSubmittedActivity
  Scenario: POC Data Fixtures
     Given I launch data fixtures activity as a student
     #Given I launch "studentSubmittedActivity" data fixtures activity as a student


   Scenario: Saved date for new student draft should be a real date
     Given I launch the activity as an "student"
     When I click "start_draft(1)"
     And I type "Happy birthday Writer Key!" in "draft_editor.draft_area"     
     And I click "draft_editor.draft_save_button_enabled"
     #Then I sleep for 45 seconds
     Then I wait until there is 1 "draft_editor.flash_message" visible
     Then the text of "draft_editor.flash_message" should include "This draft was successfully saved on"
     Then the text of "draft_editor.flash_message" should not include "Invalid date"
