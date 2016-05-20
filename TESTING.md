
##### Testing
* Test directory structure should mirror src directory
* To run tests, 
    * In a console nav to the root dir where package.json lives
    * Type npm test
    * Tests will be run in Watch mode you can ctrl c to get out it
* The libraries used are 
    * Mocha -install globally unless this is offensive to you in which case I understand and will fix it
    * [Chai](http://chaijs.com/api/bdd/)  (should) ( link to api )
    * [Enzyme](http://airbnb.io/enzyme/docs/api/shallow.html) ( link to api )
       *Enzyme is used for testing react components.
       *It is not necessary when testing pure functions
* Please follow the when… it.... Should… format that is already present in the existing tests.
