const request = require('supertest');

exports.define = function(steps) {

  steps.given("I get an instructor cookie and receive status '$stat'", function(stat, done) {
    let ctx = this.ctx;
    ctx.cookies = [];
    let apiCookieUrl = marvin.config.baseUrl;
    if (marvin.config.baseUrl === 'http://localhost') {
      apiCookieUrl = 'http://localhost:10080';
    }

    request(apiCookieUrl)
      .get('/instructor')
      .expect(stat)
      .end(function(err, res) {
        // XXX this just handles 1 cookie, and overwrites it everytime?
        ctx.cookies = res.headers['set-cookie'].shift().split(';')[0];
        done();
      });
  });

  // XXX this could be pretty easily combined with the above instructor step.
  steps.given("I get a student cookie and receive status '$stat'", function(stat, done) {
    let ctx = this.ctx;
    ctx.cookies = [];
    let apiCookieUrl = marvin.config.baseUrl;
    if (marvin.config.baseUrl === 'http://localhost') {
      apiCookieUrl = 'http://localhost:10080';
    }

    request(apiCookieUrl)
      .get('/student')
      .expect(stat)
      .end(function(err, res) {
        // XXX this just handles 1 cookie, and overwrites it everytime?
        ctx.cookies = res.headers['set-cookie'].shift().split(';')[0];
        done();
      });
  });



  steps.given("I GET '$url' and receive status '$stat'", function(url, stat, done) {
    let cookies = this.ctx.cookies;
    request(marvin.config.baseUrl)
      .get(url)
      .set('Cookie', [cookies])
      .expect(parseInt(stat), done);
  });

  steps.given("I GET '$url' in incognito and receive status '$stat'", function(url, stat, done) {
    request(marvin.config.baseUrl)
      .get(url)
      .expect(parseInt(stat), done);
  });

  steps.given("I PUT '$body' into '$url' and receive status '$stat'", function(body, url, stat, done) {
    let cookies = this.ctx.cookies;
    let putRequest = JSON.parse(body);
    request(marvin.config.baseUrl)
      .put(url)
      .set('Cookie', [cookies])
      .send(putRequest)
      .expect(parseInt(stat), done);
  });

  steps.given("I POST '$body' into '$url' and receive status '$stat'", function(body, url, stat, done) {
    let cookies = this.ctx.cookies;
    let postRequest = JSON.parse(body);
    request(marvin.config.baseUrl)
      .post(url)
      .set('Cookie', [cookies])
      .send(postRequest)
      .expect(parseInt(stat), done);
  });

  steps.given("I DELETE '$url' and receive status '$stat'", function(body, url, stat, done) {
    let cookies = this.ctx.cookies;
    request(marvin.config.baseUrl)
      .delete(url)
      .set('Cookie', [cookies])
      .expect(parseInt(stat), done);
  });

  steps.given("I send an empty POST body to '$url' and recieve status '$stat'", function(url, stat, done) {
    request(marvin.config.baseUrl)
      .post(url)
      .expect(parseInt(stat), done);
  });

  steps.given("I send an empty POST body to '$url' and recieve status '$stat' promise-style", function(url, stat) {
    return request(marvin.config.baseUrl)
      .post(url)
      .expect(parseInt(stat));
  });

  // SQL Inserts to Fix Errors
  //
  // INSERT INTO "writer_key"."activity"("activity_id","course_id","title",
  // "prompt","rubric_id","created_by_id","created_date","modified_by_id","modified_date")
  // VALUES (E'd3e3c2d5-cf43-4f63-924f-3ec7a125a334',E'1234',E'ewccw c',NULL,NULL,
  // E'8b86a4d7-bb95-4b65-a553-34fac1c60627',E'2017-04-07',NULL,NULL);
  //
  // INSERT INTO "writer_key"."draft"("draft_id", "activity_id",
  // "index", "created_by_id","created_date", "modified_by_id")
  // VALUES('e8ce0d9c-9824-4028-b0d7-ecaabb0bcae5', 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334',
  // 3, 'f3e3c2d5-cf43-4f63-924f-3ec7a125a334', '2017-05-30', 'f3e3c2d5-cf43-4f63-924f-3ec7a125a334')
  // RETURNING "draft_id", "activity_id", "instructions", "index", "created_by_id", "created_date",
  // "modified_by_id", "modified_date";
  //
  // INSERT INTO "writer_key"."student_activity"("student_activity_id", "activity_id", "student_id",
  // "created_by_id", "created_date") VALUES('f0d2123e-2e10-4138-8af8-f93499eb02f0',
  // 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334', '5ef7fa10-f4a4-4add-9191-882de6b9065b',
  // 5ef7fa10-f4a4-4add-9191-882de6b9065b', '2017-06-01') RETURNING "student_activity_id", "activity_id",
  // "student_id", "created_by_id", "created_date", "modified_by_id", "modified_date";
  //
  // INSERT INTO "writer_key"."student_draft"("student_draft_id", "student_activity_id",
  // "draft_id", "created_by_id", "created_date", "active", "submitted") VALUES('b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2',
  // 'f0d2123e-2e10-4138-8af8-f93499eb02f0', 'd3e3c2d5-cf43-4f63-924f-3ec7a125a335',
  // '5ef7fa10-f4a4-4add-9191-882de6b9065b',
  // '2017-06-01', 'TRUE', 'FALSE') RETURNING "student_draft_id", "student_activity_id", "draft_id", "paper",
  // "created_by_id", "created_date", "modified_by_id", "modified_date", "active", "submitted";

  // initial brainstorming for api testing body validation
  // I expect body field 'id' to equal 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334'
  // I expect body field 'id' to not be nil
  // I expect body field 'timestamp' to be today
  // steps.given("I expect body field '$field' to equal '$value", function(field, value) {
  //   const body = this.ctx.body;
  //   expect(body[field]).to.equal(value);
  // })
};
