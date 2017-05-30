@using=supertest
@api
#Currently route returns all questions, not categorized by students yet
Feature: Student Reflection Questions Routes
  Scenario: Receive a 200 status when go to GET student reflection questions with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentreflectionquestions' and receive status '200'

  Scenario: Receive a 401 status when go to GET student reflection questions with no cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentreflectionquestions' in incognito and receive status '401'

  @pending=broken
    # Returns a 200 but instructor doesn't currently have student view
  Scenario: Receive a 200 status when go to GET student reflection questions as instructor
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/studentreflectionquestions' and receive status '200'
