@WRITE-95
@WRITE-330
@only
Feature: Instructor Can View Assignment Summary Page

  # Assignment Header
  Scenario: Assignment Summary Header
    Given I visit the activity page
    Then I should see the Assignment Header elements

  # Assignment Details
  Scenario: Assignment Details 
    Given I visit the activity page
    Then I should see the Assignment Details elements
    

  # Draft Sequencing
  Scenario: Assignment Draft Sequencing
    Given I visit the activity page
    Then the drafts should have sequence numbers and the last one is labeled "Final Draft"

  # Draft Details
  Scenario: Assignment Draft Details
    Given I visit the activity page
    Then I can see the review types
    And I can also see the due dates

  # Draft Learning Objectives
  # XXX should there be one for every draft item or just one or more on the page?
  # Removed by CDL 12/8/16
  #Scenario: Assignment Draft Objectives
    #Given I visit the activity page
    #Then I should see some draft learning objectives
    
  # Draft Scoring Details
  Scenario: Assignment Draft Scoring Details
    Given I visit the activity page
    Then I know how each draft will be graded
    
  # Student Submission Section
  # XXX yet to be implemented but we currently have a link
  Scenario: Assignment Student Submission Section
    Given I visit the activity page
    Then I can see the student submission section

  # MVI url redirect
  Scenario: Base URL Redirects to Activity Page
    Given I visit the home page
    Then I get redirected to the activity summary page

  @pending
  Scenario: The Instructor Sees Fresh Data
    Given I visit the activity page
    And I close the current session
    And I open a new session
    And I visit the activity page
    Then I see my course data has reset
