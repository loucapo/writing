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

  // initial brainstorming for api testing body validation
  // I expect body field 'id' to equal 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334'
  // I expect body field 'id' to not be nil
  // I expect body field 'timestamp' to be today
  // steps.given("I expect body field '$field' to equal '$value", function(field, value) {
  //   const body = this.ctx.body;
  //   expect(body[field]).to.equal(value);
  // })
};
