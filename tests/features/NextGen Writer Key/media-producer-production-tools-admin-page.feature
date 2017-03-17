@WRITE-753
Feature: Media Producer Launches Into Production Tools
  Scenario: Media Editor Launches Into Writing Production Tool
    #Given I log in as "sls_admin_username"
    Given I launch into the writing production tool
    Then I land on the Writing Activity Content Tool
@pending
#waiting on roles
  Scenario: Teacher Launches Into Writing Production Tool
    Given I log in as "sls_teacher_username"
    When I launch into the writing production tool
    Then I receive a 401 error
@pending
#waiting on roles
  Scenario: Student Launches Into Writing Production Tool
    Given I log in as "sls_student_username"
    When I launch into the writing production tool
    Then I receive a 401 error