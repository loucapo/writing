@using=supertest
@api
Feature: Student Draft Routes
  Scenario: Receive a 200 status when go to PUT draft with valid cookie and new UUID
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/d3e3c2d5-cf43-4f63-924f-3ec7a125a335' and receive status '200'

  Scenario: Receive a 200 status when go to PUT draft with valid cookie and existing UUID
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' and receive status '200'
  @pending=broken
    # Should be stricter on validation of what can be PUT with body (field does not exist in this table)
  Scenario: Receive a 500 status when go to PUT draft with valid cookie and incorrect json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{"goals":["4a7e811e-076d-488b-a523-94169c971e6d","4a7e811e-076d-488b-a523-94169c971e6d"]}' into ':3000/studentactivity/:studentActivityId/draft/:draftId' and receive status '422'

  Scenario: Receive a 200 status when go to GET draft with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' and receive status '200'

  Scenario: Receive a 401 status when go to GET draft with no cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' in incognito and receive status '401'
 @pending=broken
   # Should not return anything for a bad UUID
  Scenario: Receive a 500 status when go to GET non-existing draft with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' and receive status '500'

  @pending=broken
    # Returns a 200 but instructor doesn't currently have student view
  Scenario: Receive a 404 status when go to GET draft with wrong cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' and receive status '404'

  Scenario: Receive a 200 status when go to PUT draft paper with valid cookie and existing UUID
    Given I get a student cookie and receive status '200'
    Given I PUT '{"paper":{"entityMap":{},"blocks":[{"key":"5ptlr","text":"asdf","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}}' into ':3000/studentactivity/f0d2123e-2e10-4138-8af8-f93499eb02f0/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/paper' and receive status '200'

  Scenario: Receive a 422 status when go to PUT draft paper with valid cookie and empty json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/studentdraft/db9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/paper' and receive status '422'

  Scenario: Receive a 200 status when go to GET draft reflection answers with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/studentreflectionanswers' and receive status '200'

  Scenario: Receive a 401 status when go to GET draft reflection answers with no cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/studentreflectionanswers' in incognito and receive status '401'

  Scenario: Receive a 500 status when go to GET non-existing draft reflection answers with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentdraft/1075446a-d781-4818-970d-d/studentreflectionanswers' and receive status '500'

  @pending=broken
    # Returns a 200 but instructor doesn't currently have student view
  Scenario: Receive a 404 status when go to GET draft reflection answers with wrong cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/studentdraft/f0d2123e-2e10-4138-8af8-f93499eb02f0/studentreflectionanswers' and receive status '404'

  Scenario: Receive a 200 status when go to PUT student reflection answers with valid cookie and existing UUID
    Given I get a student cookie and receive status '200'
    Given I PUT '{"studentReflectionAnswers":[{"studentReflectionAnswerId":"45d56d9e-f0a9-46df-b2ec-98e746dc5f63","studentDraftId":"e358c5ca-b203-44de-ac47-2f2058736727","studentReflectionQuestionId":"c105736c-c330-487c-be74-5a2c983095cc","studentReflectionAnswer":"disagree","createdById":"5ef7fa10-f4a4-4add-9191-882de6b9065b","createdDate":"2017-05-30T00:00:00.000Z","modifiedById":null,"modifiedDate":null},{"studentReflectionAnswerId":"d67c5f37-b034-4d23-ac84-5e2ded41b9df","studentDraftId":"e358c5ca-b203-44de-ac47-2f2058736727","studentReflectionQuestionId":"a3aa7312-68b4-43b9-85b6-fa1f52339a54","studentReflectionAnswer":"asdfasdf\nasdf","createdById":"5ef7fa10-f4a4-4add-9191-882de6b9065b","createdDate":"2017-05-30T00:00:00.000Z","modifiedById":null,"modifiedDate":null},{"studentReflectionAnswerId":"2a4341e8-8d76-411c-9237-e2d860cdc9d0","studentDraftId":"e358c5ca-b203-44de-ac47-2f2058736727","studentReflectionQuestionId":"c119e4de-b6e6-4849-9b16-7a8a1e63c7b2","studentReflectionAnswer":"stronglyDisagree","createdById":"5ef7fa10-f4a4-4add-9191-882de6b9065b","createdDate":"2017-05-30T00:00:00.000Z","modifiedById":null,"modifiedDate":null}]}' into ':3000/studentactivity/f0d2123e-2e10-4138-8af8-f93499eb02f0/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/studentreflectionanswers' and receive status '200'

  Scenario: Receive a 422 status when go to PUT student reflection answers with valid cookie and empty json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/studentdraft/db9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/studentreflectionanswers' and receive status '422'

    # Does not check body so shouldn't matter what we throw in there?
  Scenario: Receive a 200 status when go to PUT submit student reflection answers with valid cookie and random body
    Given I get a student cookie and receive status '200'
    Given I PUT '{"studentReflectionAnswers":[{"studentReflectionAnswerId":"45d56d9e-f0a9-46df-b2ec-98e746dc5f63","studentDraftId":"e358c5ca-b203-44de-ac47-2f2058736727","studentReflectionQuestionId":"c105736c-c330-487c-be74-5a2c983095cc","studentReflectionAnswer":"disagree","createdById":"5ef7fa10-f4a4-4add-9191-882de6b9065b","createdDate":"2017-05-30T00:00:00.000Z","modifiedById":null,"modifiedDate":null},{"studentReflectionAnswerId":"d67c5f37-b034-4d23-ac84-5e2ded41b9df","studentDraftId":"e358c5ca-b203-44de-ac47-2f2058736727","studentReflectionQuestionId":"a3aa7312-68b4-43b9-85b6-fa1f52339a54","studentReflectionAnswer":"asdfasdf\nasdf","createdById":"5ef7fa10-f4a4-4add-9191-882de6b9065b","createdDate":"2017-05-30T00:00:00.000Z","modifiedById":null,"modifiedDate":null},{"studentReflectionAnswerId":"2a4341e8-8d76-411c-9237-e2d860cdc9d0","studentDraftId":"e358c5ca-b203-44de-ac47-2f2058736727","studentReflectionQuestionId":"c119e4de-b6e6-4849-9b16-7a8a1e63c7b2","studentReflectionAnswer":"stronglyDisagree","createdById":"5ef7fa10-f4a4-4add-9191-882de6b9065b","createdDate":"2017-05-30T00:00:00.000Z","modifiedById":null,"modifiedDate":null}]}' into ':3000/studentactivity/f0d2123e-2e10-4138-8af8-f93499eb02f0/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/submit' and receive status '200'

  Scenario: Receive a 200 status when go to PUT submit student reflection answers with valid cookie and empty json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/f0d2123e-2e10-4138-8af8-f93499eb02f0/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/submit' and receive status '200'
  @pending=broken
    #Instructor should not be able to submit for student
  Scenario: Receive a 401 status when go to PUT submit student reflection answers with valid cookie and empty json body
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/f0d2123e-2e10-4138-8af8-f93499eb02f0/studentdraft/b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2/submit' and receive status '401'
