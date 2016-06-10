// /**
//  * Created by rharik on 5/23/16.
//  */
//
// var nock = require('nock');
// import * as chai from 'chai';
// chai.should();
//
// var makeRequest = require('./../../src/middleware/api/makeRequest').default;
//
// describe('MAKE_REQUEST', () => {
//     describe('when_calling_make_request', () => {
//
//         it('should_return_proper_value', (done) => {
//
//             var scope = nock('http://localhost:3001/api/')
//             .get('/test')
//             .reply(200, { hello: 'WORLD' });
//
//             makeRequest('test')
//                 .then((json) => {
//                     scope.done();
//                     json.hello.should.equal('WORLD');
//                     done();
//                 })
//                 .catch(done);
//         });
//     });
// });
//
