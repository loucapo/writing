import {config} from './../utilities/configValues';
import { requestStates } from '../sagas/requestSaga';
import { browserHistory } from 'react-router';
import { getStudentDrafts } from './studentDraftsModule';

const CREATE_STUDENT_DRAFT = requestStates('create_student_draft');
const GET_STUDENT_DRAFT = requestStates('get_student_draft');
const GET_RUBRIC_SCORE = requestStates('get_rubric_score');
export const UPDATE_DRAFT_PAPER = requestStates('update_draft_paper');
export const UPDATE_FEEDBACK_PAPER = requestStates('update_feedback_paper');
export const SUBMIT_DRAFT = requestStates('submit_draft_paper');
export const UPDATE_REVIEW_STATUS = requestStates('update_review_status');
export const SUBMIT_DRAFT_END_COMMENT = requestStates('submit_draft_end_comment');
export const SUBMIT_DRAFT_FINAL_GRADE = requestStates('submit_draft_final_grade');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case CREATE_STUDENT_DRAFT.SUCCESS: {
      return action.result;
    }
    case GET_STUDENT_DRAFT.SUCCESS: {
      return action.result;
    }
    case UPDATE_DRAFT_PAPER.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(studentDraft => {
        return studentDraft.studentDraftId === studentDraftId
          ? {...studentDraft, paper: body.paper}
          : studentDraft;
      });
    }
    case UPDATE_FEEDBACK_PAPER.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(studentDraft => {
        return studentDraft.studentDraftId === studentDraftId
          ? {...studentDraft, feedbackPaper: body.feedbackPaper}
          : studentDraft;
      });
    }
    case SUBMIT_DRAFT.SUCCESS: {
      const studentDraftId = action.action.studentDraftId;
      const savedStudentDraft = action.result[0];
      let submitted = null;
      let submittedAt = null;

      return state.map(studentDraft => {
        if (studentDraftId === savedStudentDraft.studentDraftId) {
          submitted = savedStudentDraft.status === 'submitted';
          submittedAt = savedStudentDraft.submittedAt;
        }
        return studentDraft.studentDraftId === studentDraftId
          ? {...studentDraft, submitted, submittedAt}
          : studentDraft;
      });
    }
    case UPDATE_REVIEW_STATUS.SUCCESS: {
      const studentDraftId = action.action.studentDraftId;
      return state.map(studentDraft => {
        return studentDraft.studentDraftId === studentDraftId
          ? {...studentDraft, reviewStatus: action.result.key}
          : studentDraft;
      });
    }
    case SUBMIT_DRAFT_END_COMMENT.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(studentDraft => {
        return studentDraft.studentDraftId === studentDraftId
          ? {...studentDraft, endComment: body.endComment}
          : studentDraft;
      });
    }
    case SUBMIT_DRAFT_FINAL_GRADE.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      return state.map(studentDraft => {
        return studentDraft.studentDraftId === studentDraftId
            ? {...studentDraft, finalGrade: body.finalGrade}
            : studentDraft;
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

export function getOrCreateStudentDraft(studentActivityId, draftId) {
  return {
    type: CREATE_STUDENT_DRAFT.REQUEST,
    states: CREATE_STUDENT_DRAFT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/draft/${draftId}`,
    params: {
      method: 'PUT'
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

export function updateFeedbackPaper(studentActivityId, studentDraftId, feedbackPaper) {
  return {
    type: UPDATE_FEEDBACK_PAPER.REQUEST,
    states: UPDATE_FEEDBACK_PAPER,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/feedbackpaper`,
    studentDraftId,
    params: {
      method: 'put',
      body: {feedbackPaper}
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
    subsequentAction: getStudentDrafts(studentActivityId),
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

export function submitFinalGrade(studentActivityId, studentDraftId, finalGrade) {
  return {
    type: SUBMIT_DRAFT_FINAL_GRADE.REQUEST,
    states: SUBMIT_DRAFT_FINAL_GRADE,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/submitfinalgrade`,
    studentDraftId,
    params: {
      method: 'put',
      body: {finalGrade}
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
