import mut from './../../src/modules/rubricModule';
import {GET_RUBRICS} from './../../src/modules/rubricModule';
import uuid from 'uuid';

import chai from 'chai';
var expect = chai.expect;
chai.should();

describe('RUBRIC MODULE REDUCER', () => {
  const data = () => {

    let rubric1 = {
      id: uuid.v4(),
      categoryNames: [
        {
          text: 'Argument Essay',
          score: ''
        },
        {
          text: 'Exceeds Expectations',
          score: 4
        },
        {
          text: 'Meets Expectations',
          score: 3
        },
        {
          text: 'Nearly Meets Expectations',
          score: 2
        },
        {
          text: 'Fails to Meet Expectations',
          score: 1
        }
      ],
      categories: [
        {
          catName: 'Thesis',
          catScores: [
            'Introduces a focused, arguable thesis',
            'Introduces an arguable thesis that lacks focus',
            'Introduces a vague or broad thesis',
            'Lacks an arguable thesis'
          ],
          catSelection: -1
        },
        {
          catName: 'Claims',
          catScores: [
            'Claims clearly relate to thesis',
            'Introduces relevant claims that need further development',
            'Introduces claims that do not all support the thesis',
            'Lacks sufficient claims to support thesis'
          ],
          catSelection: -1
        },
        {
          catName: 'Evidence',
          catScores: [
            'Evidence supports claims and is well-chosen',
            'Evidence supports claim',
            'Evidence does not support claim',
            'Limited or no evidence'
          ],
          catSelection: -1
        },
        {
          catName: 'Logical Appeals',
          catScores: [
            'Develops multiple effective appeals',
            'Develops an effective appeal',
            'Introduces an effective appeal that needs further development',
            'Uses weak or no appeals'
          ],
          catSelection: -1
        },
        {
          catName: 'Counterargument',
          catScores: [
            'Develops a credible counterargument and addresses it adequately',
            'Introduces a credible counterargument',
            'Introduces a weak counterargument',
            'Does not address counterarguments'
          ],
          catSelection: -1
        }
      ]
    };
    let rubric2 = {
      id: uuid.v4(),
      categoryNames: [
        {
          text: 'Burrito Essay',
          score: ''
        },
        {
          text: 'Exceeds Burrito',
          score: 4
        },
        {
          text: 'Meets Burrito',
          score: 3
        },
        {
          text: 'Nearly Meets Burrito',
          score: 2
        },
        {
          text: 'Fails to Meet Burrito',
          score: 1
        }
      ],
      categories: [
        {
          catName: 'Taco',
          catScores: [
            'Introduces a focused, arguable thesis',
            'Introduces an arguable thesis that lacks focus',
            'Introduces a vague or broad thesis',
            'Lacks an arguable thesis'
          ],
          catSelection: -1
        },
        {
          catName: 'Claims',
          catScores: [
            'Claims clearly relate to thesis',
            'Introduces relevant claims that need further development',
            'Introduces claims that do not all support the thesis',
            'Lacks sufficient claims to support thesis'
          ],
          catSelection: -1
        },
        {
          catName: 'Evidence',
          catScores: [
            'Evidence supports claims and is well-chosen',
            'Evidence supports claim',
            'Evidence does not support claim',
            'Limited or no evidence'
          ],
          catSelection: -1
        },
        {
          catName: 'Logical Appeals',
          catScores: [
            'Develops multiple effective appeals',
            'Develops an effective appeal',
            'Introduces an effective appeal that needs further development',
            'Uses weak or no appeals'
          ],
          catSelection: -1
        },
        {
          catName: 'Counterargument',
          catScores: [
            'Develops a credible counterargument and addresses it adequately',
            'Introduces a credible counterargument',
            'Introduces a weak counterargument',
            'Does not address counterarguments'
          ],
          catSelection: -1
        }
      ]
    };

    return {rubric1, rubric2}
  };

  describe('RUBRIC_SUCCESS', () => {
    let rubric1;
    let rubric2;
    let action1;
    let action2;
    let action3;
    beforeEach(() => {
      ({rubric1, rubric2} = data());

      action1 = {
        type: GET_RUBRICS.SUCCESS,
        result: {
        }
      };

      action2 = {
        type: GET_RUBRICS.SUCCESS,
        result: rubric1
      };

      action3 = {
        type: GET_RUBRICS.SUCCESS,
        result: rubric2
      };
    });

    context('when initial state and action are empty', () => {
      it('should return an empty object', () => {
        let result = mut(undefined, action1);
        Object.keys(result[0]).length.should.equal(0);
      });
    });

    context('when initial state is empty and action is NOT empty', () => {
      it('should return a rubric', () => {
        let result = mut(undefined, action2);
        Object.keys(result).length.should.equal(1);
      });
    });

    context('when state has 1 rubric and receives a new rubric', () => {
      it('should return the new rubric', () => {
        rubric1.id = rubric2.id;
        let result = mut([rubric1], action3);
        result[0].should.eql(rubric2);
      });
    });

    context('when state has 1 rubric and receives a new rubric', () => {
      it('should replace the old rubric with the new rubric', () => {
        rubric1.id = rubric2.id;
        rubric1.someCategory = 'Name';
        let result = mut([rubric1], action3);
        result[0].should.eql(rubric2);
      });
    });


  });

  // skipped for now because onchange needs some hefty refactoring
  describe.skip('RUBRIC_ON_CHANGE', () => {
    let rubric1;
    let rubric2;
    let action1;

    beforeEach(() => {
      ({rubric1, rubric2} = data());
      action1 = {
        type: RUBRIC_ON_CHANGE,
        payload: {
          data: {
            rubric: rubric1,
            value: [{row:1}, {column:1}]
          }
        }
      };

      // action1.payload.value= [1, 1];
    });

    context('when initial state and action are empty', () => {
      it('should return an empty object', () => {
        let result = mut(undefined, {});
        Object.keys(result).length.should.equal(0);
      });
    });

    context('when action has initial category click', () => {
      it('should return rubric with category selected', () => {
        let result = mut(rubric1, action1);
        result.categories[1].catSelection.should.equal(1);
      });
    });



  });



});
