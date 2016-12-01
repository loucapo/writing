export const RUBRIC_SUCCESS = 'wk_frontend/rubric/RUBRIC_SUCCESS';
export const RUBRIC_ON_CHANGE = 'wk_frontend/rubric/RUBRIC_ON_CHANGE';

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case RUBRIC_SUCCESS: {
      let rubric = action.payload.data.rubric;
      if (!rubric) {
        return state;
      }
      let newState = rubric; // trying to be obvious that we are not mutating state
      return newState;
    }
    case RUBRIC_ON_CHANGE: {
      let rubric = action.payload.data.rubric;
      if (!rubric) {
        return state;
      }
      rubric.rubric.categories[action.payload.data.value[1].column].catSelection = action.payload.data.value[0].row;
      let newState = rubric.rubric;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export function loadRubric() {
  return {
    type: RUBRIC_SUCCESS,
    payload: {
      data: {
        rubric: {
          categoryNames: [
            {
              text: 'Rubric: Argument'
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
        }
      }
    }
  };
}

export function rubricOnChange(rubric, row, column) {
  return {
    type: RUBRIC_ON_CHANGE,
    payload: {
      data: {
        rubric: {rubric},
        value: [{row}, {column}]
      }
    }
  };
}
