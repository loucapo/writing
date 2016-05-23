describe('When a user arrives via LTI launch ', function() {
  describe('and already has an account on the LMS ', function() {
    describe('and attempts to pay via existing credit (POSITIVE) ', function() {
      describe('for a course that only allows payment with existing credit ', function() {
        it('the association happens correctly, and the user can access appropriate resources of the course.');
      });
      describe('for a course that only allows payment with Access Codes or existing credit ', function() {
        it('the association happens correctly, and the user can access appropriate resources of the course.');
      });

      describe('for a course that allows payment with Access Codes, Braintree, or existing credit ', function() {
        it('the association happens correctly, and the user can access appropriate resources of the course.');
      });
      describe('for a course that only allows payment with Braintree or existing credit ', function() {
        it('the association happens correctly, and the user can access appropriate resources of the course.');
      });

      describe('for a course that requires enrollment keys', function() {
        it('the association happens correctly, and the user can access appropriate resources of the course.');
      });
      // TODO: purchase a course that does not accept any payment type, but student has preexisting credit??
    });
  });
});

describe('When a user arrives via LTI launch ', function() {
  describe('and already has an account on the LMS ', function() {
    describe('and attempts to pay via existing credit (NEGATIVE) ', function() {
      it(' ');
    });
  });
});
