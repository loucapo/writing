/**
 * Created by johnteague on 4/20/17.
 */
const registry = require('./../../registry-test');
let chai = require('chai');
let expect = chai.expect;

describe('enum tests', () => {
  let mut;
  let TestEnum;
  before(function() {
    // set up DIC and get instance of mut
    const container = registry();
    mut = container.getInstanceOf('Enum');

    TestEnum = new mut('TestEnum',
      {key: 'A', display: 'Test Enum A', customValue: 'Custom A', testMethod: () => { return 'some custom method'; }},
      {key: 'B', display: 'Test Enum B', customValue: 'Custom B', testMethod: () => { return 'some custom method2'; }});
  });

  it('can check enum equality', () => {
    const testEnum = TestEnum.A;
    expect(testEnum === TestEnum.A).to.be.true;
  });

  it('can declare extra fields on the enum', function() {
    expect(TestEnum.A.customValue).to.be.equal('Custom A');
  });

  it('can specialize the behavior of methods', function() {
    expect(TestEnum.A.testMethod()).to.be.equal('some custom method');
    expect(TestEnum.B.testMethod()).to.be.equal('some custom method2');
  });

  it('can generate a list of the enumerations', function() {
    console.log(TestEnum.toArray());
    expect(TestEnum.toArray()).to.be.have.lengthOf(2);
  });

  it('can be hydrated by the name', function() {
    const aEnum = TestEnum.fromKey('A');
    expect(aEnum).to.be.equal(TestEnum.A);
    const bEnum = TestEnum['B'];
    expect(bEnum).to.be.equal(TestEnum.B);
  });

  describe('enums immutable', function() {
    it('cannot change the enum', () => {
      const testEnumA = TestEnum.A;
      TestEnum.A = {key: 'A', display: 'A different enum'};
      expect(TestEnum.A).to.equal(testEnumA);
      expect(TestEnum.A.display).to.be.equal('Test Enum A');
    });

    it('cannot add a new enum', function() {
      TestEnum.D = {key: 'D', display: 'Test Enum D'};
      expect(TestEnum).to.not.have.property('D');
    });

    it('cannot change an enum', function() {
      TestEnum.A.display = 'changed description';
      expect(TestEnum.A.display).to.equal('Test Enum A')
    });
  });

});
