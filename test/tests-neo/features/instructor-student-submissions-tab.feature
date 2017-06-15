@WRITE-858
Feature: Instructor can view status of student drafts

  @db=reset
  Scenario: Instructor's draft submission list is empty when no students have opened a draft for the activity
    # instructor should see nothing in the list for the assignment
    # Given I launch as instructor
    # Click add a draft
    # Click add sturef question
    # Click a question
    # Click save
    # Verify no submissions
    # Given I launch as student
    # I can see the draft available to start
    # Given I launch as instructor
    # Verify no submissions
    #
    # new activity
    # add reflection question
    # login as student
    # yes i can see it
    # login as instructor
    # table is empty or gone

  @db=reset
  Scenario: Instructor's draft submission list contains students that have opened a draft for the activity
    # instructor should see students that have opened the assignment
    # Given I launch as instructor
    # Click add a draft
    # Click add sturef question
    # Click a question
    # Click save
    # Verify no submissions
    # Given I launch as student
    # I can see the draft available to start
    # Click start-draft-1
    # type "lorum ipsum"
    # Given I launch as instructor
    # Verify no submissions
# # new activity
# add reflection question
# login as student
# yes i can see it
# student opens it and saves it
# login as instructor
# table contains that one student - opened

  @db=reset
  Scenario: Instructor's draft submission list contains students that have submitted their draft
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

# @pending
# mix of students in various states

# @pending
# checking instructor's feedback status changes properly during lifecycle

# @pending
# multiple drafts at different levels of feedback

# @pending
# mix of students, feedback cycles, and draft #s
