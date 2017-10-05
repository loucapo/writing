import {connect} from 'react-redux';
import {setReflectionQuestions} from '../modules/draftModule';
import { ReflectionQuestionsSelectorModal } from '../components/ReflectionQuestions/index';

const mapStateToProps = (state, props) => {
  const reflectionQuestions = state.reflectionQuestions
    .map(x => ({...x, id: x.studentReflectionQuestionId}));
  const draft = props.draftId ? state.drafts.find(x => x.draftId === props.draftId) : {studentReflectionQuestions: []};

  const selectedQuestions = state.reflectionQuestions.length > 0 && draft.studentReflectionQuestions ?
    draft.studentReflectionQuestions.map(rqId => (
      {
        title: reflectionQuestions.find(rq => rqId === rq.id).question,
        id: rqId
      }
  )) : [];

  return {
    reflectionQuestions,
    selectedQuestions
  };
};

export default connect(mapStateToProps, {setReflectionQuestions})(ReflectionQuestionsSelectorModal);


