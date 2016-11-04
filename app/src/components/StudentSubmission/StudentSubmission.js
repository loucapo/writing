import RichTextEditor from 'react-rte';

const StudentSubmission = ({studentDraft}) => (
  <RichTextEditor value={studentDraft} readOnly={true}/>
)
