import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';
import { browserHistory } from 'react-router';

const CREATE_STUDENT_DRAFT = requestStates('create_student_draft');
const GET_STUDENT_DRAFTS = requestStates('get_student_drafts');
const GET_STUDENT_DRAFT = requestStates('get_student_draft');
const GET_RUBRIC_SCORE = requestStates('get_rubric_score');
export const UPDATE_DRAFT_PAPER = requestStates('update_draft_paper');
export const SUBMIT_DRAFT = requestStates('submit_draft_paper');
export const UPDATE_REVIEW_STATUS = requestStates('update_review_status');
export const SUBMIT_DRAFT_END_COMMENT = requestStates('submit_draft_end_comment');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_DRAFT.SUCCESS: {
      return reducerMerge(state, action.result);
    }
    case GET_STUDENT_DRAFTS.SUCCESS: {
      return reducerMerge(state, action.result);
    }
    case UPDATE_DRAFT_PAPER.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(x => {
        return x.studentDraftId === studentDraftId
          ? {...x, paper: body.paper}
          : x;
      });
    }
    case SUBMIT_DRAFT.SUCCESS: {
      const studentDraftId = action.action.studentDraftId;
      return state.map(x => {
        return x.studentDraftId === studentDraftId
          ? {...x, submitted: true}
          : x;
      });
    }
    case UPDATE_REVIEW_STATUS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(x => {
        return x.studentDraftId === studentDraftId
          ? {...x, reviewStatus: body.reviewStatus}
          : x;
      });
    }
    case SUBMIT_DRAFT_END_COMMENT.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(x => {
        return x.studentDraftId === studentDraftId
          ? {...x, endComment: body.endComment}
          : x;
      });
    }
    default: {
      return state;
    }
  }
};

export function getStudentDraft(studentActivityId, draftId) {
  return {
    type: GET_STUDENT_DRAFT.REQUEST,
    states: GET_STUDENT_DRAFT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/draft/${draftId}`,
    params: {
      method: 'GET'
    }
  };
}

export function getStudentDraftByStudentDraftId(studentDraftId) {
  return {
    type: GET_STUDENT_DRAFT.REQUEST,
    states: GET_STUDENT_DRAFT,
    url: `${config.apiUrl}studentDraft/${studentDraftId}`,
    params: {
      method: 'GET'
    }
  };
}

export function createStudentDraftIfNotThere(studentActivityId, draftId) {
  return {
    type: CREATE_STUDENT_DRAFT.REQUEST,
    states: CREATE_STUDENT_DRAFT,
    subsequentAction: getStudentDraft(studentActivityId, draftId),
    url: `${config.apiUrl}studentactivity/${studentActivityId}/draft/${draftId}`,
    params: {
      method: 'PUT'
    }
  };
}

export function getStudentDrafts(studentActivityId) {
  return {
    type: GET_STUDENT_DRAFT.REQUEST,
    states: GET_STUDENT_DRAFT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/drafts`,
    params: {
      method: 'GET'
    }
  };
}

export function updateDraftPaper(studentActivityId, studentDraftId, paper) {
  return {
    type: UPDATE_DRAFT_PAPER.REQUEST,
    states: UPDATE_DRAFT_PAPER,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/paper`,
    studentDraftId,
    params: {
      method: 'put',
      body: {paper}
    }
  };
}

const successFunction = route => (action, result) => {
  browserHistory.push(route);
  return {type: action.states.SUCCESS, action, result};
};

export function submitDraft(studentActivityId, studentDraftId, homeRoute, draftName) {
  return {
    type: SUBMIT_DRAFT.REQUEST,
    states: SUBMIT_DRAFT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/submit`,
    studentDraftId,
    draftName,
    successFunction: successFunction(homeRoute),
    params: {
      method: 'put'
    }
  };
}

export function updateReviewStatus(studentActivityId, studentDraftId, reviewStatus) {
  return {
    type: UPDATE_REVIEW_STATUS.REQUEST,
    states: UPDATE_REVIEW_STATUS,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/updatereviewstatus`,
    studentDraftId,
    params: {
      method: 'put',
      body: {reviewStatus}
    }
  };
}

export function submitEndComment(studentActivityId, studentDraftId, endComment) {
  return {
    type: SUBMIT_DRAFT_END_COMMENT.REQUEST,
    states: SUBMIT_DRAFT_END_COMMENT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/submitendcomment`,
    studentDraftId,
    params: {
      method: 'put',
      body: {endComment}
    }
  };
}

export function getRubricScores(studentDraftId) {
  return {
    type: GET_RUBRIC_SCORE.REQUEST,
    states: GET_RUBRIC_SCORE,
    url: `${config.apiUrl}studentdraft/${studentDraftId}/rubricscores`,
    params: {
      method: 'GET'
    }
  };
}
