var request = require('supertest');

exports.define = function(steps) {

  steps.given("I hit google", function(done) {
    request('https://www.google.com')
      .get('/')
      .expect(parseInt(200), done);
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
