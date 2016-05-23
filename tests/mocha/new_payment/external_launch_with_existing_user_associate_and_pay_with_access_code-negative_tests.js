describe('When a user arrives via LTI launch ', function() {
  describe('and already has an account on the LMS ', function() {
    describe('and attempts to pay with an Access Code (NEGATIVE) ', function() {
      describe('for a course that does not accept any payment type (BT or AC) ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
        // arguable if this exact test is necessary here or doubled up elsewhere.
        // error: 'course long name' cannot be purchased. Please blablabla
      });
      describe('that is invalid (already spent) ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
      });
      describe('that is invalid (does not exist) ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
      });
      describe('that is invalid (valid, unspent, but belonging to a different BU)', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
      });
    });
  });
});
