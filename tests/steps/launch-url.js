var request = require('supertest');

exports.define = function(steps) {

  steps.given("I send an empty POST body to '$url' and recieve status '$stat'", function(url, stat, done) {
    request(marvin.config.baseUrl)
      .post(url)
      .expect(parseInt(stat), done);
  });

};
