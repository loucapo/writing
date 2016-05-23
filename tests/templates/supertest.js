/* global describe, it, require, console*/
var chai = require('chai');
//chai.use(require('chai-as-promised'));
var expect = chai.expect;

var req = require('supertest')('http://172.20.0.22:3000');
var endpoint = '/v1/api/user';
//var endpoint = '/';

describe("The API endpoint for user", function() {
  it("responds to vanilla GET with success and a static body", function(done) {
    req
      .get(endpoint)
      .expect(200)
      .expect({}, done);
  });

  it("shows jareds superbasic test", function(done) {
    req
      .get(endpoint)
      .expect(200)
      .end(function(err, res) {
        expect(JSON.parse(res.text))
          .to.deep.equal(
            {"id":123,
             "name":"jared",
             "email":"jared.wellman@saplinglearning.com"});
        console.log(res.text);
        done();
      });
    //
  });

  it("responds to PUT with 405 NOT ALLOWED", function(done){
    req
      .put(endpoint)
      .send({'message':'what up wurrled?'})
      .expect(405, done);
  });

  it("responds to DELETE with 405 NOT ALLOWED", function(done) {
    req
      .del(endpoint)
      .expect(405, done);
  });

  it("responds to HEAD with SUCCESS and valid headers", function(done) {
    req
      .head(endpoint)
      .expect(200)
      .expect('x-powered-by', 'Express', done);
  });

  // supertest doesn't support the OPTIONS, TRACE, or CONNECT.

})
