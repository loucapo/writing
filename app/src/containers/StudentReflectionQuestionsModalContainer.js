import {connect} from 'react-redux';
import {setStudentReflectionQuestions} from '../modules/draftModule';
import StudentReflectionQuestionsModal from '../components/MLModal/Modals/StudentReflectionQuestionsModal';

const mapStateToProps = (state, props) => {
  const studentReflectionQuestions = state.studentReflectionQuestions;

  const draft = props.draftId ? state.drafts.find(x => x.id === props.draftId) : {studentReflectionQuestions: []};

  const selectedQuestions = draft.studentReflectionQuestions ? draft.studentReflectionQuestions.map(srqId => (
    {
      title: studentReflectionQuestions.find(srq => srqId === srq.id).question,
      id: srqId
    }
  )) : [];

  return {
    studentReflectionQuestions,
    selectedQuestions
  };
};

export default connect(mapStateToProps, {setStudentReflectionQuestions})(StudentReflectionQuestionsModal);


