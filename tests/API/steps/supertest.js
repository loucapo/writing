var request = require('supertest');

exports.define = function(steps) {

  steps.given("I get a cookie and receive status '$stat'", function(stat, done) {
    this.ctx.cookies = [];
    cookies = this.ctx.cookies;
    request('http://wk-qa-2.mldev.cloud')
      .get('/instructor')
      .expect(stat)
      .end(function (err, res) {
        cookies = res.headers['set-cookie'].shift().split(';')[0];
        done();
      })
  });

  steps.given("I GET '$url' and receive status '$stat'", function(url, stat, done) {
    req.cookies = this.ctx.cookies;
    request(marvin.config.baseUrl)
      .get(url)
      .set('Cookie',[cookies])
      .expect(parseInt(stat), done);
  });

  steps.given("I GET '$url' in incognito and receive status '$stat'", function(url, stat, done) {
    request(marvin.config.baseUrl)
      .get(url)
      .expect(parseInt(stat), done);
  });

  steps.given("I PUT '$body' into '$url' and receive status '$stat'", function(body, url, stat, done) {
    req.cookies = this.ctx.cookies;
    var json = body;
    request(marvin.config.baseUrl)
      .put(url)
      .set('Cookie',[cookies])
      .send(json)
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
};
