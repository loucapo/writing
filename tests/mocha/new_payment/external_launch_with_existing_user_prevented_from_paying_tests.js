describe('When a user arrives via LTI launch ', function() {
  describe('and already has an account on the LMS ', function() {
    describe('and should be stopped before choosing how to pay because ', function() {
      describe('the course exists in ECO but not in Moodle ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
        // cb('This course is not properly setup and cannot be enrolled.  Please contact support.')
      });
      describe('the course exists in Moodle but not in ECO ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
        // cb('This course is not properly setup and cannot be enrolled.  Please contact support.')
      });
      describe('the course does not exist in Moodle or ECO ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
        // cb('This course is not properly setup and cannot be enrolled.  Please contact support.')
      });
      describe('the course is marked not visible in moodle ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
        // cb('This course is not open for enrollment.');
      });
      describe('the course is marked not enrollable in eco ', function() {
        it('the association happens correctly, enrollment is prevented, and the user is shown an informative error message.')
        // cb('This course is not currently available.')
      });
    });
  });
});
